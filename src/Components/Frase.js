import React from 'react'
import { useFetch } from '../Hooks/useFetch'
import { useCounter } from '../Hooks/useCounter'
import { Spinner } from './Spinner';

export const Frase = () => {

    const [counter, increment] = useCounter();

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    //                        data !== null && data[0]
    const { author, quote } = !!data && data[0];

    
    const handleClick = () => {
        increment();
    }

    
    return (
        <>
            {
                loading 

                ?
                    <Spinner />

                :

                    <div className="frase-container">
                        <blockquote>
                            <p className='text-center mb-0'>{quote}</p>
                            <footer className='blockquote-footer text-right'>{author}</footer>

                        </blockquote>
                        <button className='btn btn-success'
                                onClick={handleClick}
                        >
                            Obtener Frase
                        </button>  
                    </div>
            }
        </>
    )
}

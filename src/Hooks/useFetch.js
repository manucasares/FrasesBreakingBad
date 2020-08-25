import { useState, useEffect } from "react";


export const useFetch = (url) => {
    
    const [state, setState] = useState({
        data : null,
        loading : false,
        error : null
    })

    useEffect(() => {
        

        setState({
            data: null,
            loading: true,
            error: null,
        });

        setTimeout( () => {
            fetch(url)
                .then( res => res.json())
                .then( data => setState({
                        loading : false,
                        error : null,
                        data
                    }
                ));
        }, 600)
    }, [url])

    return state;
}

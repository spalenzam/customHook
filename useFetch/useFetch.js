import { useRef } from "react";
import { useEffect, useState } from "react"


const useFetch = (url) => {
    
    //mantiene la referencia cuando el hook está vivo, es decir cuando el componene que lo use sigue montado
    const isMounted = useRef(true)

    const [state, setState] = useState({ data:null, loading:true, error:null });

    //Esto quiero que se haga la primera vez que se renderiza el componente
    //cuando el componene se renderiza, se dice que esta montado
    useEffect(() => {
        
        //esto se dispara cuando el componente se desmonte 
        //esto no hace que se vuelva a renderizar, solo cambia el valor de la referencia 
        //y esta referencia me sirve para llamar de forma condicional al setState de abajo 
        return () => {
            isMounted.current = false;
        }

    }, [])

    useEffect(() => {

        setState({data:null, loading:true, error:null})
        
        fetch(url)
            .then(resp => resp.json())
            .then( data => {              

                //si el componene esta montado hago el set, sino no 
                if (isMounted.current){
                    setState({
                        data,
                        loading:false,
                        error:null
                    })   
                }
            })

    }, [url])

    return state;

}

export default useFetch

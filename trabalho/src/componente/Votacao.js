import React, { useState } from 'react'
function Votacao() {
    const [contador, setContador,] = useState(0)
    const [contadorm, setContadorm,] = useState(0)
    const [contadorr, setContadorr,] = useState(0)
    const votob = () => {
        setContador(contador + 1)
        console.log(contador)
    }
    const votom = () => {
        setContadorm(contadorm + 1)
        console.log("teste", contadorm)
    }
    const votor = () => {
        setContadorr(contadorr + 1)
        console.log(contadorr)
    }
    return (
        <div>
            <div className='Votação'>
                <p> Bruna Tavares tem {contador} votos </p>  <button onClick={votob}> Bruna Tavares </button>
                <p>  Maria Maria tem {contadorm} votos </p>  <button onClick={votom}> Maria Maria </button>
                <p>  Rare Beauty tem {contadorr} votos </p> <button onClick={votor}> Rare Beauty </button>

            </div>
        </div>
    )
}
export default Votacao
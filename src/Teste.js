import { useRef, useState } from 'react'

export default function Teste(props)
{
    // var nome = "turma";
    //variavel reatriva
    
    const [ nome, setNome ] = useState("inicial");

    function click(ev)
    {
        ev.preventDefault();
        setNome("abc")
        console.log(ev)
    }

    return <div>
            <h1>{props.saudacao} {nome} </h1>

            <form onSubmit={click}>
                <input type="text" />
                <button type="submit" > Click </button>
            </form>
            
             </div>
}
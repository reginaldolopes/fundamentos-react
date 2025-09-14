import React from "react";

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação';
    return (
        <div>
            <h1>{props.situacao}</h1>
            <p>
                <strong>{props.aluno}</strong> tem nota 
                <strong> {props.nota} </strong> e está <strong>{status}</strong>
            </p>
        </div>
    );
}
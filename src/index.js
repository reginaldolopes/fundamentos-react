import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            situacao="Situação do Aluno" 
            aluno="José" 
            nota={9.5}/>
        <Fragmento />

    </div>,
    document.getElementById('root')
);
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';


ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            situacao="Situação do Aluno" 
            aluno="José" 
            nota={9.5}/>

    </div>,
    document.getElementById('root')
);
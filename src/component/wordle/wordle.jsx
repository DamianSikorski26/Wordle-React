import { useEffect, useState } from "react";
import style from './wordle.module.css'

export default function Wordle({listeMots = [],vies = 6}){

    const [mot, setMot] = useState(listeMots[Math.floor(Math.random()* listeMots.length)]);
    const [tailleMot,setTailleMot] = useState(mot.length);
    const [tableauReponse, setTableauReponse] = useState(creationTableau());
    const [indexLigne,setIndexLigne] = useState(0);
    const [indexLettre,setIndexLettre] = useState(0);

    useEffect(() => {
        function handleInput(e) {
            console.log(e.key);
            setTableauReponse(prev => prev = updateLetter(e.key,indexLigne,indexLettre))
            setIndexLettre(indexLettre => indexLettre + 1);}
            
        document.addEventListener('keydown',handleInput);
        return () => document.removeEventListener('keydown',handleInput)
    },[indexLettre,indexLigne])
    

    function creationTableau(){
        let grandTableau = [];

        for(let i = 0;i < vies;i++){
            let petitTableau = Array(tailleMot).fill(" ");
            grandTableau.push(petitTableau)
        }
        return grandTableau;
    }

    function updateLetter(lettre,ligne,cases){
        let tableautemporaire = tableauReponse;
        tableautemporaire[ligne][cases] = lettre;
        return tableautemporaire;
        
    }

    return(
        <div className={style.Container}>
            {listeMots && <p className={style.centerText}>Le mot choisi est {mot}</p>}
            {tableauReponse.map(tableau => <Ligne tableau={tableau}/>)}
        </div>

    )
}

function Ligne({tableau = []}){
    return(
        <div className={style.Ligne}>
            {tableau.map(lettre => <div className={style.Lettre}>{lettre}</div>)}
        </div>
    )
}
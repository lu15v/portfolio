import React,{useState, useEffect} from 'react';
import { withRouter } from "react-router-dom";

import '../styles/curtain.scss';

const Curtain = ({history}) =>{

    const [L, setL] = useState('');
    const [U, setU] = useState('');
    const [I, setI] = useState('');
    const [S, setS] = useState('');
    const [B, setB] = useState('');
    const [A, setA] = useState('');
    const [N, setN] = useState('');
    const [W, setW] = useState('');
    const [E, setE] = useState('');
    const [O, setO] = useState('');
    const [F, setF] = useState('');
    const [T, setT] = useState('');
    const [R, setR] = useState('');
    const [G, setG] = useState('');


    useEffect(() =>{
        randomAsciiList('U',20, 100, setU)
        randomAsciiList('I',20, 80, setI)
        randomAsciiList('L',20, 90, setL)
        randomAsciiList('B',20, 100, setB)
        randomAsciiList('A',20, 85, setA)
        randomAsciiList('N',20, 90, setN)
        randomAsciiList('O',20, 76, setO)
        randomAsciiList('F',20, 90, setF)
        randomAsciiList('T',20, 100, setT)
        randomAsciiList('R',20, 110, setR)
        randomAsciiList('G',20, 87, setG)
        randomAsciiList('S',20, 130, setS)
        randomAsciiList('W',20, 140, setW)
        randomAsciiList('E',20, 150, setE)
    },[])


    const randomAsciiList = (char, iterations, delay, callback) => {
        for(let i = 0; i < iterations; i++){
            let num = Math.floor(Math.random() * 94) + 33;
            setTimeout(()=>{
                callback(String.fromCharCode(num));
            },delay * (i + 1))
        }
        setTimeout(()=>{
            callback(char);
        },delay * (iterations + 1))
    }

    const enterToSite = () =>{
        sessionStorage.setItem("curtain", true);
        history.push('/');
    }

    return(
        <div className='hero column-centered main-background'>
            <div className="name-container">
                <span className="bordeux">{L}</span>
                <span>{U}</span>
                <span>{I}</span>
                <span className="spacing-right">{S}</span>
                <span className="bordeux">{B}</span>
                <span>{A}</span>
                <span>{L}</span>
                <span>{L}</span>
                <span>{I}</span>
                <span>{N}</span>
                <span>{A}</span>
                <span>{S}</span>
            </div>
            <div className="occupation-container">
                <span className="bordeux">{S}</span>
                <span>{O}</span>
                <span>{F}</span>
                <span>{T}</span>
                <span className="bordeux">{W}</span>
                <span>{A}</span>
                <span>{R}</span>
                <span className="spacing-right">{E}</span>
                <span className="bordeux">{E}</span>
                <span>{N}</span>
                <span>{G}</span>
                <span>{I}</span>
                <span>{N}</span>
                <span>{E}</span>
                <span>{E}</span>
                <span>{R}</span>
            </div>
            <div className="enter-to-site-container">
                <a onClick={enterToSite}> Enter to the site</a>
            </div>
        </div>
    )
};


export default withRouter(Curtain);
import { match } from 'assert';
import promptsync = require('prompt-sync');
import { Cabecalho } from './Cabecalho';
import { dadosAluno } from './dadosAluno';
const prompt = promptsync();

function Notas(){

    const boletimP = [];
    const boletimH = [];
    const boletimM = [];
    const boletimG = [];
    const boletimI = [];
   

    for (let i= 0; i<3; i++){
        boletimP[i] = [];
        const nota = Number(prompt(`Digite a nota ${i+1} de Português: `));
        boletimP [i] = Number (nota);
    }
    const mediaP = ((boletimP[0] + boletimP[1] + boletimP[2]) / 3);
        const mediaPAredonda = mediaP.toFixed(1);
    console.clear()


    for (let i= 0; i<3; i++){
        boletimH[i] = [];
        const nota = prompt (`Digite a nota ${i+1} de História: `);
        boletimH [i] = Number (nota);
    }
    const mediaH = ((boletimH[0] + boletimH[1]+ boletimH [2]) / 3);
    const mediaHAredonda = mediaH.toFixed(1);
    console.clear()

    for (let i= 0; i<3; i++){
        boletimI[i] = [];
        const nota = prompt (`Digite a nota ${i+1} de Inglês: `);
        boletimI [i] = Number (nota) 
    }
    const mediaI = ((boletimI[0] + boletimI[1]+ boletimI [2]) / 3);
    const mediaIAredonda = mediaI.toFixed(1);
    console.clear()

    for (let i= 0; i<3; i++){
        boletimG[i] = [];
        const nota = prompt (`Digite a nota ${i+1} de Geografia: `);
        boletimG [i] = Number (nota) 
    }
    const mediaG = ((boletimG[0] + boletimG[1]+ boletimG [2]) / 3);
    const mediaGAredonda = mediaG.toFixed(1);
    console.clear()

    for (let i= 0; i<3; i++){
        boletimM[i] = [];
        const nota = prompt (`Digite a nota ${i+1} de Matemática: `);
        boletimM [i] = Number (nota) 
    }
    const mediaM = ((boletimM[0] + boletimM[1]+ boletimM [2]) / 3);
    const mediaMAredonda = mediaM.toFixed(1);

    console.clear()

    Cabecalho();

    let aprovRepG: string
    let aprovRepI: string
    let aprovRepM: string
    let aprovRepP: string
    let aprovRepH: string

    if(mediaG>=7){
        aprovRepG = 'Aprovado'
    }
        else if(mediaG<7){
            aprovRepG = 'Reprovado'
        }
        
    if(mediaI>=7){
        aprovRepI = 'Aprovado'
    }
        else if(mediaI<7){
            aprovRepI = 'Reprovado'
        }

    if(mediaH>=7){
        aprovRepH = 'Aprovado'
    }
        else if(mediaH<7){
            aprovRepH = 'Reprovado'
        }

    if(mediaP>=7){
        aprovRepP = 'Aprovado'
    }
        else if(mediaP<7){
            aprovRepP = 'Reprovado'
        } 

    if(mediaM>=7){
        aprovRepM = 'Aprovado'
    }
        else if(mediaM<7){
            aprovRepM = 'Reprovado'
        }
        
    
    const boletim = [];
    const Matematica = [];
    const Portugues = [];
    const Geografia = [];
    const Historia = [];
    const Ingles = [];

    Matematica[0] = boletimM;
    Matematica[1] = mediaMAredonda;
    Matematica[2] = aprovRepM;

    Portugues[0] = boletimP;
    Portugues[1] = mediaPAredonda;
    Portugues[2] = aprovRepP;

    Geografia[0] = boletimG;
    Geografia[1] = mediaGAredonda;
    Geografia[2] = aprovRepG;

    Historia[0] = boletimH;
    Historia[1] = mediaHAredonda;
    Historia[2] = aprovRepH;

    Ingles[0] = boletimI;
    Ingles[1] = mediaIAredonda;
    Ingles[2] = aprovRepI;
    
    boletim[0] = Matematica;
    boletim[1] = Portugues;
    boletim[2] = Geografia;
    boletim[3] = Historia;
    boletim[4] = Ingles;

    return boletim;
}

export { Notas }
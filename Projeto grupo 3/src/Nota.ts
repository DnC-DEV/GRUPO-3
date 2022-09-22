import { match } from 'assert';
import promptsync = require('prompt-sync');
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

    console.log(`   MATÉRIA       1ºTRIMESTRE     2ºTRIMESTRE     3ºTRIMESTRE     MEDIA     APROVADO/REPROVADO\n`);
    console.log(` Matemática            ${boletimM[0]}               ${boletimM[1]}               ${boletimM[2]}           ${mediaMAredonda}           ${aprovRepM}\n`);
    console.log(` Português             ${boletimP[0]}               ${boletimP[1]}               ${boletimP[2]}           ${mediaPAredonda}           ${aprovRepP}\n`);
    console.log(` Geografia             ${boletimG[0]}               ${boletimG[1]}               ${boletimG[2]}           ${mediaGAredonda}           ${aprovRepG}\n`);
    console.log(` História              ${boletimH[0]}               ${boletimH[1]}               ${boletimH[2]}           ${mediaHAredonda}           ${aprovRepH}\n`);
    console.log(` Inglês                ${boletimI[0]}               ${boletimI[1]}               ${boletimI[2]}           ${mediaIAredonda}           ${aprovRepI}\n`);
}

export { Notas }
import promptsync = require('prompt-sync');
const prompt = promptsync();

function Notas(){

    const boletim = [];
   

    for (let i= 0; i<3; i++){
        boletim[i] = [];
        const nota = Number(prompt('Digite sua nota de Português: '));
        boletim [i] = Number (nota);
    }
    const mediaP = Math.round((boletim[0] + boletim[1] + boletim [2]) / 3);

    console.clear()

    for (let i= 0; i<3; i++){
        boletim[i] = [];
        const nota = prompt ('Digite sua nota de História: ' );
        boletim [i] = Number (nota);
    }
    const mediaH = Math.round((boletim[0] + boletim[1]+ boletim [2]) / 3);

    console.clear()

    for (let i= 0; i<3; i++){
        boletim[i] = [];
        const nota = prompt ('Digite sua nota de Inglês: ' );
        boletim [i] = Number (nota) 
    }
    const mediaI = Math.round((boletim[0] + boletim[1]+ boletim [2]) / 3);

    console.clear()

    for (let i= 0; i<3; i++){
        boletim[i] = [];
        const nota = prompt ('Digite sua nota de Geografia: ' );
        boletim [i] = Number (nota) 
    }
    const mediaG = Math.round((boletim[0] + boletim[1]+ boletim [2]) / 3);

    console.clear()

    for (let i= 0; i<3; i++){
        boletim[i] = [];
        const nota = prompt ('Digite sua nota de Matemática: ' );
        boletim [i] = Number (nota) 
    }
    const mediaM = Math.round((boletim[0] + boletim[1]+ boletim [2]) / 3);

    console.clear()

    console.log (`Sua média total de Geografia >> ${mediaG} <<`);
    console.log (`Sua média total de Inglês >> ${mediaI} <<`);
    console.log (`Sua média total de História >> ${mediaH} <<`);
    console.log(`Sua média total em Português >> ${mediaP} <<`);
    console.log (`Sua média total de Matématica >> ${mediaM} <<`);
}

export { Notas }
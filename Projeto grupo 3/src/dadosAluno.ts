import { Alune } from "./Aluno";
import promptsync = require('prompt-sync');
const prompt = promptsync();

function dadosAluno(dadosBoletim){

    const nome = prompt('Digite o nome do alune: ');
    const turma = Number(prompt('Digite a turma do alune: '));
    const idade = Number(prompt('Digite a idade do alune: '));
   const turno = prompt('Digite o turno do alune (Manhã / Tarde / Noite): ');
    
    const alune = new Alune({
        nome,
        turma,
        idade,
        turno
    });

    console.clear();

    console.log("\n");
    console.log("\n");
    console.log("\t\t           _____________________________________");
    console.log("\t\t          |                                     |");
    console.log("\t\t          |    B O L E T I M   E S C O L A R    |");
    console.log("\t\t          |_____________________________________|\n\n");

    console.log(`\t\t          Nome: ${nome}             Turno: ${turno}  `);
    console.log(`\t\t         Idade: ${idade}            Turma: ${turma}  \n\n\n`);

    return [nome, turno, idade, turma]
}
export {dadosAluno};
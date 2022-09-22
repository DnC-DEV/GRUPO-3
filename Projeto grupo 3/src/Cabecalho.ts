import { Alune } from "./Aluno";
import promptsync = require('prompt-sync');
const prompt = promptsync();



function Cabecalho(){

    const nome = prompt('Digite o nome do alune: ');
    const turma = Number(prompt('Digite a turma do alune: '));
    const idade = Number(prompt('Digite a idade do alune: '));
    const turno = prompt('Digite o turno do alune (Manhã / Tarde / Noite): ');

console.clear();

console.log("\n");
console.log("\t           _____________________________________");
console.log("\t          |                                     |");
console.log("\t          |    B O L E T I M   E S C O L A R    |");
console.log("\t          |_____________________________________|\n\n");

console.log(`\t         Nome: ${nome}          Turno: ${turno}  `);
console.log(`\t         Idade: ${idade}            Turma: ${turma}  \n\n\n`);

}
export{Cabecalho}
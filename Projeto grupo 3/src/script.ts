import promptsync = require('prompt-sync');
import { Alune } from "./Aluno";
import { Notas } from './Nota';

    const prompt = promptsync();
    
    const nome = prompt('Digite o nome do alune: ');
    const turma = Number(prompt('Digite a turma do alune: '));
    const idade = Number(prompt('Digite a idade do alune: '));
    const turno = prompt('Digite o turno do alune: ');

    const alune = new Alune({
        nome,
        turma,
        idade,
        turno
    });

    console.clear();

    console.log(`\tO nome do Alune é: ${nome}`);
    console.log(`\tA turma do Alune é: ${turma}`);
    console.log(`\tA idade do Alune é: ${idade}`);
    console.log(`\tO turno do Alune é: ${turno}`);

    const notas = new Notas();

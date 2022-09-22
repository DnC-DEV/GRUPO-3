"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dadosAluno = void 0;
var Aluno_1 = require("./Aluno");
var promptsync = require("prompt-sync");
var prompt = promptsync();
function dadosAluno(dadosBoletim) {
    var nome = prompt('Digite o nome do alune: ');
    var turma = Number(prompt('Digite a turma do alune: '));
    var idade = Number(prompt('Digite a idade do alune: '));
    var turno = prompt('Digite o turno do alune (Manhã / Tarde / Noite): ');
    var alune = new Aluno_1.Alune({
        nome: nome,
        turma: turma,
        idade: idade,
        turno: turno
    });
    console.clear();
    console.log("\n");
    console.log("\t           _____________________________________");
    console.log("\t          |                                     |");
    console.log("\t          |    B O L E T I M   E S C O L A R    |");
    console.log("\t          |_____________________________________|\n\n");
    console.log("\t         Nome: ".concat(nome, "          Turno: ").concat(turno, "  "));
    console.log("\t         Idade: ".concat(idade, "            Turma: ").concat(turma, "  \n\n\n"));
    return [nome, turno, idade, turma];
}
exports.dadosAluno = dadosAluno;

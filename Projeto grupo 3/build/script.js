"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptsync = require("prompt-sync");
var Aluno_1 = require("./Aluno");
var prompt = promptsync();
var nome = prompt('Digite o nome do alune: ');
var turma = Number(prompt('Digite a turma do alune: '));
var idade = Number(prompt('Digite a idade do alune: '));
var turno = prompt('Digite o turno do alune: ');
var alune = new Aluno_1.Alune({
    nome: nome,
    turma: turma,
    idade: idade,
    turno: turno
});
console.clear();
console.log("\tO nome do Alune \u00E9: ".concat(nome));
console.log("\tA turma do Alune \u00E9: ".concat(turma));
console.log("\tA idade do Alune \u00E9: ".concat(idade));
console.log("\tO turno do Alune \u00E9: ".concat(turno));


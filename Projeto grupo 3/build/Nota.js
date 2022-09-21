"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notas = void 0;
var promptsync = require("prompt-sync");
var prompt = promptsync();
function Notas() {
    var boletim = [];
    for (var i = 0; i < 3; i++) {
        boletim[i] = [];
        var nota = Number(prompt('Digite sua nota de Português: '));
        boletim[i] = Number(nota);
    }
    var mediaP = Math.round((boletim[0] + boletim[1] + boletim[2]) / 3);
    console.clear();
    for (var i = 0; i < 3; i++) {
        boletim[i] = [];
        var nota = prompt('Digite sua nota de História: ');
        boletim[i] = Number(nota);
    }
    var mediaH = Math.round((boletim[0] + boletim[1] + boletim[2]) / 3);
    console.clear();
    for (var i = 0; i < 3; i++) {
        boletim[i] = [];
        var nota = prompt('Digite sua nota de Inglês: ');
        boletim[i] = Number(nota);
    }
    var mediaI = Math.round((boletim[0] + boletim[1] + boletim[2]) / 3);
    console.clear();
    for (var i = 0; i < 3; i++) {
        boletim[i] = [];
        var nota = prompt('Digite sua nota de Geografia: ');
        boletim[i] = Number(nota);
    }
    var mediaG = Math.round((boletim[0] + boletim[1] + boletim[2]) / 3);
    console.clear();
    for (var i = 0; i < 3; i++) {
        boletim[i] = [];
        var nota = prompt('Digite sua nota de Matemática: ');
        boletim[i] = Number(nota);
    }
    var mediaM = Math.round((boletim[0] + boletim[1] + boletim[2]) / 3);
    console.clear();
    console.log("Sua m\u00E9dia total de Geografia >> ".concat(mediaG, " <<"));
    console.log("Sua m\u00E9dia total de Ingl\u00EAs >> ".concat(mediaI, " <<"));
    console.log("Sua m\u00E9dia total de Hist\u00F3ria >> ".concat(mediaH, " <<"));
    console.log("Sua m\u00E9dia total em Portugu\u00EAs >> ".concat(mediaP, " <<"));
    console.log("Sua m\u00E9dia total de Mat\u00E9matica >> ".concat(mediaM, " <<"));
}
exports.Notas = Notas;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notas = void 0;
//import { match } from 'assert';
var promptsync = require("prompt-sync");
var Cabecalho_1 = require("./Cabecalho");
//import { dadosAluno } from './dadosAluno';
var prompt = promptsync();
function Notas() {
    var boletimP = [];
    var boletimH = [];
    var boletimM = [];
    var boletimG = [];
    var boletimI = [];
    for (var i = 0; i < 3; i++) {
        boletimP[i] = [];
        var nota = Number(prompt("Digite a nota ".concat(i + 1, " de Portugu\u00EAs: ")));
        boletimP[i] = Number(nota);
    }
    var mediaP = ((boletimP[0] + boletimP[1] + boletimP[2]) / 3);
    var mediaPAredonda = mediaP.toFixed(1);
    console.clear();
    for (var i = 0; i < 3; i++) {
        boletimH[i] = [];
        var nota = prompt("Digite a nota ".concat(i + 1, " de Hist\u00F3ria: "));
        boletimH[i] = Number(nota);
    }
    var mediaH = ((boletimH[0] + boletimH[1] + boletimH[2]) / 3);
    var mediaHAredonda = mediaH.toFixed(1);
    console.clear();
    for (var i = 0; i < 3; i++) {
        boletimI[i] = [];
        var nota = prompt("Digite a nota ".concat(i + 1, " de Ingl\u00EAs: "));
        boletimI[i] = Number(nota);
    }
    var mediaI = ((boletimI[0] + boletimI[1] + boletimI[2]) / 3);
    var mediaIAredonda = mediaI.toFixed(1);
    console.clear();
    for (var i = 0; i < 3; i++) {
        boletimG[i] = [];
        var nota = prompt("Digite a nota ".concat(i + 1, " de Geografia: "));
        boletimG[i] = Number(nota);
    }
    var mediaG = ((boletimG[0] + boletimG[1] + boletimG[2]) / 3);
    var mediaGAredonda = mediaG.toFixed(1);
    console.clear();
    for (var i = 0; i < 3; i++) {
        boletimM[i] = [];
        var nota = prompt("Digite a nota ".concat(i + 1, " de Matem\u00E1tica: "));
        boletimM[i] = Number(nota);
    }
    var mediaM = ((boletimM[0] + boletimM[1] + boletimM[2]) / 3);
    var mediaMAredonda = mediaM.toFixed(1);
    console.clear();
    (0, Cabecalho_1.Cabecalho)();
    var aprovRepG;
    var aprovRepI;
    var aprovRepM;
    var aprovRepP;
    var aprovRepH;
    if (mediaG >= 7) {
        aprovRepG = 'Aprovado';
    }
    else if (mediaG < 7) {
        aprovRepG = 'Reprovado';
    }
    if (mediaI >= 7) {
        aprovRepI = 'Aprovado';
    }
    else if (mediaI < 7) {
        aprovRepI = 'Reprovado';
    }
    if (mediaH >= 7) {
        aprovRepH = 'Aprovado';
    }
    else if (mediaH < 7) {
        aprovRepH = 'Reprovado';
    }
    if (mediaP >= 7) {
        aprovRepP = 'Aprovado';
    }
    else if (mediaP < 7) {
        aprovRepP = 'Reprovado';
    }
    if (mediaM >= 7) {
        aprovRepM = 'Aprovado';
    }
    else if (mediaM < 7) {
        aprovRepM = 'Reprovado';
    }
    var boletim = [];
    var Matematica = [];
    var Portugues = [];
    var Geografia = [];
    var Historia = [];
    var Ingles = [];
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
exports.Notas = Notas;

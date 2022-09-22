"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notas = void 0;
var promptsync = require("prompt-sync");
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
    console.log("   MAT\u00C9RIA       1\u00BATRIMESTRE     2\u00BATRIMESTRE     3\u00BATRIMESTRE     MEDIA     APROVADO/REPROVADO\n");
    console.log(" Matem\u00E1tica            ".concat(boletimM[0], "               ").concat(boletimM[1], "               ").concat(boletimM[2], "           ").concat(mediaMAredonda, "           ").concat(aprovRepM, "\n"));
    console.log(" Portugu\u00EAs             ".concat(boletimP[0], "               ").concat(boletimP[1], "               ").concat(boletimP[2], "           ").concat(mediaPAredonda, "           ").concat(aprovRepP, "\n"));
    console.log(" Geografia             ".concat(boletimG[0], "               ").concat(boletimG[1], "               ").concat(boletimG[2], "           ").concat(mediaGAredonda, "           ").concat(aprovRepG, "\n"));
    console.log(" Hist\u00F3ria              ".concat(boletimH[0], "               ").concat(boletimH[1], "               ").concat(boletimH[2], "           ").concat(mediaHAredonda, "           ").concat(aprovRepH, "\n"));
    console.log(" Ingl\u00EAs                ".concat(boletimI[0], "               ").concat(boletimI[1], "               ").concat(boletimI[2], "           ").concat(mediaIAredonda, "           ").concat(aprovRepI, "\n"));
}
exports.Notas = Notas;

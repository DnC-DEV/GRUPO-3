"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabelaDeNotas = void 0;
var promptsync = require("prompt-sync");
var prompt = promptsync();
function TabelaDeNotas(boletim) {
    var boletimM = boletim[0][0];
    var boletimP = boletim[1][0];
    var boletimG = boletim[2][0];
    var boletimH = boletim[3][0];
    var boletimI = boletim[4][0];
    var mediaMAredonda = boletim[0][1];
    var mediaPAredonda = boletim[1][1];
    var mediaGAredonda = boletim[2][1];
    var mediaHAredonda = boletim[3][1];
    var mediaIAredonda = boletim[4][1];
    var aprovRepM = boletim[0][2];
    var aprovRepP = boletim[1][2];
    var aprovRepG = boletim[2][2];
    var aprovRepH = boletim[3][2];
    var aprovRepI = boletim[4][2];
    console.log("   MAT\u00C9RIA       1\u00BATRIMESTRE     2\u00BATRIMESTRE     3\u00BATRIMESTRE     MEDIA     APROVADO/REPROVADO\n");
    console.log(" Matem\u00E1tica            ".concat(boletimM[0], "               ").concat(boletimM[1], "               ").concat(boletimM[2], "           ").concat(mediaMAredonda, "           ").concat(aprovRepM, "\n"));
    console.log(" Portugu\u00EAs             ".concat(boletimP[0], "               ").concat(boletimP[1], "               ").concat(boletimP[2], "           ").concat(mediaPAredonda, "           ").concat(aprovRepP, "\n"));
    console.log(" Geografia             ".concat(boletimG[0], "               ").concat(boletimG[1], "               ").concat(boletimG[2], "           ").concat(mediaGAredonda, "           ").concat(aprovRepG, "\n"));
    console.log(" Hist\u00F3ria              ".concat(boletimH[0], "               ").concat(boletimH[1], "               ").concat(boletimH[2], "           ").concat(mediaHAredonda, "           ").concat(aprovRepH, "\n"));
    console.log(" Ingl\u00EAs                ".concat(boletimI[0], "               ").concat(boletimI[1], "               ").concat(boletimI[2], "           ").concat(mediaIAredonda, "           ").concat(aprovRepI, "\n"));
}
exports.TabelaDeNotas = TabelaDeNotas;

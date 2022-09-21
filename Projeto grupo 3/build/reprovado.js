"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.media = void 0;
function media(soma, media) {
    soma = soma + i;
    media = soma / 4;
    if (media >= 7) {
        console.log('Aprovado');
    }
    else if (media > 5 && media >= 6) {
        console.log('Verificar a disponibilidade no COC "Conselho de Classe".');
    }
    else if (media < 5) {
        console.log('Reprovado');
    }
}
exports.media = media;

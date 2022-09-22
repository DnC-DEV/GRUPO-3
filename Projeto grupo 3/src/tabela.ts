import promptsync = require('prompt-sync');
const prompt = promptsync();

function TabelaDeNotas(boletim){
const boletimM = boletim[0][0];
const boletimP = boletim[1][0];
const boletimG = boletim[2][0];
const boletimH = boletim[3][0];
const boletimI = boletim[4][0];
const mediaMAredonda = boletim[0][1];
const mediaPAredonda = boletim[1][1];
const mediaGAredonda = boletim[2][1];
const mediaHAredonda = boletim[3][1];
const mediaIAredonda = boletim[4][1];
const aprovRepM = boletim[0][2];
const aprovRepP = boletim[1][2];
const aprovRepG = boletim[2][2];
const aprovRepH = boletim[3][2];
const aprovRepI = boletim[4][2];

console.log(`   MATÉRIA       1ºTRIMESTRE     2ºTRIMESTRE     3ºTRIMESTRE     MEDIA     APROVADO/REPROVADO\n`);
console.log(` Matemática            ${boletimM[0]}               ${boletimM[1]}               ${boletimM[2]}           ${mediaMAredonda}           ${aprovRepM}\n`);
console.log(` Português             ${boletimP[0]}               ${boletimP[1]}               ${boletimP[2]}           ${mediaPAredonda}           ${aprovRepP}\n`);
console.log(` Geografia             ${boletimG[0]}               ${boletimG[1]}               ${boletimG[2]}           ${mediaGAredonda}           ${aprovRepG}\n`);
console.log(` História              ${boletimH[0]}               ${boletimH[1]}               ${boletimH[2]}           ${mediaHAredonda}           ${aprovRepH}\n`);
console.log(` Inglês                ${boletimI[0]}               ${boletimI[1]}               ${boletimI[2]}           ${mediaIAredonda}           ${aprovRepI}\n`);
}

export { TabelaDeNotas };
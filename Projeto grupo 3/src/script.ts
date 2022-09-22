
import promptsync = require('prompt-sync');
import { Alune } from "./Aluno";
import { Notas } from './Nota';
import { dadosAluno } from './dadosAluno';
import { TabelaDeNotas } from './tabela';
import { Cabecalho } from './Cabecalho';

    const prompt = promptsync();

    const boletim = Notas();
    TabelaDeNotas(boletim);

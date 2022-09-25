
import promptsync = require('prompt-sync');
import { Notas } from './Nota';
import { TabelaDeNotas } from './tabela';

    const prompt = promptsync();

    const boletim = Notas();
    TabelaDeNotas(boletim);

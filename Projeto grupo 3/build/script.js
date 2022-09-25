"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptsync = require("prompt-sync");
var Nota_1 = require("./Nota");
var tabela_1 = require("./tabela");
var prompt = promptsync();
var boletim = (0, Nota_1.Notas)();
(0, tabela_1.TabelaDeNotas)(boletim);

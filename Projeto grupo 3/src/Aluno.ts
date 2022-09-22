import { isConstructorTypeNode } from "typescript";

interface novoAluno{
    nome:string
    turma:number
    idade:number
    turno:string
}

class Alune{
    public nome: string;
    public turma: number;
    public idade: number;
    public turno: string;


constructor ({nome, turma, idade, turno}: novoAluno){
    this.nome = nome;
    this.turma = turma;
    this.idade = idade;
    this.turno = turno;

}
}
export { Alune }

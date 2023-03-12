export class Nota{
    peso: number
    nota: number
    constructor(
        { peso, nota }
        :
        { peso: number, nota: number }
      ){
      this.peso = peso
      this.nota = nota
    }
  }
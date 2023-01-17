/* EXERCICIO 1 - Criar 3 classes de objetos

1 - Classe de heróis da Marvel
2 - Classe de Vingadores 
3 - Classe de Vingadores que morreram no cinema

Métodos: Voar, Correr Muito Rápido
Atributos: Teletransportar, Se regenerar Super Força, Imortalidade 

Construir atráves do método construtor.

*/

class marvelHerois {
    Teletransportar: boolean; //verdadeiros ou falso
    SeRegenerar: boolean; //verdadeiros ou falso
    SuperForça: boolean; //boolean: verdadeiros ou falso
    Imortalidade: boolean; //verdadeiros ou falso

    constructor(T: boolean, S: boolean, SF: boolean, I: boolean) {
        this.Teletransportar = T;
        this.SeRegenerar = S;
        this.SuperForça = SF;
        this.Imortalidade = I;
    }

    exibirPoder(): void {
        console.log(`O herói tem o poder de se Teletransportar ${this.Teletransportar}, De se Regenerar ${this.SeRegenerar}, De Super Força ${this.SuperForça}, E Imortalidade ${this.Imortalidade} `)
    }

}

let Marvelherois = new marvelHerois(true, true, true, true)
Marvelherois.exibirPoder()

class  Vingadores extends marvelHerois {


}

class VingadoresMortos extends Vingadores {

}
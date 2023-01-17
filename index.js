/* EXERCICIO 1 - Criar 3 classes de objetos

1 - Classe de heróis da Marvel
2 - Classe de Vingadores
3 - Classe de Vingadores que morreram no cinema

Métodos: Voar, Correr Muito Rápido
Atributos: Teletransportar, Se regenerar Super Força, Imortalidade

Construir atráves do método construtor.

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var marvelHerois = /** @class */ (function () {
    function marvelHerois(T, S, SF, I) {
        this.Teletransportar = T;
        this.SeRegenerar = S;
        this.SuperForça = SF;
        this.Imortalidade = I;
    }
    marvelHerois.prototype.exibirPoder = function () {
        console.log("O her\u00F3i tem o poder de se Teletransportar ".concat(this.Teletransportar, ", De se Regenerar ").concat(this.SeRegenerar, ", De Super For\u00E7a ").concat(this.SuperForça, ", E Imortalidade ").concat(this.Imortalidade, " "));
    };
    return marvelHerois;
}());
var Marvelherois = new marvelHerois(true, true, true, true);
Marvelherois.exibirPoder();
var Vingadores = /** @class */ (function (_super) {
    __extends(Vingadores, _super);
    function Vingadores() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Vingadores;
}(marvelHerois));
var VingadoresMortos = /** @class */ (function (_super) {
    __extends(VingadoresMortos, _super);
    function VingadoresMortos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VingadoresMortos;
}(Vingadores));

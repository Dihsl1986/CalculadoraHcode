class CalcController {


    constructor() {


        this._displayCalc = "0"; //É o Display dos números onde a pessoa está digitando para aparecer o calculo.
        this._currentDate;
        this.initialize();  // Método que esta dentro do meu próprio objeto.
    
    }

    initialize() {  // Tudo  que eu quiser iniciar na minha calculadora vai estar dentro deste método.

        let displayCalcEl = document.querySelector("#display"); // Encontramos o colocamos oque estava no DOM.
        let dateEl = document.querySelector("#data"); // Encontramos o colocamos oque estava no DOM.
        let timeEl = document.querySelector("#hora"); // Encontramos o colocamos oque estava no DOM.

        displayCalcEl.innerHTML = "66666";
        dateEl.innerHTML = "17/06/1986";
        timeEl.innerHTML = "01:14";

    }


    get displayCalc() {

        return this._displayCalc; // Aqui eu posso colocar qualquer regra.

    }

    set displayCalc(value) {
        this._displayCalc = value; //Eu posso mudar o valor do atributo displayCalc.
    }

    get dataAtual() {
        return this._currentDate;
    }

    set dataAtual(valor) {
        this._currentDate = value
    }

}
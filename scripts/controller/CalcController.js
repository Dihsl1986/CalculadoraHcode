class CalcController {


    constructor() {

        this._operation = []
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display"); // Encontramos o colocamos oque estava no DOM.
        this._dateEl = document.querySelector("#data"); // Encontramos o colocamos oque estava no DOM.
        this._timeEl = document.querySelector("#hora"); // Encontramos o colocamos oque estava no DOM.
        this._currentDate;
        this.initialize();  // Método que esta dentro do meu próprio objeto.
        this.initButtonsEvents();
    
    }

    initialize() {  // Tudo  que eu quiser iniciar na minha calculadora vai estar dentro deste método.

        
        this.setDisplayDataTime();

           setInterval(()=>{

                this.setDisplayDataTime();
                

           }, 1000 );  
    

    }


    addEventListenerAll(element, events,fn) {
        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        });
    }


    clearAll(){
        this._operation = [];
    }

    clearEntry() {
        this._operation.pop();
    }

    addOperation(value){
        this._operation.push(value);

        console.log(this._operation);

    }

    setError(){
        this.displayCalc = "Error";
    }


    execBtn (value) {

        switch (value) {
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                break;
            case 'subtracao':
                break;
            case 'multipicacao':
                break;
            case 'divisao':
                break;
            case 'porcento':
                break;
            case 'igual':
                break;

                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '9':
                case '8':
                case '9':
                case '10':
                    this.addOperation(parseInt(value));
                    break;

            default:
                this.setError();
                break;
        }


    }

    initButtonsEvents() {

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");


        buttons.forEach((btn,index)=> {

           this.addEventListenerAll(btn, 'click drag', e => {

                let textBtn = btn.className.baseVal.replace("btn-", "");

                this.execBtn(textBtn);
    
            });

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {

                btn.style.cursor = "pointer";

            })

        })

    }




    setDisplayDataTime() { //criei este metodo para aparecer a data e a hora quando abrir a aplicação.
       
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "short",
            year: "numeric"

        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

   //Display time
    get displayTime()  {
        return this._timeEl.innerHTML;

    }

    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }

    //Display Date
    get displayDate() {
        this._dateEl.innerHTML;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }




    get displayCalc() {

        return this._displayCalcEl.innerHTML; // Aqui eu posso colocar qualquer regra.

    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value; //Eu posso mudar o valor do atributo displayCalc.
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(valor) {
        this._currentDate = value
    }

}   
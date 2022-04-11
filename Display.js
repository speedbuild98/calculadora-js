class Display{
      constructor(displayValorActual, displayValorAnterior){
            this.displayValorActual = displayValorActual;
            this.displayValorAnterior = displayValorAnterior;
            this.calculadora = new Calculadora();
            this.valorActual = '';
            this.ValorAnterior = '';
      }

      agregarNumero(numero){
            this.valorActual = numero;
      }
}
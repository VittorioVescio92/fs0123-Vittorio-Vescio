

      
      let mostraCalcolatrice = document.querySelector("#mostraCalcolatrice");

      mostraCalcolatrice.addEventListener("click", function(){
        return window.alert("Bravissimo, ora puoi usare la calcolatrice!")
      })
      console.log(mostraCalcolatrice)
      
      function aggiungiSimbolo(elemento) {
        let simbolo = elemento.getAttribute("data-simbolo");
        console.log(typeof aggiungiSimbolo)

        let display = document.querySelector("#display");
        display.value += simbolo;
      }

      function totale() {
        let display = document.querySelector("#display");
        display.value = eval(display.value);
        console.log(display)
      }



const display = document.getElementById('display')
const powerBtn = document.getElementById('power-off')
const buttons = document.getElementsByTagName('button')

      function power() {
        display.disabled = false;
        display.placeholder = '0';
        for (const button of buttons) {
          if(button.id !== 'power-off'){
            button.disabled = false;          
        }}        
        powerBtn.removeEventListener("click", power) 
        powerBtn.addEventListener("click", powerOff) 
      }
      function powerOff() {
        display.disabled = true;
        display.placeholder = '';
        for (const button of buttons) {
          if(button.id !== 'power-off'){
            button.disabled = true;          
        }}
        powerBtn.removeEventListener("click", powerOff)
        powerBtn.addEventListener("click", power)
      }

      let mostraCalcolatrice = document.querySelector("#mostraCalcolatrice");

      mostraCalcolatrice.addEventListener("click", function(){
        document.getElementById('container').hidden = false
        document.getElementById('domanda').hidden = true
        return window.alert("Bravissim*, ora puoi usare la calcolatrice!")
      })
      
      function aggiungiSimbolo(elemento) {
        let simbolo = elemento.getAttribute("data-simbolo");
        

        let display = document.querySelector("#display");
        display.value += simbolo;
      }

      function totale() {
        let display = document.querySelector("#display");
        display.value = eval(display.value);

      }


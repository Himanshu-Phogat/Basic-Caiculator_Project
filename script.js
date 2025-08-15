let inputBox = document.getElementById("input_box")
let buttons = document.querySelectorAll("button")

let string = ''

buttons.forEach( (button) =>{
    button.addEventListener('click', (b) =>{
        if(b.target.innerText == '='){
            string = String(eval(string))
            inputBox.value = string;
        }
        else if(b.target.innerText == 'AC'){
            string = ''
            inputBox.value = string;
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1)
            inputBox.value = string;
        }
        else if(b.target.id == 'plus_minus'){
            string = String(-eval(string))
            inputBox.value = string;
        }
        else{
            string += b.target.innerText
            inputBox.value = string;
        }
    })
})
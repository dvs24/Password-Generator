let lengthSlider = document.querySelector('.passLength input');
let button = document.querySelector('.btn');
let options = document.querySelectorAll('.option input');
let  passInput = document.querySelector('.pass');
let copySymbol = document.querySelector('.copySymbol');



const characters = {
    lowercase : "abcdefghijklmnopqrstuvwxyz",
    uppercase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers : "123456789",
    symbols : "!@#$%^&*(){}[]<>?|\/+-|"
}


// function for slider value
const slider = () => {
    // console.log( lengthSlider.value);
    document.querySelector('.detail span').innerText = lengthSlider.value;
}

// generation of password
const generatePass = () => {

    let staticPass = ""
    let generatePassLength = lengthSlider.value;
    let randomPass = ""
    let excDuplicate = false

    options.forEach(option => {

        if (option.checked) {
            // console.log(option.checked);
            if (option.id !== "excDuplicate" && option.id !== "spaces"){

                staticPass += characters[option.id];
            }
            else if (option.id === 'spaces'){
                staticPass += `  ${staticPass}  `;
            }
            else{
                excDuplicate = true
            }
        }
        
    });
    // console.log(staticPass);
    for (let i = 0; i < generatePassLength; i++) {
        
        let randomChar = randomPass += staticPass[Math.floor(Math.random() * staticPass.length)]

        // if(excDuplicate){
        //     !randomPass.includes(randomChar) || randomChar == " " ? randomPass += randomChar : i--;
        // }
        // else{
        //     randomPass += randomChar;
        // }
        
    }
    passInput.value = randomPass;

    console.log(randomPass);
}

const toCopy = () => {
     navigator.clipboard.writeText(passInput.value);
     copySymbol.innerText = 'check'
     setTimeout(()=>{
        copySymbol.innerText = 'copy_all'

     }, 1500)
}




lengthSlider.addEventListener('input', slider);
button.addEventListener('click', generatePass)
copySymbol.addEventListener('click', toCopy )


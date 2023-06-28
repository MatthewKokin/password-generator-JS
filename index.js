const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const Btn = document.getElementById("generate-btn")
const firstPassword = document.getElementById("first")
const secondPassword = document.getElementById("second")
const ImputLength = document.getElementById("input-field")



Btn.addEventListener("click", function(){
    firstPassword.textContent = password(ImputLength.value)
    secondPassword.textContent = password(ImputLength.value)
})



// ----------------Functions------------
function randomNumber() {
    let number = Math.floor( Math.random() * characters.length)
    return characters[number] 
}

function password(length){
    passwordCharacters = []
    for (let i=0; i < length; i++){
        let num = randomNumber()
        passwordCharacters.push(num)
    }
    let password = passwordCharacters.join('');
    return password
}


password(8)



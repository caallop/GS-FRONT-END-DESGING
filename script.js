const emailInput = document.querySelector(".gmail");
const submitButton = document.querySelector("#submit");
const erroMensagem = document.querySelector("#erroEmail");

submitButton.addEventListener("click", (e)=>{
    e.preventDefault()

    const emailValue = emailInput.value.trim();

    if(emailValue === ""){
        erroMensagem.textContent = "Digite o email";
        return;
    }
})
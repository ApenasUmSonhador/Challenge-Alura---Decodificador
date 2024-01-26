function criptografar() {
    let texto = document.querySelector("input").value;
    texto = texto.replace(/e/g, "enter")
                 .replace(/i/g, "imes")
                 .replace(/a/g, "ai")
                 .replace(/o/g, "ober")
                 .replace(/u/g, "ufat");
    document.getElementById("resultado").innerHTML = texto;
}
function descriptografar() {
    let texto = document.querySelector("input").value;
    texto = texto.replace(/enter/g, "e")
                 .replace(/imes/g, "i")
                 .replace(/ai/g, "a")
                 .replace(/ober/g, "o")
                 .replace(/ufat/g, "u");
    document.getElementById("resultado").innerHTML = texto;
}

function confere(funcao,texto){
    
}
let saida;

function confereVazio(texto) {
    if (texto === "") {
        document.getElementById("saida-inicio").style.display = "flex";
        document.getElementById("saida-fim").style.display = "none";
    }
    else {
        document.getElementById("saida-inicio").style.display = "none";
        document.getElementById("saida-fim").style.display = "flex";
    }
}

function criptografar() {
    let texto = document.querySelector("textarea").value;
    confereVazio(texto);
    texto = texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
    document.getElementById("texto-saida").innerHTML = texto;
    saida = texto;
}

function descriptografar() {
    let texto = document.querySelector("textarea").value;
    confereVazio(texto);
    texto = texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
    document.getElementById("texto-saida").innerHTML = texto;
    saida = texto;
}

function copiarTexto() {
    navigator.clipboard.writeText(saida)
        .then(() => {
            console.log('Texto copiado para o clipboard: ' + saida);
        })
        .catch((error) => {
            console.error('Erro ao copiar texto para o clipboard: ' + error);
        });
}
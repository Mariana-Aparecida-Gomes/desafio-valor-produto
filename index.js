let btn_valor = document.querySelector("button");

btn_valor.addEventListener("click", function () {
    const produtos = {
        "Teclado Mecanico": 500,
        "Monitor Samsung": 1000,
        "Mouse Gamer": 300,
        "Notebook": 3000,
        "Headset": 150

    };

    let produto = document.querySelector("select").value;

    if(produto in produtos) {
        document.querySelector("h3").textContent = `O valor do ${produto} que você escolheu é de R$${produtos[produto]},00`;
    } else {
        document.querySelector("h3").textContent = "Nenhum produto selecionado."
    }
});
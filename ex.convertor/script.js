function converter() {

    const dolar = 5.10;

    let reais = Number(document.getElementById("reais").value);

    let resultado = reais / dolar;

    document.getElementById("resultado").innerHTML =
        "US$ " + resultado.toFixed(2);

}
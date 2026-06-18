function somar(){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let resultado = num1 + num2;

    document.getElementById("resultado").innerHTML =
    "Resultado: " + resultado;

}
function subtrair(){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let resultado = num1 - num2;

    document.getElementById("resultado").innerHTML =
    "Resultado: " + resultado;

}
function multiplicar(){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let resultado = num1 * num2;

    document.getElementById("resultado").innerHTML =
    "Resultado: " + resultado;

}
function dividir(){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    if(num2 == 0){

        document.getElementById("resultado").innerHTML =
        "Não é possível dividir por zero.";

    }else{

        let resultado = num1 / num2;

        document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;

    }

}
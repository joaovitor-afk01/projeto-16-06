let nome = prompt("Digite Seu Nome completo");
let nota1 = parseFloat(prompt("Digite a primeira nota"));
let nota2 = parseFloat(prompt("Digite a segunda nota"));
let nota3 = parseFloat(prompt("Digite a terceira nota"));
let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    alert(`Parabens ${nome} sua nota é : ${media}`);
} else {
    alert(`${Nome} Não foi aprovado, sua media é : ${media}`);
}
let nome = prompt("Digite Seu Nome completo");
let nota1 = parseFloat(prompt("Digite a primeira nota"));
let nota2 = parseFloat(prompt("Digite a segunda nota"));
let nota3 = parseFloat(prompt("Digite a terceira nota"));
let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    alert(` Olá ${nome} \n 
        nota 1 ${nota1} \n
        nota 2 ${nota2} \n
        nota 3 ${nota3} \n
    situação : aprovado `);
} else {
    alert(`${Nome} Reprovado ! sua media é : ${media} `);
}
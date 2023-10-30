/*function alo_mundo()
{
    alert("projeto iniciado!!!! alo!!!!")
}

escrever = msg => alert(msg);
soma = (a,b) => a+b;
sub = (a,b) => a-b;
mult = (a,b) => a*b;
div = (a,b) => a/b;
raiz = a => Math.sqrt(a);
equacao2grau = (a,b,c) => {
        let delta = sub(mult(b,b),mult(4,mult(a,c)));
        if (delta < 0) return "Vocẽ é idiota? Não possui raiz real.";
        if (delta == 0) return div(-b, mult(2,a));
        return "x1 = " + div(soma(-b,raiz(delta)),mult(2,a))+ 
               "           x2 = " + div(sub(-b,raiz(delta)),mult(2,a));
}



escrever(equacao2grau(5,10,1));*/


let a = "";
let b = "";
let c = "";
let sa = "+";
let sb = "+";
let sc = "+";
let valor = "";
let executar = "";
temponto = false;
let desligado = false;


soma = (a, b) => Number(a) + Number(b);
sub = (a, b) => Number(a) - Number(b);
mult = (a, b) => Number(a) * Number(b);
div = (a, b) => Number(a) / Number(b);
raiz = a => Math.sqrt(a);
equacao2Grau = (a, b, c) => {
    let delta = sub(mult(b, b), mult(4, mult(a, c)));
    if (delta < 0) return "Não possui raiz Real.";
    if (delta == 0) return "x1 = x2 = " + div(-b, mult(2, a));
    return "x1 = " + div(soma(-b, raiz(delta)), mult(2, a)) +
        " x2 = " + div(sub(-b, raiz(delta)), mult(2, a));
}


function mostrar_resultado() {
    document.getElementById("resultado").value = valor;
}


function calcular() {
    if (desligado) return;

    if (executar != "") {
        b = valor;
        if (executar == "soma") valor = soma(a, b);
        if (executar == "sub") valor = sub(a, b);
        if (executar == "div") valor = div(a, b);
        if (executar == "mult") valor = mult(a, b);
        if (executar == "porc") valor = mult(div(Number(a), Number(100)), b);
        if (executar == "raiz") valor = raiz(Number(a));
        mostrar_resultado();
        executar = "";
        a = ""
        b = "";
        valor = "";
        temponto = false;

    }
}


function digitando(tecla) {
    if (desligado) return;

    if (tecla == ".") {
        if (!temponto) {
            valor = valor + tecla;
            mostrar_resultado();
            temponto = true;
        }
        return
    }


    valor = valor + tecla;
    mostrar_resultado();
}


function operacao(op) {
    if (desligado) return;

    executar = op;
    a = valor;
    valor = "";

}

function desliga() {

    if (desligado) {
        desligado = false;
        zerar();
    }
    else {
        zerar();
        mostrar_resultado();
        desligado = true;
    }
}



function zerar() {
    if (desligado) return;

    a = "";
    b = "";
    valor = "0";
    executar = "";
    mostrar_resultado();
    valor = "";

}


function calcula_raiz() {
    if (valor == "") {
        valor = 0;
    }
    valor = raiz(valor);
    mostrar_resultado();
}

function porcentagem() {
    if (executar == "mult") {
        b = valor
        valor = div(mult(a, b), 100);
        mostrar_resutado;
    }

}
const set_sinal_a = () => {
    sa = document.getElementById("sinal_a").value;
    calcular_equacao();
}
const set_sinal_b = () => {
    sb = document.getElementById("sinal_n").value;
    calcular_equacao();
}
const set_valor_c = () => {
    sc = document.getElementById("sinal_c").value;
    calcular_equacao();
}
const set_valor_a = () => {
    a = document.getElementById("sinal_a").value;
    calcular_equacao();
}
const set_valor_b = () => {
    b = document.getElementById("sinal_n").value;
    calcular_equacao();
}
const set_sinal_c = () => {
    c = document.getElementById("sinal_c").value;
    calcular_equacao();
}



const calcular_equacao = () => {
    if (a !=  a != "0") {
        alert(sa + a + "x2 " + sb + b + "x" + sc + c + "= 0");
    }
}

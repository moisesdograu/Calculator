function digitar (element){
let resultado = document.getElementById("resultado");
let digito = element.innerHTML;

return resultado.innerHTML+=digito

}

const limpar = () =>{
resultado.innerHTML= "";
}

let apagar = ()=>{
resultado.innerHTML = resultado.innerHTML.substring(0, resultado.innerHTML.length -1);
}

const calcular = ()=>{
    resultado.innerHTML=eval(resultado.innerHTML.replace("X", "*").replace("÷", "/"));

}
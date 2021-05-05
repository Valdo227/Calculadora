
function Calculadora(){

    let ec = document.getElementById("input").value;
    var res = 0;
    if(ec.includes("+")){
        res = sumar(ec);
    }
    else if(ec.includes("-")){
        res = restar(ec);
    
    }
    else if(ec.includes("*")){
        res = multiplicar(ec);
    }
    else if(ec.includes("/")){
        res = dividir(ec);
    }
    else
        alert("Ingresa un operador + , - , * , /");


    document.getElementById("res").innerHTML="";
    document.getElementById("res").innerHTML= res;

}

function numbers(ec,op){
    let num = [0];
    let pos = ec.indexOf(op);

    if(pos === ec.lastIndexOf(op)){

        num[0] = parseInt(ec.substring(0,pos));
        num[1] = parseInt(ec.substring(pos+1,ec.length));
        console.log(num);
    }
    else
        alert("El operador se repite")

    return num;
}

function sumar(ec){
    let num = numbers(ec,"+");
    return num[0]+num[1];
}

function restar(ec){
    let num = numbers(ec,"-");
    return num[0]-num[1];
}

function multiplicar(ec){
    let num = numbers(ec,"*");
    return num[0]*num[1];
}

function dividir(ec){
    let num = numbers(ec,"/");
    return num[0]/num[1];

}



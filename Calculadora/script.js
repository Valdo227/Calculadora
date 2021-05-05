
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

    if(isNaN(res)){
        alert("Ingresa una operación valida")
        document.getElementById("res").innerHTML = "0";

    }else {
        document.getElementById("res").innerHTML = "";
        document.getElementById("res").innerHTML = res.toFixed(2);
    }
}

function numbers(ec,op){
    let num = [0];
    let pos = ec.indexOf(op);

    if(pos === ec.lastIndexOf(op)){

            num[0] = parseFloat(ec.substring(0, pos));
            num[1] = parseFloat(ec.substring(pos + 1, ec.length));
            console.log(num);
    }
    else
        alert("El operador se repite");

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



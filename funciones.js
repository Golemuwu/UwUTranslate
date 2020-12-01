function uwuificar(string){
    var matriz = string.split("");

    for(var i =0; i < matriz.length; i++){
        matriz[i] = deLetraAUwu(matriz[i]);
    };

    return matriz.join("");
};

function desuwuificar(string){
    console.log("owo");

    var matrixUWU = string.split("");
    var ultimaPalabra = "";
    var newMatrixUwU = [];

    for(var i = 0; i < matrixUWU.length;i++){
        console.log("awa");

        if(matrixUWU[i]== "u" || matrixUWU[i]== "w" ){
            ultimaPalabra = ultimaPalabra + "" + matrixUWU[i];
        }else if(matrixUWU[i]== "U" || matrixUWU[i]== "W" ){
            ultimaPalabra = ultimaPalabra + "" + matrixUWU[i];

            newMatrixUwU.push(ultimaPalabra);
            ultimaPalabra="";

        }else {
            ultimaPalabra = ultimaPalabra + matrixUWU[i];
            newMatrixUwU.push(ultimaPalabra);
            ultimaPalabra="";
        };
    };

    for(var i = 0; i < newMatrixUwU.length; i++){
        newMatrixUwU[i]=deUwuALetra(newMatrixUwU[i]);
    }

    newMatrixUwU = newMatrixUwU.join("");

    return newMatrixUwU;
};
    

function deLetraAUwu(leter){
    var uwu = new Array;
    var u = "u";
    var w = "w";
    var U = "U";
    var W = "W";

    switch(leter){
        case "A":
            uwu = u+W;
            return uwu
        break;

        case "B":
            uwu = w+u+u+U;
            return uwu
        break;

        case "C":
            uwu = w+u+w+U;
            return uwu
        break;

        case "D":
            uwu = w+u+U;
            return uwu
        break;

        case "E":
            uwu = U;
            return uwu
        break;

        case "F":
            uwu = u+u+w+U;
            return uwu
        break;

        case "G":
            uwu = w+w+U;
            return uwu
        break;

        case "H":
            uwu = u+u+u+U;
            return uwu
        break;

        case "I":
            uwu = u+U;
            return uwu
        break;

        case "J":
            uwu = u+w+w+W;
            return uwu
        break;

        case "K":
            uwu = w+u+W;
            return uwu
        break;

        case "L":
            uwu = u+w+u+U;
            return uwu
        break;

        case "M":
            uwu = w+W;
            return uwu
        break;

        case "N":
            uwu = w+U;
            return uwu
        break;

        case "Ñ":
            uwu = w+w+u+w+W;
            return uwu
        break;

        case "O":
            uwu = w+w+W;
            return uwu
        break;

        case "P":
            uwu = u+w+w+U;
            return uwu
        break;

        case "Q":
            uwu = w+w+u+W;
            return uwu
        break;

        case "R":
            uwu = u+w+U;
            return uwu
        break;

        case "S":
            uwu = u+u+U;
            return uwu
        break;

        case "T":
            uwu = W;
            return uwu
        break;

        case "U":
            uwu = u+u+W;
            return uwu
        break;

        case "V":
            uwu = u+u+u+W;
            return uwu
        break;

        case "W":
            uwu = u+w+W;
            return uwu
        break;

        case "X":
            uwu = w+u+u+W;
            return uwu
        break;

        case "Y":
            uwu = w+u+w+W;
            return uwu
        break;

        case "Z":
            uwu = w+w+u+U
            return uwu
        break;
        
        

        

        case "a":
            return deLetraAUwu("A");
        break;

        case "b":
            return deLetraAUwu("B");
        break;

        case "c":
            return deLetraAUwu("C");
        break;

        case "d":
            return deLetraAUwu("D");
        break;

        case "e":
            return deLetraAUwu("E");
        break;

        case "f":
            return deLetraAUwu("F");
        break;

        case "g":
            return deLetraAUwu("G");
        break;

        case "h":
            return deLetraAUwu("H");
        break;

        case "i":
            return deLetraAUwu("I");
        break;

        case "j":
            return deLetraAUwu("J");
        break;

        case "k":
            return deLetraAUwu("K");
        break;

        case "l":
            return deLetraAUwu("L");
        break;

        case "m":
            return deLetraAUwu("M");
        break;

        case "n":
            return deLetraAUwu("N");
        break;

        case "ñ":
            return deLetraAUwu("Ñ");
        break;

        case "o":
            return deLetraAUwu("O");
        break;

        case "p":
            return deLetraAUwu("P");
        break;

        case "q":
            return deLetraAUwu("Q");
        break;

        case "r":
            return deLetraAUwu("R");
        break;

        case "s":
            return deLetraAUwu("S");
        break;

        case "t":
            return deLetraAUwu("T");
        break;

        case "u":
            return deLetraAUwu("U");
        break;

        case "v":
            return deLetraAUwu("V");
        break;

        case "w":
            return deLetraAUwu("W");
        break;

        case "x":
            return deLetraAUwu("X");
        break;

        case "y":
            return deLetraAUwu("Y");
        break;

        case "z":
            return deLetraAUwu("Z");
        break;

        default:
            return leter;
        break;
    };
};

function deUwuALetra(string){
    console.log("uwu");

    var owo = string;

    if (string == deLetraAUwu("a")){ owo ="a"};
    if (string == deLetraAUwu("b")){ owo ="b"};
    if (string == deLetraAUwu("c")){ owo ="c"};
    if (string == deLetraAUwu("d")){ owo ="d"};
    if (string == deLetraAUwu("e")){ owo ="e"};
    if (string == deLetraAUwu("f")){ owo ="f"};
    if (string == deLetraAUwu("g")){ owo ="g"};
    if (string == deLetraAUwu("h")){ owo ="h"};
    if (string == deLetraAUwu("i")){ owo ="i"};
    if (string == deLetraAUwu("j")){ owo ="j"};
    if (string == deLetraAUwu("k")){ owo ="k"};
    if (string == deLetraAUwu("l")){ owo ="l"};
    if (string == deLetraAUwu("m")){ owo ="m"};
    if (string == deLetraAUwu("n")){ owo ="n"};
    if (string == deLetraAUwu("ñ")){ owo ="ñ"};
    if (string == deLetraAUwu("o")){ owo ="o"};
    if (string == deLetraAUwu("p")){ owo ="p"};
    if (string == deLetraAUwu("q")){ owo ="q"};
    if (string == deLetraAUwu("r")){ owo ="r"};
    if (string == deLetraAUwu("s")){ owo ="s"};
    if (string == deLetraAUwu("t")){ owo ="t"};
    if (string == deLetraAUwu("u")){ owo ="u"};
    if (string == deLetraAUwu("v")){ owo ="v"};
    if (string == deLetraAUwu("w")){ owo ="w"};
    if (string == deLetraAUwu("x")){ owo ="x"};
    if (string == deLetraAUwu("y")){ owo ="y"};
    if (string == deLetraAUwu("z")){ owo ="z"};

    return owo;
};

/*function deTextoAUwus(string){

    var texto = "";

    var matrizTexto = string.split("")
};*/

sentido=true;

function invertir(){
    sentido = (sentido==true) ? false : true;

    document.getElementById("entrada").value = document.getElementById("salida-p").innerHTML;

    traducir();

    document.getElementById("fromTo").innerHTML = (sentido)? "Text to UwU" : "UwU to Text";
};

function traducir(){

    var input = document.getElementById("entrada").value;

    if(sentido==true){
        
        var output = uwuificar(input);

        console.log(output);

        document.getElementById("salida-p").innerHTML = output;
    }else{
        var output = desuwuificar(input);

        console.log(output);

        document.getElementById("salida-p").innerHTML = output;
    }

    automaticCopy();
};

function automaticCopy(){
    //Clipboard.writeText("Owo?");

    //var temp= document.createElement("input");

    var temp= document.createElement("input");



    document.getElementsByTagName("body")[0].appendChild(temp);

    temp.value=document.getElementById("salida-p").innerHTML;
    temp.select();

    document.execCommand("copy");

    document.getElementsByTagName("body")[0].removeChild(temp);
};


function deleite(){


    document.getElementById("entrada").value = "";

    document.getElementById("salida-p").innerHTML = "";
    

};

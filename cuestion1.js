
var string = "texto";
var integer = 2021;
var boolean = true;
var lista = ['Pablo', 21, false];

document.write("Variable de tipo texto: " + string + "<br>" + "Variable de tipo numerico: " + integer + 
"<br>" + "Variable de tipo boolean: " + boolean + "<br>" + "Variable de tipo lista: " + lista + "\n");
document.write("<br><br>");
document.write("let: nos permite declarar variables dentro de un bloque en concreto.");
document.write("<br>");
document.write("var: nos permite declarar variables fuera del bloque en general.");
document.write("<br>");
document.write("const: nos permite crear variables pero cuando se inicializa la variable no se podrá modificar más adelante ya que es fija.");

function ejemploVariableConst() {
    const constante_ejemplo = "Hola mundo";
    constante_ejemplo = "Adios mundo";
    console.log(constante_ejemplo);
}

function ejemploVariableLet() {
    var n = 1;

    if(n == 1){
        let let_ejemplo = 2000;
    }

    console.log(let_ejemplo);
}

function ejemploVariableVar() {
    var n = 1;

    if(n == 1){
        var var_ejemplo = 1903;
    }

    console.log(var_ejemplo);
}
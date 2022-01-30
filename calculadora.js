var usuario = prompt("¿Cuál es tu peso?");
var planeta = parseInt(prompt("Elige tu planeta.\n1 es marte, 2 es jupiter")); // \n sirve para que las letras esteen en una linea abajo
var peso = parseFloat(usuario); // parseFloat hace que haya decimales mietras que parseInt hace que no haya osea que muestre números enteros 1, 2, 3, etc
var g_tierra = 9.8;
var g_marte = 3.7; 
var g_jupiter = 24.8;
var planeta_elegido;
var peso_final;
    if(planeta == 1)
    {
        peso_final = peso * g_marte / g_tierra;
        planeta_elegido = " marte ";
    }
    else if(planeta == 2)
    {
        peso_final = peso * g_jupiter / g_tierra;
        planeta_elegido = " jupiter ";
    }
    else
    {
        peso_final = 10000000000000000000000000000000000000000000000000000000000000000000000000;
        planeta_elegido = " ._. ";
    }
peso_final = (peso_final.toFixed(2)); //ToFixed(número) ayuda a elegir cuantos decimales queremos
document.write("Mi peso en" + planeta_elegido + "es <strong>" + peso_final + " kilos</strong>");
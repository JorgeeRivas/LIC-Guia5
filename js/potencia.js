//Registrar evento click del ratón al presionar botones de envío
function iniciar(){
    var btnarea = document.getElementById("area");
    if(btnarea.addEventListener){
    btnarea.addEventListener("click", calculararea, false);
    }
    else{
    btnarea.attachEvent("onclick", calculararea);
     }
}

function calculararea(){
var rect = new rectangulo(document.frmrectangulo.txtbase.value,document.frmrectangulo.txtaltura.value);
rect.mostrar(rect.carea(), " área");
return false;
}


//Creando una clase rectángulo
function rectangulo(base, altura){
//Propiedades de la clase
this.base = parseFloat(base);
this.altura = parseFloat(altura);
//Métodos de la clase
//definidos usando el constructor Function()
this.carea = new Function("return this.base ** this.altura");


document.getElementById("titulo").innerHTML = this.base ** this.altura;


}


//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
window.attachEvent("onload", iniciar);
}
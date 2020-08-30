//Registrar evento click del ratón al presionar botones de envío
function iniciar(){
    var btnarea = document.getElementById("area");
    var btnperim = document.getElementById("perimetro");
    if(btnarea.addEventListener){
    btnarea.addEventListener("click", calculararea, false);
    }
    else{
    btnarea.attachEvent("onclick", calculararea);
     }
    if(btnperim.addEventListener){
    btnperim.addEventListener("click", calcularperimetro, false);
    }
    else{
        btnperim.attachEvent("onclick", calcularperimetro);
}
}
function calculararea(){
var rect = new rectangulo(document.frmrectangulo.txtbase.value,
document.frmrectangulo.txtaltura.value);
rect.mostrar(rect.carea(), " área");
return false;
}
function calcularperimetro(){
var peri = new rectangulo(document.frmrectangulo.txtbase.value,
document.frmrectangulo.txtaltura.value);
peri.mostrar(peri.cperimetro(), 'perímetro');
return false;
}
//Creando una clase rectángulo
function rectangulo(base, altura){
//Propiedades de la clase
this.base = parseFloat(base);
this.altura = parseFloat(altura);
//Métodos de la clase
//definidos usando el constructor Function()
this.carea = new Function("return this.base * this.altura");
this.cperimetro = new Function("return 2*this.base + 2*this.altura");
this.mostrar = new Function("valor","tipoc","alert('El ' + tipoc + ' es: ' + valor)");
}


//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
window.attachEvent("onload", iniciar);
}
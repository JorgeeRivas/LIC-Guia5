//Registrar evento click al presionar el botón de envío
function iniciar(){
    var btnenviar = document.getElementById("btnSend");
    //Al producirse un click sobre el botón de envío
//invocar los métodos del objeto carro que mostrarán
//los valores ingresados en el formulario
if(btnenviar.addEventListener){
    btnenviar.addEventListener("click", function(){
    var nuevoalumno;
    
    nuevoalumno = new Miembro(document.frmmat.txtname.value, document.frmmat.txtname2.value, document.frmmat.txtlastname.value, document.frmmat.txtlastname2.value, document.frmmat.txtage.value,  document.frmmat.password.value, document.frmmat.fecha.value);
    nuevoalumno.registrar();
    nuevoalumno.imprimir();
    }, false);
    }
    else{
    btnenviar.attachEvent("onclik", function(){
    var  nuevoalumno;
    
    nuevoalumno = new Miembro(document.frmmat.txtname.value, document.frmmat.txtname2.value, document.frmmat.txtlastname.value, document.frmmat.txtlastname2.value, document.frmmat.txtage.value,  document.frmmat.password.value, document.frmmat.fecha.value);
    nuevoalumno.registrar();
    nuevoalumno.imprimir();
    });
    }
    }
    //Definiendo la clase Miembro haciendo uso de sintaxis de función
    function Miembro(nombre, nombre2, apellido, apellido2 ,correo, contraseña, fecha){
    //Propiedades de la clase
    this.nombre = nombre;
    this.nombre2 = nombre2
    this.apellido = apellido;
    this.apellido2 = apellido2;
    this.correo = correo;
    this.contraseña = contraseña;
    this.fecha = fecha;
    this.numCarnet = null;
    //Métodos de la clase
    this.registrar = function(){
        var fecha = new Date();
        var year = fecha.getFullYear();
        var aleatorio = Math.floor(Math.random()*(9999-1000+1)+1000);
        this.numCarnet = this.apellido.substring(0,1) + this.apellido2.substring(0,1) + year + - + aleatorio;
        }
        this.imprimir = function(){
        document.write("<!DOCTYPE html>\n");
        document.write("<html lang=\"es\">\n");
        document.write("<head>\n\t");
        document.write("<title>Miembro</title>\n");
        document.write("<meta charset=\"utf-8\" />");
        document.write("<link rel=\"stylesheet\" href=\"../css/infoalumno.css\"/>\n");
        document.write("</head>\n");
        document.write("<body>\n");
        document.write("<table class=\"carinfo\"><tr>\n");
        document.write("<th colspan=\"2\">Datos</th>\n");
        document.write("<tr><td>ID: </td>\n");
        document.write("<td>" + this.numCarnet + "</td></tr>\n");
        document.write("<tr><td>Nombre: </td>\n");
        document.write("<td>" + this.nombre + " " + this.nombre2 + " " + this.apellido + " " + this.apellido2 + "</td></tr>\n");
        document.write("<tr><td>Email: </td>\n");
        document.write("<td>" + this.correo + "</td></tr>\n");
        document.write("<tr><td>Fecha de nacimiento: </td>\n");
        document.write("<td>" + this.fecha + "</td></tr>\n");
        document.write("<tr><td>Password: </td>\n");
        document.write("<td>" + this.contraseña + "</td></tr>\n");
        document.write("</tr></table>\n");
        document.write("</head>\n");
        document.write("</html>\n");
        }
        this.formato = function(valor){
        if(valor<10) valor = "0" + valor;
        return valor;
        }
        }
        //Asociando función que manejará el evento load al cargar la página
        if(window.addEventListener){
        window.addEventListener("load", iniciar, false);
        }
        else if(window.attachEvent){
        window.attachEvent("onload", iniciar);
        }
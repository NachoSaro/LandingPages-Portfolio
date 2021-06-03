//Creamos el scrip para validar el usuario con login validar()

function validar(){
    //Almacenar los valores de las cajas en las que introducimos datos
    var mail, password, expresion;
    
    mail = document.getElementById("mail").value;
    password = document.getElementById("password").value;

    //Estructura de un correo eléctronico: texto123@texto.com, .es, etc...

    expresion = /\w + @\w + \.+[a-z]/;

    /*********************************************************************/
    if (main === "" || password === ""){
        alert("Quiero paraooooo, que todos los campos tienen que ser rellenados...");
        return false;
        
    }else if (main.length > 20){
        alert("El número de carácteres introducidos supera el límite permitido: 20.");
        return false;
    }else if (!expresion.test(mail)){
        alert("Correo no valido. Por favor introduzca un valor correcto");
        return false;
    }else if (password.length> 8){
        alert("El número de carácteres introducido supera el límite permitido: 8.");
        return false;
    }
}
function registro(){
    //Almacenar los valores de las cajas en las que introducimos datos
    var mail, password, usuario, rpassword, expresion;
    
    usuario = document.getElementById("usuario").value;
    mail = document.getElementById("mail").value;
    rpassword = document.getElementById("rpassword").value;
    password = document.getElementById("password").value;

    //Estructura de un correo eléctronico: texto123@texto.com, .es, etc...

    expresion = /\w + @\w + \.+[a-z]/;

    /*********************************************************************/
    if (mail === "" || password === "" || rpassword === "" || usuario === ""){
        alert("Quiero paraooooo, que todos los campos tienen que ser rellenados...");
        return false;
        
    }else if (usuario.length > 20){
        alert("El número de carácteres introducidos supera el límite permitido: 20.");
        return false;
    } else if (mail.length> 8){
            alert("El número de carácteres introducido supera el límite permitido: 8.");
            return false;
        
    }else if (!expresion.test(mail)){
        alert("Correo no valido. Por favor introduzca un valor correcto");
        return false;
    }else if (password.length> 8){
        alert("El número de carácteres introducido supera el límite permitido: 8.");
        return false;
    }
    else if (rpassword.length> 8){
        alert("El número de carácteres introducido supera el límite permitido: 8.");
        return false;
    }
    if (password != rpassword) {
        alert("Las contraseñas introducidas no son iguales, por favor verifique su contraseña");
        return false;
    }else{
        alert(usuario + ", muchas gracias por registrarse con su correo" + mail + " en breve recibirá una notificación de que el proceso ha ido correctamente");
        return true;
    }
}
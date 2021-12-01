function validar(){
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if(name=="manuel" && password=="12345"){
        alert("Usuario y Contraseña validos");
        location.href="schedule.html";
    }
    else{
        alert("Verifique sus datos");
    }

}

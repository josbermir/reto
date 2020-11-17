function validation(){
    valor=document.getElementById("name").value
    if(valor==null||valor==0||/^\s+$/.test(valor)){
        alert('[ERROR] Name Required');
        return false;
    }

    valor=document.getElementById("surname").value
    if(valor==null||valor==0||/^\s+$/.test(valor)){
        alert('[ERROR] Surame Required');
        return false;
    }

    valor = document.getElementById("e-mail").value;
    if( !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor))  {
        alert('[ERROR] Email Required or wrong format');
        return false;
    }

    valor = document.getElementById("phone").value;
    if( !(/^\d{9}$/.test(valor)) ) {
        alert('[ERROR] Phone Number Required or wrong format');
      return false;
    }

    valor=document.getElementById("username").value
    if(valor==null||valor==0||/^\s+$/.test(valor)){
        alert('[ERROR] Userame Required');
        return false;
    }

    valor=document.getElementById("country").value
    if(valor==null||valor==0||/^\s+$/.test(valor)){
        alert('[ERROR] Country Required');
        return false;
    }

    valor=document.getElementById("city").value
    if(valor==null||valor==0||/^\s+$/.test(valor)){
        alert('[ERROR] City Required');
        return false;
    }
}
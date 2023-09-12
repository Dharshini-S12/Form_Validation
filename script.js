function validation(){
    /*var x= document.forms["fform"]["username"].value;*/
    var x= fform.username.value;
    var lenx= x.length;
    var y= fform.password.value;
    var leny= y.length;
    var z=fform.Confrim_Password.value; 
    var a= fform.email.value;
    var atpos=a.indexOf("@"); 
    var dotpos=a.lastIndexOf(".");
    if(x== "" || lenx<6 || x== null){
        alert("Username:Enter more than 6 characters");
        return false;
    }
    if(y== "" || leny<6){
        alert("Password:Enter more than 6 characters");
        return false;
    }
    if(z!=y){
        alert("Password and Confrim Password should be the same");
        return false;
    }
    if(atpos<3 || dotpos<atpos+3 || dotpos<a.length(3)){
        alert("Not a valid email id"); 
        return false;
    }
    else{
        alert("Congragulations! you have submited successfully");
        return false;
    }
}
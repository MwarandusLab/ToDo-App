function validation(){
    if(document.Formfill.Username.value.length=<6){
        document.getElementById("result").innerHTML="Atleast six letters*";
        return false;
    }
}
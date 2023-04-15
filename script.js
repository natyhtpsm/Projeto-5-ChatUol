let name;

const getName = ()=> {
    name= document.querySelector(".nome").value;
    if(name){
        document.getElementById("enter").style.display= "none";
        document.getElementById("fullpage").style.display="block";
        // ativa fução de entrar no chat enterChat();
    }
};
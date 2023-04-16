let urname;
let enteredChat;
let promisseRequest;
let message;

const getName = ()=> {
    urname= document.querySelector(".name").value;
    if(urname){
        document.getElementById("login").style.display= "none";
        document.getElementById("container").style.display="flex";
        enterChat();
    }
};

const enterChat = () => {
   axios.post("https://mock-api.driven.com.br/api/vm/uol/participants", {name: urname})
   axios.then((answr) => console.log(answr))
   axios.catch(errors);
   mantainCnnxn();
   mssgChat();
};

const mantainCnnxn = () => {
    setInterval(() => {
        enterChat = axios
        .post("https://mock-api.driven.com.br/api/vm/uol/status", {name: urname})
        .then((answr) => console.log(answr))
        .catch(errors);
    }, 5000);
};

const sendMsg = () => {
    message=document.querySelector(".send").value;
    if(message){
        sendServer();
    }
}

const sendServer = () => {
    promisseRequest = axios
    .post("https://mock-api.driven.com.br/api/vm/uol/messages", {
        from: urname,
        to: "All",
        text: message,
        type: "message",
    })
    .then((answr) => {
        prmss = axios.get("https://mock-api.driven.com.br/api/vm/uol/messages");
        prmss.then(sendAnswer);
        document.getElementById("send").value = "";
    })
    .catch(logout);
    
}



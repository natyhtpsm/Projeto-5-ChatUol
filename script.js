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


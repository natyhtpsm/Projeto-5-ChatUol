let urname;
let enteredChat;
let promisseRequest;
let message;
let promisseChat;
let messages;

const getName = ()=> {
    urname=document.querySelector(".name").value;
    if(urname){
        document.getElementById("login").style.display= "none";
        document.getElementById("container").style.display="flex";
        enterChat();
    } 
}; 

const enterChat = () => {
   Enter=axios.post("https://mock-api.driven.com.br/api/vm/uol/participants", {name: urname})
   .then((answr) => console.log(answr))
   .catch(errors);
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

const logout = () => {
    window.location.reload();
};

const errors = () => {
    window.location.reload();
};

const chatMssgs = () => {
    promisseChat = axios.get("https://mock-api.driven.com.br/api/vm/uol/messages")
    promisseChat.then(sendAnswer);
} 

const sendAnswer = (answr) => {
    messages.innerHTML="";
    let info = answr.data;
    messages = document.getElementById("chat");
    for(let i = 0 ; i < info.length ; i++){
      if(info[i].type == "status"){
        messages.insertAdjacentHTML("beforeend",
          `<div class="msgReceivedStts message${[i]}" >
            <div class="msgSize" data-test="message">
              <p class="Time">(${info[i].time})</p>
              <p class="To"><b>${info[i].from}</b> to <b>${info[i].to}:</b> </p>
              <p class="txt"> ${info[i].text}</p>
            </div>
          </div>
          <div class="space"></div>`
        );
      } else if(info[i].type == "message"){
        messages.insertAdjacentHTML("beforeend",
          `<div class="msgReceivedMsg message${[i]}">
            <div class="msgSize" data-test="message">
              <p class="Time">(${info[i].time})</p>
              <p class="To"><b>${info[i].from}</b> to <b>${info[i].to}:</b> </p>
              <p class="txt"> ${info[i].text}</p>
            </div>
          </div>
          <div class="space"></div>`
        );
      }
    }
    let arraySize = info.length -1
    let elementShow = document.querySelector(`.message${arraySize}`);
    elementShow.scrollIntoView();
};

setInterval(() => {
    messages = document.querySelector(".chat")
    promisse = axios.get("https://mock-api.driven.com.br/api/vm/uol/messages");
    promisse.then(sendAnswer);
}, 3000);
console.log(sendAnswer);

document.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        const bttnOne=document.querySelector("submit");
    }
});
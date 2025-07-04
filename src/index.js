import './styles.scss';

//SPLASH SCREENS
const splashScreens = document.querySelectorAll(".splash");

let splashScreensLength = splashScreens.length;

//SKIP BUTTON
const skipButton = document.querySelector('.btn--skip');
const splashStyleSheet = document.createElement('style');
document.head.appendChild(splashStyleSheet);

const spaceBetweenScreens = 4;
const visibleDuration = 3;

splashScreens.forEach((currVal, index) => {

  const delayIn = index * spaceBetweenScreens;
  const delayOut = delayIn + visibleDuration;

  const className = `splash-auto-${index}`;
  splashStyleSheet.sheet.insertRule(`
      .${className} {
        animation: 
          fadeInUp 1.5s ease forwards ${delayIn}s, 
          fadeOutUp 1s ease forwards ${delayOut}s;
      }
    `);

  currVal.classList.add(className);
});

let splashTimeout = setTimeout(() => {
  const splashOverlay = document.querySelector('.splash-container--overlay');
  splashOverlay.style.opacity = 0;
  
  const mainContainer = document.querySelector('.grid-wrapper');
  mainContainer.style.opacity = 1;
  
  skipButton.style.display = 'none';
}, splashScreensLength * spaceBetweenScreens * 1000);

skipButton.addEventListener('click', () => {
  clearTimeout(splashTimeout);
  console.log("Button Clicked");
  
  const splashOverlay = document.querySelector('.splash-container--overlay');
  const mainContainer = document.querySelector('.grid-wrapper');

  // Fade out splash overlay immediately
  splashOverlay.style.transition = 'opacity 0.5s ease';
  splashOverlay.style.opacity = 0;

  // Fade in main content
  setTimeout(() => {
    splashOverlay.style.display = 'none';
    mainContainer.style.opacity = 1;
  }, 500);
  
  skipButton.style.display = 'none';
});

//HAMBURGER MENU

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

if(hamburger.classList.contains('active')){
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('closed');
  });
}

//FORM API
const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');

form.addEventListener("submit", (e) =>{
   e.preventDefault();
  if(document.querySelector('.main-container__form')) 
  {
    createChatHTML(input.value.trim());
  }
  else{
    wireForm();
  }
});

function wireForm (){
  const form = document.getElementById('chat-form');
  const input = document.getElementById('user-input');

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const message = input.value.trim();
   // if(!input) return;
    addMessage('You', message);
    sendMessage(message);
    input.value = '';
  });
}

function createChatHTML(firstMessage){
  const chatContainer = document.querySelector('.main-container');
  chatContainer.classList.add('main-container--grid');
  chatContainer.innerHTML = '';
  
  const chat = document.createElement('div');
  chat.classList.add('chat-wrapper');
  chatContainer.appendChild(chat);
  
  const chatForm = document.createElement('form');
  chatForm.classList.add('chat__form');
  chatForm.setAttribute('id', 'chat-form');
  chatContainer.appendChild(chatForm);
  
  const chatTextarea = document.createElement('textarea');
  chatTextarea.classList.add('chat__textarea');
  chatTextarea.setAttribute('id', 'user-input');
  chatTextarea.setAttribute('rows', '3');
  chatTextarea.setAttribute('name', 'text');
  chatTextarea.setAttribute('required', '');
  chatForm.appendChild(chatTextarea);
  
  
  const sendButton = document.createElement('button');
  sendButton.classList.add('btn', 'chat__button');
  sendButton.setAttribute('type', 'submit');
  sendButton.innerHTML = "Send";
  chatForm.appendChild(sendButton);
  
  addMessage('You', firstMessage);
  sendMessage(firstMessage);
  wireForm();
}


function addMessage(sender, text){
  
  const chatBox = document.querySelector('.chat-wrapper');
  const para = document.createElement('p');
  
  para.innerHTML = `${sender + ': '+ text}`;
  
  chatBox.appendChild(para);
}

async function sendMessage(messageText){
  
 const response = await fetch('#', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: messageText })
  });
  
  const data = await response.json();
  
  const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Something went wrong";
  
  addMessage('Gemini', botReply);
}

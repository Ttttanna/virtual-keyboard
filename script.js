const header = document.createElement('h3');
document.body.append(header);
header.innerHTML = "Клавиатура для Windows , смена раскладки Shift + Ctrl слева";
const text = document.createElement('textarea');
let input = text.value;
text.setAttribute('autofocus', '');
text.classList.add('keyboard__window');
document.body.append(text);
const simpleEng = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
  'Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ShiftRight',
  'Ctrl', 'Win', 'Alt', 'Space', ' Alt', 'Ctrl', '←', '↑', '↓', '→',
];
const capsEng = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
  'Capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
  'ShiftLeft', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ShiftRight',
  'Ctrl', 'Win', 'Alt', 'Space', ' Alt', 'Ctrl', '←', '↑', '↓', '→',
];

const simpleRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
'Capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
'ShiftLeft', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ShiftRight',
'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl','←', '↑', '↓', '→',
];

const capsRu = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\',
'Capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
'ShiftLeft', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.',  'ShiftRight',
'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl','←', '↑', '↓', '→',]

let keyboard = document.createElement('div');
let keyboardKeys = document.createElement('div');
keyboard.classList.add('keyboard');
keyboardKeys.classList.add('keyboard__keys');
document.body.appendChild(keyboard);
keyboard.appendChild(keyboardKeys);

//ru
let keyboardKeysRu = document.createElement('div');
keyboardKeysRu.classList.add('keyboard__keys');
keyboardKeysRu.classList.add('invisible');
keyboard.appendChild(keyboardKeysRu);

//init keyboard
 function init(keyLayout, keyContainer) {
  keyLayout.forEach( key => {
  const insertLineBreak = ['Backspace', '\\', 'Enter', "ShiftRight"].indexOf(key) !== -1;
  let keyElement = document.createElement('button');
  keyElement.setAttribute('type', 'button');
  keyElement.classList.add('keyboard__key');
  switch (key) {
    case 'Backspace':
      keyElement.classList.add('keyboard__key__wider');
      keyElement.innerHTML = key;
      break;
    
    case 'Capslock':
      keyElement.classList.add('keyboard__key__wider');
      keyElement.innerHTML = key;
      break;
    
    case 'Enter':
      keyElement.classList.add('enter');
      keyElement.innerHTML = key;
      break;
      
    case 'ShiftLeft':
      keyElement.classList.add('shift');
      keyElement.innerHTML = key;
      break;

    case 'ShiftRight':
      keyElement.classList.add('shift');
      keyElement.innerHTML = key;
      break;

    case 'Tab':
      keyElement.classList.add('keyboard__key__wider');
      keyElement.innerHTML = key;
      break;

    case 'Space':
      keyElement.classList.add('keyboard__key__extra-wide');
      keyElement.innerHTML = key;
      break;

     default:
      keyElement.innerHTML = key;
      break;
  }
  keyContainer.append(keyElement);
  if (insertLineBreak) {
  keyContainer.appendChild(document.createElement('br'));
}
})
};

init(simpleEng, keyboardKeys);
init (simpleRu, keyboardKeysRu);
// caps on off
let capsFlag = false;
document.onkeyup = function(event) {
    if(event.code === "CapsLock"){
    capsFlag = !capsFlag;
    if (capsFlag) {
        keyboardKeys.innerHTML = '';
        keyboardKeysRu.innerHTML = '';
        init(capsEng, keyboardKeys);
        init (capsRu, keyboardKeysRu);
    } else {
        keyboardKeys.innerHTML = '';
        keyboardKeysRu.innerHTML = '';
        init(simpleEng, keyboardKeys);
        init( simpleRu, keyboardKeysRu);
    }}
};

// change language
document.onkeydown = function(event) {
  if (event.shiftKey && event.code === 'ControlLeft') {
    keyboardKeysRu.classList.toggle('invisible');
    keyboardKeys.classList.toggle('invisible');
  }
}
// input
keyboard.addEventListener('click', function(event) {
  let buttons = document.querySelectorAll('button');
  let a = event.target.innerText;
  switch(a) {
    case 'Tab':
      a = '    ';
      break;

    case 'Space':
      a = ' ';
      break;

    case 'Enter':
      a = '\n';
      break;

    case 'Capslock':
      a = '';
      break;
    
    case 'ShiftRight' :
      a = '';
      break;
    
    case 'ShiftLeft' :
      a = '';
      break;

    case 'Alt' :
      a = '';
      break;

    case  'Ctrl' :
      a = '';
      break;

    case 'Win' :
      a = '';
      break;
    
    case 'Backspace' :
      a = '';
      text.value.slice(0, -1);
      break;

    default:
      a = event.target.innerText;
      break;
  }
  
  text.oninput = function() {    
     text.value += a;
  }
  return text.value += a;
})
// Global vars
document.getElementById('red').addEventListener('click', getGud);
document.getElementById('yellow').addEventListener('click', insane);
document.getElementById('green').addEventListener('click', pro);
let timer = 0;
document.addEventListener('keydown', keydownHandler);
let score = 0;
let keydown = 0;
let screenletter = 'b';
let currentKey;
let check;
let pressOnce = true;


function getGud() {

    if (pressOnce == true){
        timer = 2000;
    
        clearInterval(setInterval(randomize, timer))
        
        setInterval(randomize, timer);
        pressOnce = false;
    }
    
}

function insane() {
    if (pressOnce == true){
        timer = 700;
    
        clearInterval(setInterval(randomize, timer))
        
        setInterval(randomize, timer);
        pressOnce = false;
    }
}

function pro() {
    if (pressOnce == true){
        timer = 300;
    
        clearInterval(setInterval(randomize, timer))
        
        setInterval(randomize, timer);
        pressOnce = false;
    }

}
function keydownHandler(event) {

    keydown = (event.keyCode);
    console.log(event);
    let currentKey = event.keyCode;
    if(currentKey == 65){
        screenletter = 'A'
    }else if(currentKey == 66){
        screenletter = 'B'
    }else if(currentKey == 67){
        screenletter = 'C'

    }else if(currentKey == 68){
        screenletter = 'D'

    }else if(currentKey == 69){
        screenletter = 'E'

    }else if(currentKey == 70){
        screenletter = 'F'

    }else if(currentKey == 71){
        screenletter = 'G'

    }else if(currentKey == 72){
        screenletter = 'H'

    }else if(currentKey == 73){
        screenletter = 'I'

    }else if(currentKey == 74){
        screenletter = 'J'

    }else if(currentKey == 75){
        screenletter = 'K'

    }else if(currentKey == 76){
        screenletter = 'L'

    }else if(currentKey == 77){
        screenletter = 'M'

    }else if(currentKey == 78){
        screenletter = 'N'

    }else if(currentKey == 79){
        screenletter = 'O'

    }else if(currentKey == 80){
        screenletter = 'P'

    }else if(currentKey == 81){
        screenletter = 'Q'

    }else if(currentKey == 82){
        screenletter = 'R'

    }else if(currentKey == 83){
        screenletter = 'S'

    }else if(currentKey == 84){
        screenletter = 'T'

    }else if(currentKey == 85){
        screenletter = 'U'

    }else if(currentKey == 86){
        screenletter = 'V'

    }else if(currentKey == 87){
        screenletter = 'W'

    }else if(currentKey == 88){
        screenletter = 'X'

    }else if(currentKey == 89){
        screenletter = 'Y'

    }else if(currentKey == 90){
        screenletter = 'Z'

    }else if(check >= 1){
        screenletter ='miss';
    }
    console.log("Key Pressed: " + event.keyCode);
    console.log("Key Onscreen: " + document.getElementById('letter').innerHTML);

    // check the letter on the screen and adjust score as necessary
    
   if (screenletter == document.getElementById('letter').innerHTML){
       score++;
       
   }else{
       score = 0
   }

}




function randomize() {


    let rand = Math.round(Math.random() * 25);

    currentKey = '';

    if (rand == 0) {
        document.getElementById('letter').innerHTML = 'A';
    } else if (rand == 1) {
        document.getElementById('letter').innerHTML = 'B';
    } else if (rand == 2) {
        document.getElementById('letter').innerHTML = 'C';
    } else if (rand == 3) {
        document.getElementById('letter').innerHTML = 'D';
    } else if (rand == 4) {
        document.getElementById('letter').innerHTML = 'E';
    } else if (rand == 5) {
        document.getElementById('letter').innerHTML = 'F';
    } else if (rand == 6) {
        document.getElementById('letter').innerHTML = 'G';
    } else if (rand == 7) {
        document.getElementById('letter').innerHTML = 'H';
    } else if (rand == 8) {
        document.getElementById('letter').innerHTML = 'I';
    } else if (rand == 9) {
        document.getElementById('letter').innerHTML = 'J';
    } else if (rand == 10) {
        document.getElementById('letter').innerHTML = 'K';
    } else if (rand == 11) {
        document.getElementById('letter').innerHTML = 'L';
    } else if (rand == 12) {
        document.getElementById('letter').innerHTML = 'M';
    } else if (rand == 13) {
        document.getElementById('letter').innerHTML = 'N';
    } else if (rand == 14) {
        document.getElementById('letter').innerHTML = 'O';
    } else if (rand == 15) {
        document.getElementById('letter').innerHTML = 'P';
    } else if (rand == 16) {
        document.getElementById('letter').innerHTML = 'Q';
    } else if (rand == 17) {
        document.getElementById('letter').innerHTML = 'R';
    } else if (rand == 18) {
        document.getElementById('letter').innerHTML = 'S';
    } else if (rand == 19) {
        document.getElementById('letter').innerHTML = 'T';
    } else if (rand == 20) {
        document.getElementById('letter').innerHTML = 'U';
    } else if (rand == 21) {
        document.getElementById('letter').innerHTML = 'V';
    } else if (rand == 22) {
        document.getElementById('letter').innerHTML = 'W';
    } else if (rand == 23) {
        document.getElementById('letter').innerHTML = 'X';
    } else if (rand == 24) {
        document.getElementById('letter').innerHTML = 'Y';
        }else {
        document.getElementById('letter').innerHTML = 'Z';
    }
    document.getElementById('score').innerHTML = score;


}
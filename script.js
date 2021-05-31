const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');

//Images dark or light
function imagesColor(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src= `img/undraw_conceptual_idea_${color}.svg`;
}


//Drak mode Alteration
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0  / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].innerText = 'Dark Mode';
    toggleIcon.children[1].className = "fas fa-moon";
    imagesColor('dark');
}
//Light Mode Alteration
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0  / 50%)';
    toggleIcon.children[0].innerText = 'Light Mode';
    toggleIcon.children[1].className = "fas fa-sun";
    imagesColor('light');
}

//change the dark and light mode
function switchTheme(event){
    //checkthe box
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('Theme', 'dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('Theme', 'light');
        lightMode();
    }
}

//Event Listeners
toggleSwitch.addEventListener('change',switchTheme);

//Get the data from local storage 
const currentTheme = localStorage.getItem('Theme');

if(currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme);

    if(currentTheme === 'dark'){
        toggleSwitch.checked = true ;
        darkMode();
    }
}
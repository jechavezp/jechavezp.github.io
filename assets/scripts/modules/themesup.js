const btnTheme1 = document.getElementById('theme-button');
const btnTheme2 = document.getElementById('theme-button2');
const btnDay = document.getElementById('btn-day');
const btnNight = document.getElementById('btn-night');
const DivThemes = document.querySelector('.themes');
const body = document.getElementById('body');
const divLogo = document.querySelector('.logo');
const divBtnsLogo = document.getElementById('btnsLogo');
const divNav = document.getElementById('nav');

//Showing drop-down menu
btnTheme1.addEventListener('click', function () {
    DivThemes.classList.remove('display')       
})

btnTheme2.addEventListener('click', function () {
    DivThemes.classList.remove('display')    
})

//Changing theme
btnDay.addEventListener('click', function () {
    //To hide drop-down menu
    DivThemes.classList.add('display')
    
    //To change body backgorund color
    body.classList.remove('night-theme')
    body.classList.add('day-theme')

    //To change logo and btns     
    divLogo.classList.remove('logo-night');
    divLogo.classList.add('logo');
    divBtnsLogo.classList.remove('btns-logo-night');
    divBtnsLogo.classList.add('btns-logo');    

    //To change Nav bar
    divNav.classList.remove('nav-night');
    divNav.classList.add('nav-day');
   
    const divMyGuifosBody = document.querySelectorAll('.mis-guifos-body-night')
    divMyGuifosBody.forEach(element => {        
        element.classList.remove('mis-guifos-body-night');
        element.classList.add('mis-guifos-body'); 
    });
})

btnNight.addEventListener('click', function () {
    //To hide drop-down menu
    DivThemes.classList.add('display')
    
    //To change body backgorund color
    body.classList.remove('day-theme')
    body.classList.add('night-theme')
    
    //To change logo and btns    
    divLogo.classList.remove('logo');
    divLogo.classList.add('logo-night');
    divBtnsLogo.classList.remove('btns-logo');
    divBtnsLogo.classList.add('btns-logo-night');

    //To change Nav bar
    divNav.classList.remove('nav-day');
    divNav.classList.add('nav-night');

    const divMyGuifosBody = document.querySelectorAll('.mis-guifos-body')
    divMyGuifosBody.forEach(element => {        
        element.classList.remove('mis-guifos-body');
        element.classList.add('mis-guifos-body-night'); 
    });
})
const btnTheme1 = document.getElementById('theme-button');
const btnTheme2 = document.getElementById('theme-button2');
const btnDay = document.getElementById('btn-day');
const btnNight = document.getElementById('btn-night');
const DivThemes = document.querySelector('.themes');
const body = document.getElementById('body');
const divLogo = document.querySelector('.logo');
const divBtnsLogo = document.getElementById('btnsLogo');
const divSearch = document.getElementById('GifSearch');
const divSearchResult = document.getElementById('GifSearchResult');
const divNav = document.getElementById('nav');
const TodaySuggested = document.getElementById('TodaySuggested');
const TodayTrends = document.getElementById('TodayTrends');

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

    //To change search section
    divSearch.classList.remove('gifos-search-night');
    divSearch.classList.add('gifos-search');
    divSearchResult.classList.remove('gifos-search-result-night');
    divSearchResult.classList.add('gifos-search-result');

    //To change Nav bar
    divNav.classList.remove('nav-night');
    divNav.classList.add('nav-day');

    //To suggested section changes
    TodaySuggested.classList.remove('today-suggested-night');
    TodaySuggested.classList.add('today-suggested');
    const SuggestedBody = document.querySelectorAll('.suggested-body-night')
    SuggestedBody.forEach(element => {        
        element.classList.remove('suggested-body-night');
        element.classList.add('suggested-body'); 
    });

    //To trends section changes
    TodayTrends.classList.remove('today-trends-night');
    TodayTrends.classList.add('today-trends');
    const TrendsBody = document.querySelectorAll('.trends-body-night')
    TrendsBody.forEach(element => {        
        element.classList.remove('trends-body-night');
        element.classList.add('trends-body'); 
    });
    const TrendsBody2 = document.querySelectorAll('.trends-bigger-image-night')
    TrendsBody2.forEach(element => {        
        element.classList.remove('trends-bigger-image-night');
        element.classList.add('trends-bigger-image'); 
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

    //To change search section
    divSearch.classList.remove('gifos-search');
    divSearch.classList.add('gifos-search-night');
    divSearchResult.classList.remove('gifos-search-result');
    divSearchResult.classList.add('gifos-search-result-night');

    //To change Nav bar
    divNav.classList.remove('nav-day');
    divNav.classList.add('nav-night');

    //To suggested section changes
    TodaySuggested.classList.remove('today-suggested');
    TodaySuggested.classList.add('today-suggested-night');    
    const SuggestedBody = document.querySelectorAll('.suggested-body')
    SuggestedBody.forEach(element => {        
        element.classList.remove('suggested-body');
        element.classList.add('suggested-body-night'); 
    });

    //To trends section changes
    TodayTrends.classList.remove('today-trends');
    TodayTrends.classList.add('today-trends-night');
    const TrendsBody = document.querySelectorAll('.trends-body')
    TrendsBody.forEach(element => {        
        element.classList.remove('trends-body');
        element.classList.add('trends-body-night'); 
    });
    const TrendsBody2 = document.querySelectorAll('.trends-bigger-image')
    TrendsBody2.forEach(element => {        
        element.classList.remove('trends-bigger-image');
        element.classList.add('trends-bigger-image-night'); 
    });        
})

function RedirectToUpload() {    
    window.location.href = '/upload.html?redirect=1';       
}
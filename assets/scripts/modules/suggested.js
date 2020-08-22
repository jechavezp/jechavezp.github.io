const key = 'rFDuK1U4JkZH6YMnkFq0JFVc1184B4H4';
/*Today we suggested you: API*/
const TodaySuggestApi = 'https://api.giphy.com/v1/gifs/trending';
const UrlPlusKey = '?api_key=' + key + '&limit=14';

function TodaySuggestSection(title, img, i) {        
    let idh3 = 'TodaySuggestedTitle' + i    
    const divsuggested = document.createElement('div');
    divsuggested.classList.add('suggested-body');
    divsuggested.classList.add('col-3'); 
      
    const newtodaysuggested = document.querySelector('.suggested-container');
    const templatesuggested = `
        <div class="suggested-title">
            <h3 id="${idh3}">#${title}</h3>
            <img src="./assets/images/close.svg" alt="Close_Gif_Suggested">
        </div>                        
        <div class="suggested-gif">
            <img src="${img}" alt="Gif_Suggested">                            
            <button onclick="TimeOutSeeMore(${idh3})">Ver más...</button>                                        
        </div>
    `;
    divsuggested.innerHTML = templatesuggested;
    newtodaysuggested.appendChild(divsuggested);    
}

function TrendsSection(title, img, Cssclass1, Cssclass2) {                
    const divsTrends = document.createElement('div');
    divsTrends.classList.add(Cssclass1);
    divsTrends.classList.add(Cssclass2);    
      
    const newTrend = document.querySelector('.trends-container');
    const TemplateTrend = `
        <div class="trends-gif">
            <img src="${img}" alt="Gif_trends">
        </div>
        <div class="trends-title">
            <h3>#${title}...</h3>            
        </div>                                
    `;
    divsTrends.innerHTML = TemplateTrend;
    newTrend.appendChild(divsTrends);    
}

function TodaySuggestCallApi() {
    
    fetch(TodaySuggestApi + UrlPlusKey)            
    .then(response => response.json())
    .then(result => {                
        result.data.forEach((element, i) => {            
            let tmp = element.title;
            let title = tmp.substr(0, 29);
            let img = element.images['downsized_medium']['url'];
            if(i <= 3) {
                TodaySuggestSection(title,img,i)                
            }
            if(i >= 4) {
                let Cssclass1 = 'trends-body'
                let Cssclass2 = 'col-3';
                if((i == 8) || (i == 13)) {
                    Cssclass1 = 'trends-bigger-image'
                    Cssclass2 = 'col-6'                    
                }                                
                TrendsSection(title, img, Cssclass1, Cssclass2) 
            }    
        });      
    });
}

TodaySuggestCallApi();

/*const TodaySuggested = {
        calling : function TodaySuggestCallApi() {
        
        fetch(TodaySuggestApi + UrlPlusKey)    
        .then(response => response.json())
        .then(result => {                        
            result.data.forEach((element, i) => {
                let tmp = element.title;
                let title = tmp.substr(0, 29);
                let img = element.images['downsized_medium']['url'];
                if(i <= 3) {
                    TodaySuggestSection(title,img)                
                }
                if(i >= 4) {
                    let Cssclass1 = 'trends-body'
                    let Cssclass2 = 'col-3';
                    if((i == 8) || (i == 13)) {
                        Cssclass1 = 'trends-bigger-image'
                        Cssclass2 = 'col-6'                    
                    }                                
                    TrendsSection(title, img, Cssclass1, Cssclass2) 
                }    
            });        
        });
    }
}

export default TodaySuggested;*/
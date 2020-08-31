const keySearch = 'rFDuK1U4JkZH6YMnkFq0JFVc1184B4H4';
const InputSearch = document.getElementById('search-text');
const ButtonSearch = document.getElementById('SearchButton');

/*Search: API*/
const SearchApi = 'https://api.giphy.com/v1/gifs/search';
const UrlPlusKeySearch = '?api_key=' + keySearch;
/*To get titles and put it on buttons (Hash tags searchs)*/
const HashTagButton1 = document.getElementById('HashTagButton1');
const HashTagButton2 = document.getElementById('HashTagButton2');
const HashTagButton3 = document.getElementById('HashTagButton3');
/*To search with "Ver más" button*/
function TimeOutSeeMore(idh3) {
    setTimeout(AuxFunction(idh3), 1000);    
}

function AuxFunction(idh3) {
    let StringToSearch = idh3.innerHTML.substr(1);    
    let url = SearchApi + UrlPlusKeySearch + '&q=' + StringToSearch + '&limit=10';
    SearchByResultCallApi(url)
}

function ResultOnChange(resutlSuggested, SimilarResult, OtherResult) {
    const divContentSearch = document.createElement('div');
    const divSearch = document.getElementById('GifSearchResult');
    divSearch.classList.remove('display');

    //To clean previous searchs results
    divSearch.innerHTML = "";

    const TemplateContentSearch = `
    <div class="suggested-result col-11">
        <h3 id="result1" onclick="Result1()"></h3>
    </div>
    <div class="other-result col-11">
        <h3 id="result2" onclick="Result2()"></h3>
    </div>
    <div class="other-result col-11">
        <h3 id="result3" onclick="Result3()"></h3>
    </div>                                
    `;

    divContentSearch.innerHTML = TemplateContentSearch;
    divSearch.appendChild(divContentSearch);

    /*To do searchs by suggested results*/ 
    const result1 = document.getElementById('result1');
    const result2 = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    
    result1.innerHTML = resutlSuggested;
    result2.innerHTML = SimilarResult;
    result3.innerHTML = OtherResult;
}

function PutItOnTags(HashTag1, HashTag2, HashTag3) {    
    HashTagButton1.value = ' #' + HashTag1;    
    HashTagButton2.value = ' #' + HashTag2;
    HashTagButton3.value = ' #' + HashTag3;
}

function SearchSection(title, img, Cssclass1, Cssclass2) {                
    const MainDivSearch = document.querySelector('.main-search')
    const divsSearch = document.createElement('div');
    divsSearch.classList.add(Cssclass1);
    divsSearch.classList.add(Cssclass2);    
      
    const newSearch = document.querySelector('.search-container');
    const TemplateSearch = `
        <div class="search-gif">
            <img src="${img}" alt="Gif_search">                                                                    
        </div>
        <div class="search-title">
            <h3>#${title}...</h3>            
        </div>                                
    `;
    divsSearch.innerHTML = TemplateSearch;
    newSearch.appendChild(divsSearch);
    MainDivSearch.classList.remove('display')
    
    //To change search button color
    ButtonSearch.classList.remove('button-enable');
    ButtonSearch.classList.add('button-disable');
    
    //To change search result title
    SearchResult = document.getElementById('SearchResult');
    //SearchResult.innerHTML = InputSearch.value + ' (resultados)';
    SearchResult.innerHTML = 'Resultado de la búsqueda: ' + InputSearch.value;
}

function ClearSearch() {
    const newSearch = document.querySelector('.search-container');    
    newSearch.innerHTML = "";
}

InputSearch.addEventListener( 'input', function() {
    let url = SearchApi + UrlPlusKeySearch + '&q=' + InputSearch.value + '&limit=3';
    let MinLength =  InputSearch.value.length;
    const divSearch = document.getElementById('GifSearchResult');
    const MainDivSearch = document.querySelector('.main-search')   

    if(MinLength == 0){
        /*To hide both search title and search results (respectively)*/
        divSearch.classList.add('display')
        MainDivSearch.classList.add('display')
        //To change search button color
        ButtonSearch.classList.remove('button-enable');
        ButtonSearch.classList.add('button-disable');
        /*To Clean a previous search*/ 
        ClearSearch();
    }
    
    if(MinLength >= 3) {
        //To change search button color
        ButtonSearch.classList.remove('button-disable');
        ButtonSearch.classList.add('button-enable');       

        SearchCallApi(url);
    }    
})

function Result1() {
    /*To hide search title results*/
    const divSearch = document.getElementById('GifSearchResult');
    divSearch.classList.add('display')

    let StringToSearch = result1.innerHTML;
    let url = SearchApi + UrlPlusKeySearch + '&q=' + StringToSearch + '&limit=10';
    SearchByResultCallApi(url)
}

function Result2() {
    /*To hide search title results*/
    const divSearch = document.getElementById('GifSearchResult');
    divSearch.classList.add('display')

    let StringToSearch = result2.innerHTML;
    let url = SearchApi + UrlPlusKeySearch + '&q=' + StringToSearch + '&limit=10';
    SearchByResultCallApi(url)
}

function Result3() {
    /*To hide search title results*/
    const divSearch = document.getElementById('GifSearchResult');
    divSearch.classList.add('display')

    let StringToSearch = result3.innerHTML;
    let url = SearchApi + UrlPlusKeySearch + '&q=' + StringToSearch + '&limit=10';
    SearchByResultCallApi(url)
}

HashTagButton1.addEventListener( 'click', function() {
    let StringToSearch = HashTagButton1.value.substr(2);            
    let url = SearchApi + UrlPlusKeySearch + '&q=' + StringToSearch + '&limit=10';
    SearchByResultCallApi(url)
})

HashTagButton2.addEventListener( 'click', function() {
    let StringToSearch = HashTagButton2.value.substr(2);
    let url = SearchApi + UrlPlusKeySearch + '&q=' + StringToSearch + '&limit=10';
    SearchByResultCallApi(url)
})

HashTagButton3.addEventListener( 'click', function() {
    let StringToSearch = HashTagButton3.value.substr(2);
    let url = SearchApi + UrlPlusKeySearch + '&q=' + StringToSearch + '&limit=10';
    SearchByResultCallApi(url)
})

InputSearch.addEventListener( 'keypress', function() {
    //To identify if user press enter key
    var KeyPressed = event.which || event.keyCode;
    
    let url = SearchApi + UrlPlusKeySearch + '&q=' + InputSearch.value + '&limit=10';
    let MinLength =  InputSearch.value.length;
    const divSearch = document.getElementById('GifSearchResult');        

    if(MinLength >= 3 && KeyPressed == 13) {        
        SearchByResultCallApi(url);
        divSearch.classList.add('display')                        
    }    
})

ButtonSearch.addEventListener( 'click', function() {
    let url = SearchApi + UrlPlusKeySearch + '&q=' + InputSearch.value + '&limit=10';
    let MinLength =  InputSearch.value.length;
    const divSearch = document.getElementById('GifSearchResult');

    if(MinLength >= 3) {
        SearchByResultCallApi(url);
        divSearch.classList.add('display');
    }
})

function SearchCallApi(url) {
        
    fetch(url)        
    .then(response => response.json())
    .then(result => {
        let title1 = result.data[0]['title']
        let title2 = result.data[1]['title']
        let title3 = result.data[2]['title'] 
        ResultOnChange(title3, title2, title1);                   
    });
}

function SearchByResultCallApi(url) {
    /*To Clean a previous search*/ 
    ClearSearch();

    fetch(url)        
    .then(response => response.json())
    .then(result => {        
        let HashTag1 = result.data[0]['title'].substr(0, 11)
        let HashTag2 = result.data[1]['title'].substr(0, 18)
        let HashTag3 = result.data[2]['title'].substr(0, 17)
        PutItOnTags(HashTag1,HashTag2,HashTag3)

        result.data.forEach((element, i) => {
            let tmp = element.title;
            let title = tmp.substr(0, 29);
            let img = element.images['downsized_medium']['url'];            
            let Cssclass1 = 'search-body'
            let Cssclass2 = 'col-3';
            if((i == 4) || (i == 9)) {
                Cssclass1 = 'search-bigger-image'
                Cssclass2 = 'col-6'                    
            }                                
            SearchSection(title, img, Cssclass1, Cssclass2) 
        });        
    });
}
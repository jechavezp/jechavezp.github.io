//Global variables
var recorder; var BtnStop; var BtnStopIcon; var BtnStart; var BtnStartIcon;
var BtnGifRep; var BtnGifUp; var DivProgressPlay; var DivBtnsCreateGif;
var PreviewVideo; var img; var Time; var DivTimer; var TimerText; var PreviewVideoContent;
var UploadIcon; var UploadBar; var BtnCancel; var newPreview; var IdGifUploaded;
var GetGifUploaded; var i=0;

//Constants
const KeyToUp = 'rFDuK1U4JkZH6YMnkFq0JFVc1184B4H4';
const UrlUpload = "http://upload.giphy.com/v1/gifs"
const UrlParameters = '?api_key=' + KeyToUp + '&file=';
const btnCreateGif = document.querySelector('.create-guifos-up');
const divBtnsLogoUp = document.getElementById('btnsLogo');
const divCreateGif = document.querySelector('.create-gifos');
const divMainViewMyGuifos = document.querySelector('.main-view-myguifos');

function ShowMyGuifos(GetGifUploaded) {                
    const divShMyGuifos = document.createElement('div');
    divShMyGuifos.classList.add('col-3');
    divShMyGuifos.classList.add('mis-guifos-body');        
      
    const MyGuifosContainer = document.querySelector('.mis-guifos-container');
    const TemplateTrend = `
        <div class="my-guifos-gif">
            <img src="${GetGifUploaded}" alt="My_Gif">
        </div>
        <div class="my-guifos-title">
            <h3>#No Tag...</h3>            
        </div>                                
    `;
    divShMyGuifos.innerHTML = TemplateTrend;
    MyGuifosContainer.appendChild(divShMyGuifos);    
}

//To show "create gif" window that was invoque from index.html (redirect)
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('redirect');

if(myParam == 1){
    BackToHref = document.querySelector('.back-to');        
    BackToHref.classList.remove('display-upload');
    divBtnsLogoUp.classList.add('display-upload');
    divCreateGif.classList.remove('display-window');
}

btnCreateGif.addEventListener('click', function() {        
    BackToHref = document.querySelector('.back-to');        
    BackToHref.classList.remove('display-upload');
    divBtnsLogoUp.classList.add('display-upload');
    divCreateGif.classList.remove('display-window');
})

function start() {    
    const divPreview = document.createElement('div');
    divPreview.classList.add('preview-gifos');
    divPreview.classList.add('col-8');
    InsertAfter = document.getElementById('after');    
      
    newPreview = document.querySelector('.main-preview-guifos');
    const TemplatePreview = `
            <div class="preview-gifos-title">
                <h3 id="PreviewGifTitle">
                    Un chequeo antes de empezar
                </h3>
            </div>
            <div class="preview-gifos-body">                                                            
                <div id="PreviewVideoContent" class="preview-video">
                    <video id="PreviewVideo" class="preview-start-capture"></video>
                    <img id="PreviewBlob" class="display-tmp preview-blob" src="" alt="preview_blob">
                    <div id="UploadIcon" class="display-window upload-icon">
                        <img src="./assets/images/globe_img.png" alt="Upload_Icon">
                        <h3>Estamos subiendo tu guifo...</h3>
                    </div>                    
                    <div id="UploadBar" class="display-window upload-content">
                        <div class="upload-bar-progress">
                            <div id="SecondBar" class="upload-bar"></div>
                        </div>
                        <h3>Tiempo restante: <del>38 años</del> algunos minutos</h3>
                    </div>
                </div>                
                <div class="btn-capture-gif grid-system">
                    <div class="timer-size col-2">
                        <h3 class="timer-text"></h3>
                    </div>
                    <div class="progress-play-content grid-system display-tmp">
                        <button class="gif-play"></button>
                        <div id="progress" class="progress-play col-5">
                            <div id="Bar" class="bar"></div>
                        </div>                        
                    </div>                        
                    <div class="btns-create-gif col-10">
                        <button class="gif-repeat display-tmp" onclick="CaptureRepeat()">Repetir Captura</button> 
                        <button class="gif-upload display-tmp" onclick="UploadGif()">Subir Guifo</button>
                        <button class="gif-cancel display-tmp" onclick="UploadGifCancel()">Cancelar</button>
                        <button class="btn-stop-icon display-tmp"></button>
                        <button class="btn-stop display-tmp">Listo</button>
                        <button class="btn-capture-icon" onclick="captureBtns()"></button>
                        <button class="btn-capture" onclick="captureBtns()">Capturar</button>
                    </div>
                </div>                    
            </div>                                
    `;
    divPreview.innerHTML = TemplatePreview;
    newPreview.appendChild(divPreview);
    divPreview.after(InsertAfter);
    divCreateGif.classList.add('display-window');
    divMainViewMyGuifos.classList.add('display-window');
    PreviewStream();            
}

function CaptureRepeat() {
    img.classList.add('display-tmp')
    BtnStart.classList.remove('display-tmp')
    BtnStartIcon.classList.remove('display-tmp')
    BtnGifRep.classList.add('display-tmp');
    BtnGifUp.classList.add('display-tmp');
    DivProgressPlay.classList.add('display-tmp')
    DivTimer.classList.remove('timer-color');
    TimerText.innerHTML = "";
    DivBtnsCreateGif.classList.remove('col-5');
    DivBtnsCreateGif.classList.add('col-10');
    PreviewVideo.classList.remove('display-window');
    recorder.destroy();
    recorder = null;        
    PreviewStream();    
}

function captureBtns() {
        BtnStop = document.querySelector('.btn-stop')
        BtnStopIcon = document.querySelector('.btn-stop-icon')
        BtnStart = document.querySelector('.btn-capture')
        BtnStartIcon = document.querySelector('.btn-capture-icon')
        BtnGifRep = document.querySelector('.gif-repeat')
        BtnGifUp = document.querySelector('.gif-upload')        
        DivProgressPlay = document.querySelector('.progress-play-content')
        DivBtnsCreateGif = document.querySelector('.btns-create-gif')   
        BtnStop.classList.remove('display-tmp')
        BtnStopIcon.classList.remove('display-tmp')
        BtnStart.classList.add('display-tmp')
        BtnStartIcon.classList.add('display-tmp')
        PreviewVideo = document.getElementById('PreviewVideo');
        PreviewVideoContent = document.getElementById('PreviewVideoContent');
        UploadIcon = document.getElementById('UploadIcon');
        UploadBar = document.getElementById('UploadBar');
        img = document.getElementById('PreviewBlob');
        BtnCancel = document.querySelector('.gif-cancel')
        CaptureStream();  
}

function UploadGif() {
    //Showing/hidden elements...
    var Progress = document.getElementById("SecondBar");
    ProgressBar(Progress) 
    img.classList.add('display-tmp');
    UploadIcon.classList.remove('display-window');
    UploadBar.classList.remove('display-window');
    PreviewVideoContent.classList.add('preview-video-up')
    DivTimer.classList.remove('timer-color');
    TimerText.innerHTML = "";
    DivProgressPlay.classList.add('display-tmp');
    BtnGifRep.classList.add('display-tmp');
    BtnGifUp.classList.add('display-tmp');
    BtnCancel.classList.remove('display-tmp');
    DivBtnsCreateGif.classList.remove('col-5');
    DivBtnsCreateGif.classList.add('col-10');                   

    let form = new FormData();    
    form.append('file', recorder.getBlob(), 'myGif.gif');
    
    fetch(UrlUpload + UrlParameters, {         
        method: "POST",
        body: form,                
        //This line going crazy my code:
        //mode: 'cors',                              
    })
    .then(response =>response.json())
    .then(result => {        
        console.log(result);
        if(result.meta.status === 200) {
            IdGifUploaded = result.data.id;
            showGifUpload(IdGifUploaded);            
            localStorage.setItem("Gif-"+IdGifUploaded, IdGifUploaded);           
        }
    })         
    .catch(error => {
        console.error("Error: ", error)
    })            
}

async function showGifUpload(IdGifUploaded) {
    divMainViewMyGuifos.classList.remove('display-window');
    newPreview.classList.add('display-window');
    const MainUpGifos = document.querySelector('.main-uploaded-gifos');
    MainUpGifos.classList.remove('hide');
    const ImgUploadedGif = document.getElementById('UploadedGifosView');

    CallGifUploaded(IdGifUploaded)
    const sleep = m => new Promise(r => setTimeout(r, m));
    await sleep(1000);
    ImgUploadedGif.src = GetGifUploaded;    
}

function CallGifUploaded(IdGif) {
    const UrlGetById = "http://api.giphy.com/v1/gifs/" + IdGif + '?api_key=' + KeyToUp;    

    fetch(UrlGetById)
    .then(response => response.json())
    .then(result => {        
        GetGifUploaded = result.data.images['downsized_medium']['url'];        
    })
}

function CopyLinkGif(){
    //Copy to clipboard
    alert(GetGifUploaded);    
}

function DownloadGif(){
    invokeSaveAsDialog(recorder.getBlob());
}

//Esto está pendiente. No esta cancelando el Upload
function UploadGifCancel() {
    window.location.href = '/upload.html';
}

function LoadDocument() {
    window.location.href = '/upload.html';
}

function timer() {    
    DivTimer = document.querySelector('.timer-size');
    DivTimer.classList.add('timer-color');

    Time = setInterval(TimeElapsed, 1000);
    var hour = 0
    var min = 0;
    var Seconds = 1;
    function TimeElapsed() {            
        
        if(Seconds == 60){
            Seconds = 0
            min = min + 1
        }

        if(min == 60){
            hour = hour +1
        }
        
        if(Seconds < 10){
            Seconds = '0' + Seconds                
        }            

        TimerText = document.querySelector('.timer-text');
        TimerText.innerHTML = hour+":"+min+":"+Seconds        
        Seconds++;
    }     
}

function PreviewStream() {    
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
        height: {max: 427},
        width: {max: 824}              
        }
    })
    .then(function(stream){
        let video = document.querySelector('video');                
        video.srcObject = stream;        
        video.play()            
    })
}

function CaptureCam(callback) {        
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: {max: 430},
            width: {max: 716}              
        }        
    }).then(function(stream) {
        callback(stream);
    }).catch(function(error) {
        alert('Error capturando la cámera.');
        console.error(error);
    });  
}

function StopRecordingCallback() {
    img.src = URL.createObjectURL(recorder.getBlob());
    recorder.camera.stop();    
    clearInterval(Time)    
}

function CaptureStream() {
    CaptureCam(function(stream) {
        recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifRecordingStarted: function() {
                var PreviewGifTitle = document.getElementById('PreviewGifTitle');
                PreviewGifTitle.innerHTML = "Capturando Tu Guifo";
            },
            onGifPreview: function(gifURL) {
                img.src = gifURL;
            }
        });

        recorder.startRecording();
        timer();        

        //Release camera
        recorder.camera = stream;        

        BtnStop.addEventListener('click', function() { 
            //Second change of title            
            PreviewGifTitle.innerHTML = "Vista Previa";
            //View Modifing  
            BtnGifRep.classList.remove('display-tmp');
            BtnGifUp.classList.remove('display-tmp');
            BtnStop.classList.add('display-tmp')
            BtnStopIcon.classList.add('display-tmp')
            DivProgressPlay.classList.remove('display-tmp')
            DivBtnsCreateGif.classList.remove('col-10')
            DivBtnsCreateGif.classList.add('col-5')
            PreviewVideo.classList.add('display-window');
            img.classList.remove('display-tmp')                        
            recorder.stopRecording(StopRecordingCallback);
            var Progress = document.getElementById("Bar");            
            ProgressBar(Progress)             
        })
        BtnStopIcon.addEventListener('click', function() { 
            //Second change of title            
            PreviewGifTitle.innerHTML = "Vista Previa";
            //View Modifing  
            BtnGifRep.classList.remove('display-tmp');
            BtnGifUp.classList.remove('display-tmp');
            BtnStop.classList.add('display-tmp')
            BtnStopIcon.classList.add('display-tmp')
            DivProgressPlay.classList.remove('display-tmp')
            DivBtnsCreateGif.classList.remove('col-10')
            DivBtnsCreateGif.classList.add('col-5')
            PreviewVideo.classList.add('display-window');
            img.classList.remove('display-tmp')                        
            recorder.stopRecording(StopRecordingCallback);
            var Progress = document.getElementById("Bar");            
            ProgressBar(Progress)             
        })
    });
}

function ProgressBar(Progress) {    
    if (i == 0) {
            i = 1;            
            var width = 1;
            var id = setInterval(frame, 50);
              function frame() {
              if (width >= 100) {
              clearInterval(id);
              i = 0;
            } else {
              width++;
              Progress.style.width = width + "%";
            }
        }
     }
  }

const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array)
    }
}

async function MyGuifos() {                    
    const sleep = m => new Promise(r => setTimeout(r, m));    

    await asyncForEach(Object.keys(localStorage), async (element) => {
        let item = localStorage.getItem(element);
        CallGifUploaded(item);        
        await sleep(1000);        
        ShowMyGuifos(GetGifUploaded);
    })
}

MyGuifos();
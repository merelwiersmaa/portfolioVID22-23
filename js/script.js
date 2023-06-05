// JavaScript Document
console.log("heeey!");


//////////////////////////////
/////// SOUNDS ///////////////
/////////////////////////////


//https://www.youtube.com/watch?v=7nihwFDL1Co
var lachTVshow1966 = new Audio("./sound/lachTVshow1966.wav");

//https://www.youtube.com/watch?v=yPBPcACUTng
var lachTimBurton1989 = new Audio("./sound/lachTimBurton1989.wav");

//https://www.youtube.com/watch?v=wcinzmfZeCc
var lachAnimatedSeries1992 = new Audio("./sound/lachAnimatedSeries1992.wav");

//https://www.youtube.com/watch?v=-n8troSSIhU
var lachDarkKnight2008 = new Audio("./sound/lachDarkKnight2008.wav");

//https://www.youtube.com/watch?v=A664eSs0VEU
var lachSuicideSquad2016 = new Audio("./sound/lachSuicideSquad2016.wav");

//https://www.youtube.com/watch?v=RWbHUmaKsJM
var lachLego2017 = new Audio("./sound/lachLego2017.wav");

//https://www.youtube.com/watch?v=culVml1wk30
var lachGotham2017 = new Audio("./sound/lachGotham2017.wav");

//https://www.youtube.com/watch?v=FqC0Yf8OjAI
var lachJokerFilm2019 = new Audio("./sound/lachJokerFilm2019.wav");

//https://www.youtube.com/watch?v=PoyejjJGajk
var whySoSerious = new Audio("./sound/whySoSerious.wav");

var muisKlik = new Audio("./sound/muisKlik.mp3");

///////////////////
//HOVER H1/////////
///////////////////


const heading = document.querySelector("h1");

heading.addEventListener("mouseover", audioWhySoSerious);

function audioWhySoSerious() {

    whySoSerious.play();
}

///////////////////////////////////
// MUISKLIK BUTTON SLUITEN DIALOG /
//////////////////////////////////


const sluitKnop = document.querySelector(".sluitKnop");

sluitKnop.addEventListener("click", audioMuisKlik);

function audioMuisKlik() {

    muisKlik.play();
}


////////////////////////////////////////////////////////////////////////////////
// DIALOG GOLDEN AGE 1940, Bron van Sanne: https://codepen.io/shooft/pen/wvYgVKg///
////////////////////////////////////////////////////////////////////////////////


// Hieronder worden de elementen aangewezen uit de HTML (via de querySelector), die worden gebruikt in de interactie. 
// Deze elementen worden naar JS 'gehaald' en krijgen een eigen naam.
const GoldenAgeOpenButton = document.querySelector("ul li:nth-of-type(1) > button");
const GoldenAgeDialog = document.querySelector("ul li:nth-of-type(1) dialog");


//Hieronder wordt verteld aan de GoldenAgeOpenButton (dus de button in HTML), dat hij moet luisteren naar een event (addEventListener).
//Dit event houdt in dat er bij een 'click' op de knop (de actie), er een reactie uitgevoerd moet worden, en dat is de functie openGoldenAge.
GoldenAgeOpenButton.addEventListener("click", openGoldenAge);


//De functie (reactie) die uitgevoerd moet worden staat hieronder beschreven.
//setTimeout zorgt ervoor dat er een korte vertraging plaatsvindt na de click, voordat de fucntie wordt uitgevoerd
function openGoldenAge() {
    setTimeout(() => {
        GoldenAgeDialog.showModal();
    }, 500); // 500 ms = 0.5 sec

    muisKlik.play();
}

//De volgende code's zijn precies hetzelfde, maar dan met andere benamingen voor hun eigen Jokerkaart.
//Maar het spreekt voorzich, de werking ervan komt op hetzelfde neer.


//////////////////////////
// DIALOG TV SHOW 1966 ///
/////////////////////////


const TVSHOWOpenButton = document.querySelector("ul li:nth-of-type(2) > button");
const TVSHOWDialog = document.querySelector("ul li:nth-of-type(2) dialog");

TVSHOWOpenButton.addEventListener("click", openTVshow);

function openTVshow() {
    setTimeout(() => {
        TVSHOWDialog.showModal();
    }, 500);

    lachTVshow1966.play();
    muisKlik.play();
}


/////////////////////////////
// DIALOG TIM BURTON 1989 ///
////////////////////////////


const TimBurtonOpenButton = document.querySelector("ul li:nth-of-type(3) > button");
const TimBurtonDialog = document.querySelector("ul li:nth-of-type(3) dialog");

TimBurtonOpenButton.addEventListener("click", openTimBurton);

function openTimBurton() {
    setTimeout(() => {
        TimBurtonDialog.showModal();
    }, 500);

    lachTimBurton1989.play();
    muisKlik.play();
}


///////////////////////////////////
// DIALOG ANIMATED SERIES 1992 ///
//////////////////////////////////


const AnimatedSeriesOpenButton = document.querySelector("ul li:nth-of-type(4) > button");
const AnimatedSeriesDialog = document.querySelector("ul li:nth-of-type(4) dialog");

AnimatedSeriesOpenButton.addEventListener("click", openAnimatedSeries);

function openAnimatedSeries() {
    setTimeout(() => {
        AnimatedSeriesDialog.showModal();
    }, 500);

    lachAnimatedSeries1992.play();
    muisKlik.play();
}


/////////////////////////////
// DIALOG ALEX ROSS 1999 ///
////////////////////////////


const AlexRossOpenButton = document.querySelector("ul li:nth-of-type(5) > button");
const AlexRossDialog = document.querySelector("ul li:nth-of-type(5) dialog");

AlexRossOpenButton.addEventListener("click", openAlexRoss);

function openAlexRoss() {
    setTimeout(() => {
        AlexRossDialog.showModal();
    }, 500);

    muisKlik.play();
}


/////////////////////////////
// DIALOG DARK KNIGHT 2008 //
////////////////////////////


const DarkKnightOpenButton = document.querySelector("ul li:nth-of-type(6) > button");
const DarkKnightDialog = document.querySelector("ul li:nth-of-type(6) dialog");

DarkKnightOpenButton.addEventListener("click", openDarkKnight);

function openDarkKnight() {
    setTimeout(() => {
        DarkKnightDialog.showModal();
    }, 500);

    lachDarkKnight2008.play();
    muisKlik.play();
}


///////////////////////////////
// DIALOG SUICIDE SQUAD 2016 //
///////////////////////////////


const SuicideSquadOpenButton = document.querySelector("ul li:nth-of-type(7) > button");
const SuicideSquadDialog = document.querySelector("ul li:nth-of-type(7) dialog");

SuicideSquadOpenButton.addEventListener("click", openSuicideSquad);

function openSuicideSquad() {
    setTimeout(() => {
        SuicideSquadDialog.showModal();
    }, 500);

    lachSuicideSquad2016.play();
    muisKlik.play();
}


///////////////////////////////
// DIALOG LEGO BATMAN 2017 ////
///////////////////////////////


const LegoBatmanOpenButton = document.querySelector("ul li:nth-of-type(8) > button");
const LegoBatmanDialog = document.querySelector("ul li:nth-of-type(8) dialog");

LegoBatmanOpenButton.addEventListener("click", openLegoBatman);

function openLegoBatman() {
    setTimeout(() => {
        LegoBatmanDialog.showModal();
    }, 500);

    lachLego2017.play();
    muisKlik.play();
}


////////////////////////////////////
// DIALOG GOTHAM JEROME 2017 ///////
////////////////////////////////////


const GothamJeromeOpenButton = document.querySelector("ul li:nth-of-type(9) > button");
const GothamJeromeDialog = document.querySelector("ul li:nth-of-type(9) dialog");

GothamJeromeOpenButton.addEventListener("click", openGothamJerome);

function openGothamJerome() {
    setTimeout(() => {
        GothamJeromeDialog.showModal();
    }, 500);

    lachGotham2017.play();
    muisKlik.play();
}


///////////////////////////////////
// DIALOG JOKER FILM 2019//////////
///////////////////////////////////


const JokerFilmOpenButton = document.querySelector("ul li:nth-of-type(10) > button");
const JokerFilmDialog = document.querySelector("ul li:nth-of-type(10) dialog");

JokerFilmOpenButton.addEventListener("click", openJokerFilm);

function openJokerFilm() {
    setTimeout(() => {
        JokerFilmDialog.showModal();
    }, 500);

    lachJokerFilm2019.play();
    muisKlik.play();
}
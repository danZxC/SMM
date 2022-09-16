let changer = document.getElementById('cta_button_button');
let button_back=document.getElementById('cta_button_back');
let photo=document.getElementById('cta_image');
let body = document.querySelector('body');
let logo_image=document.getElementById('logo_image');
let surname=document.getElementById('surname');
let navigation=document.querySelectorAll("#navigation");
let cardtext=document.querySelectorAll('.card_description');
let circle = document.querySelectorAll('#circle');
let link=document.querySelectorAll('.link');
let card1=document.querySelectorAll('.third_screen_card1');
let card2=document.querySelectorAll('.third_screen_card2');
let four_screen=document.querySelectorAll('.four_card_description');

let insta=document.querySelector('.insta');
let facebook=document.querySelector('.facebook');
let telega=document.querySelector('.telega');

let line1=document.querySelector('.line1');
let line2=document.querySelector('.line2');
let line3=document.querySelector('.line3');

function ThemeChanger(){
    button_back.style.display='flex';
    photo.style.backgroundImage = "url('imageblue.png')";
    logo_image.style.backgroundImage = "url('logoblue.png')";
    for( let i = 0; i < navigation.length; i++){
      link[i].style.color='white';
      navigation[i].style.color = "white";   
      navigation[i].addEventListener('mouseenter', e=>{
        navigation[i].style["boxShadow"]="0px 3px 10px rgba(255, 255, 255, 0.5)";
      });
      navigation[i].addEventListener('mouseleave', l=>{
        navigation[i].style["boxShadow"]="none";
      });
    }		
    for(let i=0; i<cardtext.length;i++){
        cardtext[i].style["boxShadow"]="0px 4px 4px 3px rgba(255, 255, 255, 0.5)";
        four_screen[i].style["boxShadow"]="0px 4px 4px 3px rgba(255, 255, 255, 0.5)";
    }
    for( let i = 0; i < circle.length; i++){
        circle[i].style["boxShadow"] = "0px -4px 4px rgba(255, 255, 255, 0.55), 4px 4px 4px rgba(255, 255, 255, 0.5)";
    }
    for(let i=0;i<card1.length;i++){
      card2[i].style["boxShadow"]="0px -4px 4px rgba(255, 255, 255, 0.55), 4px 4px 4px rgba(255, 255, 255, 0.5)";   
      card1[i].style["boxShadow"]="0px -4px 4px rgba(255, 255, 255, 0.55), 4px 4px 4px rgba(255, 255, 255, 0.5)";
    }
    surname.style.color='#00A3FF';
    changer.style.display='none';
    body.style.backgroundColor="#06002D";
    body.style.color="white";

        line1.style.backgroundColor="white";
    line2.style.backgroundColor="white";
    line3.style.backgroundColor="white";
    insta.src="instagramwhite.png";
    facebook.src="facebookwhite.png";
    telega.src="twitterwhite.png";

}

function ThemeBack(){
    button_back.style.display='none';
    changer.style.display='flex';
    body.style.backgroundColor="#ffffff";
    body.style.color="black"
    for( let i = 0; i < navigation.length; i++){
      link[i].style.color='black';
        navigation[i].style.color = "black";
        navigation[i].addEventListener('mouseenter', e=>{
            navigation[i].style["boxShadow"]="0px 3px 4px rgba(0, 0, 0, 0.25)";
          });
          navigation[i].addEventListener('mouseleave', l=>{
            navigation[i].style["boxShadow"]="none";
          });
    }
    for(let i=0; i<cardtext.length;i++){
        cardtext[i].style["boxShadow"]="0px 4px 4px rgba(0, 0, 0, 0.25)";
        four_screen[i].style["boxShadow"]="0px 4px 4px rgba(0, 0, 0, 0.25)";
    }
    for( let i = 0; i < circle.length; i++){
        circle[i].style["boxShadow"] = "0px -4px 4px rgba(0, 0, 0, 0.25), 4px 4px 4px rgba(0, 0, 0, 0.25)";
    }
    for(let i=0;i<card1.length;i++){
      card2[i].style["boxShadow"]="0px -4px 4px rgba(0, 0, 0, 0.25), 4px 4px 4px rgba(0, 0, 0, 0.25)";   
      card1[i].style["boxShadow"]="0px -4px 4px rgba(0, 0, 0, 0.25), 4px 4px 4px rgba(0, 0, 0, 0.25)";
    }
    surname.style.color='#D84949'
    photo.style.backgroundImage = "url('фотка\ с\ фоном.png')";
    logo_image.style.backgroundImage = "url('logo\ image.png')";
    line1.style.backgroundColor="black";
    line2.style.backgroundColor="black";
    line3.style.backgroundColor="black";
    insta.src="instagram.png";
    facebook.src="facevbook.png";
    telega.src="telega.png";
}

let burger = document.querySelector('.burger');
let nav=document.querySelector('.navigation');
let logo =document.querySelector('.logo');
let header = document.querySelector('header');
let burger_nav=document.querySelector('.burger_nav');
let secscreen=document.querySelector('.second_screen')

function BurgerUse(){
  burger.classList.toggle("open");
  nav.classList.toggle("open");
  logo.classList.toggle("open");
  header.classList.toggle("open");
  burger_nav.classList.toggle("open");
  for(let i=0;i<navigation.length;i++){
    navigation[i].classList.toggle("open");
  }
 line1.classList.toggle("open"); 
 line2.classList.toggle("open"); 
 line3.classList.toggle("open"); 
 secscreen.classList.toggle("open");
}

let card_main_cat=document.querySelector('.card_main_cat');
let card_main_anime=document.querySelector('.card_main_anime');
let card_main_dog=document.querySelector('.card_main_dog');
let card_main_shop=document.querySelector('.card_main_shop');

let cat=document.querySelector('.cat_image');
let anime_shop=document.querySelector('.anime_shop');
let dog=document.querySelector('.dog');
let shop=document.querySelector('.shop');



let circules_cat=document.querySelector(".circles_cat");
let circules_anime = document.querySelector(".circles_anime");
let circules_dog = document.querySelector(".circles_dog");
let circules_shop = document.querySelector(".circles_shop");

let cat_name=document.querySelector(".trhird_screen_card_title1");
let anime_name=document.querySelector(".trhird_screen_card_title3");
let dog_name=document.querySelector(".trhird_screen_card_title2");
let shop_name=document.querySelector(".trhird_screen_card_title4");

function CatChanger(){
  card_main_cat.classList.toggle("change");
  cat.classList.toggle("change");
  circules_cat.classList.toggle("change");
  cat_name.classList.toggle("change");
  for( let i = 0; i < circle.length; i++){
    circle[i].classList.toggle("change");
  }
}
function AnimeChanger(){
  anime_shop.classList.toggle("change");
  card_main_anime.classList.toggle("change");
  circules_anime.classList.toggle("change");
  anime_name.classList.toggle("change");
  for( let i = 0; i < circle.length; i++){
    circle[i].classList.toggle("change");
  }
}
function DogChanger(){
  dog.classList.toggle("change");
  card_main_dog.classList.toggle("change");
  circules_dog.classList.toggle("change");
  dog_name.classList.toggle("change");
  for( let i = 0; i < circle.length; i++){
    circle[i].classList.toggle("change");
  }
}

function ShopChanger(){
  shop.classList.toggle("change");
  card_main_shop.classList.toggle("change");
  circules_shop.classList.toggle("change");
  shop_name.classList.toggle("change");
  for( let i = 0; i < circle.length; i++){
    circle[i].classList.toggle("change");
  }
}


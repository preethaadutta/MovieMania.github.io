const slides=document.querySelector(".slider").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const indicator=document.querySelector(".indicator");
let index=0;

//adding EventListener
prev.addEventListener
("click",function()
{
    prevSlide();
    updateCircleIndicator(); 
    resetTimer();
}
)
next.addEventListener
("click",function()
{
    nextSlide(); 
    updateCircleIndicator();
    resetTimer();  
}
)

//defining circleIndicator() method
//creating circle indicators
function circleIndicator()
{
    for(let i=0; i< slides.length; i++)
    {
        const div=document.createElement("div");
        div.innerHTML=i+1;
        div.setAttribute("onclick","indicateSlide(this)")
        div.id=i;
        if(i==0)
        {
            div.className="active";
        }
        indicator.appendChild(div);
    }
}
circleIndicator();//calling circleIndicator() method

//defining indicateSlide() method
function indicateSlide(element)
{
    index=element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}

//defining updateCircleIndicator() method   
function updateCircleIndicator()
{
    for(let i=0; i<indicator.children.length; i++)
    {
    	indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}

//defining prevSlide() method 
function prevSlide()
{
   	if(index==0)
    {
   	 	index=slides.length-1;
   	}
   	else
    {
   	 	index--;
   	}
   	changeSlide();
}

//defining nextSlide() method 
function nextSlide()
{
    if(index==slides.length-1)
    {
      	index=0;
    }
    else
    {
      	index++;
    }
    changeSlide();
}

//defining changeSlide() method 
function changeSlide()
{
   	for(let i=0; i<slides.length; i++)
    {
   	    slides[i].classList.remove("active");
   	}
    slides[index].classList.add("active");
}

//defining resetTimer() method 
function resetTimer()
{
   	// when click to indicator or controls button 
   	// stop timer 
   	clearInterval(timer);
   	// then started again timer
   	timer=setInterval(autoPlay,4000);
}

//defining autoPlay() method 
function autoPlay()
{
    nextSlide();
    updateCircleIndicator();
}

let timer=setInterval(autoPlay,4000);//for autoplay feature





const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});













window.addEventListener("scroll", 
    function()
    {
        var header=document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })




const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

let movies=[
    {
    name:"falcon and the winter soldier",
    des:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi repellendus iste fuga asperiores. Necessitatibus!",
       image:"slider 2.png"
    },
    {
        name: "loki",
        des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi repellendus iste fuga asperiores. Necessitatibus!",
        image:"slider 1.png"
    },{
            
        name:"vanda vison",
        des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi repellendus iste fuga asperiores. Necessitatibus!",
        image:"slider 3.png"
    },{
        name:"raya and the last dragon",
        des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi repellendus iste fuga asperiores. Necessitatibus!",
        image:"slider 4.png"
    },
    {
            name:"luca",
            des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi repellendus iste fuga asperiores. Necessitatibus!",
            image:"slider 5.png"
    }
]
const carousel=document.querySelector('.carousel');
let sliders=[];
let slideIndex=0;//tract current slide by keeping a counter
const createSlide= () =>{  //function with arrow function syntax
    if(slideIndex>=movies.length){
        slideIndex=0;
    }
    
    //create dom (html) elements
    let slide=document.createElement('div');
    var imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');


//attaching all the elements
imgElement.appendChild(document.createTextNode(''));
h1.appendChild(document.createTextNode(movies[slideIndex].name));
p.appendChild(document.createTextNode(movies[slideIndex].des));
content.appendChild(h1);
content.appendChild(p);
slide.appendChild(content);//missing
slide.appendChild(imgElement);

//
//slide is append to carousel
carousel.appendChild(slide);

//setting up images
imgElement.src=movies[slideIndex].image;
slideIndex++;

//assign class names to various elements for styling purposes
slide.className="slider";
content.className="slide-content";
h1.className="movie-title";
p.className="movie-des";

//add newly created slide to slider array
sliders.push(slide);

if(sliders.length)
{
    sliders[0].style.marginLeft=`calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`    ;
}
}
for(let i=0;i<3;i++)
{
    createSlide();
}
setInterval(()=>{
    createSlide();
},3000);

//video cards

const videoCards = document.querySelectorAll('.video-card');
//select all html command with class as video-card

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {//add mouseover event listner
        let video = item.children[1];//second chil that is the video elemnt
        video.play();//play the video
    });

    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    });
});
// cards sliders

let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    //getBoundingClientRect() is used to get the dimensions and position of the current card container (item). The result is stored in the containerDimensions variable.
    let containerWidth = containerDimensions.width;
    //Extract the width of the container from containerDimensions and store it in the containerWidth variable.

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})
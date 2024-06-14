var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var images = $$('.image img');
var prev = $('.control__prev');
var next = $('.control__next');
var close = $('.close');
var galleryImg = $('.gallery__inner img');
var gallery = $('.gallery')

var lengthImage = images.length;
var currentIndex = 0;

function showGallery(){
    if(currentIndex == 0){
        prev.classList.add('hide');
    }else{
        prev.classList.remove('hide')
    }

    if(currentIndex == lengthImage - 1){
        next.classList.add('hide');
    }else{
        next.classList.remove('hide')
    }
    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show__image')
}
images.forEach((item, index) => {
    item.addEventListener('click',function(e) {
        currentIndex = index
        showGallery();
    })
    
});

close.addEventListener('click',()=> {
    gallery.classList.remove('show__image');                                                              
})

document.addEventListener('keydown',(e) =>{
    if(e.keyCode == 27){
        gallery.classList.remove('show__image'); 
    }
})

prev.addEventListener('click', ()=>{
    if(currentIndex > 0){
        currentIndex--;
        showGallery();
        console.log(this);
    }
})

next.addEventListener('click', ()=>{
    if(currentIndex  < lengthImage -1){
        currentIndex++;
        showGallery();
        console.log(this);
    }
})
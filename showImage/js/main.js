var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var wrapperImage = $('.wrapper')
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
        prev.classList.add('hidden');
    }else{
        prev.classList.remove('hidden')
    }

    if(currentIndex == lengthImage - 1){
        next.classList.add('hidden');
    }else{
        next.classList.remove('hidden')
    }
    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show__image')
    wrapperImage.classList.add('hidden');
}
images.forEach((item, index) => {
    item.addEventListener('click',function(e) {
        currentIndex = index
        showGallery();
    })
    
});

close.addEventListener('click',()=> {
    gallery.classList.remove('show__image');
    wrapperImage.classList.remove('hidden');                                                         
})

document.addEventListener('keydown',(e) =>{
    if(e.keyCode == 27){
        gallery.classList.remove('show__image');
        wrapperImage.classList.remove('hidden');
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
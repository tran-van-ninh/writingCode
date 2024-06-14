var btnSearch = document.querySelector('.search-box__btn');
var searchBox = document.querySelector('.search-box');

// btnSearch.onclick = () =>{
//     searchBox.classList.toggle('open');
// }

btnSearch.onclick = function(){
    this.parentElement.classList.toggle('open');
    console.log(this.previousElementSibling);
    this.previousElementSibling.focus();
}
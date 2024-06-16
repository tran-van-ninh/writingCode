var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var content = $('.content');
var input = $('.content input');
var btnRemoveAll = $('.remove-all');

var tags = ['NodeJs', 'ReactJs'];

function showTags(){
    content.innerHTML = '';
    let virtualTagDoms = '';
    for(let i in tags){
        content.innerHTML += `
            <li>
                ${tags[i]}
                <i class="fa-solid fa-xmark" onclick = 'removeTag(${i})'></i>
            </li>
        `
    }
    content.appendChild(input);
    input.focus();
}

showTags();

function addTag(){
}

input.addEventListener('keydown', function(event){
    if(event.key == 'Enter' && input.value.trim() != ''){
        tags.push(input.value.trim());
        showTags();
        input.value = '';
        addTag();
    }
})

function removeTag(index){
    tags.splice(index, 1);
    showTags();
}

btnRemoveAll.onclick = ()=>{
    tags = [];
    input.value = '';
    showTags();
}
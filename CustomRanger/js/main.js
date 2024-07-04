var $ = document.querySelector.bind(document);
var range = $(".range");
var process = $(".process");
var value = $(".process span");
var body = $("body");
range.addEventListener("mousemove", function(e){
    // console.log(e.offsetX- this.offsetWidth)
    var processWidth = e.pageX - this.offsetLeft;
    var percent = Math.floor(processWidth / this.clientWidth * 100);
    //console.log([this])
    //this.firstElementChild.innerText = `${percent}%`
    updatePercent(percent);
})

function updatePercent(percent){
    process.style.width = `${percent}%`;
    value.innerText = `${percent}%`;
    
}
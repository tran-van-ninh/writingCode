var $ = document.querySelector.bind(document);

var myPicture = $('#my-picture');
var preview = $('label');
var span = $('span');
console.log([preview])
console.log(preview.lastElementChild)
myPicture.addEventListener('change', function(e){
     // Xóa tất cả các ảnh con của preview trước khi thêm ảnh mới
     var imgs = preview.querySelectorAll('img');
     imgs.forEach(function(img) {
         preview.removeChild(img);
     });

    let img = document.createElement('img');
    let file = myPicture.files[0];
    if(!file){
        return;
    }
    if(!file.name.endsWith('.jpg')){
        // alert('Hình ảnh phải thuộc định dạng jpg');
        //span.innerText = 'Hình ảnh phải thuộc định dạng jpg';
        alert('Hình ảnh phải thuộc định dạng jpg')
        return;
    }else{
        span.innerText = '';
    }
    if(file.size / (1024*1024) > 5){
        alert('bạn phải thêm ảnh nhỏ hơn 5m');
        return;
    }
    console.log(file);
    
    console.log(URL.createObjectURL(file));
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = function(e){
        console.log('load ok' , e.target.result);
        img.src = e.target.result;
    }
    // img.src = URL.createObjectURL(file);
    preview.appendChild(img);
});
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var search = $('.search');
var city = $('.city');
var country = $('.country');
var content = $('.content');
var value = $('.value');
var shortDesc = $('.short-desc');
var visibility = $('.visibility span');
var wind = $('.wind span');
var sun = $('.sun span');
var time = $('.time');

async function changeWeatherUI() {
    let capitalSearch = search.value.trim();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=87b4219b79f90d89db28b724b99b1a60`;
    try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        console.log(data.cod);
        if (data.cod == 200) {
            city.innerText = data.name;
            country.innerText = data.sys.country;
            visibility.innerText = data.visibility + 'm';
            wind.innerText = data.wind.speed + 'm/s';
            sun.innerText = data.main.humidity + '%';
            shortDesc.innerText = data.weather[0] ? data.weather[0].main : '';
            value.innerHTML = `${Math.floor(data.main.temp - 273.15)} <sup>o</sup>C`;
        } else {
            alert('Không tìm thấy thông tin thời tiết cho thành phố này.');
        }
    } catch (error) {
        console.error('Đã xảy ra lỗi:', error);
        alert('Có lỗi xảy ra khi tìm kiếm thông tin thời tiết. Vui lòng thử lại sau.');
    }
}

search.addEventListener('keypress', function(e) {
    if (e.code === 'Enter') {
        changeWeatherUI();
    }
});

// Hàm cập nhật thời gian thực
function updateTime() {
    time.innerText = new Date().toLocaleString('vi');
}

// Cập nhật thời gian mỗi giây
setInterval(updateTime, 1000);

// Gọi hàm updateTime ngay lập tức để hiển thị thời gian ngay khi tải trang
updateTime();

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000 / 60) };
function isElementInViewport(e) {
    if (typeof jQuery === "function" && e instanceof jQuery) {
        e = e[0];
    }
    var rect = e.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

const headerTitleSlideIn = document.querySelectorAll('.header__label__title');
const bodyTitleImg = document.querySelectorAll('.body__content__title__img');
const bodyContentExImg = document.querySelectorAll('.body__content__desc__ex-img img');
const bodyContentMainImg = document.querySelectorAll('.body__content__desc__main-img img')
const bodyContentTitle = document.querySelectorAll('.body__content__title > span');
const bodyContentExLine = document.querySelectorAll('.body__content__desc__ex-img__line');

function loop() {
    headerTitleSlideIn.forEach(function (e) {
        if (isElementInViewport(e)) {
            e.classList.add('header-title__slide-in');
        }
        else {
            e.classList.remove('header-title__slide-in');
        }
    });

    bodyTitleImg.forEach(function (e) {
        if (isElementInViewport(e)) {
            e.classList.add('body__content__title__img__slide-in');
        } else {
            e.classList.remove('body__content__title__img__slide-in');
        }
    });

    bodyContentExImg.forEach(function (e) {
        if (isElementInViewport(e)) {
            e.classList.add('body__content__desc__ex-img__showUp');
        }
        else {
            e.classList.remove('body__content__desc__ex-img__showUp');
        }
    });

    bodyContentMainImg.forEach(function (e) {
        if (isElementInViewport(e)) {
            e.classList.add('body__content__desc__main-img__showUp');
        }
        else {
            e.classList.remove('body__content__desc__main-img__showUp');
        }
    });

    bodyContentTitle.forEach(function (e) {
        if (isElementInViewport(e)) {
            e.classList.add('body__content__title__showUp');
        }
        else {
            e.classList.remove('body__content__title__showUp');
        }
    });

    bodyContentExLine.forEach(function (e) {
        if (isElementInViewport(e)) {
            e.classList.add('body__content__desc__ex-img__line__showUp');
        }
        else {
            e.classList.remove('body__content__desc__ex-img__line__showUp');
        }
    });
    scroll(loop);
}
loop();

// Change sun body info language
const changeLanguageBtn = document.querySelectorAll('.body__content__info__change-language');

const bodyDescEngTitle = [
    'Mass:',
    'Average diameter:',
    'Surface area:',
    'Volume:',
    'Mean density:',
    'Surface temperature:',
    'Center temperature:',
    'Mean distance from Earth:'
]
const bodyDescVieTitle = [
    'Khối lượng:',
    'Đường kính trung bình:',
    'Diện tích bề mặt:',
    'Thể tích:',
    'Tỷ trọng (trung bình):',
    'Nhiệt độ bề mặt:',
    'Nhiệt độ tâm:',
    'Khoảng cách đến Trái Đất:'
]

function changeBodyIntoEnglish(bodyInfoTitle, bodyInfoHeader) {
    for (let i = 0; i < 8; i++) {
        bodyInfoTitle[i].innerText = bodyDescEngTitle[i];
    }
    bodyInfoHeader.innerText = 'Profile';
}
function changeBodyIntoVietnamese(bodyInfoTitle, bodyInfoHeader) {
    for (let i = 0; i < 8; i++) {
        bodyInfoTitle[i].innerText = bodyDescVieTitle[i];
    }
    bodyInfoHeader.innerText = 'Thông tin';
}

changeLanguageBtn.forEach(function (e) {
    e.addEventListener('click', () => {
        let idParent = e.parentNode.parentNode.parentNode.parentNode.parentNode.id;
        let classParent = e.parentNode.childNodes[5].childNodes[1].className;
        let bodyInfoTitle = document.querySelectorAll(`#${idParent} .${classParent} > span:first-child`);
        let bodyInfoHeader = bodyInfoTitle[0].parentNode.parentNode.parentNode.childNodes[1];
        if (e.childNodes[0].nodeValue.trim() === 'English') {
            e.childNodes[0].nodeValue = 'Tiếng Việt';
            changeBodyIntoEnglish(bodyInfoTitle, bodyInfoHeader);
        }
        else {
            e.childNodes[0].nodeValue = 'English';
            changeBodyIntoVietnamese(bodyInfoTitle, bodyInfoHeader);
        }
    }, false);
});
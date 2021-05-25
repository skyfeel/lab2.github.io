/* Инициализация стратовых значений */
let slideIndex=1;
/* Получение данных из localStorage */
slideIndex=Number(localStorage.getItem("slideIndexStorage"));
/* Контроль нажатий */
document.addEventListener('keydown', function(e){
    switch(e.key){

        case "ArrowLeft":  // если нажата клавиша влево
            minusSlide()
            break;
        case "ArrowRight":   // если нажата клавиша вправо
            plusSlide()
            break;
        case "Escape":
            let pane=document.querySelector(".pane");
            pane.remove();
            break;

    }
});

showSlides(slideIndex);

/* Функция показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция сладера */
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("item");
    const dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    console.log(slideIndex);
    localStorage.setItem("slideIndexStorage",String(slideIndex));
}


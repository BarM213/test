var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo1");
    var captionText = document.getElementById("caption");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

function toggle(checkall) //מסמן את כל המוצרים בסל הקניות
{
    checkboxes = document.getElementsByClassName("products");
    for( i=0; i<checkboxes.length;i++)
        {
            checkboxes[i].checked = checkall.checked;
        }
}

function turnOff(minusCheck) //מוריד את הסימון של ״סמן הכל״
{
    console.log(minusCheck.checked);
    checkbox= document.getElementById("selectAll");
    if(minusCheck.checked ==false)
    {
        checkbox.checked = false;
    }
}
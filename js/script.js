// function showSlide(name) {
//     // alert(name);
//     document.getElementById('main-img').src=name;
// }
var i=0;
function slideShow() {
    var slider=['img/1.jpeg', 'img/2.jpeg', 'img/3.jpeg', 'img/4.jpg'];
    if (i<slider.length) {
        document.getElementById('main-img').src = slider[i]; 
        i++;
    }else {
        i=0;
    }
    
   
    
}
setInterval('slideShow()',1000);
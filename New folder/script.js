    const nav = document.getElementById('nav');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
         logo.src = 'images.png';
      } else {
        nav.classList.remove('scrolled');
        logo.src = 'logo.png';
      }
    });
const imgs = document.querySelectorAll(".header-slide ul img");
const prev = document.querySelector(".ctr-prev");
const next = document.querySelector(".ctr-next");
 var n=0;
 function change_slide(){
 for(var i=0; i<imgs.length; i++)
{
    imgs[i].style.display="none";
}
  imgs[n].style.display="block";
}
change_slide();

prev.addEventListener("click", function (e) {
  e.preventDefault(); // stops default scroll behavior
  n = (n > 0) ? n - 1 : imgs.length - 1;
  change_slide();
});

next.addEventListener("click", function (e) {
  e.preventDefault();
  n = (n < imgs.length - 1) ? n + 1 : 0;
  change_slide();
});
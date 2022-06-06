function myFunction() {
    var dots = document.getElementsByClassName("dots");
    var moreText = document.getElementsByClassName("expand");
    var btnText = document.getElementsByClassName("myBtn");
  
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "More...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Less";
    moreText.style.display = "inline";
    }
  }
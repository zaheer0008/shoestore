import "./slideshow.css";

var slideIndex = 0;

function SlideShow() {
    return (
        <div className="w3-display-container" >
            <img className="mySlides" src="/images/slideshow/41u06HG0ScL.jpeg" style={{width: "100%"}} alt="man" />
                <img className="mySlides" src="/images/slideshow/women-slideshow.jpeg" style={{width: "100%"}} alt="women" />
                    <img className="mySlides" src="/images/slideshow/kids-slideshow.jpeg" style={{width: "100%"}} alt="kids" />
                        <div className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style={{width: "100%"}}>
                            <div className="w3-left w3-hover-text-khaki" onClick={()=>{plusDivs(-1)}}>&#10094;</div>
                            <div className="w3-right w3-hover-text-khaki" onClick={()=>{plusDivs(1)}}>&#10095;</div>
                            <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={()=>{currentDiv(1)}}></span>
                            <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={()=>{currentDiv(2)}}></span>
                            <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={()=>{currentDiv(3)}}></span>
                        </div>
        </div>
    );
}

window.onload = () =>{showDivs(slideIndex)}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";

  setTimeout(showDivs, 2000);
  
}

export {SlideShow};
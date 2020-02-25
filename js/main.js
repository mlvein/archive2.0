// var img = document.querySelectorAll(".image-hold");
// document.body.classList.add('js-loading');
// img.addEventListener("load", removeLoadingClass);
// function removeLoadingClass() {
//   document.body.classList.remove('js-loading');
// }

//lazyload css background-image

document.addEventListener("DOMContentLoaded", function() {
	var lazyloadImages;    
  
	if ("IntersectionObserver" in window) {
	  lazyloadImages = document.querySelectorAll(".lazy");
	  var imageObserver = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
		  if (entry.isIntersecting) {
			var image = entry.target;
			image.classList.remove("lazy");
			image.classList.add("loaded");
			imageObserver.unobserve(image);
		  }
		});
	  });
  
	  lazyloadImages.forEach(function(image) {
		imageObserver.observe(image);
	  });
	} else {  
	  var lazyloadThrottleTimeout;
	  lazyloadImages = document.querySelectorAll(".lazy");
	  
	  function lazyload () {
		if(lazyloadThrottleTimeout) {
		  clearTimeout(lazyloadThrottleTimeout);
		}    
  
		lazyloadThrottleTimeout = setTimeout(function() {
		  var scrollTop = window.pageYOffset;
		  lazyloadImages.forEach(function(img) {
			  if(img.offsetTop < (window.innerHeight + scrollTop)) {
				img.src = img.dataset.src;
				img.classList.remove('lazy');
				image.classList.add("loaded");
			  }
		  });
		  if(lazyloadImages.length == 0) { 
			document.removeEventListener("scroll", lazyload);
			window.removeEventListener("resize", lazyload);
			window.removeEventListener("orientationChange", lazyload);
		  }
		}, 20);
	  }
  
	  document.addEventListener("scroll", lazyload);
	  window.addEventListener("resize", lazyload);
	  window.addEventListener("orientationChange", lazyload);
	}
  });

//Key Bindings

document.addEventListener("keyup",function(e){
	var key = e.which||e.keyCode;
	switch(key){
	// 1
	case 49:
        window.location.href = "https://www.melvinalvarez.com/";
	break;
	//2
	case 50:
        window.location.href = "about";
	break;
	//3
	//case 51:
		//window.location.href = "process";
	//break;
	//4
	case 52:
        window.location.href = "resources";
	break;
	//5
	//case 53:
        //window.location.href = "shop";
	break;
	}
});

//random anim elements

var min = 2;
var max = 5;
var flips = Math.floor(Math.random() * (+max - +min)) + +min; 
// console.log(flips);
var loadingLine = document.getElementById('headerLine');
loadingLine.style.setProperty('--random-flips', flips);


  
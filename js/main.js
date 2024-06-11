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

//Sidebar Quotes

var sidebarText = [
	"Somewhere something incredible is waiting to be known",
	"Like to the apples on the Dead Sea’s shore, all ashes to the taste.",
	"It is not the mountain we conquer but ourselves.",
	"I thought clay must feel happy in the good potter’s hand.",
	"If there are no dogs in Heaven, then when I die I want to go where they went.",
	"When you find yourself in a hole, quit digging.",
	"The world offers itself to your imagination",
	"The lone and level sands stretch far away",
	"Vessels large may venture more, but little boats should keep near shore.",
	"Thousands have lived without love, not one without water.",
	"I shot an arrow into the air. It fell to earth, I knew not where.",
	"Bronze is the mirror of the form, wine of the mind.",
	"Sometimes the wheel turns slowly, but it turns.",
	"Don’t reinvent the wheel, just realign it.",
	"And all I ask is a tall ship and a star to steer her by.",
	"Set your course by the stars, not by the lights of every passing ship.",
	"Wealth consists not in having great possessions, but in having few wants.",
	"A man on a horse is spiritually as well as physically bigger than a man on foot.",
	"There is nothing but a plank between a sailor and eternity.",
	"Create with the heart; build with the mind.",
	"The four building blocks of the universe are fire, water, gravel and vinyl.",
	"One man’s ‘magic’ is another man’s engineering.",
	"Tactics mean doing what you can with what you have.",
	"Strategy requires thought; tactics require observation.",
	"We are all apprentices in a craft where no one ever becomes a master.",
	"Betwixt the stirrup and the ground, Mercy I asked, mercy I found.",
	"Remember that people break down, too, not just machinery.",
	"The purpose of education is to replace an empty mind with an open one.",
	"It is the mark of an educated mind to be able to entertain a thought without accepting it.",
	"Blast – Build – Battle",
	"Rocks in my path? I keep them all. With them I shall build my castle.",
	"If you see a castle under fog, you must walk there to meet the extraordinary dreams.",
	"Not all who wander are lost.",
	"What can be labeled, packaged, mass produced is neither truth nor art.",
	"What gunpowder did for war the printing press has done for the mind.",
	"It’s not the towering sails, but the unseen wind that moves a ship.",
	"All the best romances bloom in the midst of a good siege.",
	"Economics is a subject that does not greatly respect one’s wishes.",
	"You and I come by road or rail, but economists travel on infrastructure.",
	"Aim for the moon. If you miss, you may hit a star.",
	"Better to fight for something than live for nothing.",
	"The chief incalculable in war is the human will.",
	"Nothing on this earth lasts forever. Except maybe plastic.",
	"To err is human, but to really foul things up you need a computer.",
	"A satellite has no conscience.",
	"If you do not change direction, you may end up where you were heading.",
	"I’ll be back.",
	"There is nothing like a dream to create the future.",
	"Even though the future seems far away, it is actually beginning right now.",
	"Without craftsmanship, inspiration is a mere reed shaken in the wind.",
	"Bravery is being the only one who knows you’re afraid.",
	"Divide and rule, a sound motto. Unite and lead, a better one.",
	"All the world’s a stage, and all the men and women merely players.",
	"Invincibility lies in the defense; the possibility of victory in the attack.",
	"I've lived through some terrible things in my life, some of which actually happened.",
	"In democracy it’s your vote that counts; in feudalism it’s your count that votes.",
	"If winning isn’t everything, why do they keep score?",
	"Distracted from distraction by distraction!",
	"Time rolls ever forward without a pause",
	"I fear the sun setting on my youth.",
	"As soon as you trust yourself, you will know how to live.",
	"I beheld the wretch — the miserable monster whom I had created.",
	"Don’t watch the big clock; do what it does. Keep going."
  ];
  var randomNumber = Math.floor(Math.random() * sidebarText.length);
  document.getElementById("sidebarQuote").innerHTML = sidebarText[randomNumber];

//random anim elements

// var min = 2;
// var max = 5;
// var flips = Math.floor(Math.random() * (+max - +min)) + +min; 
// // console.log(flips);
// var loadingLine = document.getElementById('headerLine');
// loadingLine.style.setProperty('--random-flips', flips);


  
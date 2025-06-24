// Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myTopnav");
var btnContainer = document.getElementsByClassName("navbar-nav");
var btns = document.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}


// Function to animate the counter
function animateCounter(counterElement, duration = 2000) {
  const target = +counterElement.getAttribute('data-target');
  let count = 0;
  const step = Math.ceil(target / (duration / 10)); // adjust steps per frame

  const updateCounter = () => {
    count += step;
    if (count >= target) {
      counterElement.innerText = target;
    } else {
      counterElement.innerText = count;
      // requestAnimationFrame(updateCounter);
      setTimeout(updateCounter, 1);
    }
  };

  updateCounter();
}

// Start animation on window load
window.onload = () => {
  const counters = document.querySelectorAll('.counter2');
  // counters.forEach(counterElement => animateCounter(counterElement));

  counters.forEach(counterElement => {
    const target = +counterElement.getAttribute('data-target');
    let count = 0;
    const step = Math.ceil(target / 1000); // adjust steps per frame

    const updateCounter = () => {
      count += step;
      if (count >= target) {
        counterElement.innerText = target;
      } else {
        counterElement.innerText = count;
        requestAnimationFrame(updateCounter);
        // setTimeout(updateCounter, 1);
      }
    };

    updateCounter();
  });
};

const counters = document.querySelectorAll('.counter');
const options = {
  threshold: 0.5 // Trigger when 50% of element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target); // Run only once
    }
  });
}, options);

counters.forEach(counter => {
  observer.observe(counter);
});

// const countersServices = document.querySelectorAll('.counter-services2');

// const observerServices = new IntersectionObserver((entriesServices, observerServices) => {
//   entriesServices.forEach(entryServices => {
//     if (entryServices.isIntersecting) {
//       animateCounter(entryServices.target);
//       observerServices.unobserve(entryServices.target); // Run only once
//     }
//   });
// }, options);

// countersServices.forEach(counterServices => {
//   observerServices.observe(counterServices);
// });






// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.padding = "80px 10px";
//     document.getElementById("logo").style.fontSize = "35px";
//   }
// }


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "navbar") {
//     x.className += " responsive";
//   } else {
//     x.className = "navbar";
//   }
// }










$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.href;
  // captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
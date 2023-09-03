// the mouse follower

var cursor = new MouseFollower();

// the tab contents

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " tab-active";
}

// Initially hide all tab contents
var tabContents = document.getElementsByClassName("oip");
for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
}

// end of tab

// the link of learn more div

document.addEventListener("DOMContentLoaded", function () {
    const learnMoreButton = document.getElementById("learn-more-button");
    const tabadiv = document.getElementById("Taba");

    learnMoreButton.addEventListener("click", function (e) {
        e.preventDefault();
        tabadiv.scrollIntoView({ behavior: "smooth" });
    });
});



// magnetic button

 var magnets = document.querySelectorAll('.magnetic');
var strength = 50;

magnets.forEach((magnet) => {
    magnet.addEventListener('mousemove', moveMagnet);
    magnet.addEventListener('mouseout', function (event) {
        gsap.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut });
    });
});

function moveMagnet(event) {
    var magnetButton = event.currentTarget;
    var bounding = magnetButton.getBoundingClientRect();

    gsap.to(magnetButton, 1, {
        x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
        y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
        ease: Power4.easeOut
    });
}


// Set the date we're counting down to
var countDownDate = new Date("Apr 6, 2019 09:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            days = 00;
            hours = 00;
            minutes = 00;
            seconds = 00;
        }

    // Display the result in the element with id="demo"
    document.querySelector(".countdown_days > .time").innerHTML = days;
    document.querySelector(".countdown_hours > .time").innerHTML = hours;
    document.querySelector(".countdown_mins > .time").innerHTML = minutes;
    document.querySelector(".countdown_secs > .time").innerHTML = seconds;
}, 1000);


// initializing the map from google maps
function initMap() {
    // The location of Bilkent University
    var location = { lat: 39.868345, lng: 32.765286 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 12, center: location });
    // The marker, positioned at location
    var marker = new google.maps.Marker({ position: location, map: map });
}


wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
)
// initializing WOW
wow.init();
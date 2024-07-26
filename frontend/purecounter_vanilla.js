// purecounter_vanilla.js

(function() {
    // Define the PureCounter function
    window.PureCounter = function() {
      // Select all elements with class 'purecounter' and initialize them
      var counters = document.getElementsByClassName('purecounter');
      
      // Loop through each counter element
      Array.prototype.forEach.call(counters, function(counter) {
        var start = parseInt(counter.getAttribute('data-purecounter-start')) || 0; // Starting number
        var end = parseInt(counter.getAttribute('data-purecounter-end')) || 100; // Ending number
        var duration = parseInt(counter.getAttribute('data-purecounter-duration')) || 2; // Duration in seconds
        
        // Calculate increment value and interval time
        var range = end - start;
        var increment = end > start ? 1 : -1;
        var stepTime = Math.abs(Math.floor(duration * 1000 / range));
        
        // Function to update counter text
        var updateCounter = function() {
          start += increment;
          counter.textContent = start;
          if ((increment > 0 && start >= end) || (increment < 0 && start <= end)) {
            clearInterval(timer);
          }
        };
        
        // Initial update
        counter.textContent = start;
        
        // Set interval to update counter value
        var timer = setInterval(updateCounter, stepTime);
      });
    };
  })();
  
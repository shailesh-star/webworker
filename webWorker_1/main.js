let myWorker = null;
let currentImageIndex = 0;

// function calculateSumWrongway(limit) {
//   let sum = 0;
//   for (let i = 1; i <= limit; i++) {
//       sum += i;
//   }
//   return sum;
// }
// document.getElementById("result").innerHTML = calculateSumWrongway(999999990);

function startWorker() {
    if (typeof(Worker) !== "undefined") {
        if (myWorker === null) {
          let myWorker = new Worker("http://localhost:8000/myworker.js");
            myWorker.postMessage("hello worker");
            myWorker.onmessage = function(event) {
                document.getElementById("result").innerHTML = "Result from worker: " + event.data;
            };
        } else {
            console.error("Worker is already running.");
        }
    } else {
        document.getElementById("result").innerHTML = "Web Workers are not supported in this browser.";
    }
}

function stopWorker() {
    if (myWorker !== null) {
        myWorker.terminate();
        myWorker = null;
        document.getElementById("result").innerHTML = "Worker terminated.";
    } else {
        console.error("No worker is running.");
    }
}

// function changeButtonColor() {
//   // Array of possible colors
//   const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF33A6", "#33B5FF", "#FFD933"];

//   // Get the button element by its ID
//   const button = document.getElementById("bgButton");

//   // Get a random color from the array
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];

//   // Change the background color of the button
//   button.style.backgroundColor = randomColor;
// }

function showRandomImage() {
  
   // Array of image IDs
   const imageIds = ["image1", "image2", "image3"];

   // Hide all images
   const allImages = document.querySelectorAll('.hiddenImage');
   allImages.forEach(image => image.style.display = 'none');

   // Show the next image in sequence
   const nextImageId = imageIds[currentImageIndex];
   const nextImage = document.getElementById(nextImageId);
   
   if (nextImage) {
       nextImage.style.display = 'block';
       currentImageIndex = (currentImageIndex + 1) % imageIds.length; // Move to the next image in a circular manner
   }
}
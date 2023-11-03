
let countday = document.querySelector("#days")
let counthours = document.querySelector("#hours")
let countminutes = document.querySelector("#minutes")
let countsecond = document.querySelector("#seconds")

let count = () => {


    let futureDate = new Date("1 Jan 2024");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;


    let days = Math.floor(myDate / 1000 / 60 / 60/ 24);

    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
   

    let min = Math.floor(myDate / 1000 / 60 ) % 60;
   
    let sec = Math.floor(myDate / 1000  ) % 60;
    

    countday.innerHTML = days;
  counthours.innerHTML = hours;
    countminutes.innerHTML = min;
    countsecond.innerHTML = sec;



}

count()

setInterval(count, 1000)


































// // Get today's date and time
// const now = new Date()
// // Set the countdown date to 1 year from now
// now.setFullYear(now.getFullYear() + 1)
// // Update every second
// const timerUpdate = setInterval(() => {
//     // Calculate difference between current time and countdown end
//     const diffInMs = now - performance.now();
//     if (diffInMs < 0){
//         clearInterval(timerUpdate);
//         return;
//         }
//         const secondsLeft = Math.floor((diffInMs % 86400000)/1000);
//         const minutesLeft = Math.floor((secondsLeft%3600)/60);
//         const hoursLeft = Math.floor(secondsLeft/3600);
//         const daysLeft = Math.floor(secondsLeft/(24*60*60));
//         // Output results in HTML elements
//         countday.textContent = `${daysLeft}`;
//         counthours.textContent = `${hoursLeft}`;
//         countminutes.textContent = `${minutesLeft}`;
//         countsecond.textContent = `0`;
//         }, 1000);
        






  
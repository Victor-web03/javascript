const months = [
    { name: "January", days: 31 },
    { name: "February", days: 28 },
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31 },
    { name: "June", days: 30 },
    { name: "July", days: 31 },
    { name: "August", days: 31 },
    { name: "September", days: 30 },
    { name: "October", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 },
]

// Function to update February days for leap years
function updateFebruaryDays(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        months[1].days = 29;
    } else {
        months[1].days = 28;
    }
}




// Function to display days in each month
// function displayDays(year) {
//     updateFebruaryDays(year);
//     const resultHtml = months
//       .map((month) => `${month.name}: ${month.days} days`)
//       .join("<br>");
//     document.getElementById("result").innerHTML = resultHtml;
//   }

//   // Call the function with the current year
//   displayDays(new Date().getFullYear());

// Function to display days in selected month
function displayDays(monthIndex) {
    const year = new Date().getFullYear();
    updateFebruaryDays(year);
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `${months[monthIndex].name}: ${months[monthIndex].days} days`;
}



// Add event listeners to month buttons
document.getElementById("january-btn").addEventListener("click", () => displayDays(0));
document.getElementById("february-btn").addEventListener("click", () => displayDays(1));
document.getElementById("march-btn").addEventListener("click", () => displayDays(2));
document.getElementById("april-btn").addEventListener("click", () => displayDays(3));
document.getElementById("may-btn").addEventListener("click", () => displayDays(4));
document.getElementById("june-btn").addEventListener("click", () => displayDays(5));
document.getElementById("july-btn").addEventListener("click", () => displayDays(6));
document.getElementById("august-btn").addEventListener("click", () => displayDays(7));
document.getElementById("september-btn").addEventListener("click", () => displayDays(8));
document.getElementById("october-btn").addEventListener("click", () => displayDays(9));
document.getElementById("november-btn").addEventListener("click", () => displayDays(10));
document.getElementById("december-btn").addEventListener("click", () => displayDays(11));



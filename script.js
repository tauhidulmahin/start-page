//Mode Light & Dark

function darkMode() {
	let element = document.body;
	let content = document.getElementById("DarkModetext");
	element.className = "dark-mode";
	content.innerText = "Dark Mode is ON";
}
function lightMode() {
	let element = document.body;
	let content = document.getElementById("DarkModetext");
	element.className = "light-mode";
	content.innerText = "Dark Mode is OFF";
}



//News Articles

let newsUrl = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=0a57ab53b6e349f8934f6ecb46b23a71`
fetch(newsUrl)
    .then(response => response.json())
    .then(data => {
        let newsList = "";
        for (const news of data.articles) {
            newsList += `<tr>
            <td>${news.author}</td>
            <td><a href = "${news.url}" target = "_blank">${news.title}<?a></td>
            </tr>`;
        }
        const tbodyOfTable = document.querySelector("#fetchList tbody");
        tbodyOfTable.innerHTML = newsList;
    })

    .catch(error => console.error('Error:', error));


//Weather Widget

window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
   window.weatherWidgetConfig.push({
       selector:".weatherWidget",
       apiKey:"855H5UBA2T5FMG24KDPZGBMGS&contentType=json", //Sign up for your personal key
       location:"DHAKA, BANGLADESH", //Enter an address
       unitGroup:"metric", //"us" or "metric"
       forecastDays:5, //how many days forecast to show
       title:"Dhaka,BD", //optional title to show in the 
       showTitle:true, 
       showConditions:true
   });
  
   (function() {
   var d = document, s = d.createElement('script');
   s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
   s.setAttribute('data-timestamp', +new Date());
   (d.head || d.body).appendChild(s);
   })();



//Photo Gallery

let photoUrl = `https://picsum.photos/v2/list?page=2&limit=56`;
fetch(photoUrl)
    .then(response => response.json())
    .then(data => {
        let photoGallery = "";
        for (const photo of data) {
            photoGallery += `<img src= ${photo.download_url} width ="52px" height = "50px">`;
        }
        const tbodyOfTable = document.querySelector("#fetchGallery");
        tbodyOfTable.innerHTML = photoGallery;
    })

    .catch(error => console.error('Error:', error));



//Calendar
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");

const currdate = document
	.querySelector(".calendar-current-date");

const prenexIcons = document
	.querySelectorAll(".calendar-navigation span");

// Array of month names
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

// Function to generate the calendar
const manipulate = () => {

	// Get the first day of the month
	let dayone = new Date(year, month, 1).getDay();

	// Get the last date of the month
	let lastdate = new Date(year, month + 1, 0).getDate();

	// Get the day of the last date of the month
	let dayend = new Date(year, month, lastdate).getDay();

	// Get the last date of the previous month
	let monthlastdate = new Date(year, month, 0).getDate();

	// Variable to store the generated calendar HTML
	let lit = "";

	// Loop to add the last dates of the previous month
	for (let i = dayone; i > 0; i--) {
		lit +=
			`<li class="inactive">${monthlastdate - i + 1}</li>`;
	}

	// Loop to add the dates of the current month
	for (let i = 1; i <= lastdate; i++) {

		// Check if the current date is today
		let isToday = i === date.getDate()
			&& month === new Date().getMonth()
			&& year === new Date().getFullYear()
			? "active"
			: "";
		lit += `<li class="${isToday}">${i}</li>`;
	}

	// Loop to add the first dates of the next month
	for (let i = dayend; i < 6; i++) {
		lit += `<li class="inactive">${i - dayend + 1}</li>`
	}

	// Update the text of the current date element 
	// with the formatted current month and year
	currdate.innerText = `${months[month]} ${year}`;

	// update the HTML of the dates element 
	// with the generated calendar
	day.innerHTML = lit;
}

manipulate();

// Attach a click event listener to each icon
prenexIcons.forEach(icon => {

	// When an icon is clicked
	icon.addEventListener("click", () => {

		// Check if the icon is "calendar-prev"
		// or "calendar-next"
		month = icon.id === "calendar-prev" ? month - 1 : month + 1;

		// Check if the month is out of range
		if (month < 0 || month > 11) {

			// Set the date to the first day of the 
			// month with the new year
			date = new Date(year, month, new Date().getDate());

			// Set the year to the new year
			year = date.getFullYear();

			// Set the month to the new month
			month = date.getMonth();
		}

		else {

			// Set the date to the current date
			date = new Date();
		}

		// Call the manipulate function to 
		// update the calendar display
		manipulate();
	});
});




//clock 
setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
 
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);



//News Articles

let newsUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0a57ab53b6e349f8934f6ecb46b23a71`
fetch(newsUrl)
    .then(response => response.json())
    .then(data => {
        let newsList = "";
        for (const news of data.articles) {
            newsList += `<tr>
            <td>${news.source.name}</td>
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



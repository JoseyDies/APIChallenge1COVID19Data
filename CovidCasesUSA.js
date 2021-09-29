


fetch("https://api.covid19api.com/summary")
.then(res => res.json())
.then((data) => {
    let us = data.Countries[183];
    console.log(data.Countries[183]);
    // document.getElementById('country').innerHTML = us.Country + "<br>" + "";
    document.getElementById('newConfirmed').innerHTML = us.NewConfirmed.toLocaleString("en-US") + "<br>" + "New Cases Confirmed";
    document.getElementById('totalConfirmed').innerHTML = us.TotalConfirmed.toLocaleString("en-US") + "<br>" + "Total Confirmed";
    document.getElementById('newDeaths').innerHTML = us.NewDeaths.toLocaleString("en-US") + "<br>" + "New Deaths";
    document.getElementById('totalDeaths').innerHTML = us.TotalDeaths.toLocaleString("en-US") + "<br>" + "Total Deaths";
    document.getElementById('newRecovered').innerHTML = us.NewRecovered.toLocaleString("en-US") + "<br>" + "New Recoveries";
    document.getElementById('totalRecovered').innerHTML = us.TotalRecovered.toLocaleString("en-US") + "<br>" + "Total Recovered"; 
    document.getElementById('date').innerHTML = us.Date.toLocaleString("en-US") + "<br>" + "Date";
});
   

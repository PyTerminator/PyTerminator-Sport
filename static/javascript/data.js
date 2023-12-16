let c_container = document.getElementById("countries-container")

fetch("https://v3.football.api-sports.io/countries", {
	method: "GET",   
	headers: {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "1f907b7ab05174aa9c3d739797f16b83", 
	}
})
.then(response => { 
    return response.json();
  })
  .then(data => { 
    c_container.innerHTML = ""
    data.response.forEach(country => {
        c_container.innerHTML += `
            <li>
                <img src="${country.flag}" alt="Sport - Azerbaijan">
                <p>${country.name}</p>
                <div class="live"> - </div>
            </li>
        `
    });
  })
  .catch(err => {
    console.log(err);
  });
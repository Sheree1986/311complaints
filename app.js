// **Instruction**  Minimum Viable Product (MVP)

// Below is a more detailed list of what functionalities Dougie and Pizza Rat want for their app.

// Users should be able to see five buttons for the five boroughs (manhattan, brooklyn, queens, staten island, bronx) of New York City when they load the page
// Users should also be able to see an input box where they can put in a number of how many complaints they want to see
// When the user clicks on one of the five buttons, a list of complaints should be displayed on the page, according to the number they input AND the borough they clicked on
// If the user doesn't input any number, make the default be 10
// Remember, also, they only want complaints that were handled by the NYPD! (hint: consider filtering for a specific "agency" when making the API call)
// When the list of complaints is shown, each complaint should also have a button on it that reads something along the lines of "toggle police response"
// When the user clicks on on the "toggle police response" button, it should then toggle how the police responded to that particular complaint
// Make sure it only toggles the response for that one complaint, not the entire list!



let complaintType = document.getElementsByClassName("responses")
reportType = () => document.getElementById('nyp-reports').value
document.getElementById("nyp-reports").addEventListener("number", function() {
  let num = parseInt(this.value);
  if (num < 9) this.num = 10;
});

//not able to set the value to min 10. The drop down menu sets it to 10. but when the user input manually it doesn't work.

function updateReport(r){
for (i = 0; i < reportType(); i++) {
let updatedReport= r[i].descriptor + `<button onmouseover="document.getElementById('nyp-${i}').innerHTML = '${r[i].resolution_description}'" onmouseout="document.getElementById('npy-${i}').innerHTML = ''">toggle police response</button>` + `<p id="nyp-${i}"></p>`
if (complaintType[i].innerHTML === '') {
complaintType[i].innerHTML = updatedReport
} else {
complaintType[i].textContent = ''
}
}
}
function apiList(boroughNYC) {
fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${reportType()}&borough=${boroughNYC}&agency=NYPD`)
.then(response => response.json())
.then(data => updateReport(data))
}
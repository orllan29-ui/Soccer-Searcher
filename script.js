//==============================================================================================================================================
async function fetchData() {
    try {
        const playerName = document.getElementById("pokemonName").value.trim();
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=${encodeURIComponent(playerName)}`)
        const data = await response.json();
        console.log(data);
        if (!data.player) {
            document.getElementById("error").textContent = "Player not found";
            return;
        }
        const player = data.player[0];
        const playerId = player.idPlayer;

        const badge = document.getElementById("badge");
        badge.src = player.strCutout || player.strThumb;
        badge.style.display = "block";

        document.getElementById("position").textContent = player.strPosition;
        document.getElementById("nationality").textContent = player.strNationality;
        document.getElementById("player-team").textContent = player.strTeam
        document.getElementById("player-sport").textContent = player.strSport

//================================================================================================================================
        const detailsRes = await fetch(`https://www.thesportsdb.com/api/v1/json/123/lookupplayer.php?id=${playerId}`);
        const detailsData = await detailsRes.json();

        const fullPlayer = detailsData.players[0];   

        const description = document.getElementById("description");
        description.textContent = fullPlayer.strDescriptionEN || "No description available.";
//===========================================================================================(=====================================
if (player.strNationality === "Portugal") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg";
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Argentina") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://th.bing.com/th/id/OIP.fINm1EASKSmjD-ApYsF3uAHaEo?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3";
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Brazil") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png";
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "United States") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png";
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Japan") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png";
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "England") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/england-flag-jpg-xl-1536x922.jpg";
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Germany") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png";
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Nigeria") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/nigeria-flag-png-large.png";
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "France") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png";
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Senegal") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/senegal-flag-png-large.png";
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Canada") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png";
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Mexico") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/mexico-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Spain") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Domincan Republic") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/dominican-republic-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Puerto Rico") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/puerto-rico-flag-jpg-xl-1536x1001.jpg"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Australia") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/australia-flag-png-xl-300x150.png"
  playerFlag.style.width = "65px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "India") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}

if (player.strNationality === "China") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}

if (player.strNationality === "Cuba") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/cuba-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Iran") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/iran-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Iraq") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/iraq-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Iceland") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/iceland-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Italy") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Russia") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/russia-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Egypt") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/egypt-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Poland") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/poland-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Colombia") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/colombia-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Ecuador"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/ecuador-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Belgium"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/belgium-belgian-flag-png-square-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Peru"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/peru-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Chile"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/chile-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Uruguay"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/chile-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Turkey"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/turkey-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Venezuela"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/venezuela-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Greece"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/greece-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Slovenia"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/slovenia-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "New Zealand"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/new-zealand-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Saudi Arabia"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/saudi-arabia-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Indonesia"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/indonesia-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Tunisia"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/tunisia-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Morocco"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/morocco-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "The Netherlands"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/netherlands-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "South Korea"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/south-korea-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Ireland"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/ireland-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Wales"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/wales-flag-jpg-xl-1536x912.jpg"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Scotland"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/scotland-flag-jpg-xl-1536x1024.jpg"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Singapor"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/singapore-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Kenya"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/kenya-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Nicaragua"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/nicaragua-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Norway"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/norway-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Sweden"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/sweden-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Finland"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/finland-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Philippines"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/philippines-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "South Africa"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/south-africa-flag-png-large-300x200.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Qatar"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/qatar-flag-png-xl.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Switzerland"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/switzerland-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Paraguay"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/paraguay-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Haiti"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/haiti-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Jamaica"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/jamaica-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Bahamas"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/bahamas-flag-png-xl.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Cameroon"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/cameroon-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Czech Republic"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/czech-republic-flag-png-large.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Austria"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/austria-flag-png-xl.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Bolivia"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/bolivia-flag-png-xl.png"
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
    } catch (error) {
        console.error(error);
        document.getElementById("error").textContent = "Error";
    }
}


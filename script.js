async function fetchData() {
    try {
        const playerName = document.getElementById("pokemonName").value.trim();
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=${encodeURIComponent(playerName)}`);

        if (!response.ok) throw new Error("Could not fetch resource");

        const data = await response.json();
        console.log(data);

        if (!data.player) {
            document.getElementById("error").textContent = "Player not found";
            return;
        }

        const player = data.player[0];
        const playerId = player.idPlayer;

        // Basic info
        const badge = document.getElementById("badge");
        badge.src = player.strCutout || player.strThumb;
        badge.style.display = "block";

        document.getElementById("position").textContent = player.strPosition;
        document.getElementById("nationality").textContent = player.strNationality;

        // Second API
        const detailsRes = await fetch(`https://www.thesportsdb.com/api/v1/json/123/lookupplayer.php?id=${playerId}`);
        const detailsData = await detailsRes.json();

        const fullPlayer = detailsData.players[0];   

        const description = document.getElementById("description");
        description.textContent = fullPlayer.strDescriptionEN || "No description available.";

    } catch (error) {
        console.error(error);
        document.getElementById("error").textContent = "Error";
    }
}


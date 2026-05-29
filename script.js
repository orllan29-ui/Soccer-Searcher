//fetch("https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal")
//.then(response => response.json())
//.then(data => console.log(data))
//.catch(error => console.error(error))
//

async function fetchData() {
    try {
        const playerName = document.getElementById("pokemonName").value.trim();
        const response = await fetch(
            `https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=${encodeURIComponent(playerName)}`
        );
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        console.log(data);

        if (!data.player) {
            document.getElementById("error").textContent =
                "Player not found";
            return;
        }
        const player = data.player[0];

        console.log("Returned player:", player.strPlayer);

        const badge = document.getElementById("badge");

        badge.src = player.strCutout || player.strThumb;

        badge.style.display = "block";

    } catch(error) {

        console.error(error);

        document.getElementById("error").textContent =
            "Something went wrong";
    }
}
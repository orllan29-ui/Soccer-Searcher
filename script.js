let fullPlayer = null;
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
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
        document.getElementById("player-section").classList.remove("hidden");
        const player = data.player[0];
        const playerId = player.idPlayer;

        const badge = document.getElementById("badge");
        badge.src = player.strCutout || player.strThumb;
        badge.style.display = "block";
        badge.style.height = "450px";
        badge.style.width = "450px"

        document.getElementById("position").textContent = `Plays ${player.strPosition}` || "Player does not have a number"
        if(player.team === "_Retired Basketball"){
 document.getElementById("player-team").textContent = "is retired"
        }
        document.getElementById("player-team").textContent = player.strTeam || "Is retired"
        document.getElementById("player-name").textContent = player.strPlayer
//================================================================================================================================
        const detailsRes = await fetch(`https://www.thesportsdb.com/api/v1/json/123/lookupplayer.php?id=${playerId}`);
        const detailsData = await detailsRes.json();

        fullPlayer = detailsData.players[0];  
document.getElementById('fav-btn').disabled = false;



        document.getElementById("player-weight").textContent = fullPlayer.strWeight
        document.getElementById("player-height").textContent = fullPlayer.strHeight
        document.getElementById("player-wage").textContent = ` ${fullPlayer.strWage} with the ${player.strTeam}` || "This player does not have any contract history"
        document.getElementById("player-kit").textContent = fullPlayer.strKit  || "This player does not have a kit"
        document.getElementById("dateBorn").textContent = `Born on ${fullPlayer.dateBorn}` || fullPlayer.dateBorn || "N/A";
        document.getElementById("birth-place").textContent = `From ${fullPlayer.strBirthLocation}`
        document.getElementById("player-number").textContent = `Wears number ${fullPlayer.strNumber}`  
        document.getElementById("player-twitter").textContent = fullPlayer.strTwitter || "This player does not have a Twitter account"
        document.getElementById("player-facebook").textContent = fullPlayer.strFacebook || "This player does not have a Facebook account"
        document.getElementById("player-insta").textContent = fullPlayer.strInstagram 
        document.getElementById("player-youtube").textContent = fullPlayer.strYoutube 
        
        const description = document.getElementById("description");
        description.textContent = fullPlayer.strDescriptionEN || "No description available.";''
//================================================================================================================================     
        document.getElementById("sportIcon").textContent = fullPlayer.strSport
        const sportIcon = document.getElementById("sportIcon")

        sportIcon.textContent = ""

            if(fullPlayer.strSport === "Soccer"){
          sportIcon.textContent = "⚽"
        }
        if(fullPlayer.strSport === "Basketball"){
          sportIcon.textContent = "🏀 Basketball"
        }
        if(fullPlayer.strSport === "Baseball"){
          sportIcon.textContent = "⚾ Baseball"
        }
      if(fullPlayer.strSport === "Hockey"){
        sportIcon.textContent = "🏒 Hockey"
      }
      if(fullPlayer.strSport ==="Motorsport"){
        sportIcon.textContent = "🏎️ Motorsport"
      }
      if(fullPlayer.strSport === "American Football"){
        sportIcon.textContent = "🏈 American Football"
      }
//================================================================================================================================




//======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//  SOCCER-TEAMS
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
        if(player.strTeam === "Inter Miami"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2020/06/Inter-Miami-C.F.-Logo.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
        if(player.strTeam === "Chelsea"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://th.bing.com/th/id/R.8e722b8af081f16c01e4ed00fbe845e9?rik=JMEqUhhsd7CYwA&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2018%2f03%2fLogo-Chelsea.png&ehk=jrbhB3xQzZNGE4AAYG53n9Nrm5ucC%2bp2qIl57eyYb%2bI%3d&risl=&pid=ImgRaw&r=0";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
        if(player.strTeam === "Liverpool"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/liverpool.99c48ae3.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Aston Villa"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/aston-villa.07a2646c.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Everton"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/everton.6b635cd7.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Manchester City"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/manchester-city.62f9d1f2.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Manchester United"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/manchester-united.7ab9d343.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Newcastle"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/newcastle.53b65b3d.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Tottenham Hotspur"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/tottenham.f192bf50.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Bournemouth"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/bournemouth.1a237aee.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Brentford"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/brentford.e3296e20.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Brighton"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/brighton.5da206a0.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Crystal Palace"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/crystal-palace.53067b96.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Fulham"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/fulham.4c7ce48b.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Leeds United"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/leeds-united.26dba8f5.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Nottingham Forest"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/nottingham-forest.43b53a26.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Sunderland"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/sunderland.2f55baea.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Ipswich"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/ipswich.86fda687.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "West Ham United"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/west-ham.c86eebf5.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Burnley"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/burnley.7baea7d7.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Wrexham"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/wrexham.8faea20f.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Arsenal"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/england/256x256/arsenal.e5528ede.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Barcelona"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/spain/256x256/barcelona.779f8f0f.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Real Madrid"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/spain/256x256/real-madrid.5ce15611.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Atletico Madrid"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/spain/256x256/atletico-madrid.ba72e2cf.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Sevilla"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/spain/256x256/sevilla.b741a6ce.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Valencia"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/spain/256x256/valencia.f9d9eee2.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Villarreal"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/spain/256x256/villarreal.b0313369.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Real Betis"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/spain/256x256/real-betis.7bb10421.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Real Sociedad"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/spain/256x256/real-sociedad.501e3b1e.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
            if(player.strTeam === "Juventus"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/italy/256x256/juventus.a8baf848.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
       
            if(player.strTeam === "AC Milan"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/italy/256x256/milan.75d56f90.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Inter Milan"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/italy/256x256/inter.3a7ce90c.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Napoli"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/italy/256x256/napoli.ee47a50b.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Roma"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/italy/256x256/roma.034a933e.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Lazio"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/italy/256x256/lazio.2386d28d.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Florentina"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/italy/256x256/fiorentina.7ba101c2.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Atalanta"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/italy/256x256/atalanta.45225436.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Bologna"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/italy/256x256/bologna.a78d435f.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Bayern Munich"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/germany/256x256/bayern-munchen.6c38f13a.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Borussia Dortmund"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/germany/256x256/borussia-dortmund.09ffedcd.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "RB Leipzig"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/germany/256x256/rb-leipzig.9d65faeb.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Bayer Leverkusen"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/germany/256x256/bayer-leverkusen.72f211d8.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Eintracht Frankfurt"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/germany/256x256/eintracht-frankfurt.a8244b07.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Union Berlin"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/germany/256x256/union-berlin.b0d180f9.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Hamburger SV"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/germany/256x256/hamburger-sv.04c2a597.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Wolfsburg"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/germany/256x256/wolfsburg.11ad950e.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Paris SG"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/france/256x256/paris-saint-germain.579907dc.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Olympique Lyonnais"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/france/256x256/lyon.b44ff7aa.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Lille"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/france/256x256/lille.451f5326.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Sporting CP"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/portugal/256x256/sporting-cp.cf9a4c5b.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Benfica"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/portugal/256x256/benfica.3e4d3034.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "FC Porto"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/portugal/256x256/fc-porto.b58f31f6.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Ajax"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/netherlands/256x256/ajax.fadc62c4.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Flamengo"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/brazil/256x256/flamengo.9c3055f2.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Bragantino"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/brazil/256x256/rb-bragantino.58ea7195.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Fluminense"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/brazil/256x256/fluminense.118d8b5e.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Santos"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/brazil/256x256/santos.5ea20e58.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Galatasaray"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/turkey/256x256/galatasaray.b788795f.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Fenerbahçe"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/turkey/256x256/fenerbahce.826f10c2.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Celtic"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/scotland/256x256/celtic.e765443b.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Rangers"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/scotland/256x256/rangers.05ce20d9.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Club Brugge"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/belgium/256x256/club-brugge.78d50f94.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Aldosivi"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/argentina/256x256/aldosivi.1869fe02.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Marseille"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://tse3.mm.bing.net/th/id/OIP.A4Evs4f7ZMwvhWrMh9RJggHaJl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "LA Galaxy"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/LA-Galaxy-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Seattle Sounders FC"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Seattle-Sounders-FC-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Atlanta United"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Atlanta-United-FC-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Portland Timbers"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Portland-Timbers-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "New York City FC"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/New-York-City-FC-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Toronto FC"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Toronto-FC-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Los Angeles FC"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/LAFC-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "New England Revolution"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/New-England-Revolution-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "New York Redbulls"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/New-York-Red-Bulls-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Sporting Kansas City"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Sporting-Kansas-City-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Philadelphia Union"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Philadelphia-Union-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Orlando City"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Orlando-City-SC-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "DC United"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/D.C-United-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Columbus Crew"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Columbus-Crew-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "FC Dallas"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/FC-Dallas-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }

           if(player.strTeam === "Minnesota United FC"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Minnesota-United-FC-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Houston Dynamo"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Houston-Dynamo-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
              if(player.strTeam === ""){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
              if(player.strTeam === "Chicago Fire "){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Chicago-Fire-FC-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
              if(player.strTeam === "Real Salt Lake"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Real-Salt-Lake-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
              if(player.strTeam === "Colorado Rapids"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Colorado-Rapids-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
              if(player.strTeam === "San Jose Earthquakes"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/San-Jose-Earthquakes-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
              if(player.strTeam === "Nashville SC"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Nashville-SC-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
              if(player.strTeam === "FC Cincinnati"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/FC-Cincinnati-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
              if(player.strTeam === "CF Montreal"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/CF-Montreal-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }      if(player.strTeam === "Vancouver Whitecaps"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Vancouver-Whitecaps-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
              if(player.strTeam === "Austin FC"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Austin-FC-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
            if(player.strTeam === "St. Louis City SC"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Saint-Louis-City-SC-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
            if(player.strTeam === "Charlotte FC"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Charlotte-FC-Logo-500x281.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
               if(player.strTeam === "Al Ittihad"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/saudi-arabia/256x256/al-ittihad.9a2895c9.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
              if(player.strTeam === "Al-Hilal"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/saudi-arabia/256x256/al-hilal.fc7a4d70.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
              if(player.strTeam === "Al-Nassr"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/saudi-arabia/256x256/al-nassr.7e60a8fc.png";
          teamIcon.style.width = "150px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
              if(player.strTeam === "Al-Ahli"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://assets.football-logos.cc/logos/saudi-arabia/256x256/al-ahli.4a088ea9.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
    

//======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//  NBA-TEAMS
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
        if(player.strTeam === "Houston Rockets"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2019/06/houston_rockets_2020-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "New York Knicks"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2023/07/new_york_knicks_2024-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
             if(player.strTeam === "Alanta Hawks"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2021/01/atlanta_hawks_2021-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
            if(player.strTeam === "Boston Celtics"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2016/SLH/nba_primary/boston_celtics.png";
          teamIcon.style.width = "150px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
            if(player.strTeam === "Brooklyn Nets"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2024/07/brooklyn_nets_2025-pres.png";
          teamIcon.style.width = "150px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
            if(player.strTeam === "Charlotte Hornets"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2017/12/charlotte_hornets_2015-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
             if(player.strTeam === "Chicago Bulls"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2017/12/chicago_bulls_1967-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
             if(player.strTeam === "Cleveland Cavaliers"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2022/06/cleveland_cavaliers_2023-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
             if(player.strTeam === "Dallas Mavericks"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2017/12/dallas_mavericks_2017-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
            if(player.strTeam === "Denver Nuggets"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2018/06/denver_nuggets_2019-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
            if(player.strTeam === "Detroit Pistons"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2017/05/detroit_pistons_2017-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
            if(player.strTeam === "Golden State Warriors"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2019/07/golden_state_warriors_2020-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
            if(player.strTeam === "Indiana Pacers"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2025/12/indiana_pacers_2026-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
             if(player.strTeam === "Los Angeles Clippers"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2024/02/los_angeles_clippers_2025-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
               if(player.strTeam === "Los Angeles Lakers"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2023/07/los_angeles_lakers_2024-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
               if(player.strTeam === "Memphis Grizzlies"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2018/08/memphis_grizzlies_2018-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
               if(player.strTeam === "Miami Heat"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2017/12/miami_heat_2000-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
               if(player.strTeam === "Milwaukee Bucks"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2017/12/milwaukee_bucks_2015-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
               if(player.strTeam === "Minnesota Timberwolves"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2017/04/minnesota_timberwolves_2017-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
            if(player.strTeam === "New Orleans Pelicans"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2025/05/new_orleans_pelicans_2024-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
            if(player.strTeam === "Oklahoma City Thunder"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2017/12/oklahoma_city_thunder_2009-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
            if(player.strTeam === "Orlando Magic"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/source/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2025/06/orlando_magic_2025-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
            if(player.strTeam === "Philadelphia 76ers"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2017/12/philadelphia_76ers_2015-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
            if(player.strTeam === "Phoenix Suns"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2017/12/phoenix_suns_2014-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
      if(player.strTeam === "Portland Trailblazers"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2017/12/portland_trail_blazers_2017-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Sacramento Kings"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2017/12/sacramento_kings_2016-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }

         if(player.strTeam === "San Antonio Spurs"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2017/12/san_antonio_spurs_2017-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }

         if(player.strTeam === "Toronto Raptors"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2020/11/toronto_raptors_2021-pres.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }

         if(player.strTeam === "Utah Jazz"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2025/07/utah_jazz_2026-pres-1.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }

         if(player.strTeam === "Washington Wizards"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://cdn-ilekoke.nitrocdn.com/EzyYzNfxOeSnmbRhOzAySwmbYCHcjAuB/assets/images/optimized/rev-7a0c7de/sportslogohistory.com/wp-content/uploads/2016/SLH/nba_primary/washington_wizards.png";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }

//======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//  MLB TEAMS
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
  if(player.strTeam === "New York Yankees"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/147.svg";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
  if(player.strTeam === "Arizona Diamondbacks"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/109.svg";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
 if(player.strTeam === "Athletics"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/133.svg";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
   if(player.strTeam === "Atlanta Braves"){
          document.getElementById("teamContainer").innerHTML=""
          const teamIcon = document.createElement("img")
          teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/144.svg";
          teamIcon.style.width = "200px"
          document.getElementById("teamContainer").appendChild(teamIcon)
        }
    if(player.strTeam === "Baltimore Orioles"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/110.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
     if(player.strTeam === "Boston Red Sox"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/111.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Chicago Cubs"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/112.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
             if(player.strTeam === "Chicago White Sox"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/145.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
             if(player.strTeam === "Cincinnati Reds"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/113.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
             if(player.strTeam === "Cleveland Guardians"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/114.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Colorado Rockies"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/115.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Detroit Tigers"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/116.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Houston Astros"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-primary-on-light/117.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Kansas City Royals"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/118.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Los Angeles Angels"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/108.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
     if(player.strTeam === "Los Angeles Dodgers"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/119.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
        if(player.strTeam === "Miami Marlins"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/146.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Milwaukee Brewers"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/158.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Minnesota Twins"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/142.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "New York Mets"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/121.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Philadelphia Phillies"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/143.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Pittsburgh Pirates"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/134.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "San Diego Padres"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/135.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
     if(player.strTeam === "San Francisco Giants"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/137.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
     if(player.strTeam === "Seattle Mariners"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-primary-on-light/136.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
 if(player.strTeam === "St.Louis Cardinals"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/138.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Tampa Bay Rays"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/139.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Texas Rangers"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/140.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Toronto Blue Jays"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/141.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
          if(player.strTeam === "Washington Nationals"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.mlbstatic.com/team-logos/team-cap-on-light/120.svg";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
//======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//  NFL TEAMs
//=======================================================================================================================================
//=======================================================================================================================================
 if(player.strTeam === "Dallas Cowboys"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Logo-Dallas-Cowboys-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "New England Patriots"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/New-England-Patriots-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Green Bay Packers"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Green-Bay-Packers-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Pittsburgh Steelers"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Pittsburgh-Steelers-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "San Francisco 49ers"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/San-Francisco-49ers-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Kansas City Chiefs"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Kansas-City-Chiefs-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "https://logos-world.net/wp-content/uploads/2023/09/Philadelphia-Eagles-Logo-500x281.png"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Philadelphia-Eagles-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "New York Giants"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/New-York-Giants-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Chicago Bears"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Chicago-Bears-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Seattle Seahawks"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Seattle-Seahawks-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Denver Broncos"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Denver-Broncos-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "New Orleans Saints"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/New-Orleans-Saints-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Baltimore Ravens"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/08/Logo-Baltimore-Ravens-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
       if(player.strTeam === "Las Vegas Raiders"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Las-Vegas-Raiders-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Los Angeles Rams"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Los-Angeles-Rams-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Minnesota Vikings"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Minnesota-Vikings-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Buffalo Bills"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Buffalo-Bills-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Tampa Bay Buccaneers"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Tampa-Bay-Buccaneers-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Alanta Falcons"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Logo-Atlanta-Falcons-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Indianapolis Colts"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Indianapolis-Colts-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Miami Dolphins"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Miami-Dolphins-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Cleveland Browns"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Cleveland-Browns-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Tennessee Titans"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Tennessee-Titans-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Carolina Panthers"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Carolina-Panthers-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Houston Texans"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Houston-Texans-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Detroit Lions"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Detroit-Lions-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Arizona Cardinals"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Arizona-Cardinals-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Cincinnati Bengals"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Cincinnati-Bengals-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "Washington Commanders"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Washington-Commanders-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "New York Jets"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/New-York-Jets-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Los Angeles Chargers"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Los-Angeles-Chargers-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
           if(player.strTeam === "Jacksonville Jaguars"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logos-world.net/wp-content/uploads/2023/09/Jacksonville-Jaguars-Logo-500x281.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
         if(player.strTeam === "_Free Agent American Football"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://www.sportsworldnevada.com/wp-content/uploads/2022/05/FREE-AGENT-LOGO.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
//======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//  NHL TEAMS
//======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
if(player.strTeam === "Anaheim Ducks"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_769a41303c154bd0aa654c62a7cd2754~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_769a41303c154bd0aa654c62a7cd2754~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
if(player.strTeam === "Boston Bruins"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_f08c6d14ba664c94a04d55d8a15af472~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_f08c6d14ba664c94a04d55d8a15af472~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
  if(player.strTeam === "Buffalo Sabres"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_20aa5d7fbd6440e397a6ec98940193e5~mv2.png/v1/fill/w_463,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_20aa5d7fbd6440e397a6ec98940193e5~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
  if(player.strTeam === "Calgary Flames"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_b901b23a600f41fc88b0f42fd38deaf5~mv2.png/v1/fill/w_463,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_b901b23a600f41fc88b0f42fd38deaf5~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
  if(player.strTeam === "Carolina Hurricanes"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_aff9216f99ff4cceb61caba45a2e8b9c~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_aff9216f99ff4cceb61caba45a2e8b9c~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
  if(player.strTeam === "Chicago Blackhawks"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_040659cb7db94b39b8560276a35fc8e3~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_040659cb7db94b39b8560276a35fc8e3~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
  if(player.strTeam === "Colorado Avalanche"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_3100c4beeab64400872ef2c43be9ffa3~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_3100c4beeab64400872ef2c43be9ffa3~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
  if(player.strTeam === "Columbus Blue Jackets"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_546a74b41863469583ed937d08635e73~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_546a74b41863469583ed937d08635e73~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
  if(player.strTeam === "Dallas Stars"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_dd8b454505b34a5d940a030cab1fe0cd~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_dd8b454505b34a5d940a030cab1fe0cd~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
  if(player.strTeam === "Detroit Red Wings"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_df0dfc38cfe54c32a7d963b6d7180802~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_df0dfc38cfe54c32a7d963b6d7180802~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
  if(player.strTeam === "Edmonton Oilers"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_934d2213949c49aca9d509aa4c68531a~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_934d2213949c49aca9d509aa4c68531a~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
    if(player.strTeam === "Florida Panthers"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_5cf413a02d734d54a082b62ec8255b83~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_5cf413a02d734d54a082b62ec8255b83~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
   if(player.strTeam === "Los Angeles Kings"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_70808b1d5b6948c7a656fde76e2abac5~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_70808b1d5b6948c7a656fde76e2abac5~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
   if(player.strTeam === "Minnesota Wild"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_49f5c78c5b7e4d999e62514d7e4a73fc~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_49f5c78c5b7e4d999e62514d7e4a73fc~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
 if(player.strTeam === "Montreal Canadiens"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_85b92c6f6a894b3fbf445f14de9f332b~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_85b92c6f6a894b3fbf445f14de9f332b~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
   if(player.strTeam === "Nashville Predators"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_1eda07a599f64197b183da45d93600eb~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_1eda07a599f64197b183da45d93600eb~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
 if(player.strTeam === "New Jersey Devils"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_e5bc8a140c0b43068fdaccf1a5452a05~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_e5bc8a140c0b43068fdaccf1a5452a05~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
 if(player.strTeam === "New York Islanders"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_96602e965394421cacdcf9222d04601b~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_96602e965394421cacdcf9222d04601b~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
 if(player.strTeam === "New York Rangers"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_9cbfc2c0b9a84f31a97db8fa905e124c~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_9cbfc2c0b9a84f31a97db8fa905e124c~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
   if(player.strTeam === "Ottawa Senators"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_94badec8d3eb440c98c4a5558081eda1~mv2.png/v1/fill/w_463,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_94badec8d3eb440c98c4a5558081eda1~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
       if(player.strTeam === "Philadelphia Flyers"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_65e8e6efb9b04b61b7d5bf5ed6674831~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_65e8e6efb9b04b61b7d5bf5ed6674831~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }

     if(player.strTeam === "Pittsburgh Penguins"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_d6f44625497b4c1384e059510e51422e~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_d6f44625497b4c1384e059510e51422e~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }

     if(player.strTeam === "San Jose Sharks"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_be8ff4f73ed343d6b6237e92df93d1f4~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_be8ff4f73ed343d6b6237e92df93d1f4~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
   if(player.strTeam === "Seattle Kraken"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_effbb7bc858643bc99805af05b4104cf~mv2.png/v1/fill/w_463,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_effbb7bc858643bc99805af05b4104cf~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
   if(player.strTeam === "St. Louis Blues"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_1f890d2dd7614ae8842c27d8f8fd3d56~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_1f890d2dd7614ae8842c27d8f8fd3d56~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
   if(player.strTeam === "Tampa Bay Lightning"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_b71731f53f974b99a5f94dc9ae01b01d~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_b71731f53f974b99a5f94dc9ae01b01d~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
   if(player.strTeam === "Vancouver Canucks"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_8f986c9f35e44805ae9de5499457a741~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_8f986c9f35e44805ae9de5499457a741~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
   if(player.strTeam === "Toronto Maple Leafs"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_7ce0b4815c3e4b0e8c1bb2243c71aa2c~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_7ce0b4815c3e4b0e8c1bb2243c71aa2c~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
   if(player.strTeam === "Vegas Golden Knights"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_59f4b51de03345448bd27988625ef40a~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_59f4b51de03345448bd27988625ef40a~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
if(player.strTeam === "Washington Capitals"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_2ba590c8eeb54c8a96ffdb6319107613~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_2ba590c8eeb54c8a96ffdb6319107613~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
if(player.strTeam === "Winnipeg Jets"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://static.wixstatic.com/media/3d7fb3_77155ceb5ad24651a45e61ff69481757~mv2.png/v1/fill/w_512,h_463,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d7fb3_77155ceb5ad24651a45e61ff69481757~mv2.png";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
if(player.strTeam === "Utah Hockey Club"){
    document.getElementById("teamContainer").innerHTML=""
   const teamIcon = document.createElement("img")
    teamIcon.src = "https://logowik.com/content/uploads/images/utah-mammoth418.logowik.com.webp";
    teamIcon.style.width = "200px"
    document.getElementById("teamContainer").appendChild(teamIcon)
        }
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//  COUNTRIES
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================

if (player.strNationality === "Portugal") {
  document.getElementById("flagContainer").innerHTML = ""
  const playerFlag = document.createElement("img")
  playerFlag.src = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg";
  playerFlag.style.width = "50px";
  document.getElementById("flagContainer").appendChild(playerFlag)
}
if (player.strNationality === "Argentina") {
  document.getElementById("flagContainer").innerHTML = ""
  const playerFlag = document.createElement("img")
  playerFlag.src = "https://th.bing.com/th/id/OIP.fINm1EASKSmjD-ApYsF3uAHaEo?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3";
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Brazil") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img")
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png";
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "United States") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png";
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Japan") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png";
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "England") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/england-flag-jpg-xl-1536x922.jpg";
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Germany") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png";
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Nigeria") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/nigeria-flag-png-large.png";
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "France") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png";
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Senegal") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/senegal-flag-png-large.png";
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Canada") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png";
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Mexico") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/mexico-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Spain") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Dominican Republic") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/dominican-republic-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Puerto Rico") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/puerto-rico-flag-jpg-xl-1536x1001.jpg"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Australia") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/australia-flag-png-xl-300x150.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "India") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}

if (player.strNationality === "China") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}

if (player.strNationality === "Cuba") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/cuba-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Iran") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/iran-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Iraq") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/iraq-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Iceland") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/iceland-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Italy") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Russia") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/russia-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Egypt") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/egypt-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Poland") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/poland-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Colombia") {
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/colombia-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Ecuador"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/ecuador-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Belgium"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/belgium-belgian-flag-png-square-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Peru"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/peru-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Chile"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/chile-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Uruguay"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/chile-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Turkey"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/turkey-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Venezuela"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/venezuela-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Greece"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/greece-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Slovenia"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/slovenia-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "New Zealand"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/new-zealand-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Saudi Arabia"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/saudi-arabia-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Indonesia"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/indonesia-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Tunisia"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/tunisia-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Morocco"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/morocco-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "The Netherlands"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/netherlands-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "South Korea"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/south-korea-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Ireland"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/ireland-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Wales"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/wales-flag-jpg-xl-1536x912.jpg"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Scotland"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/scotland-flag-jpg-xl-1536x1024.jpg"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Singapor"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/singapore-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Kenya"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/kenya-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Nicaragua"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/nicaragua-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Norway"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/norway-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Sweden"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/sweden-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Finland"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/finland-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Philippines"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/philippines-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "South Africa"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/south-africa-flag-png-large-300x200.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Qatar"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/qatar-flag-png-xl.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Switzerland"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/switzerland-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Paraguay"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/paraguay-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Haiti"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/haiti-flag-png-large.png"
  playerFlag.style.width = "75px";
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
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Cameroon"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/cameroon-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Czech Republic"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/czech-republic-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Austria"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/austria-flag-png-xl.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Bolivia"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/bolivia-flag-png-xl.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Ukraine"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/ukraine-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Denmark"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/denmark-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Romania"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/romania-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Israel"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/israel-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Panama"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/panama-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Costa Rica"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/costa-rica-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "United Kingdom"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://th.bing.com/th/id/R.89ffb296847e5a3899cd4b0dcc79711b?rik=2BGacdsE8nl7OQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fkNECI1v.jpg&ehk=3PE2L1tPEAdLrUXAr8%2by2x%2bct1WzMjfMuzr3RgLK5WQ%3d&risl=&pid=ImgRaw&r=0"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Belarus"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://th.bing.com/th/id/R.0bf8339dcd6bf173168cd12fdf0bea12?rik=q8%2fuoJUJPVLtdA&pid=ImgRaw&r=0"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
if (player.strNationality === "Serbia"){
  document.getElementById("flagContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://www.countryflags.com/wp-content/uploads/serbia-flag-png-large.png"
  playerFlag.style.width = "75px";
  document.getElementById("flagContainer").appendChild(playerFlag);
}
  
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
// F1 TEAMS
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
if (player.strTeam === "BWT Alpine Formula One Team"){
  document.getElementById("teamContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://logos-world.net/wp-content/uploads/2023/08/Alpine-Logo-500x281.png"
  playerFlag.style.width = "75px";
  document.getElementById("teamContainer").appendChild(playerFlag);
}
if (player.strTeam === "Aston Martin Aramco Formula One Team"){
  document.getElementById("teamContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://th.bing.com/th/id/R.f5618aa1b5a8008702c6e9277f65b2bc?rik=gkKQEBKILdwU5w&riu=http%3a%2f%2flive.planetf1.com%2fContent%2fImages%2fTeams%2f21565.png&ehk=K5UX7frOdxdZcAeBkuLK9gci8C3jl0Eoj%2f7MwlHZZDY%3d&risl=&pid=ImgRaw&r=0"
  playerFlag.style.width = "75px";
  document.getElementById("teamContainer").appendChild(playerFlag);
}
if (player.strTeam === "Scuderia Ferrari HP"){
  document.getElementById("teamContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://logos-world.net/wp-content/uploads/2023/08/Ferrari-F1-Logo-500x281.png"
  playerFlag.style.width = "75px";
  document.getElementById("teamContainer").appendChild(playerFlag);
}
if (player.strTeam === "MoneyGram Haas F1 Team"){
  document.getElementById("teamContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://logos-world.net/wp-content/uploads/2023/08/Haas-Logo-500x281.png"
  playerFlag.style.width = "75px";
  document.getElementById("teamContainer").appendChild(playerFlag);
}
if (player.strTeam === "Stake F1 Team Kick Sauber"){
  document.getElementById("teamContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://liquipedia.net/commons/images/e/e4/Audi_F1_allmode.png"
  playerFlag.style.width = "75px";
  document.getElementById("teamContainer").appendChild(playerFlag);
}
if (player.strTeam === "Cadillac Formula 1 Team"){
  document.getElementById("teamContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Cadillac_Formula_1_Team_logo.png/1280px-Cadillac_Formula_1_Team_logo.png"
  playerFlag.style.width = "75px";
  document.getElementById("teamContainer").appendChild(playerFlag);
}
if (player.strTeam === "Mercedes"){
  document.getElementById("teamContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://th.bing.com/th/id/OIP.uSvxlhLlJKwfnV6Zh3DrpwHaGl?w=194&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  playerFlag.style.width = "75px";
  document.getElementById("teamContainer").appendChild(playerFlag);
}
if (player.strTeam === "McLaren"){
  document.getElementById("teamContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://th.bing.com/th/id/R.7c30b7c7e3c9060ff7940a7fc6fe0e29?rik=3E%2bQcQSzvC87WA&riu=http%3a%2f%2fas01.epimg.net%2fimg%2fcomunes%2ffotos%2ffichas%2fequipos%2flarge%2f4140.png&ehk=A5VjscVdHVGcMGwF6crlfwYfLmNQVpKaMP3DUnUqeM4%3d&risl=&pid=ImgRaw&r=0"
  playerFlag.style.width = "75px";
  document.getElementById("teamContainer").appendChild(playerFlag);
}
if (player.strTeam === "Red Bull"){
  document.getElementById("teamContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://logodix.com/logo/401262.png"
  playerFlag.style.width = "125px";
  document.getElementById("teamContainer").appendChild(playerFlag);
}
if (player.strTeam === "Visa Cash App Racing Bulls Formula One Team"){
  document.getElementById("teamContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://liquipedia.net/commons/images/3/39/RB_allmode.png"
  playerFlag.style.width = "75px";
  document.getElementById("teamContainer").appendChild(playerFlag);
}
if (player.strTeam === "Williams"){
  document.getElementById("teamContainer").innerHTML = "";
  const playerFlag = document.createElement("img");
  playerFlag.src = "https://logodix.com/logo/615459.png"
  playerFlag.style.width = "75px";
  document.getElementById("teamContainer").appendChild(playerFlag);
}
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================
    } catch (error) {
        console.error(error);
        document.getElementById("error").textContent = "Error";
    }
}




function favorite(player) {
  if (!player || !player.idPlayer) return
  if (!player || !player.idPlayer || !player.strPlayer) return;
  if (!favorites.some(p => p.idPlayer === player.idPlayer)) {
    favorites.push(player);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    loadFavorites(); 
  }
}

document.getElementById('fav-btn').onclick = () => {
  favorite(fullPlayer);
};

function loadFavorites() {
  favorites = favorites.filter(p => p && p.idPlayer && p.strPlayer);
  const container = document.getElementById('favorites-container');
  container.innerHTML = ""; 

if(!favorites || favorites.length === 0){
  container.style.display = "none";
  return
}

container.style.display = "block"

  favorites.forEach(player => {
    if (!player || !player.idPlayer || !player.strPlayer) return;
    const card = document.createElement("div");
    card.className = "favorite-full-card";

    card.innerHTML = `
      <button class="remove-fav" data-id="${player.idPlayer}">❌</button>

      <img src="${player.strCutout || player.strThumb}" class="fav-badge">

      <p class="fav-player-name">${player.strPlayer}</p>

      <div class="fav-quick-facts">
          <p><strong>Position:</strong> ${player.strPosition || "N/A"}</p>
          <p><strong>Born:</strong> ${player.dateBorn || "N/A"}</p>
          <p><strong>Birthplace:</strong> ${player.strBirthLocation || "N/A"}</p>
          <p><strong>Height:</strong> ${player.strHeight || "N/A"}</p>
          <p><strong>Weight:</strong> ${player.strWeight || "N/A"}</p>
          <p><strong>Number:</strong> ${player.strNumber || "N/A"}</p>
      </div>
    `;

    container.appendChild(card);

    card.querySelector(".remove-fav").onclick = () => {
      removeFavorite(player.idPlayer);
    };
  }); 
}

function removeFavorite(id) {
  favorites = favorites.filter(player => player.idPlayer !== id);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  loadFavorites();
}

window.onload = loadFavorites;

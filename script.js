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
   if(player.strTeam === "Alanta Braves"){
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
           if(player.strTeam === "Kansas Royals"){
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


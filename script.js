const input = document.querySelector("#user-input")
const searchBtn = document.querySelector("search-btn")
const profile = document.querySelector("#profile")
const error = document.querySelector("#error")

const fetchUser = async () => {
const playername = input.value.trim();
if(!playername) return
error.classList.add("hidden")
profile.innerHTML = " Loading..."
profile.classList.remove("hidden")
const api = await fetch(`https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal`)
const data = await api.json()
console.log(data)

renderProfile(data)
}

searchBtn.addEventListener(`click`, fetchUser)
input.addEventListener("keydown", (e) =>{
    if(e.key === "Enter") fetchUser()
})

function renderProfile(data){
    profile.classList.remove("hidden")
    profile.innerHTML = `  <img src="${data.avatar_url}" class="avatar" />`
}
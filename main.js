async function loadGames(){

const {data} = await supabase.from("games").select("*")

const grid=document.getElementById("gamesGrid") || document.getElementById("browseGrid")

if(!grid) return

data.forEach(game=>{

const card=document.createElement("div")
card.className="card"

card.innerHTML=`
<img src="https://picsum.photos/400/200">
<h3>${game.title}</h3>
<a href="game.html?id=${game.id}">View</a>
`

grid.appendChild(card)

})

}

loadGames()

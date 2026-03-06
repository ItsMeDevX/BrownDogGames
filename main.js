
async function loadContent(){

const {data} = await supabase.from("content").select("*")

const grid = document.getElementById("contentGrid")

if(!grid) return

data.forEach(item=>{

const card=document.createElement("div")

card.className="bg-slate-800 p-4 rounded"

card.innerHTML=`
<img src="${item.image_url || 'https://picsum.photos/400/200'}" class="mb-3 rounded">
<h3 class="text-xl">${item.title}</h3>
<p>${item.type}</p>
<a href="content.html?id=${item.id}" class="text-orange-400">View</a>
`

grid.appendChild(card)

})

}

loadContent()

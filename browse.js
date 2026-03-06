
let current="all"

async function load(){

let query=supabase.from("content").select("*")

if(current!=="all") query=query.eq("type",current)

const {data}=await query

const grid=document.getElementById("contentGrid")

grid.innerHTML=""

data.forEach(item=>{

const card=document.createElement("div")

card.className="bg-slate-800 p-4 rounded"

card.innerHTML=`
<img src="${item.image_url || 'https://picsum.photos/400/200'}" class="mb-3 rounded">
<h3>${item.title}</h3>
<p>${item.type}</p>
<a href="content.html?id=${item.id}" class="text-orange-400">View</a>
`

grid.appendChild(card)

})

}

function filterType(t){
current=t
load()
}

load()

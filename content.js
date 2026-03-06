
const params=new URLSearchParams(window.location.search)
const id=params.get("id")

async function load(){

const {data}=await supabase.from("content").select("*").eq("id",id).single()

document.getElementById("title").innerText=data.title
document.getElementById("description").innerText=data.description

if(data.image_url) document.getElementById("cover").src=data.image_url

loadComments()

}

async function loadComments(){

const {data}=await supabase.from("comments").select("*").eq("content",id)

const box=document.getElementById("comments")

box.innerHTML=""

data.forEach(c=>{

const div=document.createElement("div")

div.className="bg-slate-800 p-2 rounded"

div.innerText=c.text

box.appendChild(div)

})

}

document.getElementById("commentBtn").onclick=async()=>{

const text=document.getElementById("commentBox").value

await supabase.from("comments").insert({
content:id,text
})

loadComments()

}

load()

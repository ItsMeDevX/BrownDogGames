
async function init(){

const {data:{user}}=await supabase.auth.getUser()

if(!user){
window.location="login.html"
return
}

loadMy(user.id)

}

async function loadMy(uid){

const {data}=await supabase.from("content").select("*").eq("developer",uid)

const grid=document.getElementById("myContent")

data.forEach(item=>{

const card=document.createElement("div")

card.className="bg-slate-800 p-4 rounded"

card.innerHTML=`
<h3>${item.title}</h3>
<p>${item.type}</p>
<button onclick="deleteItem('${item.id}','${item.type}')" class="bg-red-500 px-2 py-1 rounded mt-2">Delete</button>
`

grid.appendChild(card)

})

}

async function deleteItem(id,type){

if(!confirm("Delete this upload?")) return

await supabase.from("content").delete().eq("id",id)

await supabase.storage.from(type+"s").remove([id])

alert("Deleted")

location.reload()

}

document.getElementById("uploadBtn").onclick=async()=>{

const {data:{user}}=await supabase.auth.getUser()

const type=document.getElementById("type").value
const title=document.getElementById("title").value
const description=document.getElementById("description").value
const image=document.getElementById("image").files[0]
const file=document.getElementById("file").files[0]

if(file.size>500000000){
alert("File too large (max 500MB)")
return
}

let imageUrl=""

if(image){
await supabase.storage.from("images").upload(image.name,image)
imageUrl=`https://YOURPROJECT.supabase.co/storage/v1/object/public/images/${image.name}`
}

const {data}=await supabase.from("content").insert({
title,description,type,developer:user.id,image_url:imageUrl
}).select().single()

await supabase.storage.from(type+"s").upload(data.id,file)

alert("Upload complete")

}

init()

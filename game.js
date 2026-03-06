const params=new URLSearchParams(window.location.search)
const id=params.get("id")

async function load(){

const {data}=await supabase.from("games").select("*").eq("id",id).single()

document.getElementById("title").innerText=data.title
document.getElementById("description").innerText=data.description

}

load()

document.getElementById("postComment").onclick=async()=>{

const text=document.getElementById("commentBox").value

await supabase.from("comments").insert({
game:id,
text
})

location.reload()

}

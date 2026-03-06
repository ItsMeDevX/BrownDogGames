
document.getElementById("uploadBtn").onclick=async()=>{

const title=document.getElementById("title").value
const description=document.getElementById("description").value
const file=document.getElementById("file").files[0]

const {data:user}=await supabase.auth.getUser()

const {data}=await supabase.from("games").insert({
title,
description,
developer:user.user.id
}).select().single()

await supabase.storage.from("games").upload(data.id,file)

alert("Game uploaded")

}

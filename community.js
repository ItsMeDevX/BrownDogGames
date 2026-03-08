
import {supabase,getUser} from "./supabase.js"

export async function addLink(e,category){
 e.preventDefault()

 const user = await getUser()
 if(!user){
   alert("Login with GitHub first")
   return
 }

 const title=document.getElementById("title").value
 const link=document.getElementById("link").value

 await supabase.from("community_links").insert({
  title:title,
  link:link,
  category:category,
  user_id:user.id,
  username:user.user_metadata.user_name,
  avatar:user.user_metadata.avatar_url
 })

 e.target.reset()
 loadLinks(category)
}

export async function deleteLink(id,category){
 const user=await getUser()

 await supabase
  .from("community_links")
  .delete()
  .eq("id",id)
  .eq("user_id",user.id)

 loadLinks(category)
}

export async function reportLink(id){
 const user=await getUser()
 if(!user){alert("Login required");return}

 await supabase.from("reports").insert({
  link_id:id,
  user_id:user.id
 })

 alert("Reported")
}

export async function loadLinks(category){

 const {data}=await supabase
  .from("community_links")
  .select("*")
  .eq("category",category)
  .order("created_at",{ascending:false})

 const list=document.getElementById(category+"List")
 if(!list) return

 list.innerHTML=""

 data.forEach(item=>{

  const div=document.createElement("div")
  div.style.marginBottom="10px"

  div.innerHTML=`
  <img src="${item.avatar}" width="24" style="border-radius:50%;vertical-align:middle">
  <b>${item.username}</b> :
  <a href="${item.link}" target="_blank">${item.title}</a>
  <button onclick="deleteLink('${item.id}','${category}')">delete</button>
  <button onclick="reportLink('${item.id}')">report</button>
  `

  list.appendChild(div)
 })

}

// realtime updates
supabase.channel("links")
 .on("postgres_changes",
 {event:"*",schema:"public",table:"community_links"},
 payload=>{
   const cats=["games","music","assets"]
   cats.forEach(c=>loadLinks(c))
 })
 .subscribe()

window.deleteLink=deleteLink
window.reportLink=reportLink

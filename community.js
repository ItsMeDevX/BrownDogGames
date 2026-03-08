import { supabase, getUser } from "./supabase.js"

export async function addLink(e, category){
  e.preventDefault()

  const title = document.getElementById("title").value
  const link = document.getElementById("link").value

  const user = await getUser()

  if(!user){
    alert("Login with GitHub first")
    return
  }

  await supabase.from("community_links").insert({
    title: title,
    link: link,
    category: category,
    user_id: user.id
  })

  loadLinks(category)
  e.target.reset()
}

export async function loadLinks(category){

  const { data } = await supabase
    .from("community_links")
    .select("*")
    .eq("category", category)
    .order("created_at", { ascending:false })

  const list = document.getElementById(category + "List")
  list.innerHTML = ""

  data.forEach(item => {
    const p = document.createElement("p")
    p.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`
    list.appendChild(p)
  })
}
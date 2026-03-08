
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

const supabaseUrl = "https://towafchlhtrwpmyvrfys.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvd2FmY2hsaHRyd3BteXZyZnlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3ODUzNzIsImV4cCI6MjA4ODM2MTM3Mn0.RNlG1ffpo-NQ6-dcb4CjQFMBuV-GzKn2cbdg73CUDo4"

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth:{
    persistSession:true,
    detectSessionInUrl:true
  }
})

export async function login(){
  await supabase.auth.signInWithOAuth({
    provider:"github",
    options:{
      redirectTo: window.location.origin
    }
  })
}

export async function logout(){
  await supabase.auth.signOut()
  location.reload()
}

export async function getUser(){
  const {data} = await supabase.auth.getUser()
  return data.user
}

export function cleanUrl(){
 if(window.location.hash.includes("access_token")){
   history.replaceState({},document.title,window.location.pathname)
 }
}

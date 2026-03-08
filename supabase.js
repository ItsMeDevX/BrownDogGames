import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = "YOUR_SUPABASE_URL"
const supabaseKey = "YOUR_ANON_KEY"

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function login(){
  await supabase.auth.signInWithOAuth({
    provider: "github"
  })
}

export async function getUser(){
  const { data } = await supabase.auth.getUser()
  return data.user
}
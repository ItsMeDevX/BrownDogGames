
async function loadNav(){
const {data:{user}} = await supabase.auth.getUser()
const nav = document.getElementById("navlinks")
if(user){
nav.innerHTML=`<a href="index.html">Home</a><a href="browse.html">Browse</a><a href="dashboard.html">Dashboard</a><button onclick="logout()">Logout</button>`
}else{
nav.innerHTML=`<a href="index.html">Home</a><a href="browse.html">Browse</a><a href="login.html">Login</a>`
}}
async function logout(){await supabase.auth.signOut();location.reload()}
loadNav()

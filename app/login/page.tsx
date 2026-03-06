'use client'

import { supabase } from '../../lib/supabaseClient'

export default function Login(){

const login = async()=>{

await supabase.auth.signInWithOAuth({
provider:'github'
})

}

return(
<div className="text-center">

<h1 className="text-3xl mb-6">
Login
</h1>

<button
onClick={login}
className="bg-black border px-6 py-3 rounded"
>
Login with GitHub
</button>

</div>
)
}

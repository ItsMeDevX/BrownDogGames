'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function UploadGame(){

const [file,setFile] = useState<File>()

const upload = async ()=>{

if(!file) return

await supabase.storage
.from('games')
.upload(file.name,file)

alert('Uploaded!')

}

return(
<div className="bg-zinc-900 p-6 rounded-xl">

<h2 className="text-xl mb-4">
Upload Game Build
</h2>

<input
type="file"
onChange={(e)=>setFile(e.target.files?.[0])}
/>

<button
onClick={upload}
className="bg-orange-500 px-4 py-2 rounded mt-4"
>
Upload
</button>

</div>
)
}

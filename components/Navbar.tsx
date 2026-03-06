'use client'
import Link from 'next/link'

export default function Navbar(){

return(
<nav className="border-b border-zinc-800">

<div className="max-w-6xl mx-auto flex justify-between p-4">

<Link href="/" className="font-bold text-lg">
BrownDogGames
</Link>

<div className="flex gap-6">
<Link href="/dashboard">Dashboard</Link>
<Link href="/login">Login</Link>
</div>

</div>

</nav>
)
}

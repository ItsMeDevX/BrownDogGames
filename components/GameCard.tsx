import Link from 'next/link'

export default function GameCard({game}:{game:any}){

return(
<Link
href={`/games/${game.slug}`}
className="bg-zinc-900 p-4 rounded-xl hover:bg-zinc-800 transition"
>

<div className="h-40 bg-zinc-800 rounded mb-3"/>

<h2 className="font-semibold">
{game.title}
</h2>

</Link>
)
}

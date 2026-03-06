import GameCard from '../components/GameCard'

export default function Home(){

const games=[
{title:"Pixel Adventure",slug:"pixel-adventure"},
{title:"Dungeon Escape",slug:"dungeon-escape"}
]

return(
<div>

<h1 className="text-4xl font-bold mb-6">
BrownDogGames
</h1>

<div className="grid md:grid-cols-3 gap-6">

{games.map(g=>(
<GameCard key={g.slug} game={g}/>
))}

</div>

</div>
)
}

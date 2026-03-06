export default function GamePage({params}:{params:{slug:string}}){

return(

<div>

<h1 className="text-3xl font-bold mb-4">
{params.slug}
</h1>

<div className="bg-zinc-900 h-64 rounded mb-6"/>

<button className="bg-orange-500 px-4 py-2 rounded">
Download
</button>

<p className="mt-6 text-zinc-300">
Game description goes here.
</p>

</div>

)

}

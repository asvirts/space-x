type Rockets = {
  id: number,
  country: string,
  rocket_name: string,
  description: string,
}

async function getData() {
  const res = await fetch('https://api.spacexdata.com/v3/rockets')
  const data: Rockets = await res.json()

  console.log(data)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return (
    <p>{data.rocket_name}</p>
  )
}

export default function Home() {
  return (
    <main className="">
      
    </main>
  )
}

import { useQuery, gql } from "@apollo/client"

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 25) {
      id
      mission_name
    }
    ships(limit: 25) {
        id
        model
        name
        type
        status
      }
  }
`

export default function Query() {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div className="query">
        <div className="col">
            <h2>SpaceX Launches</h2>
            <ol>
                {data.launchesPast.map((launch) => (
                <li key={launch.id}>{launch.mission_name}</li>
                ))}
            </ol>
        </div>
        <div className="col">
            <h2>SpaceX Ships</h2>
            <ol>
                {data.ships.map((ship) => (
                <li key={ship.id}>{ship.name}</li>
                ))}
            </ol>
        </div>
    </div>
  );
}
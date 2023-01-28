import { useFetch } from "./hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
};

function App() {

  const {data: repo, isFetching} = useFetch<Repository[]>('https://api.github.com/users/deviego/repos')
  
  return (
    <>
      <h1>Repositories</h1>
      <ul>
        {isFetching && <p>Carregando</p>}
        {repo?.map((repo) => {
          return(<><li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
          </li>
          <p>{repo.description}</p>
          </>)
        })}
      </ul>
    </>
  );
}

export default App;

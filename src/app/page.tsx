import OwnerRepo from "@/components/ownerRepo";

interface DataProps {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  };
}

/*
  Cache:
    - como funciona, toda vez q é feito uma requisição o usuario chama o fetch, por padrão ele segura o cache, assim quando proximo
    usuario entrar no site, ele vai tar com o cache do primeiro usuario.

  Tipos de cache:
    - force-cache: por default ele já seta o force-cache, porem ele nunca vai ter uma revalidação de novos dados { cache: "force-cache" }
    - no-store: ele faz nova requisição sempre quando usuarios entrar no site, assim atualizando sempre, { cache: "no-store" }
    - revalidate: Temporizador para revalidar a proxima requisição, modo de uso seria { next: {revalidate: 60} } (o 60 ali é os segundos)
**/

async function delayFetch(url: string, delay: number) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  const response = await fetch(url, { next: {revalidate: 60} });
  return response.json();
}

async function getData() {
  const data = await delayFetch(
    "https://api.github.com/users/dotyocode/repos",
    500
  );
  return data;
}

export default async function Home() {
  const data: DataProps[] = await getData();

  return (
    <div>
      <h1>Página Home</h1>
      <br></br>
      <h3>Meus repositorios</h3>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repositorio: </strong> <a>{item.name}</a>
          <br></br>
          <OwnerRepo
            avatar_url={item.owner.avatar_url}
            name={item.owner.login}
          />
          <br></br>
        </div>
      ))}
    </div>
  );
}

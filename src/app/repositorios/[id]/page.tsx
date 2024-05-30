interface PageDetailProps {
  params: {
    id: string;
  };
}

async function getData(id: string) {
  console.log(id);
  const data = await fetch("https://api.github.com/users/dotyocode/repos");
  return data.json();
}

export default async function repositorioId({ params }: PageDetailProps) {
  const result = await getData(params.id);
  return (
    <div>
      <h1>Página detalhes do repositorio: {params.id}</h1>
    </div>
  );
}

import Card from "../components/card/Card";

export default function Home({ characters }) {
  return <Card key={characters.id} characters={characters} />;
}

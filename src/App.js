import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import CardComponents from "./components/CardComponents";
import Form from "./components/Form";

export default function App() {
  const colorCard = [
    {
      name: "Card1",
      id: "234",
      colorCode: "#ccc",
    },
    {
      name: "Card2",
      id: "2",
      colorCode: "#4c6ef5",
    },
    {
      name: "Card3",
      id: "3",
      colorCode: "#82c91e",
    },
    {
      name: "Card4",
      id: "4",
      colorCode: "#12b886",
    },
    {
      name: "Card5",
      id: "5",
      colorCode: "#00FFFF",
    },
    {
      name: "Card6",
      id: "7",
      colorCode: "#9FE2BF",
    },
    {
      name: "Card8",
      id: "5",
      colorCode: "#DE3163",
    },
    {
      name: "Card9",
      id: "5",
      colorCode: "#50C878",
    },
    {
      name: "Card10",
      id: "5",
      colorCode: "#40E0D0",
    },
  ];
  return (
    <main>
      <Header />
      <Form />
      <ul>
        {colorCard.map((card) => (
          <CardComponents
            key={card.id}
            color={card.colorCode}
            name={card.name}
          />
        ))}
      </ul>
    </main>
  );
}

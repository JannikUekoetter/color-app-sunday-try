import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import CardComponents from "./components/CardComponents";

export default function App() {
  const colorCard = [
    {
      name: "card1",
      id: "234",
      colorCode: "#ccc",
    },
    {
      name: "card2",
      id: "2",
      colorCode: "#4c6ef5",
    },
    {
      name: "card3",
      id: "3",
      colorCode: "#82c91e",
    },
    {
      name: "card4",
      id: "4",
      colorCode: "#12b886",
    },
    {
      name: "ca10000000rd5",
      id: "5",
      colorCode: "#ccc",
    },
  ];
  return (
    <main>
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

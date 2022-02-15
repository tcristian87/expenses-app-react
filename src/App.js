import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet",
      amount: 94.12,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e1",
      title: "New Tv",
      amount: 799.49,
      date: new Date(2021, 1, 2)
    },
    {
      id: "e1",
      title: "Car Insurance",
      amount: 2947.67,
      date: new Date(2021, 3, 8)
    },
    {
      id: "e1",
      title: "New Desk(Wooden)",
      amount: 450,
      date: new Date(2021, 5, 18)
    }
  ];
  return (
    <div>
      <h1>Let`s get started!</h1>
      <Expenses items={expenses} />
    </div>
  )
};

export default App;

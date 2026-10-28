export default function SnackList() {
  const snacks = [
    { id: 5, name: 'Strawberry Pocky', rank: 5 },
    { id: 4, name: 'Spicy Takis', rank: 4 },
    { id: 3, name: 'Jalapeno Chips', rank: 3 },
    { id: 2, name: 'Lemon Pepper Wings', rank: 2 },
    { id: 1, name: 'Chocolate Covered Raisins', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.id}>
          <strong>{snack.name}</strong> (Rank #{snack.rank})
        </li>
      ))}
    </ol>
  );
}

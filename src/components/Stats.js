export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Get Yourself Ready🙇‍♂️</em>
      </p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const packedPercentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You are ready ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed
        ${packedItems} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}

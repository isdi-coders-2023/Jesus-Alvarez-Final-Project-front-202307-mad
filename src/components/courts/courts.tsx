export function Courts() {
  return (
    <div>
      <ul>
        {characters.map((item: Character, index: number) => (
          <Card key={index} character={item}></Card>
        ))}
      </ul>
    </div>
  );
}

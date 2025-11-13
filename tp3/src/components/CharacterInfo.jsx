export default function CharacterInfo({ character }) {
  if (!character) return null;

  return (
    <div className="p-4 text-center">
      <img
        src={character.image}
        alt={character.name}
        className="mx-auto rounded-lg mb-4 w-48"
      />

      <h2 className="text-2xl font-bold">{character.name}</h2>

      <p>
        <strong>Raza:</strong> {character.race}
      </p>
      <p>
        <strong>Género:</strong> {character.gender}
      </p>
      <p>
        <strong>Ki:</strong> {character.ki}
      </p>
    </div>
  );
}

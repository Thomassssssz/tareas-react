export const CharacterInfo = ({ character }) => {
  if (!character) return null;

  return (
    <div className="text-center">
      <img
        src={character.image}
        alt={character.name}
        className="w-48 mx-auto rounded-lg mb-4 shadow-lg"
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
};

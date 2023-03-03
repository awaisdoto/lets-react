import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found !</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              name={pet.name}
              animal={pet.animal}
              age={pet.age}
              origin={pet.origin}
              image={pet.images}
              key={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;

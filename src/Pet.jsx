const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.age}</h2>
      <h2>{props.origin}</h2>
    </div>
  );
};
export default Pet;

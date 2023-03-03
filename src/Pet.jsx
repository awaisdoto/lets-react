const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.age}</h2>
      <h2>{props.origin}</h2>
      <img src={props.image[0]} alt="yomama" style={{ width: "100%" }} />
    </div>
  );
};
export default Pet;

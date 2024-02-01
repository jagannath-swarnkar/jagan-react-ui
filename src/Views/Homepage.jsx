import InputChips from "../components/input-chips/InputChips";

const Homepage = (props) => {
  return (
    <div className="">
      <h1>Jagan React UI</h1>
      <p>
        Custom HTML and CSS components in react js, you can directly copy the
        jsx and css file to use a particular component.
      </p>
      <div className="">
        <h3>Input Chips</h3> <InputChips />
      </div>
    </div>
  );
};
export default Homepage;

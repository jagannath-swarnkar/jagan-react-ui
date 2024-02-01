import React from "react";
import "./InputChips.module.css";
const InputChips = () => {
  const [value, setValue] = React.useState("");
  const [chips, setChips] = React.useState([]);
  const handleChange = (event) => {
    if (event.target.value.includes(",")) return;
    setValue(event.target.value);
  };
  const handleKeyUp = (event) => {
    if (!value && event.key === "Backspace" && chips.length) {
      const newChips = [...chips];
      newChips.pop();
      setChips(newChips);
    } else if (value && (event.key === "Enter" || event.key === ",")) {
      setChips([...chips, value.trim()]);
      setValue("");
    }
  };
  const handleDelete = (index) => {
    const newChips = [...chips];
    newChips.splice(index, 1);
    setChips(newChips);
  };
  const handleBlur = () => {
    if (value) {
      setChips([...chips, value.trim()]);
      setValue("");
      document.getElementById("input-chips").focus();
    }
  };

  return (
    <div className="form-field">
      <div className="chips_contianer">
        <div className="chips_list">
          {chips.map((chip, index) => (
            <div className="chip" key={index}>
              {chip} <span onClick={() => handleDelete(index)}>&#x2715;</span>
            </div>
          ))}
        </div>
        <input
          type="text"
          name="input-chips"
          id="input-chips"
          className="input_chips"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyUp={handleKeyUp}
        />
      </div>
    </div>
  );
};

export default InputChips;

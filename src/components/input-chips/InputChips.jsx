import React from "react";
import "./input-chips.css";
const InputChips = (props) => {
    const id = props.id || "input-chips";
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
            document.getElementById(id).focus();
        }
    };

    return (
        <label htmlFor={id} className="chips_contianer">
            <div className="chips_list">
                {chips.map((chip, index) => (
                    <div className="chip" key={index}>
                        {chip} <span onClick={() => handleDelete(index)}>&#x2715;</span>
                    </div>
                ))}
            </div>
            <div className="form-field">
                <input
                    type="text"
                    name="input-chips"
                    id={id}
                    className="input_chips"
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyUp={handleKeyUp}
                    placeholder="Enter comma separated values"
                />
            </div>
        </label>
    );
};

export default InputChips;

import InputChips from "../components/input-chips/InputChips";
import ReactTablePage from "./ReactTablePage";

const Homepage = (props) => {
    return (
        <div className="">
            <h1>Jagan React UI</h1>
            <p>Custom HTML and CSS components in react js, you can directly copy the jsx and css file to use a particular component.</p>
            <div className="card_shadow p-2">
                <h3>Input Chips</h3> <InputChips />
            </div>
            <ReactTablePage />
        </div>
    );
};
export default Homepage;

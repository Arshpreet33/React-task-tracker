import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, btnName, onBtnClick }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text={btnName} onBtnClick={onBtnClick} />
        </header>
    );
};

Header.defaultProps = {
    title: "Task Tracker",
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

// const headerStyles = { color: "red", backgroundColor: "black" }; // CSS in JS
export default Header;

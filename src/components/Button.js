import PropTypes from "prop-types";

const Button = ({ color, text, onBtnClick }) => {
    // const onBtnClick = () => {
    //     console.log("btn clicked!!!");
    // };
    return (
        <button
            className="btn"
            onClick={() => onBtnClick(text)}
            style={{ backgroundColor: color }}
        >
            {text}
        </button>
    );
};

Button.defaultProps = {
    color: "steelblue",
};

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
};
export default Button;

import './Button.css';

const Button=({text,isActive = true,onClick}) => {


    return(
        <button
            className={`Button ${isActive ? 'Button_active' : ''}`}
            onClick={onClick}
        >  {text}
        </button>
    );
};

export default Button;

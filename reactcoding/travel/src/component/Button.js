import './Button.css';
import leftIcon from '../img/left.png';

const Button=({text,state='none',onClick,img}) => {
    const visibleState=["thema,schedule"].includes(state) ? state:"none";

     const imageSrc = img === 'left' ? leftIcon : null;


    return(
        <button className={["Button",`Button_${visibleState}`].join(" ")} onClick={onClick} >
            <img src={imageSrc } />
        </button>
    );
};

export default Button;

import './Header.css';
import {useNavigate} from "react-router-dom";
import logo from '../img/logo.png';


const Header = () => {
  const navigate = useNavigate(); 
  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="home-button" onClick={handleHomeClick}>
          홈
        </button>
      </div>

      <div className="header-center">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="header-right">
        {/* 오른쪽에 다른 버튼이나 아이콘 넣고 싶으면 여기에 */}
      </div>
    </header>
  );
};

export default Header;


// import './Header.css'

// const Header = ({title,leftChild,rightChild}) =>{
//     return (
// <div className="Header">
//             <div className='header_left'>{leftChild}</div>
            
//             <div className="header_title">
//                {title}
//             </div>

//             <div className='header_right'>{rightChild}</div>
//         </div>
//     );
// };

// export default Header;
import React from 'react';
import './Header.css';
import {useNavigate} from "react-router-dom";
import { TravelStateContext } from '../App';

const Header = ({ title = "제목" }) => {
    const handleHomeClick = () => {

    console.log("홈 버튼 클릭됨");
  };

  return (
    <header className="header">
      <div>
        <div>
            <button
            onClick={handleHomeClick}
            className="button"
            >
            홈버튼
            </button>

        </div>
        <h1 className="title">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;
import { useState } from "react";

const Controller = ({ handleSetCount }) => {
  const [num, setNum] = useState("");

  // input 값 변경
  const handleOnChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <div>
      <button type="button" onClick={() => handleSetCount(-1)}>-1</button>
      <button type="button" onClick={() => handleSetCount(-10)}>-10</button>
      <button type="button" onClick={() => handleSetCount(-100)}>-100</button>
      <button type="button" onClick={() => handleSetCount(100)}>+100</button>
      <button type="button" onClick={() => handleSetCount(10)}>+10</button>
      <button type="button" onClick={() => handleSetCount(1)}>+1</button>

      <input
        type="number"
        placeholder="직접입력"
        value={num}
        onChange={handleOnChange}
      />
      <button
        type="button"
        onClick={() => {
          if (!isNaN(num) && num !== "") {
            handleSetCount(Number(num)); // 입력값을 count에 누적
            setNum(""); // 입력창 비우기
          }
        }}
      >
        확인
      </button>
    </div>
  );
};

export default Controller;
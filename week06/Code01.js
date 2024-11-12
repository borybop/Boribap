//입력 폼에 숫자를 입력한 뒤 버튼을 클릭하면 짝/홀을 판별하는 경고창을 띄우기
import React, { useState } from 'react';

function Body() {
  const [text, setText] = useState("");
  function handleOnChange(event) {
    setText(event.target.value);
  }

function handleOnClick() { 
        if (inNum % 2 === 0) {
            alert(`${inNum}은(는) 짝수입니다!`);
          } 
        else {
            alert(`${inNum}은(는) 홀수입니다!`);
          }
    }

  return (
    <div>
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>짝수/홀수 확인</button>
    </div>
  );
}
  export default Body;
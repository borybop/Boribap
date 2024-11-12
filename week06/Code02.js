// useRef를 사용하여 5글자 이상 입력이 될 때까지 해당 폼을 포커스하는 기능을 만들기. header 5글자 이상을 입력하세요 작성 완료 footer

import { useRef, useState } from "react";

function Body() {
  const [text, setText] = useState("");
  const textRef = useRef();

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    if (text.length < 5) {
      textRef.current.focus();
    } else {
      alert(text);
      setText("");
    }
  };

  return (
    <div>
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성 완료</button>
    </div>
  );
}
export default Body;
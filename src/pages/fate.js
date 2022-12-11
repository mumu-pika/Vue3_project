import { useState } from "react";

function Fate() {
  // 样式的颜色
  const [color, setColor] = useState("hotpink");

  // 修改样式颜色的方法
  const changeColor = () => {
    setColor(color == "hotpink" ? "skyblue" : "hotpink");
  };

  return (
    <>
      <div>fate stay night</div>
      <div className="saber">saber</div>
      <div>
        <button onClick={changeColor}>改颜色</button>
      </div>
      <style jsx>
        {`
          div {
            color: puple;
          }
          .saber {
            color: ${color};
          }
        `}
      </style>
    </>
  );
}

export default Fate;

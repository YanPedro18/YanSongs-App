import { ArrowUp } from "@phosphor-icons/react";
import "./button.css";

function ScrolltoTop() {
  const handle = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button className="botao" onClick={handle}>
        <ArrowUp size={28} weight="bold" />
      </button>
    </div>
  );
}

export default ScrolltoTop;

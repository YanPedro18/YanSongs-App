import Slider from "react-slick";
import "./Carrosel.css";

function Carrosel({ children }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    variableHeight: true,
  };

  return (
    <div>
      <Slider {...settings}>{children} </Slider>
    </div>
  );
}

export default Carrosel;

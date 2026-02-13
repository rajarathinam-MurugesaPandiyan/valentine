import Lottie from "lottie-react";
import heartAnimation from "../assets/Fireworks.json";

const Celebrations = () => {
  return (
    <div style={{ width: 500, height: 500 }}>
      <Lottie
        animationData={heartAnimation}
        loop={true}
        autoplay={true}
      />
    </div>
  );
};

export default Celebrations;

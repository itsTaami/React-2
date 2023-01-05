import "./BodyImg.css";

import BodyText from "../BodyText";

const image = [
  { pic: "/images/Content-img.svg" },
  { pic: "/images/Content-img2.svg" },

  { pic: "/images/Content-img.svg" },
  { pic: "/images/Content-img2.svg" },

  { pic: "/images/Content-img.svg" },
  { pic: "/images/Content-img2.svg" },
];

const BodyImg = () => {
  return (
    <div className="bodyImg">
      {image.map((item) => {
        return <img src={item.pic} alt="" />;
      })}
    </div>
  );
};

export default BodyImg;

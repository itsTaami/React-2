import CardItemContents from "./CardItemContents/CardItemContents";

const CardItemsL = [
  { pic: "/images/Content-img.svg" },
  { pic: "/images/Content-img2.svg" },

  { pic: "/images/Content-img.svg" },
  { pic: "/images/Content-img2.svg" },

  { pic: "/images/Content-img.svg" },
  { pic: "/images/Content-img2.svg" },
];

const CardItems = () => {
  return CardItemsL.map((item) => {
    return (
      <div className="CardItems">
        <CardItemContents image={item.pic} />
      </div>
    );
  });
};

export default CardItems;

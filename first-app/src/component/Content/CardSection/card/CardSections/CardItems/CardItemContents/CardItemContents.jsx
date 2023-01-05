const CardItemContents = (props) => {
  return (
    <div>
      <img src={props.image} alt="" className="pic" />
      <h5 className="date">NOV 23 2020</h5>
      <h1 className="title">This way is wrong about UI Design</h1>
      <p className="para">
        A quick guide to assisting users in the challenging steps from learning
        about your podcast on the web. A quick guide to assisting users in the
        challenging steps from learning about your podcast on the web.
      </p>
      <button href="#" className="BtnRead">
        Read More
      </button>
    </div>
  );
};

export default CardItemContents;

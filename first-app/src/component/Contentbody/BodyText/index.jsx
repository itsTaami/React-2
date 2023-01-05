import "./bodytext.css";

const BodyText = (props) => {
  return (
    <div className="bodytext">
      <img src={props.image} alt="" />
      <h3>Nov 23 2020</h3>
      <h1>This way is wrong about UI Design</h1>
      <p>
        A quick guide to assisting users in the challenging steps from learning
        about your podcast on the web. A quick guide to assisting users in the
        challenging steps from learning about your podcast on the web.
      </p>
      <button className="btn">READ MORE</button>
    </div>
  );
};

export default BodyText;

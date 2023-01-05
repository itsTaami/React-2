import "../../component/global.css";
import "./Hero.css";

const BtnItems = [
  {
    name: "TWITTER",
    link: "#",
    className: "BtnItem",
    ImageURL: "/images/twitter.svg",
    background: "#47ACDF",
  },

  {
    name: "LINKEDIN",
    link: "#",
    className: "BtnItem2",
    ImageURL: "/images/linked.svg",
    background: "#1275B1",
  },

  {
    name: "MEDIUM",
    link: "#",
    className: "BtnItem3",
    ImageURL: "/images/medium.svg",
    background: "#000",
  },
];

const Btncomp = (props) => {
  return (
    <button
      href="{item.link}"
      className={props.class}
      style={{ background: props.background }}
    >
      <img src={props.img} alt="" />
      {props.name}
    </button>
  );
};

export const HeroSection = () => {
  return (
    <div className="hero">
      <div className="lefttext">
        <div className="text">
          <h1>Blog Posts</h1>

          <h3>I think so, this is it.</h3>

          <p>
            Design begins after I begin to think about how to present an
            experience most successfully, whether a button I put in can solve a
            problem. The only point in design is not ui design, if the user does
            not have a good experience at the end of the product, the design
            will be considered unsuccessful in my opinion.
          </p>
        </div>

        <div className="btn">
          {BtnItems.map((item) => {
            return (
              <Btncomp
                img={item.ImageURL}
                name={item.name}
                class={item.className}
                background={item.background}
              />
            );
          })}
        </div>
      </div>

      <div className="rightImg">
        <img src="/images/Saly.svg" alt="saly.svg" />
      </div>
    </div>
  );
};

import React from "react";
import { useHistory } from "react-router-dom";

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Information Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel a
        aliquam ducimus et in sed nemo iure minus eos.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to affairs page
      </button>
    </>
  );
};

export default AboutPage;

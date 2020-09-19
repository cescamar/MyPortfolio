import React from "react";
import Typical from "react-typical";

const Banner2 = () => {
  return (
    <div>
      <p>
        Hello, I'm a{" "}
        <Typical
          steps={["Hello", 1000, "Hello world!", 500]}
          loop={Infinity}
          wrapper="p"
        />
      </p>
    </div>
  );
};

export default Banner2;

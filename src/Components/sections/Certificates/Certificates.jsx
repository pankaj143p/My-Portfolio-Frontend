import React from "react";
import Certificate1 from "../../certificates/c1.jpg";
import Certificate2 from "../../certificates/c2.jpg";
import Certificate3 from "../../certificates/c3.jpeg";
import Certificate4 from "../../certificates/c4.png";
import Certificate8 from "../../certificates/c8.jpg";
import Certificate9 from "../../certificates/c9.jpg";

const Certificates = () => {
  return (
    <div>
      <h1>My Certificates</h1>
      <div>
        <img src={Certificate1} alt="Certificate 1" />
        <img src={Certificate2} alt="Certificate 2" />
        <img src={Certificate3} alt="Certificate 3" />
        <img src={Certificate4} alt="Certificate 4" />
        <img src={Certificate8} alt="Certificate 8" />
        <img src={Certificate9} alt="Certificate 9" />
      </div>
    </div>
  );
};

export default Certificates;

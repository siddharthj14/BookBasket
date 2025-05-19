import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          quia aperiam fugit atque fugiat iusto suscipit quam autem eos voluptas
          obcaecati vitae et, modi nulla veritatis, natus quisquam perspiciatis.
          Ipsam a id doloribus excepturi, sequi ex distinctio quibusdam quos
          laudantium autem repellat, iusto sunt accusamus aliquam temporibus,
          quam nulla exercitationem.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quos
          quis aspernatur animi sequi explicabo debitis cumque temporibus
          commodi porro beatae, eum quasi velit cupiditate, assumenda ad vel
          dolor excepturi.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;

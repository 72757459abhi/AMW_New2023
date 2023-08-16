import React from "react";
import "../cssFile/Product.css";
import nail1 from "../Assets/nail5.jpg";
import nail2 from "../Assets/nail2.jpg";
import nail3 from "../Assets/nail3.jpg";
import nail4 from "../Assets/nail4.jpg";
import ModalComp from "./Modal";
import { useState } from "react";

const product = [
  {
    img: nail1,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 3",
    details: [
      {
        price: "100 $",
        item: "",
        prduct: "",
        size: "1 inch",
      },
    ],
  },
  {
    img: nail2,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 3",
    details: [
      {
        price: "100 $",
        item: "",
        prduct: "",
        size: "1 inch",
      },
    ],
  },
  {
    img: nail3,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 2",
    details: [
      {
        price: "100 $",
        item: "",
        prduct: "",
        size: "1 inch",
      },
    ],
  },
  {
    img: nail4,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 2",
    details: [
      {
        price: "100 $",
        item: "",
        prduct: "",
        size: "1 inch",
      },
    ],
  },
  {
    img: nail3,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 2",
    details: [
      {
        price: "100 $",
        item: "",
        prduct: "",
        size: "1 inch",
      },
    ],
  },
  {
    img: nail4,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 2",
    details: [
      {
        price: "100 $",
        item: "",
        prduct: "",
        size: "1 inch",
      },
    ],
  },
];

const Product = () => {
  const [show, setShow] = useState(false);

  const onInterested = () => {
    setShow(true);
  };

  return (
    <div className={"product"}>
      <div className={"product1"}>
        {product.map((product, index) => (
          <div className={"productCard"} key={index}>
            <div className={"productBox"}>
              <div className="commonStyleWrapper">
                <div className={"productBoximg commonStyle"}>
                  <img src={product.img} alt="" />
                </div>

                <div className={"productBoxdetail commonStyle"}>
                  <div className={"productTableContainer"}>
                    <table className={"admTable"}>
                      <tr className={"admTable"}>
                        <th className={"admth"}>Material Grade</th>
                        <td className={"admtd"}>{"Wire Nail"}</td>
                      </tr>
                      <tr className={"admTable"}>
                        <th className={"admth"}>Item</th>
                        <td className={"admtd"}>{"Nail"}</td>
                      </tr>
                      <tr className={"admTable"}>
                        <th className={"admth"}>Size</th>
                        <td className={"admtd"}>{"2"} Inch</td>
                      </tr>
                      <tr className={"admTable"}>
                        <th className={"admth"}>Price</th>
                        <td className={"admtd"}>{"57"}:00 ruppes</td>
                      </tr>
                      <tr className={"admTable"}>
                        <th className={"admth"}>Quantity</th>
                        <td className={"admtd"}>{"500"} Bags</td>
                      </tr>
                      <tr className={"admTable"}>
                        <th className={"admth"}>Packaging Size</th>
                        <td className={"admtd"}>{"25"} Kg</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>

              <div className={"productBoxDescription commonStyle1"}>
                <p>{product.description}</p>
                <button onClick={() => onInterested()}>
                  Yes! I am Interested
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>{show && <ModalComp show={show} setShow={setShow} />}</div>
    </div>
  );
};

export default Product;

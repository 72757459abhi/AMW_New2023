import React from "react";
import "../cssFile/HomeProduct.css";
import { Link } from "react-router-dom";
import ModalComp from "./Modal"


import { useState } from "react";

import nail1 from "../Assets/nail5.jpg";
import nail2 from "../Assets/nail2.jpg";
import nail3 from "../Assets/nail3.jpg";
import nail4 from "../Assets/nail4.jpg";

const product = [
  {
    img: nail1,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 3",
    details: {
      price: "100 $",
      item: "jsnkjskj msmnjs",
      prduct: "snks skjsk a",
      size: "1 inch",
    },
  },
  {
    img: nail2,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 3",
    details: {
      price: "100 $",
      item: "jsnkjskj msmnjs",
      prduct: "snks skjsk a",
      size: "1 inch",
    },
  },
  {
    img: nail3,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 2",
    details: {
      price: "100 $",
      item: "jsnkjskj msmnjs",
      prduct: "snks skjsk a",
      size: "1 inch",
    },
  },
  {
    img: nail4,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 2",
    details: {
      price: "100 $",
      item: "jsnkjskj msmnjs",
      prduct: "snks skjsk a",
      size: "1 inch",
    },
  },
  {
    img: nail3,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 2",
    details: {
      price: "100 $",
      item: "jsnkjskj msmnjs",
      prduct: "snks skjsk a",
      size: "1 inch",
    },
  },
  {
    img: nail4,
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter 2",
    details: {
      price: "100 $",
      item: "jsnkjskj msmnjs",
      prduct: "snks skjsk a",
      size: "1 inch",
    },
  },
];

// Features:

// Tough construction
// Lightweight
// Constant performance

const Product = () => {

  const [show, setShow] = useState(false)

const onInterested = ()=>{
  setShow(true)
} 

  console.log(product, "pro");
  return (
    <div className={"product"}>
      <div className={"gridContainer"}>
        {product.map((product, index) => (
          <div className={"homeproductCard"} key={index}>
            <div className={"gridItem"}>
              <div className={"homeproductBox"}>
                <div className={"homeproductBoximg"}>
                  <img src={product.img} alt="img" />
                </div>

                <div className={"homeproductBoxdetail"}>
                  <h2 >Product Details:</h2>

                  <div className={"tableContainer"}>
                    <table className={"admTable"}>
                      <tr className={"admTable"}>
                        <th className={"admth"}>Material Grade</th>
                        <td className={"admtd"}>{"Wire Nail"}</td>
                      </tr>
                      <tr className={"admTable"}>
                        <th className={"admth"}>Material</th>
                        <td className={"admtd"}>{"Iron"}</td>
                      </tr>
                      <tr className={"admTable"}>
                        <th className={"admth"}>Size</th>
                        <td className={"admtd"}>{"2"} Inch</td>
                      </tr>
                      <tr className={"admTable"}>
                        <th className={"admth"}>Head Shape</th>
                        <td className={"admtd"}>{"With Head"}</td>
                      </tr>
                      <tr className={"admTable"}>
                        <th className={"admth"}>Finish</th>
                        <td className={"admtd"}>{"Natural Polish"}</td>
                      </tr>
                      <tr className={"admTable"}>
                        <th className={"admth"}>Packaging Size</th>
                        <td className={"admtd"}>{"25"} Kg</td>
                      </tr>
                    </table>
                  </div>

                  {/* <table>
                    <tr>
                      <th>Prduct</th>
                      <td>{product.details.prduct}</td>
                    </tr>
                    <tr>
                      <th>Item</th>
                      <td>{product.details.item}</td>
                    </tr>
                    <tr>
                      <th>Size</th>
                      <td>{product.details.size}</td>
                    </tr>
                    <tr>
                      <th>Price</th>
                      <td>{product.details.price}</td>
                    </tr>
                  </table> */}
                </div>
              </div>
              <div className={"homeproductBoxDescription"}>
                <p>{product.description}</p>
                <div className={"homebtnContainer"}>
                  <button onClick={()=> onInterested()}>Yes! I am Interestaed</button>
                  {/* <button >Read More</button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={"btnDiv"}>
        <Link to="/product">
          <button className={"btn"}>More Product</button>
        </Link>
      </div>

      <div>
        { show &&
        <ModalComp  show={show} setShow={setShow} />

        }
      </div>

    </div>
  );
};

export default Product;

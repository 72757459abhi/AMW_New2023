import React from 'react'
import  "../cssFile/AdminDashboard.css";
import img from "../Assets/nail1.jpg";
import Sales from "../jsFile/Sales";

const Contact = () => {
  return (
    <>
      <main className={"profile"}>
        <main className={"auth"}>
          <section>
            <form>
              <div className={"control"}>
                <label htmlFor="image">Image</label>
                <input type="file" id="image" />
              </div>
              <div className={"control"}>
                <label htmlFor="productName">Product Name</label>
                <input type="text" id="productName" />
              </div>
              <div className={"control"}>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" id="quantity" />
              </div>
              <div className={"control"}>
                <label htmlFor="size">Size</label>
                <input type="number" id="size" />
              </div>
              <div className={"control"}>
                <label htmlFor="weight">Weight Per Bags</label>
                <input type="text" id="weight" />
              </div>
              <div className={"control"}>
                <label htmlFor="price">Price</label>
                <input type="number" id="price" />
              </div>
              <div className={"control"}>
                <label htmlFor="item">Item</label>
                <input type="text" id="item" />
              </div>

              <div className={"control"}>
                <label htmlFor="description">Description</label>
                <input
                  type='textarea'
                  name="description"
                  id="description"
                  cols="40"
                  rows="4"
                  placeholder="Please write your query..."
                />
              </div>
              <button className={"btn"}> Add </button>
              <button className={"btn"}> Prev </button>
            </form>
          </section>
        </main>
        <main className={"auth1"}>
          <img className={"img"} src={img} alt="img" />
          <div className={"tableContainer"}>
            <table className={"admTable"}>
              <tr className={"admTable"}>
                <th className={"admth"}>Product Name</th>
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
                <th className={"admth"}>Weight Per Bags</th>
                <td className={"admtd"}>{"25"} Kg</td>
              </tr>
            </table>
          </div>
          <p className={"descriptipn"}>
            Description:{" "}
            {
              "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter"
            }
          </p>
        </main>
      </main>

      <Sales />
    </>
  );
};

export default Contact;

import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import { IoIosArrowBack } from "react-icons/io";
import "./bill.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";

const Bill = () => {
  const token = localStorage.getItem("token");
  const order_id = useParams().bill_id;
  const [order_list, setOrderList] = useState("");
  var totalPrice = 0;

  console.log(order_list);

  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    let data = JSON.stringify({
      token: token,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/user/check-token",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        if (response.data.result != "success") {
          localStorage.clear();
          navigate("/loginuser");
          return;
        }
      })
      .catch((error) => {
        localStorage.clear();
        console.log(error);
        navigate("/loginuser");
        return;
      });
  }, [token]);

  useEffect(() => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/store/order/${order_id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setOrderList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [order_id]);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitReview = (event) => {
    event.preventDefault();
    let data = JSON.stringify({
      product: product_id,
      user: user_id,
      rating: rating,
      comment: comment,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/store/review/create",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("Successful review.");
      })
      .catch((error) => {
        console.log(error);
      });

    setRating(0);
    setComment("");
  };

  return (
    <>
      <Header></Header>
      <div className="bill">
        <Link to="/order" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>
        <div className="bill-detial newspanBox">
          <div className="guopoidHead">
            <div className="idf">
              <p>Order ID: {order_list.id}</p>
              <p>Date: {new Date(order_list.created_at).toLocaleString()}</p>
              {/* <p>Name: </p> */}
            </div>
          </div>
          <div className="billGopBox">
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Color</th>
                  <th>Size</th>
                </tr>
              </thead>
              <tbody>
                {order_list.items &&
                  order_list.items.map((item, index) => (
                    // console.log(item.product)

                    <tr key={index}>
                      <td>{item.product.name}</td>
                      <td>
                        {parseFloat(item.price).toLocaleString("en-US", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                          useGrouping: true,
                        })}
                      </td>
                      <td>{item.quantity}</td>
                      <td>{item.color}</td>
                      <td>{item.size}</td>
                      <p hidden>{(totalPrice += item.price * item.quantity)}</p>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="titlePrice">
            <p>Total:</p>
            <p>
              {parseFloat(totalPrice).toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
                useGrouping: true,
              })}{" "}
              Kip
            </p>
          </div>
          <div className="box_place">
            <div className="place-on">
              <p>Place on: BCEL</p>
              <p>Payment method: MasterCard</p>
              {/* <p>Contact number: +85620{order_list.tel}</p> */}
              {/* <p>Status: {order_list.status}</p> */}
              <div className="Box_China_Branch">
                <p>Follow your items (China to Laos): </p>
                <Link to="https://www.youtube.com/">Click here</Link>
              </div>
              <div className="Box_China_Branch">
                <p>Follow your items (Branch to Branch): </p>
                <Link to="https://www.youtube.com/">Click here</Link>
              </div>
            </div>

            <div className="Box_btn_bill">
              <button type="sumit">See Bill</button>
            </div>
          </div>
        </div>
        {order_list.status === "Delivered" && (
          <div style={{ textAlign: "center", width: "60%", margin: "0 auto" }}>
            <h1>Leave a Review</h1>
            <div style={{ marginBottom: "20px" }}>
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  style={{
                    fontSize: "30px",
                    cursor: "pointer",
                    color: index < rating ? "#FFD700" : "#DDDDDD",
                  }}
                  onClick={() => handleRatingChange(index + 1)}
                >
                  ★
                </span>
              ))}
            </div>
            <form
              onSubmit={handleSubmitReview}
              style={{ marginBottom: "20px" }}
            >
              <textarea
                rows="4"
                cols="50"
                value={comment}
                onChange={handleCommentChange}
                placeholder="Write your review here..."
                style={{ fontSize: "20px" }}
              />
              <br />
              <button type="submit" style={{ fontSize: "20px" }}>
                Submit Review
              </button>
            </form>
          </div>
        )}
      </div>
      <Menu />
    </>
  );
};

export default Bill;

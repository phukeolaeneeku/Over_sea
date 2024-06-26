import "./board.css";
import { IoDocumentText } from "react-icons/io5";
import { BsHandbagFill } from "react-icons/bs";
import { TbShoppingCartStar } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Board = () => {
  return (
    <>
      <section>
        <div className="boxspentainer"></div>
        <div className="board">
          <div className="manage-target">
            <div className="manage">
              <div className="containerBox_db">
                <h3>Orders</h3>
                <div className="contentBox_db">
                  <div className="menu-box four">
                    <div>
                      <IoDocumentText className="iconGad gone4" />
                      <p>Pending</p>
                    </div>
                    <h2>5</h2>
                    <Link to="/order/pending" className="txtcol">
                      <p>View More</p>
                    </Link>
                  </div>
                  <div className="menu-box three">
                    <div>
                      <IoDocumentText className="iconGad gone3" />
                      <p>Process</p>
                    </div>
                    <h2>5</h2>
                    <Link to="/order/processing" className="txtcol">
                      <p>View More</p>
                    </Link>
                  </div>
                  <div className="menu-box one">
                    <div>
                      <IoDocumentText className="iconGad gone1" />
                      <p>Delivered</p>
                    </div>
                    <h2>5</h2>
                    <Link to="/order/delivered" className="txtcol">
                      View More
                    </Link>
                  </div>
                  <div className="menu-box two">
                    <div>
                      <IoDocumentText className="iconGad gone2" />
                      <p>Shipped</p>
                    </div>
                    <h2>5</h2>
                    <Link to="/order/shipped" className="txtcol">
                      <p>View More</p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="target">
                <div className="box_sales">
                  <h3>Sales</h3>
                  <form className="boxfiltermonth">
                    <select
                      className="filter_month"
                      onClick={(e) => set_filter(e.target.value)}
                    >
                      <option value="0">Month</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </form>
                </div>
                <div className="box_sales_quantity">
                  <div className="txtBoxmonth">
                    <div>This month's sales: </div>
                    <h3>$200.00</h3>
                  </div>
                  <div className="txtBoxmonth">
                    <div>All quantity: </div>
                    <h3>200</h3>
                  </div>
                </div>
                <div className="box_history">
                  <div >
                    <IoDocumentText className="iconGads gone22" />
                  </div>
                  <p className="txt_history">History</p>
                  <h3>100</h3>
                  <Link to="#" className="txtcol">
                    <p>View More</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="products-visit">
            <div className="products">
              <h3>Top products</h3>
              <div className="item_guopBox">
                <div className="items">
                  <h4>#</h4>
                  <h4>Name</h4>
                  <h4>Quantity</h4>
                  <h4>Popularity</h4>
                  <h4>Sales</h4>
                </div>
                <div className="items">
                  <span>01</span>
                  <span>Product1</span>
                  <span>30</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="180"
                      height="4"
                      viewBox="0 0 180 4"
                      fill="none"
                    >
                      <rect width="180" height="4" rx="2" fill="#CDE7FF" />
                      <rect width="140" height="4" rx="2" fill="#0095FF" />
                    </svg>
                  </span>
                  <span className="sales_persian sales_an1">45%</span>
                </div>
                <div className="items">
                  <span>02</span>
                  <span>Product2</span>
                  <span>30</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="180"
                      height="4"
                      viewBox="0 0 180 4"
                      fill="none"
                    >
                      <rect width="180" height="4" rx="2" fill="#8CFAC7" />
                      <rect width="110" height="4" rx="2" fill="#00E096" />
                    </svg>
                  </span>
                  <span className="sales_persian sales_an2">29%</span>
                </div>
                <div className="items">
                  <span>03</span>
                  <span>Product3</span>
                  <span>30</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="180"
                      height="4"
                      viewBox="0 0 180 4"
                      fill="none"
                    >
                      <rect width="180" height="4" rx="2" fill="#C5A8FF" />
                      <rect width="100" height="4" rx="2" fill="#884DFF" />
                    </svg>
                  </span>
                  <span className="sales_persian sales_an3">24%</span>
                </div>
                <div className="items">
                  <span>04</span>
                  <span>Product4</span>
                  <span>30</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="180"
                      height="4"
                      viewBox="0 0 180 4"
                      fill="none"
                    >
                      <rect width="180" height="4" rx="2" fill="#FFD5A4" />
                      <rect width="60" height="4" rx="2" fill="#FF8F0D" />
                    </svg>
                  </span>
                  <span className="sales_persian sales_an4">18%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Board;

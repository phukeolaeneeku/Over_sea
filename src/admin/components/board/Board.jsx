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
                <h3>Dashboard</h3>
                <div className="contentBox_db">
                  <div className="menu-box four">
                    <div>
                      <IoDocumentText className="iconGad gone4" />
                      <p>Pending</p>
                    </div>
                    <h2>5</h2>
                    <Link to="#" className="txtcol">
                      <p>View More</p>
                    </Link>
                  </div>
                  <div className="menu-box three">
                    <div>
                      <IoDocumentText className="iconGad gone3" />
                      <p>Process</p>
                    </div>
                    <h2>5</h2>
                    <Link to="#" className="txtcol">
                      <p>View More</p>
                    </Link>
                  </div>
                  <div className="menu-box one">
                    <div>
                      <IoDocumentText className="iconGad gone1" />
                      <p>Delivered</p>
                    </div>
                    <h2>5</h2>
                    <Link to="#" className="txtcol">
                      View More
                    </Link>
                  </div>
                  <div className="menu-box two">
                    <div>
                      <IoDocumentText className="iconGad gone2" />
                      <p>Delivered</p>
                    </div>
                    <h2>5</h2>
                    <Link to="#" className="txtcol">
                      <p>View More</p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="target">
                <h2>Target vs Reality</h2>
                <div className="target-graph">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="103"
                    viewBox="0 0 36 103"
                    fill="none"
                  >
                    <rect
                      x="20"
                      y="0.908203"
                      width="16"
                      height="102.092"
                      rx="4"
                      fill="#FFCF00"
                    />
                    <rect
                      y="24.3237"
                      width="16"
                      height="78.6761"
                      rx="4"
                      fill="#4AB58E"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="93"
                    viewBox="0 0 36 93"
                    fill="none"
                  >
                    <rect
                      x="20"
                      y="0.274902"
                      width="16"
                      height="92.7253"
                      rx="4"
                      fill="#FFCF00"
                    />
                    <rect
                      y="24.627"
                      width="16"
                      height="68.3732"
                      rx="4"
                      fill="#4AB58E"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="117"
                    viewBox="0 0 36 117"
                    fill="none"
                  >
                    <rect
                      x="20"
                      y="0.859375"
                      width="16"
                      height="116.141"
                      rx="4"
                      fill="#FFCF00"
                    />
                    <rect
                      y="58.9297"
                      width="16"
                      height="58.0704"
                      rx="4"
                      fill="#4AB58E"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="93"
                    viewBox="0 0 36 93"
                    fill="none"
                  >
                    <rect
                      x="20"
                      y="0.274902"
                      width="16"
                      height="92.7253"
                      rx="4"
                      fill="#FFCF00"
                    />
                    <rect
                      y="24.627"
                      width="16"
                      height="68.3732"
                      rx="4"
                      fill="#4AB58E"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="133"
                    viewBox="0 0 36 133"
                    fill="none"
                  >
                    <rect
                      x="20"
                      width="16"
                      height="133"
                      rx="4"
                      fill="#FFCF00"
                    />
                    <rect
                      y="37.4648"
                      width="16"
                      height="95.5352"
                      rx="4"
                      fill="#4AB58E"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="133"
                    viewBox="0 0 36 133"
                    fill="none"
                  >
                    <rect
                      x="20"
                      width="16"
                      height="133"
                      rx="4"
                      fill="#FFCF00"
                    />
                    <rect
                      y="37.4648"
                      width="16"
                      height="95.5352"
                      rx="4"
                      fill="#4AB58E"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="133"
                    viewBox="0 0 36 133"
                    fill="none"
                  >
                    <rect
                      x="20"
                      width="16"
                      height="133"
                      rx="4"
                      fill="#FFCF00"
                    />
                    <rect
                      y="37.4648"
                      width="16"
                      height="95.5352"
                      rx="4"
                      fill="#4AB58E"
                    />
                  </svg>
                </div>
                <div className="gouplast">
                  <div className="reality">
                    <p className="bag">
                      <BsHandbagFill />
                    </p>
                    <span>
                      <h4>Reality</h4>
                      <p>Global</p>
                    </span>
                    <p className="number">8.822</p>
                  </div>
                  <div className="target-sale">
                    <p className="sale">
                      <TbShoppingCartStar />
                    </p>
                    <span>
                      <h4>Reality</h4>
                      <p>Global</p>
                    </span>
                    <p className="number">12.122</p>
                  </div>
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
                  <h4>name</h4>
                  <h4>Popularity</h4>
                  <h4>Sales</h4>
                </div>
                <div className="items">
                  <span>1</span>
                  <span>Product1</span>
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
                  <span>2</span>
                  <span>Product2</span>
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
                  <span>3</span>
                  <span>Product3</span>
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
                  <span>4</span>
                  <span>Product4</span>
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
            <div className="visit">
              <h3>Visitor insights</h3>
              <div className="visitor-graph">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="420"
                  height="71"
                  viewBox="0 0 420 71"
                  fill="none"
                >
                  <path
                    d="M-4.06934 49.5096C7.93066 24.1762 47.3307 -18.1904 108.931 15.0096C185.931 56.5096 200.931 84.0096 274.931 49.5096C348.931 15.0096 382.931 7.50957 440.931 49.5096C487.331 83.1096 513.931 63.5096 521.431 49.5096"
                    stroke="#3CD856"
                    strokeWidth="4"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="420"
                    height="115"
                    viewBox="0 0 420 115"
                    fill="none"
                  >
                    <path
                      d="M-4.06934 53.9577C20.9307 25.4577 45.3307 51.7577 106.931 84.9577C183.931 126.458 184.903 51.324 257.931 14.8103C324.931 -18.6897 382.931 22.3103 440.931 64.3103C487.331 97.9103 515.431 121.958 522.931 107.958"
                      stroke="#EF4444"
                      strokeWidth="4"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="420"
                    height="90"
                    viewBox="0 0 420 90"
                    fill="none"
                  >
                    <path
                      d="M-4.06934 14.8105C20.9307 -13.6895 45.3307 12.6105 106.931 45.8105C183.931 87.3105 189.403 60.8242 262.431 24.3105C329.431 -9.18951 381.431 26.8105 439.431 68.8105C485.831 102.41 515.431 82.8105 522.931 68.8105"
                      stroke="#A700FF"
                      strokeWidth="4"
                    />
                  </svg>
                </svg>
              </div>
              <div className="detial">
                <span>
                  <p className="blue"></p>ble
                </span>
                <span>
                  <p className="red"></p>red
                </span>
                <span>
                  <p className="green"></p>green
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Board;

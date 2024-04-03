import "./productHome.css";
import productImage from "../../img/productImage.png";
import { useState, useEffect, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Logo1 from "../../img/Logo1.png";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { FaMagnifyingGlass, FaCartShopping, FaRegUser } from "react-icons/fa6";

const ProductHome = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const [ShowFilter, setShowFilter] = useState(false);
  const [goods_list, set_goods_list] = useState([]);
  const [sliceNum, set_sliceNum] = useState(8);
  const storage = JSON.parse(window.localStorage.getItem("user"));
  const [search, set_search] = useState("");
  const [filter, set_filter] = useState(1);
  const [category_list, set_category_list] = useState([]);
  const [category_name, set_category_name] = useState("All");
  

  var store_id = false;
  if (localStorage.getItem("user")) {
    store_id = JSON.parse(window.localStorage.getItem("user")).store_id;
  }

  console.log(goods_list);
  console.log(category_name);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/store/categories",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        set_category_list(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleMore = () => {
    set_sliceNum(sliceNum + 8);
  };

  // console.log(goods_list);

  const SliceGoodsList = useMemo(() => {
    return goods_list.slice(0, sliceNum);
  }, [goods_list]);

  function OnSearch(e) {
    e.preventDefault();
    let data = JSON.stringify({
      search: search,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/store/search",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        set_goods_list(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function ChangeFilter(e, number) {
    e.stopPropagation();
    if (number != filter) {
      set_filter(number);
      setShowFilter(false);
    }
  }

  const handleCategoryClick = (categoryName) => {
    set_category_name(categoryName);
  };

  useEffect(() => {
    let my_url = "";
    if (category_name === "All") {
      my_url = `/store/?category_type=${filter}`;
    } else {
      my_url = `/store/?category_name=${category_name}&category_type=${filter}`;
    }
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + my_url,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        set_goods_list(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category_name, filter]);

  function StarAVG(value) {
    let star_avg = (value / 5) * 100;
    if (star_avg === 0) {
      star_avg = 100;
    }
    return star_avg;
  }

  return (
    <div>
      <section id="header">
        <div className="navbar">
          <div className="headWithBox">
            <div className="headMenu">
              <div className="logo1">
                <Link to="/">
                  <img src={Logo1} alt="Logo" />
                </Link>
              </div>
              <div className="boxLiMenu">
                <div className="linkLi">
                  <Link to="/" className="link active">
                    Home
                  </Link>
                  <Link to="#" className="link ">
                    Chat
                  </Link>
                  <Link to="/order" className="link ">
                    Orders
                  </Link>
                </div>
              </div>
            </div>

            <div className="ulHead_box">
              <form className="search_wrap search_wrap_2" onSubmit={OnSearch}>
                <div className="search_box">
                  <div className="btn_common" onClick={OnSearch}>
                    <FaMagnifyingGlass className="iconSearch" />
                  </div>
                  <input
                    id="search"
                    type="text"
                    value={search}
                    className="input_search_heaederr"
                    placeholder="search..."
                    onChange={(e) => {
                      set_search(e.target.value);
                    }}
                  ></input>
                </div>
              </form>

              {user && (
                <div className="right_ofHeadBox">
                  <div className="boxsearchContainer">
                    <Link to="/cart">
                      <FaCartShopping className="head_colorr" />
                    </Link>
                  </div>
                  <div className="userAndstore">
                    <Link to="/more">
                      <FaRegUser className="head_colorr" />
                    </Link>
                  </div>
                  {storage.is_admin === true && (
                    <div className="userAndstore">
                      <Link to={`/stores`}>
                        <HiOutlineBuildingStorefront className="head_colorr" />
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {!user && (
                <div className="right_ofHeadBox">
                  <div className="boxsearchContainer">
                    <Link to="/cart">
                      <FaCartShopping className="head_colorr" />
                    </Link>
                  </div>
                  <div className="userAndstore">
                    <Link to="/loginuser">Login</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="category_container2">
        {category_list.map((category, index) => (
          <div className="box-category" key={index}>
            <button
              value={category.name}
              onClick={() => handleCategoryClick(category.name)}
            >
              <img className="boxImage" src={category.image} alt="image" />
              <p>{category.name}</p>
            </button>
          </div>
        ))}
      </div>

      <section id="product">
        <div className="productHead_content">
          <h1 className="htxthead">
            <span className="spennofStyle"></span>Product
          </h1>
          <div className="categoryBoxfiler">
            <form className="boxfilterseach">
              <select
                className="filter_priceProduct"
                onClick={(e) => set_filter(e.target.value)}
              >
                <option value="1">Latest</option>
                <option value="3">Sort by review</option>
                <option value="2">Highest price</option>
                <option value="4">Low to lowest prices</option>
              </select>
            </form>
          </div>
        </div>

        <div className="product-area">
          {SliceGoodsList.map(
            (i, index) =>
              i.category !== "Food" && (
                <div className="box-product" key={index}>
                  <Link to={`/goods/${i.id}`}>
                    <div className="img">
                      <img src={i.images} alt="" />
                    </div>
                    <div className="star">
                      <div
                        className="on"
                        style={{ width: `${StarAVG(i.star_avg)}%` }}
                      ></div>
                    </div>
                    <ul className="txtOFproduct2">
                      <li className="name">{i.name}</li>
                      <li className="price">{i.format_price} Kip</li>
                    </ul>
                  </Link>
                </div>
              )
          )}
        </div>

      </section>
    </div>
  );
};

export default ProductHome;

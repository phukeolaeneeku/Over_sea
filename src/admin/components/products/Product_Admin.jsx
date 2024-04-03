import "./product_Admin.css";
import productImage from "../../../img/productImage.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import imageicon from "../../../img/imageicon.jpg";
import banner_no from "../../../img/banner_no.jpg";
import { AiOutlineDelete } from "react-icons/ai";

const Product_Admin = () => {
  const [products, setProducts] = useState([
    {
      productID: 1,
      productName: "Snaekers",
      price: 18.5,
      desc: "High-top leather snaeker",
      size: "L",
      color: "black",
      images: [{ src: productImage }],
    },
    {
      productID: 2,
      productName: "Women Clothes",
      price: 17.52,
      size: "L",
      color: "black",
      desc: "High-top leather snaeker",
      images: [{ src: productImage }],
    },
    {
      productID: 3,
      productName: "Cosmetics",
      price: 19.25,
      size: "L",
      color: "black",
      desc: "High-top leather snaeker",
      images: [{ src: productImage }],
    },
    {
      productID: 4,
      size: "L",
      color: "black",
      productName: "Electronic",
      price: 18.5,
      desc: "High-top leather snaeker",
      images: [{ src: productImage }],
    },
    {
      productID: 5,
      productName: "Snaekers",
      price: 19.5,
      size: "L",
      color: "black",
      images: [{ src: productImage }],
    },
    {
      productID: 6,
      productName: "Cosmetics",
      price: 12.5,
      size: "L",
      color: "black",
      desc: "High-top leather snaeker",
      images: [{ src: productImage }],
    },
  ]);

  const [selectedImages, setSelectedImages] = useState(
    Array(products.length).fill(null)
  );
  const [updateProductId, setUpdateProductId] = useState(null);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);
  const [isConfirmationPopupOpenPrice, setConfirmationPopupOpenPrice] =
    useState(false);
  const [isConfirmationDesc, setConfirmationDesc] = useState(false);
  const [isConfirmationSize, setConfirmationSize] = useState(false);
  const [isConfirmationColor, setConfirmationColor] = useState(false);
  const [isConfirmationPopupOpenImage, setConfirmationPopupOpenImage] =
    useState(false);
  const [mainImageBanner, setMainImageBanner] = useState(null);

  const handleImage = (event, index) => {
    const selectedImage = event.target.files[0];
    const updatedImages = [...selectedImages];
    updatedImages[index] = selectedImage;
    setSelectedImages(updatedImages);
  };

  ///Choose image handleImageBanner
  const handleImageBanner = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setMainImageBanner([file]);
      };

      reader.readAsDataURL(file);
    }
  };

  //// onClick icon edit product name
  const openConfirmationPopup = (productID) => {
    setUpdateProductId(productID.productName);
    setConfirmationPopupOpen(true);
  };

  const closeConfirmationPopup = () => {
    setUpdateProductId(null);
    setConfirmationPopupOpen(false);
  };

  //// onClick icon camera product image
  const openConfirmationPopupImage = (productID) => {
    setUpdateProductId(productID.images);
    setConfirmationPopupOpenImage(true);
  };

  const closeConfirmationPopupImage = () => {
    setUpdateProductId(null);
    setConfirmationPopupOpenImage(false);
  };

  ///// onClick icon edit product price

  const openConfirmationPopupPrice = (productID) => {
    setUpdateProductId(productID.price);
    setConfirmationPopupOpenPrice(true);
  };

  const closeConfirmationPopupPrice = () => {
    setUpdateProductId(null);
    setConfirmationPopupOpenPrice(false);
  };

  ///// onClick icon edit product Desc

  const openConfirmationDesc = (productID) => {
    setUpdateProductId(productID.price);
    setConfirmationDesc(true);
  };

  const closeConfirmationDesc = () => {
    setUpdateProductId(null);
    setConfirmationDesc(false);
  };

  ///// onClick icon edit product Size

  const openConfirmationSize = (productID) => {
    setUpdateProductId(productID.price);
    setConfirmationSize(true);
  };

  const closeConfirmationSize = () => {
    setUpdateProductId(null);
    setConfirmationSize(false);
  };

  ///// onClick icon edit product Size

  const openConfirmationColor = (productID) => {
    setUpdateProductId(productID.price);
    setConfirmationColor(true);
  };

  const closeConfirmationColor = () => {
    setUpdateProductId(null);
    setConfirmationColor(false);
  };

  // Choose banner image
  const [isPopupimage, setPopupimage] = useState(false);

  const togglePopupimage = () => {
    setPopupimage(!isPopupimage);
  };

  /////////////////////handleDelete
  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <>
      <AdminMenu />
      <section id="product_admin">
        <div className="container_body_admin_product">
          {/* <div className="search-box_product">
            <input type="text" placeholder="Search ..." />
            <button>
              <IoSearchOutline />
            </button>
          </div> */}

          <div className="productHead_content">
            <h1 className="htxthead">
              <span className="spennofStyleadmin"></span>Product
            </h1>
            <div className="categoryBoxfiler">
              <Link to="/addproduct-admin" className="box_add_product">
                <BiPlus id="icon_add_product" />
                <p>Add Product</p>
              </Link>
            </div>
          </div>
          <div className="banner_no_box">
            <div className="banner_no_box_image">
              <div className="img">
                {mainImageBanner && mainImageBanner.length > 0 ? (
                  <img
                    src={URL.createObjectURL(mainImageBanner[0])}
                    alt="Banner"
                  />
                ) : (
                  <img src={banner_no} alt="Banner" />
                )}
              </div>
            </div>
            <div className="edit_image_banner" onClick={togglePopupimage}>
              <CiCamera id="box_icon_camera" />
            </div>

            {isPopupimage && (
              <form className="background_addproductpopup_box">
                <div className="hover_addproductpopup_box_image">
                  <div className="box_input_image">
                    <p>Edit banner image</p>

                    <label className="popup_Border_Boximagae">
                      {mainImageBanner && mainImageBanner.length > 0 ? (
                        <img
                          src={URL.createObjectURL(mainImageBanner[0])}
                          alt="Banner"
                        />
                      ) : (
                        <img src={imageicon} alt="Banner" />
                      )}
                      <input
                        type="file"
                        id="img"
                        onChange={handleImageBanner}
                        required
                      />
                      <p className="box_choose_image">이미지 선택</p>
                    </label>
                  </div>
                  <div className="btn_foasdf">
                    <button
                      className="btn_cancel btn_addproducttxt_popup"
                      onClick={togglePopupimage}
                    >
                      Cancel
                    </button>
                    <button className="btn_confirm btn_addproducttxt_popup">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          <div className="box_category">
            <div className="box_contact_category">
              <img src={productImage} alt="img" />
              <div className="box_icon_MdOutlineEdit">
                <p>Sneakers</p>
                <p className="box_MdOutlineEdit">
                  <MdOutlineEdit id="icon_edit_MdOutlineEdit" />
                </p>
              </div>
            </div>
            <div className="box_contact_category">
              <img src={productImage} alt="img" />
              <div className="box_icon_MdOutlineEdit">
                <p>Women</p>
                <p className="box_MdOutlineEdit">
                  <MdOutlineEdit id="icon_edit_MdOutlineEdit" />
                </p>
              </div>
            </div>

            <div className="box_contact_category">
              <img src={productImage} alt="img" />
              <div className="box_icon_MdOutlineEdit">
                <p>Electronic</p>
                <p className="box_MdOutlineEdit">
                  <MdOutlineEdit id="icon_edit_MdOutlineEdit" />
                </p>
              </div>
            </div>
            <div className="box_contact_category">
              <img src={productImage} alt="img" />

              <div
                className="box_icon_MdOutlineEdit"
                onClick={() => openConfirmationPopup(product.productID)}
              >
                <p>Cosmetics</p>
                <p className="box_MdOutlineEdit">
                  <MdOutlineEdit id="icon_edit_MdOutlineEdit" />
                </p>
              </div>
            </div>

            {isConfirmationPopupOpen && (
              <div className="background_addproductpopup_box">
                <div className="hover_addproductpopup_box">
                  <div className="box_input">
                    <p>Edit product name</p>
                    <input
                      type="text"
                      placeholder="Name..."
                      className="input_of_txtAddproduct"
                    />
                  </div>
                  <div className="btn_foasdf">
                    <button
                      className="btn_cancel btn_addproducttxt_popup"
                      onClick={closeConfirmationPopup}
                    >
                      Cancel
                    </button>
                    <button className="btn_confirm btn_addproducttxt_popup">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div id="container_product_admin">
            <div className="productHead_content">
              <h1 className="htxthead">
                <span className="spennofStyle"></span>ALL Product
              </h1>
            </div>
            <div className="contentImageProducts">
              {products.map((product, index) => (
                <div className="box_product" key={index}>
                  <div className="box_input-img">
                    <div className="box_image">
                      {selectedImages[index] ? (
                        <img
                          src={URL.createObjectURL(selectedImages[index])}
                          alt="Product"
                        />
                      ) : (
                        <img src={product.images[0].src} alt="Product" />
                      )}
                      <input
                        type="file"
                        id={`image-${index}`}
                        onChange={(e) => handleImage(e, index)}
                        required
                      />
                    </div>

                    <div
                      className="Box_delete_product"
                      onClick={() => handleDelete(product.id)}
                    >
                      <AiOutlineDelete />
                    </div>

                    <div
                      className="edit_image_product"
                      onClick={() =>
                        openConfirmationPopupImage(product.productID)
                      }
                    >
                      <CiCamera id="box_icon_camera_product" />
                    </div>

                    {isConfirmationPopupOpenImage && (
                      <form className="box_formUpdate">
                        <div className="formUpdate">
                          <div className="imageBox">
                            <p>Edit product image</p>
                            <label>
                              {selectedImages[index] ? (
                                <img
                                  src={URL.createObjectURL(
                                    selectedImages[index]
                                  )}
                                  alt="product"
                                />
                              ) : (
                                <img src={imageicon} alt="product" />
                              )}
                              <input
                                type="file"
                                id={`image-${index}`}
                                onChange={(e) => handleImage(e, index)}
                                required
                              />
                              <div className="choose">
                                <p>이미지 선택</p>
                              </div>
                            </label>
                          </div>
                          <div className="btn-update-del">
                            <button
                              className="btn_cancel btn_addproducttxt_popup"
                              onClick={closeConfirmationPopupImage}
                            >
                              Cancel
                            </button>
                            <button className="btn_confirm btn_addproducttxt_popup">
                              Update
                            </button>
                            {/* </div> */}
                          </div>
                        </div>
                      </form>
                    )}
                  </div>

                  <div className="txtOFproduct">
                    <div
                      className="box_icon_MdOutlineEdit"
                      onClick={() => openConfirmationPopup(product.productID)}
                    >
                      <li>ProductName: {product.productName}</li>
                      <MdOutlineEdit id="icon_edit" />
                    </div>
                    {isConfirmationPopupOpen && (
                      <div className="background_addproductpopup_box">
                        <div className="hover_addproductpopup_box">
                          <div className="box_input">
                            <p>Edit product name</p>
                            <input
                              type="text"
                              placeholder="Name..."
                              className="input_of_txtAddproduct"
                            />
                          </div>
                          <div className="btn_foasdf">
                            <button
                              className="btn_cancel btn_addproducttxt_popup"
                              onClick={closeConfirmationPopup}
                            >
                              Cancel
                            </button>
                            <button className="btn_confirm btn_addproducttxt_popup">
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    <div
                      className="box_icon_MdOutlineEdit"
                      onClick={() =>
                        openConfirmationPopupPrice(product.productID)
                      }
                    >
                      <li>Price: ￦{product.price}</li>
                      <MdOutlineEdit id="icon_edit" />
                    </div>

                    {isConfirmationPopupOpenPrice && (
                      <div className="background_addproductpopup_box">
                        <div className="hover_addproductpopup_box">
                          <div className="box_input">
                            <p>Edit product price</p>
                            <input
                              type="text"
                              placeholder="Price..."
                              className="input_of_txtAddproduct"
                            />
                          </div>
                          <div className="btn_foasdf">
                            <button
                              className="btn_cancel btn_addproducttxt_popup"
                              onClick={closeConfirmationPopupPrice}
                            >
                              Cancel
                            </button>
                            <button className="btn_confirm btn_addproducttxt_popup">
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    <div
                      className="box_icon_MdOutlineEdit"
                      onClick={() => openConfirmationDesc(product.productID)}
                    >
                      <li>Desc: {product.desc}</li>
                      <MdOutlineEdit id="icon_edit" />
                    </div>
                    {isConfirmationDesc && (
                      <div className="background_addproductpopup_box">
                        <div className="hover_addproductpopup_box">
                          <div className="box_input">
                            <p>Edit Description price</p>
                            <input
                              type="text"
                              placeholder="Description..."
                              className="input_of_txtAddproduct"
                            />
                          </div>
                          <div className="btn_foasdf">
                            <button
                              className="btn_cancel btn_addproducttxt_popup"
                              onClick={closeConfirmationDesc}
                            >
                              Cancel
                            </button>
                            <button className="btn_confirm btn_addproducttxt_popup">
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    <div
                      className="box_icon_MdOutlineEdit"
                      onClick={() => openConfirmationSize(product.productID)}
                    >
                      <li>Size: {product.size}</li>
                      <MdOutlineEdit id="icon_edit" />
                    </div>
                    {isConfirmationSize && (
                      <div className="background_addproductpopup_box">
                        <div className="hover_addproductpopup_box">
                          <div className="box_input">
                            <p>Edit product size</p>
                            <input
                              type="text"
                              placeholder="Size..."
                              className="input_of_txtAddproduct"
                            />
                          </div>
                          <div className="btn_foasdf">
                            <button
                              className="btn_cancel btn_addproducttxt_popup"
                              onClick={closeConfirmationSize}
                            >
                              Cancel
                            </button>
                            <button className="btn_confirm btn_addproducttxt_popup">
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    <div
                      className="box_icon_MdOutlineEdit"
                      onClick={() => openConfirmationColor(product.productID)}
                    >
                      <li>Color: {product.color}</li>
                      <MdOutlineEdit id="icon_edit" />
                    </div>
                    {isConfirmationColor && (
                      <div className="background_addproductpopup_box">
                        <div className="hover_addproductpopup_box">
                          <div className="box_input">
                            <p>Edit product color</p>
                            <input
                              type="text"
                              placeholder="Color..."
                              className="input_of_txtAddproduct"
                            />
                          </div>
                          <div className="btn_foasdf">
                            <button
                              className="btn_cancel btn_addproducttxt_popup"
                              onClick={closeConfirmationColor}
                            >
                              Cancel
                            </button>
                            <button className="btn_confirm btn_addproducttxt_popup">
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product_Admin;

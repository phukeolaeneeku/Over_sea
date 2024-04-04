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
import { MdClose } from "react-icons/md";

const Product_Admin = () => {
  const [products, setProducts] = useState([
    {
      productID: 1,
      productName: "Snaekers",
      price: 18.5,
      category: "Snaekers",
      desc: "High-top leather snaeker",
      size: ["L ", "ML ", "L "],
      color: ["black ", "black "],
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
  const [isConfirmationPopupOpenCategory, setConfirmationPopupOpenCategory] =
    useState(false);
  const [isConfirmationDesc, setConfirmationDesc] = useState(false);
  const [isConfirmationSize, setConfirmationSize] = useState(false);
  const [isConfirmationColor, setConfirmationColor] = useState(false);
  const [isConfirmationPopupOpenImage, setConfirmationPopupOpenImage] =
    useState(false);
  const [mainImageBanner, setMainImageBanner] = useState(null);
  const [mainImageCategory, setMainImagCategory] = useState(null);

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
  ///Choose image handleImageProductCategory
  const handleImageProductCategory = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setMainImagCategory([file]);
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
  ///// onClick icon edit product category

  const openConfirmationPopupCategory = (productID) => {
    setUpdateProductId(productID.price);
    setConfirmationPopupOpenCategory(true);
  };

  const closeConfirmationPopupCategory = () => {
    setUpdateProductId(null);
    setConfirmationPopupOpenCategory(false);
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
  // Choose Category image
  const [isPopupImageName, setPopupImageName] = useState(false);

  const togglePopupImageName = () => {
    setPopupImageName(!isPopupImageName);
  };

  // Choose banner image
  const [isPopupImageCategory, setPopupImageCategory] = useState(false);

  const togglePopupImageCategory = () => {
    setPopupImageCategory(!isPopupImageCategory);
  };

  /////////////////////handleDelete
  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  /////////////////////// Add Sizes
  const handleSizeInputChange = (e, index) => {
    const { value } = e.target;
    const updatedProducts = [...products];
    updatedProducts[index].currentsizes = value;
    setProducts(updatedProducts);
  };

  const addSizeInput = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].currentsizes.trim() !== "") {
      updatedProducts[index].size.push(updatedProducts[index].currentsizes);
      updatedProducts[index].currentsizes = "";
      setProducts(updatedProducts);
    }
  };

  const removeSizeInput = (productIndex, sizeIndex) => {
    const updatedProducts = [...products];
    updatedProducts[productIndex].size.splice(sizeIndex, 1);
    setProducts(updatedProducts);
  };

  ////////////////////// Add Colors
  const handleColorInputChange = (e, index) => {
    const { value } = e.target;
    const updatedProducts = [...products];
    updatedProducts[index].currentcolors = value;
    setProducts(updatedProducts);
  };

  const addColorInput = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].currentcolors.trim() !== "") {
      updatedProducts[index].color.push(updatedProducts[index].currentcolors);
      updatedProducts[index].currentcolors = "";
      setProducts(updatedProducts);
    }
  };

  const removeColorInput = (productIndex, sizeIndex) => {
    const updatedProducts = [...products];
    updatedProducts[productIndex].color.splice(sizeIndex, 1);
    setProducts(updatedProducts);
  };

  return (
    <>
      <AdminMenu />
      <section id="product_admin">
        <div className="container_body_admin_product">
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
              <div className="img">
                {mainImageCategory && mainImageCategory.length > 0 ? (
                  <img
                    src={URL.createObjectURL(mainImageCategory[0])}
                    alt="category"
                  />
                ) : (
                  <img src={productImage} alt="img" />
                )}
              </div>
              <div
                className="ChooseImage_category"
                onClick={togglePopupImageCategory}
              >
                <CiCamera id="iconCamera_category" />
              </div>
              <div className="box_icon_MdOutlineEdit">
                <p>Sneakers </p>
                <div
                  className="box_MdOutlineEdit"
                  onClick={togglePopupImageName}
                >
                  <MdOutlineEdit id="icon_edit_MdOutlineEdit" />
                </div>
              </div>
            </div>
            {isPopupImageCategory && (
              <form className="background_addproductpopup_box">
                <div className="hover_addproductpopup_box_image">
                  <div className="box_input_image">
                    <p>Edit Category image</p>
                    <label className="popup_Border_Boximagae">
                      {mainImageCategory && mainImageCategory.length > 0 ? (
                        <img
                          src={URL.createObjectURL(mainImageCategory[0])}
                          alt="category"
                        />
                      ) : (
                        <img src={imageicon} alt="category" />
                      )}
                      <input
                        type="file"
                        id="img"
                        onChange={handleImageProductCategory}
                        required
                      />
                      <p className="box_choose_image">이미지 선택</p>
                    </label>
                  </div>
                  <div className="btn_foasdf">
                    <button
                      className="btn_cancel btn_addproducttxt_popup"
                      onClick={togglePopupImageCategory}
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
            {isPopupImageName && (
              <div className="background_addproductpopup_box">
                <div className="hover_addproductpopup_box">
                  <div className="box_input">
                    <p>Edit category name</p>
                    <input
                      type="text"
                      placeholder="Name..."
                      className="input_of_txtAddproduct"
                    />
                  </div>
                  <div className="btn_foasdf">
                    <button
                      className="btn_cancel btn_addproducttxt_popup"
                      onClick={togglePopupImageName}
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
                    <div
                      className="box_icon_MdOutlineEdit"
                      onClick={() =>
                        openConfirmationPopupCategory(product.productID)
                      }
                    >
                      <li>Category: {product.category}</li>
                      <MdOutlineEdit id="icon_edit" />
                    </div>

                    {isConfirmationPopupOpenCategory && (
                      <div className="background_addproductpopup_box">
                        <div className="hover_addproductpopup_box">
                          <div className="box_input">
                            <p>Edit category</p>
                            <div className="box2">
                              <select
                                name="category"
                                className="product_category_filter"
                                required
                              >
                                <option value="Sneakers">Sneakers</option>
                                <option value="Women Clothes">
                                  Women Clothes
                                </option>
                                <option value="Electronic Devices">
                                  Electronic Devices
                                </option>
                                <option value="Cosmetics">Cosmetics</option>
                              </select>
                            </div>
                          </div>
                          <div className="btn_foasdf">
                            <button
                              className="btn_cancel btn_addproducttxt_popup"
                              onClick={closeConfirmationPopupCategory}
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
                            <p>Edit Description</p>
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
                        <div className="addproductpopup_box">
                          <div className="box_size_input">
                            <p>Edit product size</p>
                            <div className="box_size_container">
                              <div className="box_size_add">
                                {product.size.map((size, sizeIndex) => (
                                  <div
                                    key={sizeIndex}
                                    className="box_size_add_item"
                                  >
                                    <p>{size}</p>
                                    <span
                                      onClick={() =>
                                        removeSizeInput(index, sizeIndex)
                                      }
                                    >
                                      <MdClose id="icon_MdClose" />
                                    </span>
                                  </div>
                                ))}
                              </div>

                              <div className="box_size_content">
                                <input
                                  type="text"
                                  placeholder="Add Sizes..."
                                  value={product.currentsizes || ""}
                                  onChange={(e) =>
                                    handleSizeInputChange(e, index)
                                  }
                                />
                                <div
                                  className="btn_addsize"
                                  onClick={() => addSizeInput(index)}
                                >
                                  Add
                                </div>
                              </div>
                            </div>
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
                        <div className="addproductpopup_box">
                          <div className="box_size_input">
                            <p>Edit product color</p>
                            <div className="box_size_container">
                              <div className="box_size_add">
                                {product.color.map((color, colorIndex) => (
                                  <div
                                    key={colorIndex}
                                    className="box_size_add_item"
                                  >
                                    <p>{color}</p>
                                    <span
                                      onClick={() =>
                                        removeColorInput(index, colorIndex)
                                      }
                                    >
                                      <MdClose id="icon_MdClose" />
                                    </span>
                                  </div>
                                ))}
                              </div>

                              <div className="box_size_content">
                                <input
                                  type="text"
                                  placeholder="Add Colors..."
                                  value={product.currentcolors || ""}
                                  onChange={(e) =>
                                    handleColorInputChange(e, index)
                                  }
                                />
                                <div
                                  className="btn_addsize"
                                  onClick={() => addColorInput(index)}
                                >
                                  Add
                                </div>
                              </div>
                            </div>
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

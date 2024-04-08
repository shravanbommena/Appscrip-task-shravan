import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  MdOutlineKeyboardArrowDown,
  MdArrowForwardIos,
  MdArrowBackIos,
} from "react-icons/md";

import ProductCard from "./components/ProductCard";

function App() {
  const [showFilters, setShowFilter] = useState(false);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      setProductsList(jsonData);
    };
    fetchData();
  }, []);

  const onClickShowFilter = () => {
    setShowFilter(!showFilters);
  };

  const renderFilters = () => (
    <div className="filters-tab">
      <div className="filters-customize-div">
        <input id="customizble" type="checkbox" />
        <label className="filters-customize-text" for="customizble">
          CUSTOMIZBLE
        </label>
      </div>
      <hr className="filter-hr" />
      <div className="filter-category-container">
        <div className="filter-category">
          <p className="filter-category-text">IDEAL FOR</p>
          <button type="button" className="filter-arrow-button">
            <MdOutlineKeyboardArrowDown />
          </button>
        </div>
        <p className="filter-category-type">ALL</p>
      </div>
      <hr className="filter-hr" />
      <div className="filter-category-container">
        <div className="filter-category">
          <p className="filter-category-text">OCCASSION</p>
          <button type="button" className="filter-arrow-button">
            <MdOutlineKeyboardArrowDown />
          </button>
        </div>
        <p className="filter-category-type">ALL</p>
      </div>
      <hr className="filter-hr" />
      <div className="filter-category-container">
        <div className="filter-category">
          <p className="filter-category-text">WORK</p>
          <button type="button" className="filter-arrow-button">
            <MdOutlineKeyboardArrowDown />
          </button>
        </div>
        <p className="filter-category-type">ALL</p>
      </div>
      <hr className="filter-hr" />
      <div className="filter-category-container">
        <div className="filter-category">
          <p className="filter-category-text">FABRIC</p>
          <button type="button" className="filter-arrow-button">
            <MdOutlineKeyboardArrowDown />
          </button>
        </div>
        <p className="filter-category-type">ALL</p>
      </div>
      <hr className="filter-hr" />
      <div className="filter-category-container">
        <div className="filter-category">
          <p className="filter-category-text">SEGMENT</p>
          <button type="button" className="filter-arrow-button">
            <MdOutlineKeyboardArrowDown />
          </button>
        </div>
        <p className="filter-category-type">ALL</p>
      </div>
      <hr className="filter-hr" />
      <div className="filter-category-container">
        <div className="filter-category">
          <p className="filter-category-text">SUITABLE FOR</p>
          <button type="button" className="filter-arrow-button">
            <MdOutlineKeyboardArrowDown />
          </button>
        </div>
        <p className="filter-category-type">ALL</p>
      </div>
      <hr className="filter-hr" />
      <div className="filter-category-container">
        <div className="filter-category">
          <p className="filter-category-text">RAW MATERIALS</p>
          <button type="button" className="filter-arrow-button">
            <MdOutlineKeyboardArrowDown />
          </button>
        </div>
        <p className="filter-category-type">ALL</p>
      </div>
      <hr className="filter-hr" />
      <div className="filter-category-container">
        <div className="filter-category">
          <p className="filter-category-text">PATTERN</p>
          <button type="button" className="filter-arrow-button">
            <MdOutlineKeyboardArrowDown />
          </button>
        </div>
        <p className="filter-category-type">ALL</p>
      </div>
      <hr className="filter-hr" />
    </div>
  );

  return (
    <>
      <Header />
      <div className="page-description-div">
        <h1 className="page-description-title">DISCOVER OUR PRODUCTS</h1>
        <p className="page-description">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <div className="filters-bar">
        <p className="filter-text">FILTER</p>
        <hr className="filter-seperator" />
        <p className="filters-item-count-text">3425 ITEMS</p>
        <button className="filter-show-button" onClick={onClickShowFilter}>
          {showFilters ? (
            <>
              {" "}
              <MdArrowBackIos /> HIDE FILTER{" "}
            </>
          ) : (
            <>
              <MdArrowForwardIos /> SHOW FILTER
            </>
          )}
        </button>
        <button className="filter-recommended-button">
          RECOMMENDED
          <MdOutlineKeyboardArrowDown className="filter-arrow-down-icon" />
        </button>
      </div>
      <div className={`products-and-filters `}>
        {showFilters ? renderFilters() : null}
        <ul className="products-list ">
          {productsList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default App;

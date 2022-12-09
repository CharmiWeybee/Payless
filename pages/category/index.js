import { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link'
import Menu from "../Header/menu";
import Footer from "../Main/Footer"
const categories = require("../../constantData/categories.json")
const featuredCategories = require("../../constantData/featuredCategories.json")
const Categories = () => {
  const [menuData, setMenuData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      "http://localhost:8000/restaurants"
    );

    setMenuData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <>
      <Menu />
    </>
      {" "}
      <section className="p-5">
        <div className="row pt-3">
          <div className="col-lg-6  text-center m-auto">
            <h1 className="h1 ">Categories</h1>
            <p>Choose any of the following categories to compare the prices.</p>
            {/* <hr aria-hidden="true" class="sb-rule sb-rule--thin"></hr> */}
          </div>
          <div className="col-lg-12 m-auto">
            <h3>Featured Categories</h3>
            <hr aria-hidden="true" ></hr>

            {/* ----------------- */}
            <div className="d-flex featured-cat-cont">
              {featuredCategories.map((category) => {
                return (
                      <div className="mt-3 ">
                          <a href= {`/category/${category.id}`}>
                            <img
                              src={category.src}
                              className="rounded-circle img-fluid border category-featured-img"
                            ></img>
                          <h5 className="mt-3 mb-3 text-center">{category.name}</h5>
                            <div className="text-center">
                                {/* <button className="btn btn-success">Compare</button> */}
                              </div>
                          </a>
                      </div>
                );
              })}
        </div>
            {/* ----------------- */}
          </div>
        </div>
        <h3 className="mt-5">All Categories</h3>
            <hr aria-hidden="true" class="sb-rule sb-rule--thin"></hr>
        <div className="row">
          {categories.map((category) => {
            return (
                  <div className="col-12 col-md-6  mt-3">
                      <a href= {`/category/${category.id}`}>
                        <img
                          src={category.src}
                          className="img-fluid category-img"
                          title="Click to compare the prices"
                        ></img>
                      <h3 className="text-center mt-3 mb-3">{category.name}</h3>
                         <div className="text-center">
                            {/* <button className="btn btn-success">Compare</button> */}
                          </div>
                      </a>
                  </div>
            );
          })}
        </div>
      </section>{" "}
      <Footer />
    </>
  );
};
export default Categories;

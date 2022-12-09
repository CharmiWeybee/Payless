import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Menu from "../../../Header/menu";
import Footer from '../../../Main/Footer'

function Compare() {
  const router = useRouter();
  const { menuId } = router.query;
  const { categoryId } = router.query;

  const [menuData, setMenuData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/source?restaurant_id=${categoryId}&menu_id=${menuId}`
    );
    setMenuData(data);
  };

  useEffect(() => {
    if (categoryId && menuId) {
      getData();
    }
  }, [categoryId, menuId]);

  const calculatePriceDifference = (price1, price2) => {
    let diff = price1 - price2;
    if (diff === 0) {
      return "";
    }
    return Math.round(price1 - price2);
  };


  function GetStars(rating) {
    
    rating = Math.round(rating * 2) / 2;
    let output = [];
    
    for (var i = rating; i >= 1; i--)
      output.push('/assets/img/icons/yellow-star.png');
    for (let i = (5 - rating); i >= 1; i--)
    output.push('/assets/img/icons/empty-star.png');
    return <div className="d-flex justify-content-center">
        {output.map(op => 
            <img src={op} className="star-img mx-1"></img>
        )}
    </div>;
  }

  return (
    <>
      <Menu />
      <div className="mt-5">
        <div className="">
          <div className="compare-cont">
            {menuData &&
              menuData.map((menu, index) => {
                return (
                  <>
                  <div className="cont-compare">
                  <img
                    className="block compare-img rounded-circle img-fluid"
                    src={menu.rest_img}
                  ></img>
                </div>
                  <div className="text-center desc-compare">
                    <div className="desc-home-cont">
                      <h1 className="mb4 xl text-semibold" tabindex="-1">
                        <span className="menu-name">{menu.restaunt_name}</span>
                      </h1>
                      <div className="rest-name">{menu.rest_address}</div>
                    </div>
                  </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>

      <div className="comparison-container">
        <section className="">
          <span className="comp-header">
            <strong>Comparison</strong>
          </span>
          <hr aria-hidden="true" className="compare-rule"></hr>
          <div className="row comparison-cards mt-5">
            {menuData &&
              menuData[0]?.sourceList.map((source) => {
                return (
                  <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card border">
                      <div className="card-header py-3">
                        <div className="compare-card-header mx-auto">
                          <p className="source-name">
                            <img
                              src={source.source_logo}
                              className="logo-source"
                            ></img>
                          </p>

                          <p className="mb-0 price-diff">
                            Difference: ₹
                            {Math.abs(
                              calculatePriceDifference(
                                menuData[0].sourceList[0]?.price,
                                menuData[0].sourceList[1]?.price
                              )
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="listitems-compare">
                            Price: <b>₹{source.price}</b>
                          </li>
                          <hr
                            aria-hidden="true"
                            className="comapre-card-rule"
                          ></hr>
                          <li className=" listitems-compare">
                            Delivery Time: <b>{source.price} mins</b>
                          </li>
                          <hr
                            aria-hidden="true"
                            className="comapre-card-rule"
                          ></hr>
                          <li className=" listitems-compare" id="stars">
                              {GetStars(`${source.price}`)}
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer text-center bg-white py-3">
                        <button
                          type="button"
                          className="btn btn-success btn-sm order-btn"
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
export default Compare;

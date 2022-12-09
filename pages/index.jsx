import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../redux/api/Food/foodApi";
import Info from "./Header/info";
import Menu from "./Header/menu";
import Card from "./Main/card";
import Footer from "./Main/Footer";

function Home() {
  const { data } = useGetCategoriesQuery();

  const state = useSelector((state) => state);
  console.log(state, "state");

  console.log("data", data);
  return (
    <>
      <Menu />
      <>
        <div>
          <div className="mt-5">
            <div className="">
              <div className="home-cont">
                <div className="cont">
                  <img
                    className="block home-img"
                    src="/assets/img/banner1.jpg"
                  ></img>
                </div>
                <div className="text-center desc-home">
                  <div className="desc-home-cont">
                    <h1 className="mb4 xl text-semibold" tabindex="-1">
                      <span className="">Payless for Life</span>
                    </h1>
                    <div className="">
                      Everyone’s favorite holiday game is back. Play for your
                      chance to win free coupons, gift cards and more. *
                    </div>
                    <a className="mt-5 play-btn" href="">
                      Play now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --------------------- */}
          <div className="mt-5">
            <div className="">
              <div className="home-cont-2">
                <div className="cont">
                  <img
                    className="block home-img"
                    src="/assets/img/winterbanner.jpg"
                  ></img>
                </div>
                <div className="text-center desc-home">
                  <div className="desc-home-cont">
                    <h1 className="mb4 xl text-semibold" tabindex="-1">
                      <span className="">
                        The coldest season of the year is here!!
                      </span>
                    </h1>
                    <div className="">
                      Compare your favourite essentials and buy now with minimum
                      prices in the market.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* --------------------- */}

          {/* ---------------- */}
          <div className="mt-5">
            <div className="">
              <div className="home-cont-3">
                <div className="cont">
                  <img
                    className="block home-img"
                    src="/assets/img/cashbackbanner.png"
                  ></img>
                </div>
                <div className="text-center desc-home">
                  <div className="desc-home-cont">
                    <h1 className="mb4 xl text-semibold" tabindex="-1">
                      <span className="">
                        Let the holiday cheer come to you!
                      </span>
                    </h1>
                    <div className="">
                      Make the moment merry. Compare and order from payless and
                      get exciting cashbacks.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------- */}
        </div>
        <Footer />
      </>
      {/* <Info />
      <Menu />
      <Categories />
      <Footer></Footer> */}
    </>
  );
}
export default Home;

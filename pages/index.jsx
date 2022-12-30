import { useRef, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { useGetCategoriesQuery } from "../redux/api/Food/foodApi";
import { useGetRatingsQuery } from "../redux/api/Food/foodApi";
import Carousel from "./components/Carousel";
import Menu from "./Header/menu";
import Footer from "./Main/Footer";
import "@tensorflow/tfjs-backend-webgl";
import * as toxicity from "@tensorflow-models/toxicity";
import { models } from "@tensorflow/tfjs";

function Home() {
  const { data: data, isLoading: ratingsloading } = useGetRatingsQuery();
  console.log(data, "::")
  const [ratings, setRatings] = useState([]);
  const [reviews, setReviews] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        {...props}
        className={className}
        style={{ ...style, display: "block", background: "#006241" }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        {...props}
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#006241",
          left: "53px !important",
        }}
        onClick={onClick}
      />
    );
  }

  const getRatings =(data)=>{
    setRatings(data)
    setReviews(data.length);
  }

  useEffect(() => {
    if(data){
      getRatings(data)
    }
  }, [data]);


  useEffect(() => {
    if (ratings && ratings.length > 0 && typeof ratings == "object") {
      if (ratings) {
        handleAdd(ratings.map((review) => review.review));
      }
    }
  }, [ratings]);

  const [result, setResult] = useState("");
  const threshold = 0.9;

  const handleAdd = (review) => {
    toxicity.load(threshold).then((model) => {
      model.classify(review).then((predictions) => {
        getToxicity(predictions);
      });
    });
  };


  const getToxicity = (result) => {
    if (result) {
      calculateToxicity(
        result.filter((attr) => attr.results?.find((attr) => attr.match)).length
      );
    }
  };

  const calculateToxicity = (numberOfToxicComments) => {
    console.log(
      numberOfToxicComments +
        "this are toxic comments from this total number of comment" +
        reviews
    );
    if (reviews) {
      setResult(100 - (100 * numberOfToxicComments) / reviews);
    }
  };

  return (
    <>
      <Menu />
      <>
        {ratingsloading ? (
          <div className="loader-container">
            <img src="/assets/img/load-transperent.gif" className="loader"></img>
          </div>
        ) : (
          <>
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
                          Compare your favourite essentials and buy now with
                          minimum prices in the market.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                          Make the moment merry. Compare and order from payless
                          and get exciting cashbacks.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h2 className="text-center">Our Customers Love Us!</h2>
                <p className="text-center">
                  {result}% of good comments from our customers
                </p>
                <div className="mt-5">
                    <Slider {...settings}>
                      {ratings &&
                        ratings.map((rating) => (
                          <div class="testimonial4_slide">
                            <img
                              src={rating.user_profile}
                              class="img-circle"
                            />
                            <p className="mt-2 rating-review">{rating.review}</p>
                            <h4>{rating.user_name}</h4>
                          </div>
                        ))}
                    </Slider>
                </div>
              </div>
            </div>
            <Footer />
          </>
        )}
      </>
    </>
  );
}
export default Home;

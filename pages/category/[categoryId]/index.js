// import axios from "axios";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Menu from "../../Header/menu";
import Footer from "../../Main/Footer";
import { useGetCategoriesQuery } from "../../../redux/api/Food/foodApi";

function categoryDetail() {
  const [menuData, setMenuData] = useState([]);
  const { data } = useGetCategoriesQuery();

  const getData = async (data) => {
    setMenuData(data);
  };

  


  useEffect(() => {
    if(data){
      getData(data)
    }
  }, [data]);


  return (
    <>
      <Menu />
      <>
        { menuData?.length == 0 || !menuData ? (
          <div className="loader-container">
            <img src="/assets/img/load-transperent.gif" className="loader"></img>
          </div>
        ) : (
          <>
            <section className="p-5">
              <div className="col-md-12 px-3">
                <div className="pt-3 pb-3">
                  <h1 className="h1">Restaurants</h1>
                  <hr aria-hidden="true"></hr>
                </div>
              </div>
              <div className="row w-100 cat-cards p-0">
                {menuData &&
                  menuData?.map((menu, index) => {
                    return (
                      <div className="col-md-4 mb-4">
                        <a href={`${menu.id}/menuList`}>
                          <div className="img-gradient cursor-pointer">
                            <img
                              alt="img"
                              src={menu.img}
                              className="rest_img"
                            ></img>
                            <div className="position-absolute magazine-card-main card-details">
                              <div className="desc">
                                <div className="restaurant-name">
                                  {menu.restaunt_name}
                                </div>
                                <div className="restaurant-address">
                                  {menu.address}
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    );
                  })}
              </div>
            </section>
            <Footer />
          </>
        )}
      </>
    </>
  );
}
export default categoryDetail;

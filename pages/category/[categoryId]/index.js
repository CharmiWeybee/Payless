import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Menu from "../../Header/menu";
import Footer from "../../Main/Footer";

function categoryDetail(){

    const [menuData, setMenuData] = useState([]);
    const [foodListData, setFoodListData] = useState([]);

    const getData = async () => {
      const { data } = await axios.get(
        "http://localhost:8000/restaurants"
      );
      setMenuData(data);
    };
    useEffect(() => {
      getData();
    }, []);
    console.log(menuData)

    return(  
    <>
      <Menu />
      <section className="p-5">
          <div className="col-md-12 px-3">
        <div className="pt-3 pb-3">
            <h1 className="h1">Restaurants</h1>
            <hr aria-hidden="true" ></hr>
          </div>
        </div>
            <div className="row w-100 cat-cards p-0">
              {menuData && 
                menuData?.map((menu, index) => {
                  return (
                    <div className="col-md-4 mb-4">
                        <a href = {`${menu.id}/menuList`}>
                        <div className="img-gradient cursor-pointer">
                          <img alt="img" src={menu.img} className="rest_img"></img>
                          <div className="position-absolute magazine-card-main card-details">
                            <div className="desc">
                              <div className="restaurant-name">{menu.restaunt_name}</div>
                              <div className="restaurant-address">{menu.address}</div>
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
  )
}
export default categoryDetail
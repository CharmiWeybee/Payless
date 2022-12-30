import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NoDataFound from "../../noDataFound";
import Sidebar from "../[categoryId]/categorySidebar";
import { useGetRestaurantMenuQuery } from "./../../../redux/api/Food/foodApi";

function Menu() {
  const router = useRouter();
  const { categoryId } = router.query;
  const [menuData, setMenuData] = useState(null);
  const [searchTerm, setSearchTerm] = useState();
  const [contacts, setContacts] = useState([]);
  const [skip, setSkip] = useState(true);

  const { data: data, isLoading: menuLoading } = useGetRestaurantMenuQuery(
    categoryId,
    { skip }
  );

  useEffect(() => {
    if (categoryId) {
      setSkip(!skip);
    }
  }, [categoryId]);

  const getData = (data, categoryId) => {
    setMenuData(data);
  };

  useEffect(() => {
    if (data) {
      getData(data);
    }
  }, [data]);

  // const handleChange = (e) => {
  //   let currentList = [];
  //   let newList = [];

  //   if (e.target.value !== "") {
  //     currentList = menuData[0]?.categoryList;
  //     newList = currentList.filter((item) => {
  //       const filter = e.target.value.toLowerCase();
  //       return item.includes(filter);
  //     });
  //   } else {
  //     newList = menuData;
  //   }
  //   setFiltered(newList);
  // };
  console.log(menuLoading);

  return (
    <>
      <>
        <Sidebar />
        <div className="twitter mt-3">
          {menuLoading && (
            <div className="loader-container">
              <img
                src="/assets/img/load-transperent.gif"
                className="loader"
              ></img>
            </div>
          )}
          <div className="container d-flex category">
            {menuData &&
              menuData.length > 0 &&
              menuData[0]?.categoryList.map((category) => {
                return (
                  <div className="d-flex featured-cat-cont">
                    <div className="mt-3 cate-font">
                      <span className="mt-3 mb-3 text-center">
                        {category.category_name}
                      </span>
                      <hr aria-hidden="true" className="category-rule"></hr>
                      <div className="col-md-12">
                        <div className="d-flex foodlist">
                          {category?.foodList.map((food) => {
                            return (
                              <a
                                href={`/category/${category.category_id}/${food.menu_id}/compareList`}
                              >
                                <div className="d-flex food-names">
                                  <img
                                    src={food.img}
                                    className="rounded-circle img-fluid border foodlist-featured-img"
                                  ></img>
                                  <div className="text-center d-flex align-items-center listitems-food">
                                    {food.menu_name}
                                  </div>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            {menuData && menuData.length == 0 && (
              <div className="container d-flex">
                <NoDataFound />
              </div>
            )}
          </div>
        </div>
      </>
    </>
  );
}
export default Menu;

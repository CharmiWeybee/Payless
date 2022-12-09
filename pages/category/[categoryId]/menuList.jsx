import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Sidebar from "../[categoryId]/categorySidebar";

function Menu() {
  const router = useRouter();
  const { categoryId } = router.query;
  const [menuData, setMenuData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/category?restaurant_id=${categoryId}`
    );
    setMenuData(data);
  };

  useEffect(() => {
    if (categoryId) {
      getData();
    }
  }, [categoryId]);
  console.log(menuData)

  return (
    <>
      <Sidebar />
      <div className="twitter mt-3">
        <div className="container d-flex category">
          {menuData &&
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
                                    return(
                                      <a href={`/category/${category.category_id}/${food.menu_id}/compareList`}>
                                        <div className="d-flex food-names"> 
                                            <img src={food.img} className="rounded-circle img-fluid border foodlist-featured-img"></img>
                                            <div className="text-center d-flex align-items-center listitems-food">{food.menu_name}</div>
                                        </div>
                                       </a>
                                    )
                            })}
                        </div>
                        </div>
                  </div>
                  </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default Menu;

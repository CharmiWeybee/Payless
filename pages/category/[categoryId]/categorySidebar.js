import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Menu from "../../Header/menu";

function Sidebar(){
    const router = useRouter();
    const { categoryId } = router.query
    const [menuData, setMenuData] = useState([]);
    const getData = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/category?restaurant_id=${categoryId}`
      );
      setMenuData(data);
    };
  
    useEffect(() => {
        if(categoryId)
        {getData();}
    }, [categoryId]);

return(
    <>
<Menu />
<main class="main">
  <aside class="sidebar">
    <nav class="nav">
    {menuData && menuData[0]?.categoryList.map((category) => {
      return(
      <ul>
        <li key={category.category_id}>
           <a className="list-category">{category.category_name}</a>
           {category?.foodList.map((food) => {
            return(
                <nav className="nav">
                    <ul className="p-0">
                        <li key={food.menu_id}>
                            <a className="listitems">{food.menu_name}</a>
                        </li>
                    </ul>
                </nav>
            )
           })}
        </li>
      </ul>)
    })}
    </nav>
  </aside>
  <section class="twitter">

  </section>
</main>
</>)
}
export default Sidebar;
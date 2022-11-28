import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoriesStorage } from "../utils/storage";
import "../css/serviceDetails.css";
import Category from "../components/Category";

const SearchPage = () => {
  const { words } = useParams();
  const [categories, setCategories] = useState(null);
  // const [allServices, setAllServices] = useState(null);
  // console.log("wordss page: ", words);
  useEffect(() => {
    getCategoriesStorage().then((res) => {
      if (res) {
        setCategories(res);
        // setAllServices(
        //   res.reduce((previousValue, currentValue) => [
        //     ...previousValue.services,
        //     ...currentValue.services,
        //   ])
        // );
      }
    });
  }, [words]);

  return (
    <div
      className="related"
      style={{ paddingTop: 50, paddingRight: "5%", paddingLeft: "5%" }}
    >
      {categories &&
        categories.map((cat) =>
          cat.services
            .filter(
              (se) => se?.name?.includes(words) || se?.des?.includes(words)
            )
            .map((s) => <Category key={s.id} item={s} category={cat} />)
        )}
    </div>
  );
};

export default SearchPage;

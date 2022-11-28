import React from "react";
import { Link } from "react-router-dom";
import { IMAGES_URL } from "../utils/config";
import CustomeImage from "./common/CustomeImage";

const Category = ({ item: { id, name, image, des }, category }) => (
  <Link className="category" to={"/service/" + category.id + "/" + id}>
    <CustomeImage
      src={IMAGES_URL + image}
      alt={name}
      className="categoryImage"
    />
    <div className="categoryDetails">
      <h3 className="categoryName">{name}</h3>
      <p className="categoryDes">{des}</p>
      <p className="categoryBtn">اقرأ المزيد</p>
    </div>
  </Link>
);

export default Category;

import React from "react";
import Category from "../Category";

const RelatedServices = ({ category, service }) => {
  return (
    <div className="related">
      {category?.services
        ?.filter((s) => s.id !== service.id)
        .map((s) => (
          <Category key={s.id} item={s} category={category} />
        ))}
    </div>
  );
};
export default RelatedServices;

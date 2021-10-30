import React from "react";
import Slider from "../slider/Slider";
import CategoryCarousel from "../categoryCarousel/CategoryCarousel";
import ProductGrid from "../productGrid/ProductGrid";
const Home = (props) => {
  const simpleCategories = props.categories.reduce(
    (accumulator, cat) => {     
      accumulator[cat.id]=cat;
      return accumulator;
    }, []
  );
  return (
    <React.Fragment>
      <Slider slides={props.slides}></Slider>
      <CategoryCarousel categories={props.categories}></CategoryCarousel>
      <ProductGrid
        products={props.products}
        categories={simpleCategories}
        limit={10}
      ></ProductGrid>
      <button className="button" onClick={() => props.changeHome(false)}>
        View all products
      </button>
    </React.Fragment>
  );
};

export default Home;

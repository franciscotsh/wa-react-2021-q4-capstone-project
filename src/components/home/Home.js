import React from "react";
import Slider from "../slider/Slider";
import CategoryCarousel from "../categoryCarousel/CategoryCarousel";
import ProductGrid from "../productGrid/ProductGrid";
const Home = (props) => {
  return (  
    <React.Fragment>
      <Slider slides={props.slides}></Slider>
      <CategoryCarousel categories={props.categories}></CategoryCarousel>
      <ProductGrid
        products={props.products}
        categories={props.categories}
        limit={10}
      ></ProductGrid>
      <button className="button" onClick={()=>props.changeHome(false)}>View all products</button>
    </React.Fragment>
  );
};

export default Home;

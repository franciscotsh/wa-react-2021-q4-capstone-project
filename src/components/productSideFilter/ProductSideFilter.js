import React, { useState, useEffect } from "react";
import "./ProductSideFilter.scss";
import categories from "../../data/categories.json";
import products from "../../data/products.json";
import ProductGrid from "../productGrid/ProductGrid";
import Loading from "../loading/Loading";
const ProductSideFilter = () => {
  const [productsToShow, setproductsToShow] = useState(products.results);
  const [filters, setFilters] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
     setTimeout(() => {
      setisLoading(false);
    }, 3000);
  }, []);
  let addFilter = (filter) => {
    filters.push(filter);
    setFilters(filters);
    updateProducts();
  };
  let removeFilter = (itemToRemove) => {
    let tmpFilters = filters;
    tmpFilters.splice(tmpFilters.indexOf(itemToRemove), 1);
    setFilters(tmpFilters);
    updateProducts();
  };
  //Update the product list to send
  //Send to the productGrid only the ones that we need
  let updateProducts = () => {
    let productsFiltered = [];
    filters.forEach((filter) => {
      products.results.forEach((product) => {
        if (product.data.category.id === filter) {
          productsFiltered.push(product);
        }
      });
    });
    productsFiltered =
      filters.length > 0 ? [...new Set(productsFiltered)] : products.results;

    setproductsToShow(productsFiltered);
  };

  const content = (
    <div>
      <div className="sidebar">
        <ul className="ks-cboxtags">
          {categories.results.map((ele) => (
            <li key={ele.id}>
              <input
                type="checkbox"
                id={"checkbox" + ele.data.name}
                value={ele.data.name}
                onChange={() => {
                  if (filters.indexOf(ele.id) !== -1) {
                    removeFilter(ele.id);
                  } else {
                    addFilter(ele.id);
                  }
                }}
              />
              <label htmlFor={"checkbox" + ele.data.name}>
                {ele.data.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="gridContent">
        <ProductGrid
          products={productsToShow}
          categories={categories.results}
          pagination={true}
        ></ProductGrid>
      </div>
    </div>
  );
  return <div>{isLoading ? <Loading></Loading> : content}</div>;
};

export default ProductSideFilter;

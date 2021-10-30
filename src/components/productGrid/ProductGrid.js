import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./ProductGrid.scss";
const ProductGrid = (props) => {
  const products = props.products;
  const categories = props.categories;
  const limit = props.limit !== undefined ? props.limit : products.length;

  return (
    <Fragment>
      <div className="container page-wrapper">
        <div className="page-inner">
          {products.slice(0, limit).map((product) => {
            return (
              <div
                style={{ display: "inline-block" }}
                key={"product" + product.id}
              >
                <div className="el-wrapper">
                  <div className="box-up">
                    <img
                      className="img"
                      src={product.data.mainimage.url}
                      alt=""
                    />
                    <div className="img-info">
                      <div className="info-inner">
                        <span className="p-name">{product.data.name}</span>
                        <span className="p-company">
                          {categories[product.data.category.id].data.name}
                        </span>
                      </div>
                      <div className="a-size">
                        Available :{" "}
                        <span className="size">{product.data.stock}</span>
                      </div>
                    </div>
                  </div>

                  <div className="box-down">
                    <div className="h-bg">
                      <div className="h-bg-inner"></div>
                    </div>

                    <span className="cart">
                      <span className="price">${product.data.price}</span>
                      <span className="add-to-cart">
                        <span className="txt">Add to cart</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {props.pagination && (
        <div className="pagination">
          <span>&laquo;</span>
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>&raquo;</span>
        </div>
      )}
    </Fragment>
  );
};
ProductGrid.propTypes = {
  pagination: PropTypes.bool,
};

ProductGrid.defaultProps = {
  pagination: false,
};

export default ProductGrid;

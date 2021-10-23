import React,{Fragment} from 'react'
import './ProductGrid.scss'
const ProductGrid = (props) => {
    const products = props.products;
    const categories = props.categories;
    console.log(props.limit!==undefined)
    const limit = props.limit !== undefined ? props.limit : products.length;

    let prodsToShow = (limit) =>{
      let prods = [];
      for (let i = 0; i < limit; i++) {
        prods.push(
          <div style={{ display: "inline-block" }} key={'product'+i+products[i].data.category.id}>
                          <div className="el-wrapper">
                            <div className="box-up">
                              <img
                                className="img"
                                src={products[i].data.mainimage.url}
                                alt=""
                              />
                              <div className="img-info">
                                <div className="info-inner">
                                  <span className="p-name">
                                    {products[i].data.name}
                                  </span>
                                  <span className="p-company">
                                    {categories.find(
                                      (cat) => cat.id === products[i].data.category.id
                                    ).data.name}
                                  </span>
                                </div>
                                <div className="a-size">
                                  Available :{" "}
                                  <span className="size">{products[i].data.stock}</span>
                                </div>
                              </div>
                            </div>

                            <div className="box-down">
                              <div className="h-bg">
                                <div className="h-bg-inner"></div>
                              </div>

                              <span className="cart" >
                                <span className="price">${products[i].data.price}</span>
                                <span className="add-to-cart">
                                  <span className="txt">Add in cart</span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
        )
        
      }
      return prods
    }
    return (
      <Fragment>
        <div className="container page-wrapper">
          <div className="page-inner">{prodsToShow(limit)}</div>
        </div>
      </Fragment>
    );
}

export default ProductGrid

import React from 'react'
import './CategoryCarousel.scss'

const CategoryCarousel = (props) => {
    const categories = props.categories;
    return (
      <div>
        <div className="option-group">
          <div className="option-container">
            {categories.map((ele, index) => {
              return (
                <input
                key={'cat_radio_'+index}
                  className="option-input"
                  id={"option-" + index}
                  type="radio"
                  name="options"
                />
              );
            })}

            {categories.map((ele, index) => {
              return (
                <label key={'cat_label-'+index} className="option" htmlFor={"option-"+index}>
                  <span className="option__indicator"></span>
                  <span className="option__label">
                    {ele.data.name}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default CategoryCarousel

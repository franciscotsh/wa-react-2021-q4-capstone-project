import React from 'react'
import './CategoryCarousel.scss'

const CategoryCarousel = (props) => {
    const categories = props.categories;
    return (
      <div>
        <div className="option-group">
          <div className="option-container">
            {categories.map((ele) => {
              return (
                <input
                key={'cat_radio_'+ele.id}
                  className="option-input"
                  id={"option-" + ele.id}
                  type="radio"
                  name="options"
                />
              );
            })}

            {categories.map((ele) => {
              return (
                <label key={'cat_label-'+ele.id} className="option" htmlFor={"option-"+ele.id}>
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

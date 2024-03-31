import React from 'react'
import { Link } from 'react-router-dom';

const RProduct = ({productdata,pro}) => {
    const goToBtn = () => {
        window.scrollTo({ top: 10, right: 0, behavior: "smooth" });
      };
  return (
    <div className="relatedgrid">
    {productdata.map((each) => {
      if (each.category === pro.category) {
        return (
          <Link to={`/details/${each._id}`} className="relatedCards">
            <div className="RelatedTop" onClick={goToBtn} >
              <div className="relatedtopup">
                <img
                  src={each.thumbnail}
                  alt={each.id}
                  className="relatedimges"
                />
              </div>
              <div className="relatedtopbelow">
                <p className="para">{each.title}</p>
                <p className="buttons">${each.price}</p>
              </div>
            </div>
          </Link>
        );
      }
    })}
  </div>
  )
}

export default RProduct
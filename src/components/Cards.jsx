import React from "react";
import PropTypes from "prop-types";

const Cards = ({text, icon, amount, textColor, borderLeft}) => {

  return ( 
  <div className="col-md-4 mb-4">
    <div className= {borderLeft}>
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className={textColor}> {text}</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">{amount}</div>
          </div>
          <div className="col-auto">
            <i className={icon}></i>
          </div>
        </div>
      </div>
    </div>
  </div>
)

}

Cards.defaultProps = {
  text: "Product is Empty", 
  icon: "fas fa-clipboard-list fa-2x text-gray-300",
  amount: 0,
  textColor: "text-xs font-weight-bold text-primary text-uppercase mb-1",
  borderLeft: "card border-left-primary shadow h-100 py-2"
}

Cards.propTypes = {
  text: PropTypes.string, 
  icon: PropTypes.string,
  amount: PropTypes.string,
  textColor: PropTypes.string,
  borderLeft: PropTypes.string
}



export default Cards
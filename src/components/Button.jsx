import React from "react"

const Button = ({text, icon, active}) => {

  return (
    <li className={active}>
    <a className="nav-link collapsed" href="/">
      <i className={icon}></i>
      <span>{text}</span>
    </a>
  </li>
  )
}

export default Button
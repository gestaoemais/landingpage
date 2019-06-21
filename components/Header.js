import React from 'react'

const Header = props => {
  return (
    <div className="header__section text-center">
      <span className="header__tag">{props.tagtitle}</span>
      <h2 className="display-4">{props.sectitle}</h2>
      <p className="header__subtitle text-secondary">{props.subtitle}</p>
    </div>
  )
}

export default Header

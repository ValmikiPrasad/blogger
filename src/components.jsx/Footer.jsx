import React from 'react'

const date=new Date();
const year=date.getFullYear();
const Footer = () => {
  return (
    <footer>
      <div className="photo">BlogIt.</div>
      <span>© Copyright {year}-{`${year+1}`}. All rights reserved. Developed by <b> BlogIt.</b></span>
    </footer>
  )
}

export default Footer;

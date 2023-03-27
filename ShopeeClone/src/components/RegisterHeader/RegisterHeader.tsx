import React from 'react'
import { Link } from 'react-router-dom'
// import LogoImage from './../../assets/images/logo.svg'

import { ReactComponent as ReactLogo } from './../../assets/images/logo.svg'

export default function RegisterHeader() {
  return (
    <header className='py-5'>
      <div className='container'>
        <nav className='items- flex'>
          <Link to='/'>
            <ReactLogo />
          </Link>
          {/* <div className='lg:text- ml-5 text-xl'>Đăng ký</div> */}
        </nav>
      </div>
    </header>
  )
}

import React from 'react';
import PHOTOS from '../../assets/images';


function Header() {
  return (
    <header className='flex items-center justify-center border w-100vw h-80px'>
      <img src={PHOTOS.LOGO} alt="" className='w-100px h-60'/>
    </header>
  )
}

export default Header;

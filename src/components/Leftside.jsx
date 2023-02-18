import React, { useState } from 'react'
import { SiTwitter } from 'react-icons/si'
import { HiOutlineBell, HiOutlineUser } from 'react-icons/hi'
import { BsBookmark } from 'react-icons/bs'
import { CiCircleMore } from 'react-icons/ci'
import { RiFileList2Line } from 'react-icons/ri'
import { BiHomeCircle, BiHash, BiEnvelope } from "react-icons/bi"
import { IoIosMore } from "react-icons/io"

import "../style/Leftside.css"

const Leftside = () => {

  const [ profile, setProfile ] = useState(false) 

  const handleClickProfil = () => {
    setProfile(true)
  }

  const handleClickProfilFalse = () => {
    setProfile(false)
  }

  return (
    <div className='icons'>
      <div className='logo'><SiTwitter/></div>

      <div className='icon'><BiHomeCircle/><a href="">Anasayfa</a></div>
      <div className='icon'><BiHash/><a href="">Keşfet</a></div>
      <div className='icon'><HiOutlineBell/><a href="">Bildirimler</a></div>
      <div className='icon'><BiEnvelope/><a href="">Mesajlar</a></div>
      <div className='icon'><BsBookmark/><a href="">Yer İşaretleri</a></div>
      <div className='icon'><RiFileList2Line/><a href="">Listeler</a></div>
      <div className='icon'><HiOutlineUser/><a href="">Profil</a></div>
      <div className='icon'><CiCircleMore/><a href="">Daha fazla</a></div>

      <div><button className='btn-left'>Tweetle</button></div>

      { profile && <div className='profil-pup'>
        <div className='pup' onClick={handleClickProfilFalse}>Var olan bir hesap ekle</div>
        <div className='pup' onClick={handleClickProfilFalse}>@mutlutokk hesabından çıkış yap</div>
      </div> }

      <div className='profil' onClick={() => handleClickProfil ()}>
        <div className='profil-img'><img src="https://pbs.twimg.com/profile_images/1617923724770000896/9JCajFZF_400x400.jpg" alt="" /></div>
        <div className='profil-text'>
          <div className='text-in'>Mutlu TOK</div>
          <div className='text-inn'>@mutlutokk</div>
        </div>
        <div className='profil-more'><IoIosMore/></div>
      </div>
   </div>
  )
}

export default Leftside

import Link from 'next/link'
import React from 'react'

const partners = [
    {name: 'SimSong', link: '/', fontFamily: 'Playfair_Display'},
    {name: 'Harps', link: '/', fontFamily: 'Poppins'},
    {name: 'DiskVan', link: '/', fontFamily: 'Vidaloka'},
    {name: 'Ikon', link: '/', fontFamily: 'Montserrat'},
    {name: 'Strons', link: '/', fontFamily: 'Nunito'},
    {name: 'Cocoon', link: '/', fontFamily: 'Inter'}
]

const Partners = ({className}) => {
  return (
    <div className={`flex text-colorBold my-10 ${className && className}`}>
        <Link href='/' className="text-3xl text-colorBold font-['Playfair_Display']">SimSong</Link>
        <Link href='/' className="text-3xl text-colorBold font-['Poppins']">Harps</Link>
        <Link href='/' className="text-3xl text-colorBold font-['Vidaloka']">DiskVan</Link>
        <Link href='/' className="text-3xl text-colorBold font-['Montserrat']">Ikon</Link>
        <Link href='/' className="text-3xl text-colorBold font-['Nunito']">Strons</Link>
        <Link href='/' className="text-3xl text-colorBold font-['Inter']">Cocoon</Link>

        {/* {partners.map((partner, index) => (
            <Link key={index} href={partner.link} className={`text-3xl text-colorBold font-[${partner.fontFamily}]`}>{partner.name}</Link>
        ))} */}
    </div>
  )
}

export default Partners
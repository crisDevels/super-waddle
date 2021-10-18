import React from 'react'
import Image from 'next/image'

export const Skill = ({ data: {name, image} }) => {
  return (
    <li>
      {name}

      <Image 
        src={image}
        alt={"Skill " + name}
        width={500}
        height={500}/>

    </li>
  )
}
import React from 'react'
import { useAPI } from '../hooks/useAPI'
import { Skill } from '../components/profile/skill'
import Link from 'next/link'

const About = () => {
  const { data, isError, isLoading } = useAPI('/api/profile')

  if (isError) return <div>NO FIELDS</div>
  if (isLoading) return <div>...</div>

  return (
    <div>
      <h2>Hello stranger, my name is {data.firstName}</h2>
      
      <ul>
        {data.skills.map(skill => {
          return (
            <Skill
              key={skill.id}
              data={skill} />
          ) 
        })}
      </ul>

      <Link href="/">
        <a>Return to home</a>
      </Link>

    </div>
  )
}

export default About;

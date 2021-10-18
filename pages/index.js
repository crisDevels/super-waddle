import React from 'react'
import Layout from '../components/layout'
import { useAPI } from '../hooks/useAPI'
import Link from 'next/link'

export default function Index () {
  const { data, isLoading, isError } = useAPI('/api/projects')

  if(isLoading) return <div>...</div>
  if(isError) return <div>Not found</div>

  return (
    <>
      <Layout title='Projects'>
        <ul>
          {data.map(project => {
            return (
              <li key={project.id}>
                <Link href={'/proyects/' + project.handle}>
                  <a>{project.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </Layout>
    </>
  )
}


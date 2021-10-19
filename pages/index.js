import React from 'react'
import Layout from '../components/layout'
import { useAPI } from '../hooks/useAPI'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/index.module.scss'

export default function Index () {
  const { data, isLoading, isError } = useAPI('/api/projects')

  if(isLoading) return <div>...</div>
  if(isError) return <div>Not found</div>

  return (
    <>
      <Layout title='Projects'>
        
        <div>
          <ul className={styles.slide_projects}>

            {data.map(project => {
              return (
                <li key={project.id}>
                  <Link href={'/proyects/' + project.handle}>
                    <div>
                      <Image
                        src={project.imageFeature}
                        alt={"Principal" + project.name}
                        width={500}
                        height={500}
                        />
                      <a>{project.name}</a>
                    </div>
                  </Link>
                </li>
              )
            })}

          </ul>
        </div>

      </Layout>
    </>
  )
}


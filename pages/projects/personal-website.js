import Head from 'next/head'

import ProjectDetails from '../../components/project-details'

const Project = () => {
  const title = 'Personal Website'

  return (
    <>
      <Head>
        <title>Stephen Lunt - {title}</title>
      </Head>

      <h2 className="flex justify-center mx-auto text-3xl pb-2">{title}</h2>

      <ProjectDetails
        title={title}
        description={'Lorem Ipsum'}
        stack={['NEXT JS', 'REACT', 'TAILWIND CSS', 'JAVASCRIPT']}
        link={'...'}
        source={'...'}
      />
    </>
  )
}

export default Project

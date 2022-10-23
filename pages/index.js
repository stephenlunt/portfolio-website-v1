import Head from 'next/head'
import ProjectsGrid from '../components/projects-grid'

const Home = ({projects}) => {
  return (<>
    <ProjectsGrid projects={projects} />
  </>)
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/projects.json')
  const data = await res.json()

  return {
    props: {
      projects: data.projects
    }
  }
}

export default Home

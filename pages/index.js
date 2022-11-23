import { promises as fs } from 'fs'
import path from 'path'
import { motion } from 'framer-motion'

import Art from '../components/art'
import About from '../components/about'
import ProjectsGrid from '../components/projects-grid'
import Timeline from '../components/timeline'
import ContactMe from '../components/contact'

const Home = ({ projects }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0 }}
      >
        <Art />
      </motion.div>

      <About />

      <ProjectsGrid projects={projects} />

      <Timeline />

      <ContactMe />
    </>
  )
}

/**
 * Load in the static project data stored in ./data/projects.json
 *
 * https://nextjs.org/docs/api-reference/data-fetching/get-static-props
 */
export async function getStaticProps() {
  const projectsDirectory = path.join(process.cwd(), 'data')
  const filePath = path.join(projectsDirectory, 'projects.json')
  const fileContents = await fs.readFile(filePath, 'utf8')
  const data = JSON.parse(fileContents)

  return {
    props: {
      projects: data.projects
    }
  }
}

export default Home

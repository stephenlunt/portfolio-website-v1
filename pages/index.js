import { promises as fs } from 'fs'
import path from 'path'
import { motion } from 'framer-motion'

import ProjectsGrid from '../components/projects-grid'
import About from '../components/about'

const Home = ({ projects }) => {
  return (
    <>
      <motion.div
        className="font-mono text-3xl py-[100px] flex justify-center mx-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0 }}
      >
        Lorem Ipsum
      </motion.div>

      <About />

      <ProjectsGrid projects={projects} />
    </>
  )
}

/**
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

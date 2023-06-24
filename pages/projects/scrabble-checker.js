import Head from 'next/head'
import Image from 'next/image'
import StackList from '../../components/stack-list'
import { motion } from 'framer-motion'
import { BiLinkExternal } from 'react-icons/bi'

const Project = () => {
  const title = 'Scrabble Checker'
  const techStack = [
    'Django',
    'Python',
    'JavaScript',
    'HTML',
    'CSS',
    'Docker',
    'Postgres',
    'nginx'
  ]

  return (
    <>
      <Head>
        <title>Stephen Lunt - {title}</title>
      </Head>

      <h1 className="text-amber-gradient dark:text-blue-gradient transition-color mx-auto flex justify-center py-1 text-3xl font-semibold duration-300">
        {title}
      </h1>
      <div className="mx-auto flex justify-center gap-1 pb-4 italic underline">
        <BiLinkExternal className="my-auto" />
        <a href="https://scrabblechecker.com">Scrabble Checker</a>
      </div>

      <section className="mx-auto flex max-w-2xl flex-col justify-center px-4 py-4 text-justify">
        <p>
          Scrabble Checker is a full stack web application I built for Scrabble
          players to find valid words and track their in-person game scores. It
          primarily runs on Django for both the backend and template rendering,
          with a sprinkle of JavaScript to handle frontend updates to the DOM.
        </p>

        <div className="px-2 py-4">
          <h2 className="mx-auto flex justify-center pb-2 text-xl">Stack</h2>
          <StackList techStack={techStack} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="py-4"
        >
          <Image
            src={'/images/scrabble-checker-homepage.jpeg'}
            alt="Scrabble Checker Homepage"
            priority={true}
            quality="100"
            width="3"
            height="2"
            layout="responsive"
            className="rounded-lg"
          />
          <br />
          <Image
            src={'/images/scrabble-checker-gamepage.jpeg'}
            alt="Scrabble Checker Gamepage"
            quality="100"
            width="3"
            height="2"
            layout="responsive"
            className="rounded-lg"
          />
        </motion.div>
      </section>
    </>
  )
}

export default Project

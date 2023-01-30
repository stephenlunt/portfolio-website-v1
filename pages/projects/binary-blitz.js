import Head from 'next/head'
import Image from 'next/image'
import StackList from '../../components/stack-list'
import { motion } from 'framer-motion'
import { BsGithub } from 'react-icons/bs'

const Project = () => {
  const title = 'Binary Blitz'
  const techStack = [
    'React',
    'TypeScript',
    'JavaScript',
    'Styled Components',
    'HTML',
    'CSS'
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
        <BsGithub className="my-auto" />
        <a
          href="https://github.com/stephenlunt/binary-blitz"
          target="_blank"
          rel="noreferrer noopener"
        >
          Source Code
        </a>
      </div>

      <section className="mx-auto flex max-w-2xl flex-col justify-center px-4 py-4 text-justify">
        <p>
          Binary Blitz is a small game built using React and TypeScript designed
          to help people learn how to convert binary values to decimals through
          repetition. The game becomes incrementally harder as each level
          progresses.
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
            src={'/images/binary-blitz-win.jpeg'}
            alt="Binary Blitz game play win screen"
            priority={true}
            quality="100"
            width="3"
            height="2"
            layout="responsive"
            className="rounded-lg"
          />
          <br />
          <Image
            src={'/images/binary-blitz-loss.jpeg'}
            alt="Binary Blitz game play loss screen"
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

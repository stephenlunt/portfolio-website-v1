import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BiLinkExternal } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'

import StackList from '../../components/stack-list'

const Project = () => {
  const title = 'Personal Website'
  const techStack = ['NextJs', 'React', 'JavaScript', 'TailwindCSS']

  return (
    <>
      <Head>
        <title>Stephen Lunt - {title}</title>
      </Head>

      <h1 className="text-amber-gradient dark:text-blue-gradient transition-color mx-auto flex justify-center py-1 text-3xl font-semibold duration-300">
        {title}
      </h1>
      <div className="mx-auto flex justify-center gap-2 pb-4 italic underline">
        <div className="inline-flex items-center gap-1">
          <BiLinkExternal className="my-auto" />
          <a
            href="https://www.stephen-lunt.dev/"
            target="_blank"
            rel="noreferrer noopener"
          >
            stephen-lunt.dev
          </a>
        </div>
        <div className="inline-flex items-center gap-1">
          <BsGithub className="my-auto" />
          <a
            href="https://github.com/stephenlunt97/portfolio-website"
            target="_blank"
            rel="noreferrer noopener"
          >
            Source code
          </a>
        </div>
      </div>

      <section className="mx-auto flex max-w-2xl flex-col justify-center px-4 py-4 text-justify">
        <p>
          My portfolio website (the site you&apos;re on now) was built
          using&nbsp;
          <a
            className="underline"
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Next.js
          </a>
          &nbsp;and utilises&nbsp;
          <a
            className="underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            TailwindCSS
          </a>
          &nbsp;for styling. The majority of projects I&apos;d worked on up to
          this point only used vanilla JavaScript, therefore I was eager to
          explore the React framework and gain experience using a
          component-based architecture.
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
            src={'/images/personal-site-art.jpeg'}
            alt="Scrabble Checker Homepage"
            priority={true}
            quality="100"
            width="3"
            height="2"
            layout="responsive"
            className="rounded-lg"
          />
          <br />
        </motion.div>
      </section>
    </>
  )
}

export default Project

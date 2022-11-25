import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'

import StackList from '../../components/stack-list'

const Project = () => {
  const title = 'CLI Password Checker'
  const techStack = ['Python', 'pytest']

  return (
    <>
      <Head>
        <title>Stephen Lunt - {title}</title>
      </Head>

      <h1 className="text-amber-gradient dark:text-blue-gradient transition-color mx-auto flex justify-center py-1 text-3xl font-semibold duration-300">
        {title}
      </h1>

      <section className="mx-auto flex max-w-2xl flex-col justify-center px-4 py-4 text-justify">
        <p>
          I created this project to form my submission for CS50&apos;s
          Programming with Python course. It is a simple command line password
          strength checker and unique password generator. I choose this project
          to build up my experience using Python classes & objects, practise
          test-driven development with the&nbsp;
          <a
            className="underline"
            href="https://pytest.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            pytest
          </a>
          &nbsp;framework and implement simple algorithms.
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
            src={'/images/password-checker.gif'}
            alt="CLI Password Checker"
            quality="100"
            width="3"
            height="2"
            layout="responsive"
            className="rounded-lg"
          />
          <br />
          <Image
            src={'/images/password-generator.gif'}
            alt="CLI Password Generator"
            quality="100"
            width="3"
            height="2"
            layout="responsive"
            className="rounded-lg"
          />
        </motion.div>
        <p className="text-center">
          Console output was recorded using&nbsp;
          <a
            className="underline"
            href="https://asciinema.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Asciinema
          </a>
          &nbsp;and converted to gifs using&nbsp;
          <a
            className="underline"
            href="https://github.com/asciinema/agg"
            target="_blank"
            rel="noreferrer noopener"
          >
            agg
          </a>
          .
        </p>
      </section>
    </>
  )
}

export default Project

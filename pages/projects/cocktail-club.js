import Head from 'next/head'
import Image from 'next/image'
import StackList from '../../components/stack-list'
import { motion } from 'framer-motion'

const Project = () => {
  const title = 'The Cocktail Club'
  const techStack = [
    'Flask',
    'Python',
    'JavaScript',
    'jQuery',
    'HTML',
    'TailwindCSS',
    'SQLite'
  ]

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
          The Cocktail Club is a Flask web application I created when completing
          my final project for CS50&apos;s Introduction to Computer Science. As
          my first full project, I wanted to gain experience working with an
          existing public API (I choose&nbsp;
          <a
            className="underline"
            href="https://www.thecocktaildb.com/api.php"
            target="_blank"
            rel="noreferrer noopener"
          >
            TheCocktailDB
          </a>
          ) and allow users to interact with the content through a nice web
          interface.
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
            src={'/images/cocktail-club-homepage.jpeg'}
            alt="The Cocktail Club homepage"
            priority={true}
            quality="100"
            width="3"
            height="2"
            layout="responsive"
            className="rounded-lg"
          />
          <br />
          <Image
            src={'/images/cocktail-club-drinkpage.jpeg'}
            alt="The Cocktail Club drinks page"
            quality="100"
            width="3"
            height="2"
            layout="responsive"
            className="rounded-lg"
          />
          <br />
          <Image
            src={'/images/cocktail-club-leaderboard.jpeg'}
            alt="The Cocktail Club leaderboard page"
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

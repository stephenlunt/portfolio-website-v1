const Timeline = () => {
  return (
    <section
      id="timeline"
      className="mx-auto flex max-w-2xl flex-col justify-center px-4"
    >
      <h2 className="mx-auto flex justify-center pt-8 pb-4 text-2xl">
        My Programming Journey
      </h2>

      <div className="justiy-start flex flex-row">
        <div className="relative flex flex-col justify-start">
          <TimelineElement
            date={'Dec 2021'}
            title={'Humble beginnings'}
            text={`During this period I was working a heavily data orientated job with no
            programming knowledge. After reading an article about Python I became interested 
            in how it could help me in my role. I picked up a copy of Automate the Boring Stuff with
            Python and began writing my first pieces of code.
            `}
          />

          <TimelineElement
            date={'Jan 2022'}
            title={'CS50X'}
            text={`After seeing the potential of what programming has to offer, I began taking CS50's Introduction 
            to Computer Science. It was a great course to learn the core topics of CS and gave me plenty of practise 
            coding in languages such as C, Python, SQL & Javascript.
            `}
          />

          <TimelineElement
            date={'April 2022'}
            title={'CS50 Python'}
            text={`Having enjoyed CS50's course so much, I revisited Python in more depth. 
              During this course I gained a lot more knowlegde and practise using more advanced Python 
              features and was introduced to Object Oriented Programming.`}
          />

          <TimelineElement
            date={'June 2022'}
            title={'CS50 Web'}
            text={`Looking to extend my knowledge further, I dived into the world of the web. I learnt 
            a lot on the django framework and more advanced JavaScript, leading on to complete my biggest 
            project yet (scrabble-checker.app).`}
          />

          <TimelineElement
            date={'Sept 2022'}
            title={'MSc Computer Science'}
            text={`I'm currently embarking on a Computer Science conversion MSc at Newcastle University. 
            Here I'm learning many advanced topics of programming in Java, as well as databases, networking, 
            cyber sercurity and much more!
            `}
          />
        </div>
      </div>
    </section>
  )
}

const TimelineElement = ({ date, title, text }) => {
  return (
    <div className="pb-4">
      <div className="flex flex-row items-center gap-2">
        <DateElement date={date} />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="pt-1 text-zinc-600 dark:text-zinc-400">{text}</p>
    </div>
  )
}

const DateElement = ({ date }) => {
  return (
    <div className="inline-block cursor-default items-center justify-center gap-2 rounded-md bg-green-500/80 py-0.5 text-white transition-colors duration-200 dark:bg-green-500/50 dark:text-green-200 dark:hover:text-white">
      <span className="m-auto flex px-3 text-center">{date}</span>
    </div>
  )
}

export default Timeline

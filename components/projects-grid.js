import Link from 'next/link'
import Image from 'next/image'

const ProjectsGrid = ({ projects }) => {
  return (
    <section
      id="projects"
      className="mx-auto flex max-w-4xl flex-col justify-center px-4 pb-8"
    >
      <h2 className="mx-auto flex justify-center p-4 text-2xl">Projects</h2>

      <div className="flex flex-row flex-wrap justify-center gap-6">
        {projects.map((project, index) => {
          if (project.featured && project.visible) {
            return (
              <Link key={index} href={'/projects/' + project.slug}>
                <div className="relative z-20 aspect-[3/2] w-[100%] cursor-pointer rounded-md bg-black/20 drop-shadow-xl sm:w-[48%]">
                  <Image
                    src={project.imgUrl}
                    alt={project.imgAlt}
                    priority={true}
                    layout="fill"
                    className="rounded-md opacity-90 transition-opacity duration-500 hover:opacity-100"
                  />
                  <div className="absolute bottom-0 z-30 w-full rounded-b-md bg-black/30 py-1">
                    <h3 className="mx-auto flex flex-row justify-center text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            )
          }
        })}
      </div>
    </section>
  )
}

export default ProjectsGrid

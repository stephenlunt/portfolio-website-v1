import Link from 'next/link'
import Image from 'next/image'

const ProjectsGrid = ({ projects }) => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center mx-auto px-4 max-w-5xl"
    >
      <h2 className="flex justify-center mx-auto text-2xl p-4">Projects</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {projects.map((project, index) => (
          <Link key={index} href={'/projects/' + project.slug}>
            <div className="relative bg-black/20 rounded-md aspect-[16/9] shadow-lg cursor-pointer">
              <Image
                src={project.imgUrl}
                alt={project.imgAlt}
                layout="fill"
                className="rounded-md"
              />
              <div className="absolute w-full bottom-0 bg-black/30 py-1 rounded-b-md">
                <h3 className="flex flex-row justify-center mx-auto text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ProjectsGrid

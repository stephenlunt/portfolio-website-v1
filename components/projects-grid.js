import Link from "next/link";
import Image from "next/image";

const ProjectsGrid = ({projects}) => {
  return (
    <div className="flex flex-col justify-center mx-auto px-4 max-w-5xl">
      <h2 className="flex justify-center mx-auto text-3xl p-4">Projects</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="relative bg-black/20 rounded-md aspect-[16/9] shadow-lg"
          >
            <Image src={project.imgUrl} alt={project.imgAlt} layout="fill" className="rounded-md" />
            <h3 className="absolute bottom-0">{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsGrid

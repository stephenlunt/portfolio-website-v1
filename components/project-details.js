const ProjectDetails = ({ title, description, stack, link, source }) => {
  return (
    <section className="flex justify-center flex-col mx-4 p-4 max-w-5xl bg-black/20 border border-slate-600 rounded-xl">
      <p className="pb-2">
        <strong>Title: </strong>
        {title}
      </p>
      <p className="pb-2">
        <strong>Description: </strong>
        {description}
      </p>
      <ul className="flex flex-row gap-2">
        {stack.map((item, index) => {
          return (
            <li
              key={index}
              className="flex align-middle bg-green-500/60 text-green-300 px-1 rounded-md"
            >
              {item}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ProjectDetails

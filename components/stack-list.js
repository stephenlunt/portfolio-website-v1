import StackIcon from './stack-icon'

const StackList = ({ techStack }) => {
  return (
    <ul className="flex flex-row flex-wrap justify-center gap-3">
      {techStack.map((item, index) => {
        return (
          <li
            key={index}
            className="inline-flex cursor-default items-center justify-center gap-2 rounded-md bg-green-500/80 py-0.5 text-white transition-all duration-500 dark:bg-green-500/50 dark:text-green-200 dark:hover:text-white"
          >
            <span className="m-auto flex pl-3">
              <StackIcon item={item} />
            </span>
            <span className="m-auto flex pr-3 text-center">{item}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default StackList

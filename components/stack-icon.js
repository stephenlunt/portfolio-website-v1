import {
  SiPython,
  SiJavascript,
  SiJquery,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiPostgresql,
  SiNginx,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiFlask,
  SiSqlite,
  SiTypescript
} from 'react-icons/si'
import { FaCode } from 'react-icons/fa'

const StackIcon = ({ item }) => {
  switch (item) {
    case 'Python':
      return <SiPython />
    case 'JavaScript':
      return <SiJavascript />
    case 'jQuery':
      return <SiJquery />
    case 'HTML':
      return <SiHtml5 />
    case 'CSS':
      return <SiCss3 />
    case 'Docker':
      return <SiDocker />
    case 'Postgres':
      return <SiPostgresql />
    case 'nginx':
      return <SiNginx />
    case 'Django':
      return <SiDjango />
    case 'React':
      return <SiReact />
    case 'TailwindCSS':
      return <SiTailwindcss />
    case 'NextJs':
      return <SiNextdotjs />
    case 'Flask':
      return <SiFlask />
    case 'SQLite':
      return <SiSqlite />
    case 'TypeScript':
      return <SiTypescript />
    default:
      return <FaCode />
  }
}

export default StackIcon

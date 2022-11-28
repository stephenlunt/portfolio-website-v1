import Link from 'next/link'
import { HiOutlineMail } from 'react-icons/hi'
import { BsGithub } from 'react-icons/bs'

const ContactMe = () => {
  return (
    <div className="mx-auto flex flex-col justify-center">
      <h2 className="mx-auto flex justify-center p-4 text-2xl">Get in touch</h2>

      <div className="mx-auto flex flex-col justify-center gap-4 sm:flex-row">
        <ContactButton
          link={'mailto:stephenlunt@me.com'}
          type={'email'}
          text={'stephenlunt@me.com'}
        />
        <ContactButton
          link={'https://github.com/stephenlunt'}
          type={'github'}
          text={'stephenlunt'}
        />
      </div>
    </div>
  )
}

const ContactButton = ({ link, type, text }) => {
  return (
    <Link href={link}>
      <button className="mx-auto inline-flex items-center rounded-md border border-amber-300 bg-amber-200 px-2 py-1 ring-amber-300/40 hover:ring-2 dark:border-slate-500 dark:bg-slate-700 dark:ring-slate-500/40 md:my-1">
        {type === 'email' ? <HiOutlineMail /> : <BsGithub />}
        <span className="ml-2">{text}</span>
      </button>
    </Link>
  )
}

export default ContactMe

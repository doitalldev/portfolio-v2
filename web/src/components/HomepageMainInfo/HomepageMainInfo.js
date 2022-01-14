import { Link, navigate, routes } from '@redwoodjs/router'
import GithubLogo from '../BrandLogos/github'
import TwitterLogo from '../BrandLogos/twitter'

const HomepageMainInfo = () => {
  const navigateContact = () => {
    navigate(routes.contact())
  }

  const downloadResume = () => {
    window.location = 'documents/J-Clark-Web-Version.pdf'
  }
  return (
    <div className="absolute w-1/2 top-1/3 pl-12">
      <div className="flex flex-col max-w-xl ml-auto mr-0">
        <div>
          <img
            src="mepixel.svg"
            alt="creature"
            className="h-48 w-48 rounded-full p-4 "
          />
        </div>
        <h2 className="text-5xl font-bold">
          Creating performant websites and tooling
          <span className="text-sky-600">.</span>
        </h2>
        <p className="text-lg text-neutral-900">
          My name is Jonathan{' '}
          <span className=" text-sky-600">(refactor_this)</span> Clark
        </p>
        <div className="mt-12 flex items-center">
          {/* <button
            onClick={() => navigateContact()}
            className="bg-sky-600 rounded text-xl text-center px-6 py-4  text-white shadow-xl hover:bg-white hover:text-black transition ease-in-out hover:-translate-y-2"
          >
            Hire Me
          </button> */}
          <button
            onClick={() => downloadResume()}
            className="bg-sky-600 rounded text-xl text-center mx-4 px-6 py-4  text-white shadow-xl hover:bg-white hover:text-black transition ease-in-out hover:-translate-y-2"
          >
            Download Resume
          </button>
          <div className="w-10 h-10 mx-1">
            <a
              href="https://twitter.com/refactor_this"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterLogo />
            </a>
          </div>
          <div className="w-10 h-10 mx-1">
            <a
              href="https://github.com/refactor-this"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomepageMainInfo

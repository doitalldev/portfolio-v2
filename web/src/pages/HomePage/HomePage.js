import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import AboutMe from 'src/components/AboutMe/AboutMe'
import HomepageMainInfo from 'src/components/HomepageMainInfo/HomepageMainInfo'
import MyServices from 'src/components/MyServices/MyServices'
import MySkills from 'src/components/MySkills/MySkills'
import MyWork from 'src/components/MyWork/MyWork'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="mx-auto">
        <div className="w-full flex">
          <div className="w-1/2 h-screen">
            <HomepageMainInfo />
          </div>
          <div className="w-1/2 overflow-scroll px-8 homepage-cards pb-[30vh] pt-[20vh] h-screen">
            <AboutMe />
            <MySkills />
            <MyServices />
            <MyWork />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage

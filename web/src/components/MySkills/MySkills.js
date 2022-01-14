import { navigate } from '@redwoodjs/router'
import AdobeLogo from '../BrandLogos/adobe'
import AffinityLogo from '../BrandLogos/affinity'
import AffinityDesignerLogo from '../BrandLogos/affinitydesigner'
import AffinityPhotoLogo from '../BrandLogos/affinityphoto'
import AWSLogo from '../BrandLogos/aws'
import CssLogo from '../BrandLogos/css'
import FigmaLogo from '../BrandLogos/figma'
import IllustratorLogo from '../BrandLogos/illustrator'
import JavascriptLogo from '../BrandLogos/javascript'
import JiraLogo from '../BrandLogos/jira'
import NetlifyLogo from '../BrandLogos/netlify'
import NextLogo from '../BrandLogos/next'
import NodeLogo from '../BrandLogos/node'
import PhotoshopLogo from '../BrandLogos/photoshop'
import Postgresql from '../BrandLogos/postgresql'
import PrismaLogo from '../BrandLogos/prisma'
import ReactLogo from '../BrandLogos/react'
import RedwoodJS from '../BrandLogos/redwood'
import SassLogo from '../BrandLogos/sass'
import ShopifyLogo from '../BrandLogos/shopify'
import TailwindLogo from '../BrandLogos/tailwind'
import VimLogo from '../BrandLogos/vim'

const MySkills = () => {
  return (
    <div className="p-8 my-10 rounded-2xl shadow-lg bg-white max-w-xl text-lg">
      <h2 className="text-4xl font-bold">My Skills 👨‍💻</h2>
      <div className="my-4">
        <h4>Primary Skills</h4>
        <div className="flex w-full flex-wrap items-center justify-center">
          <div className="skill-icon">
            <JavascriptLogo />
          </div>

          <div className="skill-icon">
            <ReactLogo />
          </div>
          <div className="skill-icon">
            <ShopifyLogo />
          </div>
          <div className="skill-icon">
            <RedwoodJS />
          </div>
          <div className="skill-icon">
            <Postgresql />
          </div>
          <div className="skill-icon">
            <CssLogo />
          </div>
          <div className="skill-icon">
            <NodeLogo />
          </div>
          <div className="skill-icon">
            <SassLogo />
          </div>
          <div className="skill-icon">
            <TailwindLogo />
          </div>
          <div className="skill-icon">
            <NextLogo />
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="my-4">
        <h4>Secondary Skills</h4>
        <div className="flex w-full flex-wrap items-center justify-center">
          <div className="skill-icon">
            <JiraLogo />
          </div>
          <div className="skill-icon">
            <AWSLogo />
          </div>
          <div className="skill-icon">
            <AffinityDesignerLogo />
          </div>
          <div className="skill-icon">
            <AffinityPhotoLogo />
          </div>
          <div className="skill-icon">
            <VimLogo />
          </div>
          <div className="skill-icon">
            <NetlifyLogo />
          </div>
          <div className="skill-icon">
            <FigmaLogo />
          </div>
          <div className="skill-icon">
            <PrismaLogo />
          </div>
          <div className="skill-icon">
            <PhotoshopLogo />
          </div>
          <div className="skill-icon">
            <IllustratorLogo />
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="my-4">
        <h4>Tertiary Skills</h4>
        <div className="flex w-full flex-wrap items-center justify-center">
          I enjoy learning new things.
        </div>
      </div>
    </div>
  )
}

export default MySkills

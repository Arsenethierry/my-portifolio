import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Loader } from '../shared/components'
import { PersonalDetailsContext } from '../shared/utils/context'
import { PersonalDetails, Project } from '../shared/utils/types'
// import { Loader } from '@shared-components'
import { personalDetails } from '../shared/data/personal-details';
import Navbar from '../shared/components/navbar'
import SocialBar from '../shared/components/socialbar'
import Footer from '../shared/components/footer'
import SeoTags from '../shared/utils/seo-tags'


const HomePage = dynamic(() => import('../components/home/index'), {
  ssr: false,
  loading: () => <Loader />
})

type Props = {
  personalDetails: PersonalDetails;
};

const Home = ({ personalDetails }: Props) => {

  return (
    <>
      <SeoTags
        title={personalDetails.name + ' | fullstack web developer'}
        keywords='fullstack mern react nextjs developer frontend backend'
        ogImage={personalDetails.ogImage}
        ogDesc={personalDetails.desc}
        description={personalDetails.desc}
        url='https://arsenethierry-dev.vercel.app/'
      />
      {/* <PersonalDetailsContext.Provider value={personalDetails}> */}
      <Navbar />
      <SocialBar />
      <HomePage personalDetails={personalDetails} />
      <Footer />
      {/* </PersonalDetailsContext.Provider> */}
    </>
  )
}

export default Home;

export async function getStaticProps() {
  return {
    props: {
      personalDetails,
    }
  };
}


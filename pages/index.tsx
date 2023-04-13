import type { NextPage } from 'next'
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkExternal from "../components/Links/LinkExternal"
import LinkExternalButton from "../components/Links/LinkExternalButton"
import YouTubeEmbed from "../components/YouTubeEmbed"
import Image from 'next/image'

const homePage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white justify-center">
      <SiteHead title="Gee, Your Band Smells Terrific" description="Gee, Your Band Smells Terrific is Cincinnati, Ohio’s premier 1970’s showcase & dance band playing super hits of the 70’s!" url="" />

      <main className="pt-9 pb-20 px-9 max-w-[1100px] w-full flex flex-1 flex-col items-center justify-center">
      <div className="w-full flex flex-row flex-wrap gap-9 items-center justify-center text-center">
        <Image src={process.env.NEXT_PUBLIC_SITE_URL + '/logo.svg' || './logo.svg'} alt="GYBST Logo" width={420} height={420} />
        <div className="mb-20 xl:mb-0 lg:mb-0 md:mb-0 flex flex-row xl:flex-col lg:flex-col md:flex-col flex-wrap gap-10 items-center justify-center text-center">
          <LinkExternalButton href="https://facebook.com/geeyourbandsmellsterrific" title="GYBST Facebook" size="[200px]">Facebook</LinkExternalButton>
          <LinkExternalButton href="https://instagram.com/geeyourbandsmellsterrific" title="GYBST Instagram" size="[200px]">Instagram</LinkExternalButton>
        </div>
      </div>

      <h1 className="text-2xl font-bold">Cincinnati, Ohio’s premier 1970’s showcase & dance band playing super hits of the 70’s!</h1>

      <h2 id="skinny" className="mt-20 text-4xl font-bold text-pink-400">The Skinny</h2>
      <p className="my-4 text-2xl">Gee, Your Band Smells Terrific, one of the best party bands (and best wedding band, best company party band, best festival band, etc.) in the Cincinnati area, we play the Super Hits of the 70s: all original songs, unoriginal artists. We are the region’s only true 70s showcase band, covering all genres and hopelessly devoted to partying like it’s 1979! With all the polyester splendor and kitschy fun that made 1970-1979 the best decade ever, we are the premier cover band for getting down and boogying.</p>

      <h2 id="contact" className="mt-20 text-4xl font-bold text-lime-400">Book Us For Your Event!</h2>
      <p className="mt-4 text-2xl">Wanna make sure your venue, event, concert, private party, company party, wedding, bar mitzvah, festival, fish-bowl cul-de-sac swap, etc. is partying like it’s 1979?
      </p>
      <p className="mt-4 text-2xl"> Email Bobby Dingo at <LinkExternal className="break-all" href="mailto:bobbydingo@yahoo.com" title="Email Bobby Dingo at bobbydingo@yahoo.com">bobbydingo@yahoo.com</LinkExternal>, or start dialing <LinkExternal href="tel:513-476-2481" title="Call Bobby Dingo at 513-476-2481">513-476-2481</LinkExternal> with your rotary, avocado wall mount phone with super long extension cord.
      </p>

      <h2 id="calendar" className="mt-20 text-4xl font-bold text-rose-400">Stay Up-To-Date</h2>
      <p className="my-4 text-2xl">Find upcoming shows on our Facebook:</p>
      <div className="max-w-[1100px] w-full flex flex-row flex-wrap items-center justify-center text-center">
        <div id="fb-root"></div><script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0" nonce="AMwHggVR"></script><div className="w-[] fb-page" data-href="https://facebook.com/geeyourbandsmellsterrific" data-tabs="timeline, events" data-width="500" data-height="650" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://facebook.com/geeyourbandsmellsterrific" className="fb-xfbml-parse-ignore"><div className="flex flex-row flex-wrap items-center justify-center text-center"><LinkExternalButton href="https://facebook.com/geeyourbandsmellsterrific" title="GYBST Facebook" size="[200px]">Facebook</LinkExternalButton></div></blockquote></div>
      </div>

      <h2 id="video" className="mt-20 text-4xl font-bold text-yellow-400">Band Video</h2>
      <p className="my-4 text-2xl">Check out this sample from one of our recent live shows:</p> <YouTubeEmbed videoName="Gee Your Band Smells Terrific covers Boogie Oogie Oogie" embedId="OX5ITRlhsnk" />

      <h2 id="members" className="mt-20 text-4xl font-bold text-amber-500">Band Members</h2>
      <div className="max-w-[420px] w-full flex flex-col flex-wrap">
        <p className="my-4 text-2xl"><strong className="text-pink-400">Dancing</strong> <strong>Leo Dynomite</strong> <em>(Vocalist)</em></p>
        <p className="my-4 text-2xl"><strong className="text-rose-400">Magical</strong> <strong>Allison Wonderland</strong> <em>(Vocalist)</em></p>
        <p className="my-4 text-2xl"><strong className="text-fuchsia-800">Feral</strong> <strong>Bobby Dingo</strong> <em>(Drums)</em></p>
        <p className="my-4 text-2xl"><strong className="text-sky-600">Delectable</strong> <strong>Tommy Salami</strong> <em>(Guitar)</em></p>
        <p className="my-4 text-2xl"><strong className="text-lime-400">Boomin’</strong> <strong>J.J. Aquarius</strong> <em>(Bass)</em></p>
        <p className="my-4 text-2xl"><strong className="text-amber-500">Copacetic</strong> <strong>Will Power</strong> <em>(Keyboard)</em></p>
      </div>
      </main>

      <PageFooter />
    </div>
  )
}

export default homePage
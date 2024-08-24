import type { NextPage } from "next"
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkExternal from "../components/Links/LinkExternal"
import LinkExternalButton from "../components/Links/LinkExternalButton"
import YouTubeEmbed from "../components/YouTubeEmbed"
import Image from "next/image"

const HomePage: NextPage = () => {
  const SiteURL = process.env.NEXT_PUBLIC_SITE_URL || "."

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white justify-center">
      <SiteHead title="Gee, Your Band Smells Terrific" description="Gee, Your Band Smells Terrific is Cincinnati, Ohio’s premier 1970s showcase & dance band playing super hits of the 70s!" url="" />

      <main className="pt-9 pb-20 px-9 max-w-[1100px] w-full flex flex-1 flex-col items-center justify-center">
        <div className="w-full flex flex-row max-md:flex-col gap-y-0 gap-x-4 items-center justify-center text-center">
          <Image src={SiteURL + "/logo.svg"} alt="GYBST Logo" width={420} height={420} />
          <div className="flex flex-col max-md:flex-row max-[335px]:flex-col gap-x-10 max-sm:gap-x-4 gap-y-6 max-[335px]:gap-y-0 items-center justify-center text-center">
            <LinkExternalButton className="max-[375px]:py-2 max-[375px]:px-6" href="https://facebook.com/geeyourbandsmellsterrific" title="GYBST Facebook">
              <span className="flex flex-row text-center align-middle items-center justify-center gap-2">
                <Image src={SiteURL + "/facebook.svg"} alt="Facebook" width={32} height={32} />
                <span className="max-[434px]:text-lg">Facebook</span>
              </span>
              <span className="max-sm:hidden mt-2 flex text-center align-middle items-center justify-center">
                <em className="font-normal text-sm">@GeeYourBandSmellsTerrific</em>
              </span>
            </LinkExternalButton>
            <LinkExternalButton className="max-[375px]:py-2 max-[375px]:px-6" href="https://instagram.com/geeyourbandsmellsterrific" title="GYBST Instagram">
              <span className="flex flex-row text-center align-middle items-center justify-center gap-2">
                <Image src={SiteURL + "/instagram.svg"} alt="Instagram" width={32} height={32} />
                <span className="max-[434px]:text-lg">Instagram</span>
              </span>
              <span className="max-sm:hidden mt-2 flex text-center align-middle items-center justify-center">
                <em className="font-normal text-sm">@GeeYourBandSmellsTerrific</em>
              </span>
            </LinkExternalButton>
          </div>
        </div>

        <div className="mt-0 max-md:mt-16 flex text-center align-middle items-center justify-center">
          <h1 className="text-2xl font-bold max-w-[500px]">Cincinnati, Ohio’s premier 1970s showcase & dance band playing super hits of the 70s!</h1>
        </div>

        <LinkExternalButton href="https://venmo.com/code?user_id=4128008445101301726" title="Leave a Tip using Venmo" className="mt-24 !px-20 !py-28 max-[434px]:!px-8 max-[434px]:!py-16 text-2xl">
          <span className="flex flex-col text-center align-middle items-center justify-center gap-4">
            Click here to Tip us
            <Image src={SiteURL + "/venmo.svg"} alt="Venmo" width={194} height={35} />
            <em className="font-normal">@GYBST</em>
          </span>
        </LinkExternalButton>
        <div className="flex text-center align-middle items-center justify-center">
          <LinkExternal href="https://venmo.com/code?user_id=4128008445101301726" title="Leave a Tip using Venmo" className="text-xs text-[#333333]"><em>venmo.com/code?user_id=4128008445101301726</em></LinkExternal>
        </div>

        <h2 id="skinny" className="mt-24 text-4xl font-bold text-pink-400">The Skinny</h2>
        <p className="my-4 text-2xl">Gee, Your Band Smells Terrific, one of the best party bands (and best wedding band, best company party band, best festival band, etc.) in the Cincinnati area. We play the Super Hits of the 70s all original songs, unoriginal artists. We are the region’s only true 70s showcase band, covering all genres and hopelessly devoted to partying like it’s 1979! With all the polyester splendor and kitschy fun that made 1970-1979 the best decade ever. We are the premier cover band for getting down and boogying.</p>

        <h2 id="contact" className="mt-20 text-4xl font-bold text-lime-400">Book Us For Your Event!</h2>
        <p className="mt-4 text-2xl">Wanna make sure your venue, event, concert, private party, company party, wedding, bar mitzvah, festival, fish-bowl cul-de-sac swap, etc. is partying like it’s 1979?
        </p>
        <p className="mt-4 text-2xl"> Email Allison Wonderland at <LinkExternal className="break-all" href="mailto:allisonwonderlandgybst@gmail.com" title="Email Allison Wonderland at AllisonWonderlandGYBST@gmail.com">AllisonWonderlandGYBST@gmail.com</LinkExternal>, or start dialing <LinkExternal href="tel:513-317-3208" title="Call Allison Wonderland at 513-317-3208">513-317-3208</LinkExternal> with your avocado wall mount rotary phone with a super long, coiled extension cord.
        </p>

        <h2 id="calendar" className="mt-20 text-4xl font-bold text-rose-400">Stay Up-To-Date</h2>
        <p className="my-4 text-2xl">Find upcoming shows on our Facebook:</p>
        <div className="fbParent flex flex-row flex-wrap items-center justify-center text-center">
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Ffacebook.com%2Fgeeyourbandsmellsterrific&tabs=timeline&width=200&height=700&small_header=false&hide_cover=false&show_facepile=true&appId" className="fb200 h-[700px] w-[200px] border-none overflow-scroll" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Ffacebook.com%2Fgeeyourbandsmellsterrific&tabs=timeline&width=300&height=700&small_header=false&hide_cover=false&show_facepile=true&appId" className="fb300 h-[700px] w-[300px] border-none overflow-scroll" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Ffacebook.com%2Fgeeyourbandsmellsterrific&tabs=timeline&width=500&height=700&small_header=false&hide_cover=false&show_facepile=true&appId" className="fb500 h-[700px] w-[500px] border-none overflow-scroll" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
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
      </main >

      <PageFooter />
    </div >
  )
}

export default HomePage
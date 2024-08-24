import type { NextPage } from "next"
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkExternal from "../components/Links/LinkExternal"
import LinkExternalButton from "../components/Links/LinkExternalButton"
import LinkInternalButton from "../components/Links/LinkInternalButton"
import Image from "next/image"

const LinksPage: NextPage = () => {
  const SiteURL = process.env.NEXT_PUBLIC_SITE_URL || "."

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white justify-center">
      <SiteHead title="Gee, Your Band Smells Terrific" description="Gee, Your Band Smells Terrific is Cincinnati, Ohio’s premier 1970s showcase & dance band playing super hits of the 70s!" url="" />

      <main className="pt-9 pb-20 px-9 max-w-[1100px] w-full flex flex-1 flex-col items-center justify-center">
        <div className="w-full flex flex-col gap-2 items-center justify-center text-center">
          <Image src={SiteURL + "/logo.svg"} alt="GYBST Logo" width={420} height={420} />
          <div className="flex flex-col flex-wrap gap-9 items-center justify-center text-center">
            <div className="flex flex-col gap-0 text-center align-middle items-center justify-center">
              <LinkExternalButton href="https://venmo.com/code?user_id=4128008445101301726" title="Leave a Tip using Venmo" className="!px-20 !py-28 max-[434px]:!px-8 max-[434px]:!py-16 text-2xl">
                <span className="flex flex-col text-center align-middle items-center justify-center gap-4">
                  Click here to Tip us
                  <Image src={SiteURL + "/venmo.svg"} alt="Venmo" width={194} height={35} />
                  <em className="font-normal">@GYBST</em>
                </span>
              </LinkExternalButton>
              <LinkExternal href="https://venmo.com/code?user_id=4128008445101301726" title="Leave a Tip using Venmo" className="mb-4 text-xs text-[#333333]"><em>venmo.com/code?user_id=4128008445101301726</em></LinkExternal>
            </div>
            <LinkExternalButton href="https://facebook.com/geeyourbandsmellsterrific" title="GYBST Facebook">
              <span className="flex flex-row text-center align-middle items-center justify-center gap-x-4 gap-y-2">
                <Image src={SiteURL + "/facebook.svg"} alt="Facebook" width={32} height={32} />
                <span className="max-[434px]:text-lg">Facebook</span>
              </span>
              <span className="mt-2 flex text-center align-middle items-center justify-center">
                <em className="font-normal text-sm">@GeeYourBandSmellsTerrific</em>
              </span>
            </LinkExternalButton>
            <LinkExternalButton href="https://instagram.com/geeyourbandsmellsterrific" title="GYBST Instagram">
              <span className="flex flex-row text-center align-middle items-center justify-center gap-x-4 gap-y-2">
                <Image src={SiteURL + "/instagram.svg"} alt="Instagram" width={32} height={32} />
                <span className="max-[434px]:text-lg">Instagram</span>
              </span>
              <span className="mt-2 flex text-center align-middle items-center justify-center">
                <em className="font-normal text-sm">@GeeYourBandSmellsTerrific</em>
              </span>
            </LinkExternalButton>
            <LinkInternalButton href="#skinny" title="Learn more about GYBST">
              <span className="flex flex-row max-sm:flex-col text-center align-middle items-center justify-center gap-x-4 gap-y-2">
                Learn more about GYBST
              </span>
            </LinkInternalButton>
          </div>
        </div>
      </main >

      <PageFooter />
    </div >
  )
}

export default LinksPage
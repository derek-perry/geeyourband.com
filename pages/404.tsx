import type { NextPage } from 'next'
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkInternalButton from "../components/Links/LinkInternalButton"

const error404Page: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white justify-center">
      <SiteHead title="Error 404: Content Not Found" description="Gee, Your Band Smells Terrific is Cincinnati, Ohio’s premier 1970s showcase & dance band playing super hits of the 70s!" url="404" />

      <main className="pt-9 px-9 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-red-600">Error 404: Content Not Found</h1>

        <p className="my-4 text-2xl">
          The page/content you are looking for has moved, is no longer available, has been archived, or was not valid.
        </p>

        <p className="my-4 text-2xl">
          <LinkInternalButton href="" title="Return to Index Page" size="[200px]">Go Home</LinkInternalButton>
        </p>
      </main>

      <PageFooter />
    </div>
  )
}

export default error404Page
import type { NextPage } from 'next'
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkInternal from "../components/Links/LinkInternal"

const error404Page: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white justify-center py-2">
      <SiteHead title="Error 404: Content Not Found" description="Gee, Your Band Smells Terrific is Cincinnati, Ohio’s premier 1970’s showcase & dance band playing super hits of the 70’s!" url="404" />

      <main className="w-full flex flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="pt-9 w-full flex flex-row items-center justify-center text-center">
            <h1 className="text-6xl font-bold text-red-600">Error 404: Content Not Found</h1>
        </div>

        <p className="my-4 text-2xl">
          The page/content you are looking for has moved, is no longer available, has been archived, or was not valid.
        </p>

        <p className="my-4 text-2xl">
          <LinkInternal href="" title="Return to Index Page">Go Home</LinkInternal>
        </p>
      </main>

      <PageFooter />
    </div>
  )
}

export default error404Page
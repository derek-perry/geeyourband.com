import type { NextPage } from 'next'
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkInternal from "../components/Links/LinkInternal"

const error500Page: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white justify-center py-2">
      <SiteHead title="Error 500: Internal Server Error" description="Gee, Your Band Smells Terrific is Cincinnati, Ohio’s premier 1970’s showcase & dance band playing super hits of the 70’s!" url="500" />

      <main className="w-full flex flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="pt-9 w-full flex flex-row items-center justify-center text-center">
            <h1 className="text-6xl font-bold text-red-600">Error 500: Internal Server Error</h1>
        </div>

        <p className="my-4 text-2xl">
          The server encountered an internal error or misconfiguration and was unable to complete your request.
        </p>

        <p className="my-4 text-2xl">
          <LinkInternal href={process.env.NEXT_PUBLIC_SITE_URL + '/' || '/'} title="Return to Index Page">Go Home</LinkInternal>
        </p>
      </main>

      <PageFooter />
    </div>
  )
}

export default error500Page
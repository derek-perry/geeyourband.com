import type { NextPage } from 'next'
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkExternal from "../components/Links/LinkExternal"

const homePage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white justify-center py-2">
      <SiteHead title="Gee, Your Band Smells Terrific" description="Gee, Your Band Smells Terrific is Cincinnati, Ohio’s premier 1970’s showcase & dance band playing super hits of the 70’s!" url="" />

      <main className="w-full flex flex-1 flex-col items-center justify-center px-20 text-center">
      <div className="pt-9 w-full flex flex-row items-center justify-center text-center">
          <h1 className="text-6xl font-bold">Gee, Your Band Smells Terrific</h1>
      </div>

      <p className="my-4 text-2xl">
        Cincinnati, Ohio’s premier 1970’s showcase & dance band playing super hits of the 70’s!
      </p>

      <div className="w-full flex flex-row items-center justify-center text-center">
        <p className="mt-3 pr-2 text-2xl">Visit Us on </p>
        <LinkExternal href="https://facebook.com/geeyourbandsmellsterrific" title="GYBST Facebook"><p className="mt-3 text-2xl">Facebook</p></LinkExternal>
      </div>

      <div className="w-full flex flex-row items-center justify-center text-center">
        <p className="mt-3 pr-2 text-2xl">Visit Us on </p>
        <LinkExternal href="https://instagram.com/geeyourbandsmellsterrific" title="GYBST Instagram"><p className="mt-3 text-2xl">Instagram</p></LinkExternal>
      </div>
      </main>

      <PageFooter />
    </div>
  )
}

export default homePage
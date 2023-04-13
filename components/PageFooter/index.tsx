import Image from 'next/image'
import LinkInternal from "../Links/LinkInternal"

const PageFooter = (): JSX.Element => {
  let currentYear: number=new Date().getFullYear();

  return (
      <footer className="mt-9 w-full flex flex-col items-center justify-center border-t">
        <div
          className="flex items-center justify-center mt-[40px] mb-[20px]"
        >
          <p className="pr-2">© {currentYear} </p><LinkInternal href="" title="GYBST" className="no-underline"><p>GYBST</p></LinkInternal><p className="pr-2 pl-2"> - </p><LinkInternal href="privacy" title="GYBST Privacy Policy" className="no-underline"><p>Privacy Policy</p></LinkInternal>
        </div>
      </footer>
  )
}

export default PageFooter
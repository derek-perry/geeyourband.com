import LinkInternal from "../Links/LinkInternal"

const PageFooter = (): JSX.Element => {
  let currentYear: number = new Date().getFullYear();

  return (
    <footer className="mt-9 py-[40px] w-full flex flex-row flex-wrap items-center justify-center border-t-[20px] border-fuchsia-800">
      <LinkInternal href="" title="GYBST" className="no-underline">
        <p>© {currentYear} GYBST</p>
      </LinkInternal>
      <p className="pr-2 pl-2"> - </p>
      <LinkInternal href="privacy" title="GYBST Privacy Policy" className="no-underline">
        <p>Privacy Policy</p>
      </LinkInternal>
    </footer>
  )
}

export default PageFooter
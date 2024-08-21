import { FC } from "react"
import Link from "next/link"
const SiteURL = process.env.NEXT_PUBLIC_SITE_URL || "."

interface ILinkInternalButtonProps {
  href: string;
  title: string;
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
}

const LinkInternalButton: FC<ILinkInternalButtonProps> = ({
  href,
  title,
  children,
  className
}): JSX.Element => {
  return (
    <Link href={SiteURL + "/" + href} title={title} className={"no-underline rounded bg-fuchsia-800 active:bg-fuchsia-900 focus:bg-fuchsia-900 hover:bg-fuchsia-600 my-4 py-4 px-9 text-center " + className}>
      <p className="flex text-2xl"><strong>{children}</strong></p>
    </Link>
  )
}

export default LinkInternalButton
import { FC } from "react"
import Link from "next/link"

interface ILinkExternalButtonProps {
  href: string;
  title: string;
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
}

const LinkExternalButton: FC<ILinkExternalButtonProps> = ({
  href,
  title,
  children,
  className
}): JSX.Element => {
  return (
    <Link href={href} title={title} target="_blank" rel="noopener noreferrer" className={"no-underline rounded-full bg-fuchsia-800 active:bg-fuchsia-900 focus:bg-fuchsia-900 hover:bg-fuchsia-600 my-4 py-4 px-9 text-center " + className}>
      <p className="flex text-2xl"><strong>{children}</strong></p>
    </Link>
  )
}

export default LinkExternalButton
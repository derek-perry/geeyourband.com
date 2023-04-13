import { FC } from 'react'
import Link from 'next/link'

interface ILinkInternalButtonProps {
  href: string;
  title: string;
  size: string;
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
}

const LinkInternalButton: FC<ILinkInternalButtonProps> = ({
  href,
  title,
  size,
  children,
  className
}): JSX.Element => {
  return (
    <Link href={process.env.NEXT_PUBLIC_SITE_URL + '/' + href || './' + href} title={title} className={"no-underline rounded bg-fuchsia-800 hover:bg-sky-600 my-4 py-4 px-9 text-center " + className}>
        <p className={"max-w-" + size + " text-2xl"}><strong>{children}</strong></p>
    </Link>
  )
}

export default LinkInternalButton
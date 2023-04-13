import { FC } from 'react'
import Head from 'next/head'

interface ISiteHeadProps {
  title: string;
  description: string;
  url: string;
}

const SiteHead: FC<ISiteHeadProps> = ({
  title,
  description,
  url
}): JSX.Element => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="robots" content="max-snippet:-1,max-image-preview:standard,max-video-preview:-1" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <title>{title}</title>
      <meta property="og:title" key="title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL + '/' + url || 'https://geeyourband.com'} />
      <meta property="og:site_name" content="Gee, Your Band Smells Terrific" />   
      <meta property="og:image" content={process.env.NEXT_PUBLIC_SITE_URL + '/banner.png' || 'https://geeyourband.com/banner.png'} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:image:alt" content="Banner for GeeYourBand.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@_derekperry" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={process.env.NEXT_PUBLIC_SITE_URL + '/banner.png' || 'https://geeyourband.com/banner.png'} />
      <meta name="twitter:image:width" content="1920" />
      <meta name="twitter:image:height" content="1080" />
      <meta name="twitter:image:alt" content="Banner for GeeYourBand.com" />
      <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://geeyourband.com'} />

      <link rel="icon" href={process.env.NEXT_PUBLIC_SITE_URL + '/favicon.ico' || 'https://geeyourband.com/favicon.ico'} />
      <link rel="apple-touch-icon" sizes="180x180" href={process.env.NEXT_PUBLIC_SITE_URL + '/apple-touch-icon.png' || 'https://geeyourband.com/apple-touch-icon.png'} />
      <link rel="icon" type="image/png" sizes="32x32" href={process.env.NEXT_PUBLIC_SITE_URL + '/favicon-32x32.png' || 'https://geeyourband.com/favicon-32x32.png'} />
      <link rel="icon" type="image/png" sizes="16x16" href={process.env.NEXT_PUBLIC_SITE_URL + '/favicon-16x16.png' || 'https://geeyourband.com/favicon-16x16.png'} />
      <link rel="manifest" href={process.env.NEXT_PUBLIC_SITE_URL + '/manifest.webmanifest' || 'https://geeyourband.com/manifest.webmanifest'} />
      <link rel="mask-icon" href={process.env.NEXT_PUBLIC_SITE_URL + '/safari-pinned-tab.svg' || 'https://geeyourband.com/safari-pinned-tab.svg'} color="#90278e" />
      <meta name="apple-mobile-web-app-title" content="GYBST" />
      <meta name="application-name" content="GYBST" />
      <meta name="msapplication-TileColor" content="#9f00a7" />
      <meta name="theme-color" content="#000000" />
    </Head>
  )
}

export default SiteHead
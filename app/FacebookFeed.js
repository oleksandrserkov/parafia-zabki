'use client'

import Script from 'next/script'
import { useEffect } from 'react'

const PAGE_URL =
  'https://www.facebook.com/people/Parafia-greckokatolicka-pw-narodzenia-NMP-w-Z%C4%85bkach/61556733593364/'

export default function FacebookFeed() {
  useEffect(() => {
    if (window.FB) window.FB.XFBML.parse()
  }, [])

  return (
    <>
      <div id="fb-root" />
      <Script
        src="https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v19.0"
        strategy="lazyOnload"
        crossOrigin="anonymous"
        onLoad={() => {
          if (window.FB) window.FB.XFBML.parse()
        }}
      />
      <div
        className="fb-page"
        data-href={PAGE_URL}
        data-tabs="timeline"
        data-width="720"
        data-height="600"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="false"
      />
    </>
  )
}

import React from 'react'
import Head from 'next/head'

function Head_({title} : {title: string}) {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Head_
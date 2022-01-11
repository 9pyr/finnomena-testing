import React from 'react'
import 'styles/globals.scss'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <nav>
        <div className={'title'}>Finnomena Test</div>
      </nav>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp

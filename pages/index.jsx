import React from 'react';
import Head from 'next/head';
import Link from '../components/Link';

const Index = () => {
  return (
      <div className={'w-screen h-screen'}>
          <Head>
              <title>Luca Joos</title>
              <link rel='icon' type='image/png' href='./assets/icon.png' sizes={'any'}/>
              <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          </Head>
          <div className={'w-screen bg-black h-screen'}>
              <Link href={'https://snapshot.lucajoos.de/privacy.html'} className={'fixed left-5 bottom-5 text-xs text-[#2A2A2A]'}>Datenschutzerklärung & Impressum</Link>

              <div className={'flex flex-col items-center justify-center gap-10 w-screen h-screen'}>
                  <img src={'/../assets/01/logo.png'} alt='Luca Joos' className={'z-10 w-1/3 max-w-[800px] max-h-[600px] min-w-[250px] -translate-y-2'}/>
              </div>

              <div className={'opacity-5 absolute top-0 left-0 w-screen bg-repeat bg-black h-screen pointer-events-none'} style={{ backgroundImage: "url('./assets/01/perlin.png')" }}></div>
          </div>

      </div>
  )
}

export default Index;
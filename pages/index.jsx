import React from 'react';
import Head from 'next/head';
import Link from '../components/Link';
import {AtSign, GitHub, Music} from 'react-feather';
import Image from 'next/image';

const Index = () => {
  return (
      <div className={'w-screen h-screen'}>
          <Head>
              <title>Luca Joos</title>
              <link rel='icon' type='image/png' href='./assets/icon.png' sizes={'any'}/>
              <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          </Head>
          <div className={'w-screen bg-black h-screen'}>
              <div className={'flex flex-col items-center justify-center w-screen h-screen'}>
                  <img src={'./assets/01/logo.png'} alt='Luca Joos' className={'z-10 w-1/3 max-w-[800px] max-h-[600px] min-w-[250px]' }></img>
                  <div className={'flex gap-5'}>
                      <Link href={'https://github.com/lucajoos'}>
                          <GitHub />
                      </Link>

                      <Link href={'https://li.sten.to/Mn6MT47'}>
                          <Music />
                      </Link>

                      <Link href={'mailto:hello@lucajoos.de'}>
                          <AtSign />
                      </Link>
                  </div>
              </div>

              <Link href={'https://snapshot.lucajoos.de/privacy.html'} className={'fixed left-5 bottom-5 text-xs text-[#2A2A2A]'}>Datenschutzerklärung & Impressum</Link>

              <div className={'opacity-5 absolute top-0 left-0 w-screen bg-repeat bg-black h-screen pointer-events-none'} style={{ backgroundImage: "url('./assets/01/perlin.png')" }}></div>
          </div>

      </div>
  )
}

export default Index;
import React from 'react';
import Head from 'next/head';
import { AtSign, GitHub, Instagram, Music } from 'react-feather';
import Link from '../components/Link';

const Index = () => {
  return (
      <div className={'w-screen h-screen'}>
          <Head>
              <title>Luca Joos</title>
              <link rel='icon' type='image/png' href='./assets/icon.png' />
              <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          </Head>
          <div className={'w-screen h-screen flex flex-col items-center justify-center gap-10'}>
              <img src={'./assets/frame.png'} alt='' className={'w-1/3 max-w-[800px] max-h-[600px] translate-x-[15%] min-w-[250px]'}/>
              <div className={'flex gap-5'}>
                  <Link href={'https://github.com/lucajoos'}>
                      <GitHub />
                  </Link>

                  <Link href={'https://li.sten.to/Mn6MT47'}>
                      <Music />
                  </Link>

                  <Link href={'https://www.instagram.com/luca.joos/'}>
                      <Instagram />
                  </Link>

                  <Link href={'mailto:hello@lucajoos.de'}>
                      <AtSign />
                  </Link>
              </div>
          </div>

      </div>
  )
}

export default Index;
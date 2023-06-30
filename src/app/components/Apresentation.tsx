import React from 'react';
import Image from 'next/image';

export default function Apresentation() {
  return (
    <section className='flex flex-col items-center space-y-2 bg-blue-50 py-10 xl:py-24'>
      <span className='rounded-xl rounded-bl-none border-2 border-blue-500 px-4 py-1 text-xs font-bold text-blue-500'>
          WEBINARS EXCLUSIVOS
      </span>
      <div className='flex flex-col items-center space-y-2'>
        <h1 className='text-3xl'>
            Menos Conversinha, 
        </h1>
        <div className='relative'>
          <h1 className='text-4xl font-bold text-blue-500 xl:text-6xl'>
              Mais Conversão
          </h1>
          <Image className='absolute -right-4 -top-1 w-8 xl:-right-3 xl:top-0' src="/images/asset-header.png" alt="semi logo" width={100} height={100}/>
        </div>
        <hr/>
        <p className='px-3 text-xs font-semibold'>
          Conheça as estratégias que <span className='font-bold'>mudaram o jogo</span> e como aplicá-las no seu negócio
        </p>
      </div>
    </section>
  );
}

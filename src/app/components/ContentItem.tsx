import React from 'react';
import Image from 'next/image';

export default function ContentItem({ source, description }: {source: string, description: string}) {
  return (
    <div className='rounded-xl shadow-xl hover:cursor-pointer'>
      <div className={'relative w-full'}>
        <div className='absolute flex h-full w-full items-center justify-center rounded-t-xl bg-blue-500/40 align-super opacity-0 duration-100 ease-linear hover:opacity-100'>
          <Image className='w-3/12 shadow-2xl' quality={100} src="/images/playBtn.png" alt="Cor sólida" width={100} height={100}/>
        </div>
        <Image className='w-full' quality={100} src={source} alt="curso" width={900} height={900}/>
      </div>
      <div className='px-5 pb-4'>
        <p className='font-semibold'>{description}</p>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';

export default function ContentItem(
  { title, description, source, imgSource } : { title:string, source: string, description: string, imgSource: string }) {
  const [ showModal, setShowModal ] = useState(false);
  return (
    <>
      {
        showModal && <Modal title={title} source={source} description={description} setShowModal={setShowModal}/>
      }
      <button type="button" onClick={() => setShowModal(!showModal)} className='rounded-xl shadow-xl hover:cursor-pointer'>
        <div className={'relative w-full'}>
          <div className='absolute flex h-full w-full items-center justify-center rounded-t-xl bg-blue-500/40 align-super opacity-0 duration-100 ease-linear hover:opacity-100'>
            <Image className='w-3/12 shadow-2xl' quality={100} src="/images/playBtn.png" alt="Cor sólida" width={100} height={100}/>
          </div>
          <Image className='h-full w-full rounded-t-xl' quality={100} src={imgSource} alt="curso" width={900} height={900}/>
        </div>
        <div className='h-2/6 px-5 pb-4'>
          <p className='text-left text-lg font-bold'>{title}</p>
        </div>
      </button>
    </>
  );
}

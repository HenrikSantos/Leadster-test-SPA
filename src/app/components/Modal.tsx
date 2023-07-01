import React, { Dispatch, SetStateAction } from 'react';

export default function Modal(
  { title, description, setShowModal, source } : {title:string, source: string, setShowModal: Dispatch<SetStateAction<boolean>>, description: string }) {
  return (
    <div className='fixed-element z-10 h-screen w-screen bg-blue-300/70'>
      <div className='fixed-element w-11/12 rounded-xl border-t-4 border-t-blue-500 bg-white lg:w-[36rem]'>
        <button type='button' onClick={() =>setShowModal(false)} className='fixed right-4 top-2'>X</button>
        <h1 className='mx-auto w-6/12 pt-8 text-justify text-xl font-semibold tracking-tighter'>
          <span className='font-bold text-blue-500'>Webinar:</span> {title}
        </h1>
        
        <iframe className='w-full py-3' height="350" src={source} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div className='grid grid-cols-1 gap-3 px-8'>
          <h3 className='font-bold'>Descrição</h3>
          <hr />
          <p>{description}</p>
        </div>
        <div className='px-8 py-4'>
          <h1>Downloads</h1>
          <hr />
          <div className='flex flex-wrap gap-3 py-3'>
            <button className='rounded-md bg-green-200 px-4 py-1' type="button">Spreadsheet.xls</button>
            <button className='rounded-md bg-blue-200 px-4 py-1' type="button">Document.doc</button>
            <button className='rounded-md bg-yellow-200 px-4 py-1' type="button">Presentation.ppt</button>
          </div>
        </div>
      </div>
    </div>
  );
}

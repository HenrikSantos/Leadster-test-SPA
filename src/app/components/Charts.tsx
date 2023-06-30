import React from 'react';
import Image from 'next/image';

export default function Charts() {
  return (
    <section className='flex flex-col items-center justify-center bg-blue-50 py-3 lg:flex-row lg:px-20 lg:py-16 2xl:px-52'>
      <div className='w-10/12 lg:w-5/12' >
        <Image src="/images/comparativo_img_CTA.png" alt="gráfico comparativo com outras soluções" width={900} height={900}/>
      </div>
      <div className='w-10/12 lg:w-5/12 lg:px-10'>
        <div className=''>
          <h1 className='text-4xl tracking-tighter'>Pronto para triplicar sua</h1>
          <h1 className='text-4xl font-bold tracking-tighter'>Geração de Leads?</h1>
          <p className='py-4 font-medium'>Criação e ativação em <span className='font-semibold'>4 minutos</span>.</p>
          <hr className='mb-4' />
        </div>
        <div className='flex items-center gap-3'>
          <button type="button" className='w-auto rounded-3xl bg-blue-500 px-5 py-3 text-white '>VER DEMONSTRAÇÃO</button>
          <div className='w-3/12'>
            <Image className='w-full' src="/images/selo_RD.png" alt="selo RD" width={900} height={900}/>
          </div>
        </div>
        <div className='my-3'>
          <span className='text-sm'>
            Não é necessário Cartão de Crédito | 
            <Image className='inline-block' src="/images/rating.webp" alt="nota de avaliação" width={100} height={100}/> 
            <span className='font-bold'>4.9</span>/5 média de satisfação
          </span>
        </div>
      </div>
    </section>
  );
}

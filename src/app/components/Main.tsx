import React from 'react';
import Image from 'next/image';
import Content from './Content';

export default function Main() {
  return (
    <main>
      <section className='flex flex-col items-center space-y-2 bg-blue-50 py-10 xl:py-24'>
        <span className='rounded-xl rounded-bl-none border-2 border-blue-500 px-4 py-1 text-xs font-bold text-blue-500'>
          WEBINARS EXCLUSIVOS
        </span>
        <div className='flex flex-col items-center space-y-2'>
          <h1 className='text-2xl'>
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
            Conheça as estratégias que mudaram o jogo e como aplicá-las no seu negócio
          </p>
        </div>
      </section>
      <Content />
      <section>
        <Image src="/images/comparativo_img_CTA.png" alt="gráfico comparativo com outras soluções" width={100} height={100}/>
        <div>
          <h1>Pronto para triplicar sua</h1>
          <h1>Geração de Leads?</h1>
          <h2>Criação e ativação em 4 minutos.</h2>
          <hr />
          <div>
            <button type="button">VER DEMONSTRAÇÃO</button>
            <Image src="/images/selo_RD.png" alt="selo RD" width={100} height={100}/>
          </div>
          <span>
              Não é necessário Cartão de Crédito | 
            <Image src="/images/rating.webp" alt="nota de avaliação" width={100} height={100}/> 
              4.9/5 média de satisfação
          </span>
        </div>
      </section>
    </main>
  );
}

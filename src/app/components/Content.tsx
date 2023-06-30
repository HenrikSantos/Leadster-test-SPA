'use client';
import React, { useState, ChangeEvent, MouseEvent } from 'react';
import ContentItem from './ContentItem';
import data from '../data.json';

const ITEMSPERPAGE = 9;

export default function Content() {
  const [ selectedFilter, setSelectedFilter ] = useState('');
  const [ selectedPage, setSelectedPage ] = useState(1);

  const handleFilterOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPage(1);
    setSelectedFilter(() => event.target.value);
  };

  const handleFilterPage = (event: MouseEvent<HTMLButtonElement>) => {
    const buttonText = event.currentTarget?.innerText;
    if (buttonText) {
      setSelectedPage(() => +buttonText);
    }
  };

  return (
    <section className='py-3 lg:px-20 xl:py-20 2xl:px-96'>
      <div className='grid grid-cols-1 gap-3 p-3 lg:flex lg:justify-between'>
        <nav className='grid grid-cols-1 gap-1 lg:flex'>
          <input
            type="radio"
            name="category"
            id="agencias"
            value="agência"
            checked={selectedFilter === 'agência'}
            onChange={(event) => handleFilterOptionChange(event)}
          />
          <label className="filterBtn" htmlFor="agencias">Agências</label>

          <input
            type="radio"
            name="category"
            id="chatbot"
            value="chatbot"
            checked={selectedFilter === 'chatbot'}
            onChange={(event) => handleFilterOptionChange(event)}
          />
          <label className="filterBtn" htmlFor="chatbot">Chatbot</label>

          <input
            type="radio"
            name="category"
            id="marketingDigital"
            value="marketing"
            checked={selectedFilter === 'marketing'}
            onChange={(event) => handleFilterOptionChange(event)}
          />
          <label className="filterBtn" htmlFor="marketingDigital">Marketing Digital</label>

          <input
            type="radio"
            name="category"
            id="geracaoDeLeads"
            value="leads"
            checked={selectedFilter === 'leads'}
            onChange={(event) => handleFilterOptionChange(event)}
          />
          <label className="filterBtn" htmlFor="geracaoDeLeads">Geração de Leads</label>

          <input
            type="radio"
            name="category"
            id="midiaPaga"
            value="paga"
            checked={selectedFilter === 'paga'}
            onChange={handleFilterOptionChange}
          />
          <label className="filterBtn" htmlFor="midiaPaga">Mídia Paga</label>
        </nav>
        <div className='flex items-baseline justify-between gap-4'>
          <span className='mx-1 text-sm font-semibold xl:text-base'>Ordenar por</span>
          <select name="orderBy" id="orderBy" className='rounded-xl border border-black px-2 py-1 text-xs hover:border-blue-500 hover:text-blue-500 xl:text-base'>
            <option value="publishDate">Data de Publicação</option>
          </select>
        </div>
      </div>
      <hr />
      <div className='m-4 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:py-10'>
        {
          data.videos.filter(({ title }) => title
            .toLowerCase()
            .includes(selectedFilter))
            .slice((selectedPage * ITEMSPERPAGE) - ITEMSPERPAGE, selectedPage * ITEMSPERPAGE  )
            .map(({
              title,
              imgSource,
              source,
              description,
            }) => (
              <ContentItem
                key={title}
                title={title}
                imgSource={imgSource}
                source={source}
                description={description}
              />            
            ))
        }
      </div>
      <hr />
      <div className='flex justify-center gap-3 p-3'>
        {
          data.videos.filter(({ title }) => title
            .toLowerCase()
            .includes(selectedFilter)).length ? (
              <>
                <p>Página</p>
                {
                  Array.from(Array(+Math.ceil((data.videos.filter(({ title }) => title
                    .toLowerCase()
                    .includes(selectedFilter))
                    .length/ITEMSPERPAGE))), (x, index) => index + 1)
                    .map((element) => (
                      <button
                        key={element}
                        type='button'
                        id={String(element)}
                        value={String(element)}
                        onClick={(e) => handleFilterPage(e)}
                        className={`
                          ${selectedPage === element ? 'border-blue-500 text-blue-500 ' : ''} 
                          rounded-md border px-2 py-1 font-medium hover:cursor-pointer
                        `}
                      >
                        {element}
                      </button>
                    ))
                }
              </>
            ):(
              <h1>Nada Encontrado!</h1>
            )
        }
      </div>
    </section>
  );
}

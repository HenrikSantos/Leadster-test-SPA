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
    setSelectedFilter(event.target.value);
  };

  const handleFilterPage = (event: MouseEvent<HTMLButtonElement>) => {
    const buttonText = event.currentTarget?.innerText;
    if (buttonText) {
      setSelectedPage(+buttonText);
    }
  };

  const filteredVideos = data.videos.filter(({ title }) =>
    title.toLowerCase().includes(selectedFilter)
  );

  const paginatedVideos = filteredVideos.slice(
    (selectedPage * ITEMSPERPAGE) - ITEMSPERPAGE,
    selectedPage * ITEMSPERPAGE
  );

  return (
    <section className='py-3 lg:px-20 xl:py-20 2xl:px-96'>
      <div className='grid grid-cols-1 gap-3 p-3 lg:flex lg:justify-between'>
        <nav className='grid grid-cols-1 gap-1 lg:flex'>
          {[ 'agência', 'chatbot', 'marketing', 'leads', 'paga' ].map(category => (
            <React.Fragment key={category}>
              <input
                type="radio"
                name="category"
                id={category}
                value={category}
                checked={selectedFilter === category}
                onChange={handleFilterOptionChange}
              />
              <label className="filterBtn" htmlFor={category}>{category}</label>
            </React.Fragment>
          ))}
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
        {paginatedVideos.map(({ title, imgSource, source, description }) => (
          <ContentItem
            key={title}
            title={title}
            imgSource={imgSource}
            source={source}
            description={description}
          />
        ))}
      </div>
      <hr />
      <div className='flex justify-center gap-3 p-3'>
        {filteredVideos.length ? (
          <>
            <p>Página</p>
            {Array.from(Array(Math.ceil(filteredVideos.length / ITEMSPERPAGE)), (x, index) => index + 1).map(element => (
              <button
                key={element}
                type='button'
                id={String(element)}
                value={String(element)}
                onClick={handleFilterPage}
                className={`
                  ${selectedPage === element ? 'border-blue-500 text-blue-500 ' : ''} 
                  rounded-md border px-2 py-1 font-medium hover:cursor-pointer
                `}
              >
                {element}
              </button>
            ))}
          </>
        ) : (
          <h1>Nada Encontrado</h1>
        )}
      </div>
    </section>
  );
}

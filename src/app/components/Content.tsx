'use client';
import React, { useState, ChangeEvent, MouseEvent } from 'react';
import ContentItem from './ContentItem';

export default function Content() {
  const [ selectedFilter, setSelectedFilter ] = useState('');
  const [ selectedPage, setSelectedPage ] = useState('');

  const handleFilterOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedFilter(() => event.target.value);
  };

  const handleFilterPage = (event: MouseEvent<HTMLButtonElement>) => {
    const buttonText = event.currentTarget?.innerText;
    if (buttonText) {
      setSelectedPage(() => buttonText);
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
            value="agencias"
            checked={selectedFilter === 'agencias'}
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
            value="marketingDigital"
            checked={selectedFilter === 'marketingDigital'}
            onChange={(event) => handleFilterOptionChange(event)}
          />
          <label className="filterBtn" htmlFor="marketingDigital">Marketing Digital</label>

          <input
            type="radio"
            name="category"
            id="geracaoDeLeads"
            value="geracaoDeLeads"
            checked={selectedFilter === 'geracaoDeLeads'}
            onChange={(event) => handleFilterOptionChange(event)}
          />
          <label className="filterBtn" htmlFor="geracaoDeLeads">Geração de Leads</label>

          <input
            type="radio"
            name="category"
            id="midiaPaga"
            value="midiaPaga"
            checked={selectedFilter === 'midiaPaga'}
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
        {Array.from(Array(9), (x, index) => index + 1).map((element) => (
          <ContentItem
            key={element}
            title='Como aumentar sua Geração de Leads feat. Traktor'
            imgSource='/images/thumbnail.png'
            source='https://www.youtube.com/embed/a89Htfx0YKo'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magni ut odit veniam eligendi animi et quaerat, eius, molestias aspernatur aliquid delectus esse voluptatibus, cum in quis. Minus, ullam optio?' 
          />            
        ))}
      </div>
      <hr />
      <div className='flex justify-center gap-3 p-3'>
        <p>Página</p>
        {Array.from(Array(4), (x, index) => index + 1).map((element) => (
          <button
            key={element}
            type='button'
            id={String(element)}
            value={String(element)}
            onClick={(e) => handleFilterPage(e)}
            className={`
            ${selectedPage === String(element) ? 'border-blue-500 text-blue-500 ' : ''} 
            rounded-md border px-2 py-1 font-medium hover:cursor-pointer
            `}
          >
            {element}
          </button>
        ))}
      </div>
    </section>
  );
}

'use client';
import React, { useState, ChangeEvent } from 'react';
import ContentItem from './ContentItem';

export default function Content() {
  const [ selectedOption, setSelectedOption ] = useState('');

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(() => event.target.value);
  };

  return (
    <section className='py-3 lg:px-20 2xl:px-96'>
      <div className='grid grid-cols-1 gap-3 p-3 lg:flex lg:justify-between '>
        <nav className='grid grid-cols-1 gap-1 lg:flex'>
          <input
            type="radio"
            name="category"
            id="agencias"
            value="agencias"
            checked={selectedOption === 'agencias'}
            onChange={(event) => handleOptionChange(event)}
          />
          <label className="filterBtn" htmlFor="agencias">Agências</label>

          <input
            type="radio"
            name="category"
            id="chatbot"
            value="chatbot"
            checked={selectedOption === 'chatbot'}
            onChange={(event) => handleOptionChange(event)}
          />
          <label className="filterBtn" htmlFor="chatbot">Chatbot</label>

          <input
            type="radio"
            name="category"
            id="marketingDigital"
            value="marketingDigital"
            checked={selectedOption === 'marketingDigital'}
            onChange={(event) => handleOptionChange(event)}
          />
          <label className="filterBtn" htmlFor="marketingDigital">Marketing Digital</label>

          <input
            type="radio"
            name="category"
            id="geracaoDeLeads"
            value="geracaoDeLeads"
            checked={selectedOption === 'geracaoDeLeads'}
            onChange={(event) => handleOptionChange(event)}
          />
          <label className="filterBtn" htmlFor="geracaoDeLeads">Geração de Leads</label>

          <input
            type="radio"
            name="category"
            id="midiaPaga"
            value="midiaPaga"
            checked={selectedOption === 'midiaPaga'}
            onChange={handleOptionChange}
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
          <ContentItem key={element} source='/images/thumbnail.png' description='Como aumentar sua Geração de Leads feat. Traktor' />
        ))}
      </div>
      <hr />
      <div>
        <p>Página</p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </div>
    </section>
  );
}

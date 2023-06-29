import React from 'react';
import Image from 'next/image';

export default function Main() {
  return (
    <main>
      <section className='flex flex-col'>
        <h1>
            WEBINARS EXCLUSIVOS
        </h1>
        <h1>
            Menos Conversinha, <span>Mais Conversão</span>
          <Image src="/images/asset-header.png" alt="semi logo" width={100} height={100}/>
        </h1>
        <hr />
        <p>Conheça as estratégias que mudaram o jogo e como aplicá-las no seu negócio</p>
      </section>
      <section>
        <nav>
          <div>
            <button type="button">Agências</button>
            <button type="button">Chatbot</button>
            <button type="button">Marketing Digital</button>
            <button type="button">Geração de Leads</button>
            <button type="button">Mídia Paga</button>
          </div>
          <div>
            <span>Ordenar por</span>
            <select name="orderBy" id="orderBy">
              <option value="publishDate">Data de Publicação</option>
            </select>
          </div>
        </nav>
        <hr />
        <div>
          <Image src="/images/thumbnail.png" alt="curso" width={100} height={100}/>
          <p>Como aumentar sua Geração de Leads feat. Traktor</p>
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

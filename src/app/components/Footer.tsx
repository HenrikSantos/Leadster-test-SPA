import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <Image src="/images/logo.png" alt="logo" width={100} height={100}/>
      <p>Transformando visitantes em clientes.</p>
      <div>
        <div>
          <p>Links Principais</p>
          <Link href="">Home</Link>
          <Link href="">Ferramenta</Link>
          <Link href="">Preços</Link>
          <Link href="">Contato</Link>
        </div>
        <div>
          <p>Cases</p>
          <Link href="">Geração de Leads B2B</Link>
          <Link href="">Geração de Leads em Software</Link>
          <Link href="">Geração de Leads em Imobiliária</Link>
          <Link href="">Cases de Sucesso</Link>
        </div>
        <div>
          <p>Materiais</p>
          <Link href="">Blog</Link>
          <Link href="">Parceria com Agências</Link>
          <Link href="">Guia Definitivo do Marketing</Link>
          <Link href="">Materiais Gratuitos</Link>
        </div>
        <div>
          <p>Siga a Leadster</p>
          <div>
            <Link href="">
              <Image src="/images/linkedin.svg" alt="linkedin da Leadster" width={100} height={100}></Image>
            </Link>
            <Link href="">
              <Image src="/images/facebook.svg" alt="facebook da Leadster" width={100} height={100}></Image>
            </Link>
            <Link href="">
              <Image src="/images/instagram.svg" alt="instagram da Leadster" width={100} height={100}></Image>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

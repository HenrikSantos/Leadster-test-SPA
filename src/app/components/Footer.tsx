import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='grid grid-cols-1 gap-4 py-5 lg:px-32 xl:px-72'>
      <div className='mx-auto flex w-8/12 flex-col items-center justify-center'>
        <Image className='w-10/12 lg:w-3/12' src="/images/logo.png" alt="logo" width={900} height={900}/>
        <p className='text-sm lg:text-xs'>Transformando visitantes em clientes.</p>
      </div>
      <div className='grid grid-cols-1 gap-5 lg:grid-cols-4 lg:py-20'>
        <nav className='grid grid-cols-1 gap-6 px-4 font-medium text-zinc-400 lg:text-xs'>
          <p className='py-5 text-base text-black'>Links Principais</p>
          <Link className='footerLink' href="">Home</Link>
          <Link className='footerLink' href="">Ferramenta</Link>
          <Link className='footerLink' href="">Preços</Link>
          <Link className='footerLink' href="">Contato</Link>
        </nav>
        <nav className='grid grid-cols-1 gap-6 px-4 font-medium text-zinc-400 lg:text-xs'>
          <p className='py-5 text-base text-black'>Cases</p>
          <Link className='footerLink' href="">Geração de Leads B2B</Link>
          <Link className='footerLink' href="">Geração de Leads em Software</Link>
          <Link className='footerLink' href="">Geração de Leads em Imobiliária</Link>
          <Link className='footerLink' href="">Cases de Sucesso</Link>
        </nav>
        <nav className='grid grid-cols-1 gap-6 px-4 font-medium text-zinc-400 lg:text-xs'>
          <p className='py-5 text-base text-black'>Materiais</p>
          <Link className='footerLink' href="">Blog</Link>
          <Link className='footerLink' href="">Parceria com Agências</Link>
          <Link className='footerLink' href="">Guia Definitivo do Marketing</Link>
          <Link className='footerLink' href="">Materiais Gratuitos</Link>
        </nav>
        <div className='gap-6 px-4 font-medium text-zinc-400 lg:px-0'>
          <p className='py-5 text-base text-black'>Siga a Leadster</p>
          <nav className='flex gap-5 px-4 py-3'>
            <Link href="" className='footerLink w-1/12'>
              <Image src="/images/linkedin.svg" alt="linkedin da Leadster" width={100} height={100}></Image>
            </Link>
            <Link href="" className='footerLink w-1/12'>
              <Image src="/images/facebook.svg" alt="facebook da Leadster" width={100} height={100}></Image>
            </Link>
            <Link href="" className='footerLink w-1/12'>
              <Image src="/images/instagram.svg" alt="instagram da Leadster" width={100} height={100}></Image>
            </Link>
          </nav>
          <div className='flex flex-col gap-3'>
            <p className='text-sm font-light text-black'>E-mail: <span className='font-medium text-zinc-400'>contato@leadster.com.br</span></p>
            <p className='text-sm font-light text-black'>Telefone: <span className='font-medium text-zinc-400'>(42) 98828-9851</span></p>
          </div>
        </div>
      </div>
      <div className='px-4 text-sm lg:flex lg:justify-between lg:text-xs'>
        <p className='font-medium text-zinc-400'>Copywright © 2015 - 2022 Todos os direitos reservados | <span className='text-blue-500'>Leadster</span></p>
        <p className='font-medium text-zinc-400'>Rua José Loureiro, 464 - Centro - Curitiba - PR - CEP: 80010-000 | <a href="" className='hover:text-blue-500'>Termos de uso</a>
        </p>
      </div>
    </footer>
  );
}

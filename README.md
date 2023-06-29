# PT-BR

Desafio técnico para a vaga de frontend developer na [Leadster](https://leadster.com.br/), feito com Next.js e Tailwind.

## Iniciando o Projeto
- Instale as dependências:
```bash
npm install
```

- Inicie o projeto:

```bash
npm run dev
```

- Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.

<!-- ## Observações
-  -->
## Storyboard
1. Primeiro separei os assets disponibilizados no PowerPoint.
2. Comecei a configurar o projeto:
   - Instalei o Next.js na versão 13.
   - Configurei o eslint.
   - Adicionei o script `lint:fix` no package.json.
   - Instalei o plugin eslint para o Tailwind.
3. Comecei a colocar a "mão na massa" e separei o site em 3 seções: header, main e footer.
4. Estruturei o HTML das três seções em um único arquivo.
5. Criei um arquivo separado para cada seção.
6. Estilizei o Header.
7. Melhorei o Main criando o CSS e subdividi em outras seções:
    - Content: fiz a parte de filtros de conteúdo utilizando inputs do tipo radio. Por enquanto, clicar não muda nada além do CSS.
    - Content: criei um novo componente para renderizar cada item. Essa parte foi um pouco confusa, pois no PowerPoint apenas diz: "Para a listagem de vídeos, use um arquivo de configuração {JSON} para alterar as URLs dos vídeos que abrem nos modais." Seria bom disponibilizar esse arquivo JSON e imagens personalizadas, optei por deixar isso para depois.
    - Content: comecei a criar o modal

  
# EN

Technical challenge for frontend developer position in [Leadster](https://leadster.com.br/), made with Next.js e Tailwind.

## Getting Started

- Install dependencies
```bash
npm install
```
- Start the development server:

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
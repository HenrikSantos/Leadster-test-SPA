import React from 'react';
import Content from './Content';
import Charts from './Charts';
import Apresentation from './Apresentation';

export default function Main() {
  return (
    <main>
      <Apresentation />
      <Content />
      <Charts />
    </main>
  );
}

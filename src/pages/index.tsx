import React from 'react';

import Header from 'components/layout/header';
import Content from 'components/layout/content';

import GlobalStyle from 'styles/globalStyle';

const IndexPage: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <Header title={'L.E.T'} />

      <Content>
        <h1>Hello, World!!!</h1>
        <h2>This is message.</h2>
      </Content>
    </>
  );
};

export default IndexPage;

import React from 'react';
import { ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import BemVindo from './BemVindo';
import LoginCadastro from './LoginCadastro';

const { width } = Dimensions.get('window');

const Page = styled.View`
  width: ${width}px;
  justify-content: center;
  align-items: center;
`;

const TabsBemVindo = () => {
  const pages = [<BemVindo />, <LoginCadastro />];

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
    >
      {pages.map((page, index) => (
        <Page key={index}>
            {page}
        </Page>
      ))}
    </ScrollView>
  );
};

export default TabsBemVindo;
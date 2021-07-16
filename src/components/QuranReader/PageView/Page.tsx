import React, { useMemo } from 'react';
import styled from 'styled-components';
import Verse from '../../../../types/Verse';
import Line from './Line';
import groupLinesByVerses from './groupLinesByVerses';

type PageProps = {
  verses: Verse[];
  page: number;
};

const Page = ({ verses, page }: PageProps) => {
  const lines = useMemo(() => groupLinesByVerses(verses), [verses]);

  return (
    <StyledPage id={`page-${page}`}>
      {Object.keys(lines).map((key) => (
        <Line words={lines[key]} key={key} />
      ))}
    </StyledPage>
  );
};

const StyledPage = styled.div`
  margin: 0 auto;
`;

export default React.memo(Page);

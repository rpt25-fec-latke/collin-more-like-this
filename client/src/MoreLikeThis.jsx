import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Butter = styled.div`
color: red;
`;

const MoreLikeThis = ({ apiRoute }) => {
  const [response, setRes] = useState('');

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    fetch(apiRoute, { signal })
      .then((res) => res.json())
      .then(({ bacon }) => {
        setRes(bacon);
      })
      .catch((err) => console.log(err));

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Butter>{response}</Butter>
  );
};

export default MoreLikeThis;

import styled from 'styled-components';

export const Container = styled.div`
  height: 4.6rem;
  width: 100%;
  background: var(--dark-blue);

  display: flex;
  align-items: center;

  div.alignTitle {
    width: 100%;
    display: flex;
    justify-content: center;

    margin-right: -15.2rem;

    span {
      color: #fff;
      font-size: 1.2rem;
    }
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 1.6rem;
    border-radius: 0.25rem;
    height: 2.6rem;
    width: 14rem;
    margin-right: 1.2rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

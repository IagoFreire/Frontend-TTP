import styled from "styled-components";

export const Container = styled.div`
  div.content {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem;
    background: var(--white);

    display: flex;
    flex-direction: column;
    align-items: center;

    span.title {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`;

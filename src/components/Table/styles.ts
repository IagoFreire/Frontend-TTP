import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 2rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: #fff;
      font-weight: bold;
      padding: 1rem 1.2rem;
      text-align: center;
      line-height: 1.5rem;

      background: var(--blue-light);
    }

    td:first-child, th:first-child {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
    td:last-child, th:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }

    td:first-child {
      border-left: 1px solid var(--grey-light);
    }
    td:last-child {
      border-right: 1px solid var(--grey-light);
    }

    td {
      padding: 1rem 2rem;
      border-bottom: 1px solid var(--grey-light);
      border-top: 1px solid var(--grey-light);

      background: var(--white);
      color: var(--dark-blue);
      font-size: 0.9rem;
      text-align: center;
    }

    tr {
      cursor: pointer;
    }
  }
`;

import styled from 'styled-components';

export const DownloadButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.65rem 2rem;
  font-weight: 600;
  color: white;
  background-color: ${(props) => props.theme.accent};
  transition: background-color 0.5s, color 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.terciary};
    color: ${(props) => props.theme.accent};
  }
`;

export const DownloadButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
  flex-wrap: wrap;

  @media print {
    display: none;
  }
`;

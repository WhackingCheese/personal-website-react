import styled from 'styled-components';

export const DownloadButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.75em;
  font-weight: 600;
  color: #FFFFFF;
  background-color: ${(props) => props.theme.accent};
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

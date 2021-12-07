import { WebsiteContainer, InnerContainer } from "./PageContainer.styles";

function PageContainer(props) {
  return (
    <WebsiteContainer>
      <InnerContainer>
        {props.children}
      </InnerContainer>
    </WebsiteContainer>
  );
}

export default PageContainer;

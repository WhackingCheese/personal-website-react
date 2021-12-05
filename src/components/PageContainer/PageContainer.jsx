import { WebsiteContainer } from "./PageContainer.styles";

function PageContainer(props) {
  return (
    <WebsiteContainer>
      {props.children}
    </WebsiteContainer>
  );
}

export default PageContainer;

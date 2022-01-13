import {
  WebsiteContainer,
  InnerContainer,
  PageSizeConstraint,
  PageSizeConstraintInner
} from "./PageContainer.styles";


function PageContainer(props) {
  return (
    <WebsiteContainer>
      <InnerContainer>
        {props.children}
      </InnerContainer>
    </WebsiteContainer>
  );
}

function PageContainerInner(props) {
  return (
    <PageSizeConstraint>
      <PageSizeConstraintInner>
        {props.children}
      </PageSizeConstraintInner>
    </PageSizeConstraint>
  )
}

export { PageContainer, PageContainerInner };

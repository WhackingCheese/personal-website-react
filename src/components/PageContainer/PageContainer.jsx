import { useLocation } from "react-router";
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

  const path = useLocation();

  if(path.pathname !== '/') {
    return (
      <PageSizeConstraint>
        <PageSizeConstraintInner>
          {props.children}
        </PageSizeConstraintInner>
      </PageSizeConstraint>
    )
  }

  return(
    <>
      {props.children}
    </>
  );
}

export { PageContainer, PageContainerInner };

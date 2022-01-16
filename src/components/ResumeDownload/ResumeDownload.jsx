import { useContext } from "react";
import { DataContext, LanguageContext } from "..";
import { DownloadButton, DownloadButtonContainer } from "./ResumeDownload.styles";

function ResumeDownload() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);

  return(
    <DownloadButtonContainer>
      <a href='resume/Resume - IS.pdf' target="_blank" rel="noreferrer">
        <DownloadButton>
          {t(data.general.cv_download) + ' - IS'}
        </DownloadButton>
      </a>
      <a href='resume/Resume - EN.pdf' target="_blank" rel="noreferrer">
        <DownloadButton>
          {t(data.general.cv_download) + ' - EN'}
        </DownloadButton>
      </a>
    </DownloadButtonContainer>
  );
}

export default ResumeDownload;

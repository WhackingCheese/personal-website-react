import { useContext } from "react";
import { DataContext, LanguageContext } from "..";
import { DownloadButton, DownloadButtonContainer } from "./ResumeDownload.styles";
import ResumeIS from '../../assets/files/Resume - IS.pdf';
import ResumeEN from '../../assets/files/Resume - EN.pdf';

function ResumeDownload() {

  const [ t ] = useContext(LanguageContext);
  const [ data ] = useContext(DataContext);

  return(
    <DownloadButtonContainer>
      <a href={ResumeIS} target="_blank">
        <DownloadButton>
          {t(data.general.cv_download) + ' - IS'}
        </DownloadButton>
      </a>
      <a href={ResumeEN} target="_blank">
        <DownloadButton>
          {t(data.general.cv_download) + ' - EN'}
        </DownloadButton>
      </a>
    </DownloadButtonContainer>
  );
}

export default ResumeDownload;

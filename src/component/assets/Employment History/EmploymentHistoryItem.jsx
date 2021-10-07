import FancyBox from "../FancyBox/FancyBox";
import ArrowForwardIcon from "@material-ui/icons/PlayArrow";

const EmploymentHistoryItem = ({
  Institute,
  Date,
  Description,
  Certificate,
  CertificateFile,
  CertificateName,
}) => {
  return (
    <div className="trm-timeline-item trm-scroll-animation trm-active-el">
      <div className="trm-timeline-mark-light" />
      <div className="trm-timeline-mark" />
      <div className="trm-a trm-timeline-content">
        <div className="trm-card-header">
          <div className="trm-left-side">
            <h6 className="trm-mb-15">{Institute}</h6>
            <div className="trm-text-sm trm-accent-color trm-mb-15">
              <i>{Date}</i>
            </div>
          </div>
        </div>
        <div className={Certificate && `trm-mb-20`}>{Description}</div>
        {Certificate && (
          CertificateName
        )}
      </div>
    </div>
  );
};

export default EmploymentHistoryItem;

import TypingEffect from "../Typing/TypingEffect";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Link } from "react-router-dom";
const FixedCard = () => {
  return (
    <div className="trm-main-card-frame trm-sidebar">
      <div
        className="trm-main-card"
      >
        {/* card header */}
        <div className="trm-mc-header">
          <div className="trm-avatar-frame trm-mb-20">
            <img className="trm-avatar" src="img/avatar.jpg" alt="Avatar" />
            <div className="trm-dot" />
          </div>
          <h5 className="trm-name trm-mb-15">Mukti Ara</h5>
          <div className="trm-label">
            I`m &nbsp;
            <span className="trm-typed-text">
              <TypingEffect/>
            </span>
          </div>
        </div>
        {/* card header end */}
        <div className="trm-divider trm-mb-40 trm-mt-40" />
        {/* sidebar social */}
        <div className="trm-social">
          <a href="https://www.linkedin.com/in/developer-mukti" target="_blank" >
            <LinkedInIcon />
          </a>
          <a href="https://github.com/mukti96" target="_blank">
            <GitHubIcon />
          </a>
          <a href="https://twitter.com/developer_mukti" target="_blank">
            <TwitterIcon />
          </a>
          <a href="https://wa.me/8801706851992" target="_blank">
            <WhatsAppIcon />
          </a>
        </div>
        {/* sidebar social end */}
        <div className="trm-divider trm-mb-40 trm-mt-40" />
        {/* info */}
        <ul className="trm-table trm-mb-20">
          {/* country */}
          <li>
            <div className="trm-label">Residence:</div>
            <div className="trm-label trm-label-light">Bangladesh</div>
          </li>
          {/* city */}
          <li>
            <div className="trm-label">City:</div>
            <div className="trm-label trm-label-light">Sirajgonj</div>
          </li>
          {/* age */}
          <li>
            <div className="trm-label">Dream:</div>
            <div className="trm-label trm-label-light">Programmer</div>
          </li>
        </ul>
        {/* info end */}
        <div className="trm-divider trm-mb-40 trm-mt-40" />
        {/* action button */}
        <div className="text-center">
          <Link to="/contact" className="trm-btn">
            Contact me <EmailIcon fontSize="small" />
          </Link>
        </div>
        {/* action button end */}
      </div>
    </div>
  );
};

export default FixedCard;

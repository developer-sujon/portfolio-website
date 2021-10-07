import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
const Swich = () => {
  return (
    <div className="trm-hidden-switcher">
      <div className="trm-mode-switcher">
      <WbSunnyOutlinedIcon fontSize="small" style={{ color: "#fff", fontSize: 15, margin: "0 5px" }}/>

        <input
          className="tgl tgl-light"
          id="trm-swich"
          type="checkbox"
          defaultChecked
        />
        <label className="trm-swich" htmlFor="trm-swich" />
        <NightsStayOutlinedIcon fontSize="small" style={{ color: "#fff", fontSize: 15, margin: "0 5px" }}/>
      </div>
    </div>
  );
};

export default Swich;

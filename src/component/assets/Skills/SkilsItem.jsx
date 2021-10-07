const SkilsItem = ({SkilsName, SkilsTag, SkilsProgress}) => {
  return (
    <div className="trm-mb-20">
        <div className="trm-skill-header">
          <h6 className="trm-mb-15">{SkilsName}</h6>
          <span className="trm-label trm-label-light">{SkilsTag}</span>
        </div>
        <div className="trm-progressbar-frame">
          <div className={`trm-progressbar p${SkilsProgress}`} />
        </div>
      </div>
  );
};

export default SkilsItem;

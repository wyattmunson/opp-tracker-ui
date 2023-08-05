const ModuleIcons = ({ modules, inverse }) => {
  const config = {
    CDNG: {
      className: "lynxCdPill",
      classNameInverse: "lynxCdPillInverse",
      iconName: "far fa-circle",
      abbreviation: "CDNG",
    },
    CDCG: {
      className: "lynxCdPill",
      classNameInverse: "lynxCdPillInverse",
      iconName: "far fa-circle",
      abbreviation: "CDCG",
    },
    CD: {
      className: "lynxCdPill",
      classNameInverse: "lynxCdPillInverse",
      iconName: "far fa-circle",
      abbreviation: "CD",
    },
    FF: {
      className: "lynxFfPill",
      classNameInverse: "lynxFfPillInverse",
      iconName: "far fa-circle",
      abbreviation: "FF",
    },
    CCM: {
      className: "lynxCcmPill",
      classNameInverse: "lynxCcmPillInverse",
      iconName: "far fa-circle",
      abbreviation: "CCM",
    },
    CI: {
      className: "lynxCiPill",
      classNameInverse: "lynxCiPillInverse",
      iconName: "far fa-circle",
      abbreviation: "CI",
    },
  };

  // handle errors - no modules
  if (!modules) return null;

  return (
    <div className="row">
      {modules.map((i, index) => (
        <div className="col">
          <div>
            {config[i] ? (
              <span
                className={`badge rounded-pill ${
                  !inverse ? config[i].className : config[i].classNameInverse
                }`}
              >
                {config[i].abbreviation}
              </span>
            ) : (
              // handle error where i not in config
              <span className={`badge rounded-pill lynxGrayPill`}>{i}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModuleIcons;

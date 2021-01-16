const Navigation = props => {
  return (
    <>
      <div className="navigation">
        <h1 className="main-title">{props.title}</h1>
        <div className="group-btn">
          <button>Add new Job</button>
          <button>View previous Jobs</button>
        </div>
      </div>
    </>
  );
};

export default Navigation;

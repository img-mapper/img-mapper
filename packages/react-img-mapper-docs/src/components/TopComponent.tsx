const TopComponent = (title, Content) => (
  <div className="top_container">
    <h1 className="title">{title}</h1>
    <div className="top_content">{Content}</div>
  </div>
);

export default TopComponent;

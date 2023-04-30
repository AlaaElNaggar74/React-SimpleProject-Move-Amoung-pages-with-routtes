import "./MainComp.css";

const MainComp = ({ pageTitle, Designer }) => {
  return (
    <div className="myMaincomp">
      <main className="alaaElNaggar">
        {pageTitle} PAGEEEEEEEE
        <br />
        designed by {Designer}
      </main>
    </div>
  );
};

export default MainComp;

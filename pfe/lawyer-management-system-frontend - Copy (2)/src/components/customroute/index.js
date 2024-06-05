import Footer from "../footer";
import Header from "../header";
import HeaderClient from "../headerClient";
import HeaderLogin from "../headerLogin";

const Component = ({
  component: Component,
  protect,
  parts,
  footer = true,
  ads,
  showheader,
  showheaderLog,
  showfooter,
  showheaderClient,
  ...rest
}) => {

  const RenderComponent = (props) => {
    return (
      <>
        <Component {...props} />
      </>
    );
  };

  return (
    <>
      {showheader && <Header /> || showheaderLog && <HeaderLogin/> || showheaderClient && <HeaderClient/>}
      <RenderComponent {...rest} />
      {showfooter && <Footer />}
    </>
  );
};

export default Component;
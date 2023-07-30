import Nav from "./Nav";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;

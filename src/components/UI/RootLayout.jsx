import Nav from "./Nav";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;

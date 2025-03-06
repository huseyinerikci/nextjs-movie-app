import Header from "@/components/Header";
import Providers from "./Providers";
import Tabs from "@/components/Tabs";
import "./globals.css";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Tabs />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;

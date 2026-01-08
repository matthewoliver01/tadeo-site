import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Silk from "./Silk";

const Layout = () => {
  return (
    <div className="relative min-h-screen text-zinc-100 font-sans overflow-x-hidden">
      {/* Silk Background - covers entire site including safe areas */}
      <div
        className="fixed z-0"
        style={{
          top: "-100px",
          left: "-100px",
          right: "-100px",
          bottom: "-100px",
        }}
      >
        <Silk
          color="#1A2633"
          speed={10}
          scale={1.5}
          noiseIntensity={1.2}
          rotation={0}
        />
      </div>

      {/* Site Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

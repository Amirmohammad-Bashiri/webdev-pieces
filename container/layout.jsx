import Header from "../components/header";

function Layout({ children }) {
  return (
    <div>
      <div className="bg-white dark:bg-black containe mx-auto max-w-2xl">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;

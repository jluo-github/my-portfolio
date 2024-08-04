const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer z-20 border border-l-transparent border-r-transparent border-t-gray-700 text-white">
      <div className="container flex  justify-between p-12 ">
        <span></span>
        <p className="text-slate-600"> &copy;{date}Jin. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='z-20 border-t dark:border-t-slate-600 border-t-violet-300 text-white'>
      <div className='container flex justify-between p-8 '>
        <p className='text-violet-500 dark:text-slate-400'> &copy;{year} Jin. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;

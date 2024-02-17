import { motion, useInView } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.7rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white " : " text-gray-400 ";

  return (
    <button onClick={selectTab}>
      {" "}
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {" "}
        {children}
      </p>
      <motion.div
        className="mr-3 mt-2 h-1 bg-primary-500"
        animate={active ? "active" : "default"}
        variants={variants}
      ></motion.div>
    </button>
  );
};
export default TabButton;

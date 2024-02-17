const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[@adb7be] border-slate-600 hover:border-white";
  return (
    <button
      onClick={() => onClick(name)}
      className={`${buttonStyles} cursor-pointer rounded-full  border-2 px-6 py-3 text-xl`}
    >
      {name}
    </button>
  );
};
export default ProjectTag;

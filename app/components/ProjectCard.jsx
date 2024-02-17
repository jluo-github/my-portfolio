import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="group relative h-52 rounded-t-xl md:h-72"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        {/*  */}
        <div className="overlay absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-[#181818] bg-opacity-0 transition-all duration-500 group-hover:flex group-hover:bg-opacity-80 ">
          {/* link */}
          <Link
            href={gitUrl}
            className="group/link relative mr-2 h-14 w-14 rounded-full border-2 border-gray-400 hover:border-white"
          >
            {/* icons */}
            <CodeBracketIcon className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer  text-gray-400 group-hover/link:text-white" />
          </Link>
          {/* link */}
          <Link
            href={previewUrl}
            className="group/link relative h-14 w-14 rounded-full border-2 border-gray-400 hover:border-white"
          >
            {/* icons */}
            <EyeIcon className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer  text-gray-400 group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="mt-3 rounded-b-xl bg-[#181818] px-4 py-6 text-white">
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};
export default ProjectCard;

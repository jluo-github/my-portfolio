import { FaLocationArrow } from "react-icons/fa6";
import BorderMagic from "../ui/border-magic";
import { MdOutlineAttachEmail } from "react-icons/md";

const SendEmailBtn = () => {
  return (
    <div className='mx-auto group hover:scale-105'>
      <a href='mailto:jin.purplecat@gmail.com' className=''>
        <BorderMagic
          title='Send Email'
          icon={
            <MdOutlineAttachEmail className='ml-4 sm:ml-1 w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-1 transition ' />
          }
          position='right'
        />
      </a>
    </div>
  );
};
export default SendEmailBtn;

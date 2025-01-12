import { MdOutlineAttachEmail } from "react-icons/md";
import BorderMagic from "../ui/border-magic";

const SendEmailBtn = () => {
  return (
    <div className='mx-auto group hover:scale-105 active:scale-90 transition-all'>
      <a tabIndex={-1} href='mailto:jin.purplecat@gmail.com'>
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

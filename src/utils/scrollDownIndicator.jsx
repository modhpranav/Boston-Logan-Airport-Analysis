import { motion } from 'framer-motion';
import { RiArrowDownDoubleFill } from "react-icons/ri";

export default function ScrollDownIndicator() {
  return (
    <div className="fixed bottom-8 w-full flex justify-left">
      <motion.div
        className="cursor-pointer p-2 bg-white bg-opacity-0 rounded-full hover:bg-opacity-40 transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        onClick={() => {
          // Calculate the next position to scroll to which is the current scroll position plus the viewport height
          const nextPosition = window.pageYOffset + window.innerHeight;
          window.scrollTo({
            top: nextPosition,
            behavior: 'smooth',
          });
        }}
      >
        <RiArrowDownDoubleFill size={50} className="text-white" />
      </motion.div>
    </div>
  );
}

import {
  BadgeCheck,
  Hourglass,
  LayersPlus,
  LayoutDashboard,
  NotebookPen,
  SlidersHorizontal,
  SquareMenu,
  SquareX,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState, type ReactNode } from 'react';
import { NavLink } from 'react-router';
import MyDropDown from '../ui/MyDropDown';
const MotionNavLink = motion(NavLink);

   
const SidebarVariants = {
  open: { x: 0, opacity: 1, scale: 1 },
  closed: { x: '-100%', opacity: 0 ,  },
};  
const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0,
    },
  },
};  
const itemVariants = {
  open: { opacity: 1, y: 0, scale: 1 },
  closed: { opacity: 0, y: -20, scale: 0.95 },
}; 
const MasterLoayout = ({ children }: { children: ReactNode }) => {
  
  const [isOpen, setIsOpen] = useState(true)

  return (
    <section className=" mx-auto ">
      {/* Nav bar  */}
      <div className="">
        <nav className="w-full  px-4 md:px-8 py-4 bg-white shadow-lg ">
          <div className="flex items-center justify-between">
            {/* step 01 */}
            <div className="inline-flex items-center gap-4">
              <button onClick={() => setIsOpen(!isOpen)}>
                <SlidersHorizontal className="text-2xl text-gray-900" />
              </button>
              <div className="inline-flex items-center gap-2">
                <SquareMenu className="text-purple-500" />{' '}
                <h1 className="text-2xl text-gray-900 font-bold">
                  Task Manager
                </h1>
              </div>
            </div>
            {/* step 2 */}
            <MyDropDown />
          </div>
        </nav>
      </div>

      <div className="grid w-full grid-cols-12 border-2 ">
        {/* Sidebar  */}
        <motion.div
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={SidebarVariants}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`${
            isOpen ? 'col-span-2  bg-white min-h-screen' : 'hidden'
          }`}
        >
          <motion.div
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={containerVariants}
            className="w-full  mx-auto py-5 flex flex-col space-y-2"
          >
            <MotionNavLink
              variants={itemVariants}
              to={'/'}
              className={({ isActive }) =>
                `p-4 ${
                  isActive
                    ? 'bg-purple-500/30 border-l-4 border-purple-500'
                    : ' '
                }`
              }
            >
              <div className="text-gray-900 inline-flex items-center gap-3 ">
                <LayoutDashboard size={24} />
                <h3 className="text-xl font-serif">Dashboard</h3>
              </div>
            </MotionNavLink>
            <MotionNavLink
              variants={itemVariants}
              to={'/create'}
              className={({ isActive }) =>
                `p-4 ${
                  isActive
                    ? 'bg-purple-500/30 border-l-4 border-purple-500'
                    : ' '
                }`
              }
            >
              <div className="text-gray-900 inline-flex items-center gap-3">
                <NotebookPen size={24} />
                <h3 className="text-xl font-serif">Create New</h3>
              </div>
            </MotionNavLink>
            <MotionNavLink
              variants={itemVariants}
              to={'/all'}
              className={({ isActive }) =>
                `p-4 ${
                  isActive
                    ? 'bg-purple-500/30 border-l-4 border-purple-500'
                    : ' '
                }`
              }
            >
              <div className="text-gray-900 inline-flex items-center gap-3">
                <LayersPlus size={24} />
                <h3 className="text-xl font-serif">New Task</h3>
              </div>
            </MotionNavLink>
            <MotionNavLink
              variants={itemVariants}
              to={'/progress'}
              className={({ isActive }) =>
                `p-4 ${
                  isActive
                    ? 'bg-purple-500/30 border-l-4 border-purple-500'
                    : ' '
                }`
              }
            >
              <div className="text-gray-900 inline-flex items-center gap-3">
                <Hourglass size={24} />
                <h3 className="text-xl font-serif">In Progress</h3>
              </div>
            </MotionNavLink>
            <MotionNavLink
              variants={itemVariants}
              to={'/completed'}
              className={({ isActive }) =>
                `p-4 ${
                  isActive
                    ? 'bg-purple-500/30 border-l-4 border-purple-500'
                    : ' '
                }`
              }
            >
              <div className="text-gray-900 inline-flex items-center gap-3">
                <BadgeCheck size={24} />
                <h3 className="text-xl font-serif">Completed</h3>
              </div>
            </MotionNavLink>
            <MotionNavLink
              variants={itemVariants}
              to={'/canceled'}
              className={({ isActive }) =>
                `p-4 ${
                  isActive
                    ? 'bg-purple-500/30 border-l-4 border-purple-500'
                    : ' '
                }`
              }
            >
              <div className="text-gray-900 inline-flex items-center gap-3">
                <SquareX size={24} />
                <h3 className="text-xl font-serif">Canceled</h3>
              </div>
            </MotionNavLink>
          </motion.div>
        </motion.div>

        {/* Content  */}
        <div className={`${isOpen ? 'col-span-10' : 'col-span-12 w-full'}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default MasterLoayout;

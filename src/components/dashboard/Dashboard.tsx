import { useEffect, useRef } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { motion } from 'motion/react';
import { SummaryRequest } from "../../APIRequest/apiRequest";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
const Dashboard = () => {
  const summaryList = useSelector((state: RootState) => state.summary.value)
   const hasFetched = useRef(false);
  useEffect(() => {
     if (hasFetched.current) return; // useRef use for prevent re-rander issue
     hasFetched.current = true;
    SummaryRequest();
  },[])
  return (
    <div className=" px-4 grid grid-cols-4 gap-6">
      {summaryList.map((data, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full mx-auto"
        >
          <Card className="max-w-sm shadow-xl">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{data._id}</CardTitle>
                <CardDescription className="text-lg">{data.sum}</CardDescription>
              </CardHeader>
            </motion.div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default Dashboard
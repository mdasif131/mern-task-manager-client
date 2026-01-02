import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { motion } from 'motion/react';
const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full mx-auto"
    >
      <Card className="max-w-sm shadow-xl">
        <motion.div
          initial={{ opacity: 0 , y:5 }}
          animate={{ opacity: 1 , y:0}}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <CardHeader>
            <CardTitle className="text-xl">Total</CardTitle>
            <CardDescription className="text-lg">00</CardDescription>
          </CardHeader>
        </motion.div>
      </Card>
    </motion.div>
  );
}

export default Dashboard
import { Button } from '../ui/button';
import { motion } from 'motion/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Calendar, Trash2, PencilLine } from 'lucide-react';
interface CommonCardProps {
  title: string;
  description: string;
  variant: 'default' | 'destructive' | 'greenbtn' | 'skybtn' | 'newtaskbtn';
}

const CommonCard: React.FC<CommonCardProps> = ({ title, description, variant }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Card className="max-w-md">
        <CardHeader>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <CardTitle>{title}</CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              {description}
            </motion.div>
          </CardDescription>
        </CardContent>
        <CardFooter>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="flex items-center justify-between w-full"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="inline-flex items-center gap-2">
                <Calendar size={18} />
                <span>01/02/2026</span>
              </div>
              <button className="text-red-400">
                <PencilLine size={18} />
              </button>
              <button className="ml-2 text-red-400">
                <Trash2 size={18} />
              </button>
            </div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <Button variant={variant}>STATUS</Button>
            </motion.div>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CommonCard;

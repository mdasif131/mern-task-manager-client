import { useRef } from 'react';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { motion } from 'motion/react';
import { ErrorToast, IsEmpty } from '../../helper/formHelper';
import { useNavigate } from 'react-router-dom';
import { CreateNewRequest } from '../../APIRequest/apiRequest';

const CreateTask = () => {
  const navigate =useNavigate()
  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const createNewHandler = async () => {
    const title = titleRef.current?.value || " "
    const description = descriptionRef.current?.value || ""
    if (IsEmpty(title)) {
      ErrorToast("Title Required")
    } else if (IsEmpty(description)) {
      ErrorToast("Description Required")
    } else {
      const result = await CreateNewRequest(title, description) 
      if (result) {
        navigate("/all")
      }
    }
}

  return (
    <div className="flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Card className="max-w-2xl min-w-sm sm:min-w-2xl shadow-xl bg-white/80 backdrop-blur-sm border border-purple-100">
          <CardHeader>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <CardTitle className="text-2xl font-bold bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Create New Task
              </CardTitle>
            </motion.div>
          </CardHeader>

          <CardContent>
            <motion.form
              className="flex flex-col space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <Input
                  id="name"
                  placeholder="Task Name"
                  className="focus-visible:ring-purple-500 transition-all duration-300 hover:ring-2 hover:ring-purple-200"
                  type="text"
                  ref={input => { titleRef.current = input}}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Textarea
                  className="focus-visible:ring-purple-500 transition-all duration-300 hover:ring-2 hover:ring-purple-200 min-h-30"
                  placeholder="Type your message here..." 
                  ref={input=>{descriptionRef.current = input;}}
                />
              </motion.div>
            </motion.form>
          </CardContent>

          <CardFooter className="w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.3,
                type: 'spring',
                stiffness: 200,
              }}
              className="ml-auto"
            >
              <Button 
                onClick={createNewHandler}
                variant="secondary"
                className=" bg-linear-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg hover:shadow-xl hoverTransition transform hover:-translate-y-0.5"
              >
                Create Task
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default CreateTask;

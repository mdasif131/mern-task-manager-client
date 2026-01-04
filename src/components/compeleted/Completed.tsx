import { useEffect, useRef } from "react"
import CommonCard from "../common/CommonCard"
import { GetTaskRequestByStatus } from "../../APIRequest/apiRequest"
import type { RootState } from '../../redux/store/store';
import type { Task } from '../../helper/types';
import { useSelector } from 'react-redux';
import { DeleteAlert } from "../../helper/deleteAlert";
import { UpdateAlertTodo } from "../../helper/updateAlert";
const Completed = () => {
   const completedList = useSelector((state: RootState) => state.task.Completed);
  const hasFetched = useRef(false);
  

    const DeleteItem = (id: string) => {
      DeleteAlert(id).then(result => {
        if (result) {
          GetTaskRequestByStatus('Completed');
        }
      });
  };
    const StatusChangeItem = (id: string, status: string) => {
      UpdateAlertTodo(id, status).then(result => {
        if (result) {
          GetTaskRequestByStatus('Completed');
        }
      });
    };
   useEffect(() => {
     if (hasFetched.current) return; // useRef use for prevent re-rander issue
     hasFetched.current = true;
     GetTaskRequestByStatus('Completed');
   }, []);
 
   if (completedList.length === 0) {
     return <p>No canceled tasks</p>;
   } else {
     return (
       <div className="px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
         {completedList.map((item: Task) => (
           <div key={item._id} className="flex-1">
             <CommonCard
               title={item.title}
               description={item.description}
               createDate={item.createDate}
               updateStatus={StatusChangeItem.bind(this, item._id, item.status)}
               deleteTask={DeleteItem.bind(this, item._id)}
               status={item.status}
               variant="greenbtn"
             />
           </div>
         ))}
       </div>
     );
   }
}

export default Completed
import { useEffect, useRef } from "react";
import CommonCard from "../common/CommonCard";
import { GetTaskRequestByStatus } from "../../APIRequest/apiRequest";
import type { RootState } from '../../redux/store/store';
import type { Task } from '../../helper/types';
import { useSelector } from "react-redux";
import { DeleteAlert } from "../../helper/deleteAlert";
const Progress = () => {
   const progressList = useSelector((state: RootState) => state.task.Progress);
  const hasFetched = useRef(false);
  

    const DeleteItem = (id:string)=>{
      DeleteAlert(id).then((result) => {
        if (result) {
          GetTaskRequestByStatus('Progress');
        }
      })
      
    }
   useEffect(() => {
     if (hasFetched.current) return; // useRef use for prevent re-rander issue
     hasFetched.current = true;
     GetTaskRequestByStatus('Progress');
   }, []);
  if (progressList.length === 0) {
    return <p>No canceled tasks</p>;
  } else {
    return (
      <div className="px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {progressList.map((item: Task) => (
          <div key={item._id} className="flex-1">
            <CommonCard
              title={item.title}
              description={item.description}
              createDate={item.createDate}
              deleteTask={DeleteItem.bind(this, item._id)}
              status={item.status}
              variant="skybtn"
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Progress
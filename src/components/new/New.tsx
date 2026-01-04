import { useEffect, useRef } from "react";
import CommonCard from "../common/CommonCard";
import { GetTaskRequestByStatus } from "../../APIRequest/apiRequest";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import type { Task } from '../../helper/types';
import { DeleteAlert } from "../../helper/deleteAlert";
import { UpdateAlertTodo } from "../../helper/updateAlert";
const New = () => {
  const newList = useSelector((state: RootState) => state.task.New);
  const hasFetched = useRef(false);
  

  const DeleteItem = (id:string)=>{
    DeleteAlert(id).then((result) => {
      if (result) {
        GetTaskRequestByStatus('New');
      }
    })  
  }
  const StatusChangeItem=(id: string, status: string)=>{
    UpdateAlertTodo(id, status).then((result) => {
      if (result) {
       GetTaskRequestByStatus('New');
    }
  })
}


   useEffect(() => {
     if (hasFetched.current) return; // useRef use for prevent re-rander issue
     hasFetched.current = true;
     GetTaskRequestByStatus('New');
   }, []);
  if (newList.length === 0) {
    return <p>No canceled tasks</p>;
  } else {
    return (
      <div className="px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {newList.map((item: Task) => (
          <div key={item._id} className="flex-1">
            <CommonCard
              updateStatus={StatusChangeItem.bind(this, item._id, item.status)}
              deleteTask={DeleteItem.bind(this, item._id)}
              title={item.title}
              description={item.description}
              createDate={item.createDate}
              status={item.status}
              variant="newtaskbtn"
            />
          </div>
        ))}
      </div>
    );
  }
}

export default New
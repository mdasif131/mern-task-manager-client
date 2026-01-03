import { useEffect, useRef } from 'react';
import CommonCard from '../common/CommonCard';
import { GetTaskRequestByStatus } from '../../APIRequest/apiRequest';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store/store';
import type { Task } from '../../helper/types';
const Canceled = () => {
  const cancelList = useSelector((state: RootState) => state.task.Canceled);

  const hasFetched = useRef(false);
  useEffect(() => {
    if (hasFetched.current) return; // useRef use for prevent re-rander issue
    hasFetched.current = true;
    GetTaskRequestByStatus('Canceled');
  }, []);

  if (cancelList.length === 0) {
    return <p>No canceled tasks</p>;
  } else {
    return (
      <div className="px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cancelList.map((item: Task) => (
          <div key={item._id} className='flex-1'>
            <CommonCard
              title={item.title}
              description={item.description}
              createDate={item.createDate}
              status={item.status}
              variant="destructive"
            />
          </div>
        ))}
      </div>
    );
  }
  
};

export default Canceled;

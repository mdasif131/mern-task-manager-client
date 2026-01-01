import { Suspense,lazy } from "react";
import MasterLoayout from "../components/masterLayout/MasterLoayout"
import LazyLoader from "../components/masterLayout/LazyLoader"; 

const CreateTask =lazy(()=>import("../components/createTask/CreateTask"))

const CreatePage = () => {
  return (
    <>
      <MasterLoayout>
        <Suspense fallback={<LazyLoader />}>
        <CreateTask />
        </Suspense>
      </MasterLoayout>
    </>
  );
}

export default CreatePage
import { lazy, Suspense } from "react";
import MasterLoayout from "../components/masterLayout/MasterLoayout"
import LazyLoader from "../components/masterLayout/LazyLoader"; 
const Completed = lazy(() => import('../components/compeleted/Completed'));

const CompeletedPage = () => {
  return (
    <>
      <MasterLoayout>
        <Suspense fallback={<LazyLoader />}>
        <Completed />
        </Suspense>
      </MasterLoayout>
    </>
  );
}

export default CompeletedPage
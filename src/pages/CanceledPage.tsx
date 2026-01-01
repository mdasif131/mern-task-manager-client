import { Suspense,lazy } from "react";
import MasterLoayout from "../components/masterLayout/MasterLoayout"
import LazyLoader from "../components/masterLayout/LazyLoader";
const Canceled = lazy(() => import('../components/canceled/Canceled'));
const CanceledPage = () => {
  return (
    <>
      <MasterLoayout>
        <Suspense fallback={<LazyLoader />}>
        <Canceled />
        </Suspense>
      </MasterLoayout>
    </>
  );
}

export default CanceledPage
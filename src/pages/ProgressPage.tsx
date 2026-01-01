import { lazy, Suspense } from "react";
import MasterLoayout from "../components/masterLayout/MasterLoayout"
import LazyLoader from "../components/masterLayout/LazyLoader";

const Progress = lazy(() => import('../components/progress/Progress'));
const ProgressPage = () => {
  return (
    <>
      <MasterLoayout>
        <Suspense fallback={<LazyLoader />}><Progress /></Suspense>
      </MasterLoayout>
    </>
  );
}

export default ProgressPage
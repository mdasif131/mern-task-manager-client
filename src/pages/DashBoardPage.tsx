import { Suspense, lazy } from 'react';
import MasterLoayout from "../components/masterLayout/MasterLoayout"
import LazyLoader from "../components/masterLayout/LazyLoader"
const Dashboard = lazy(() => import("../components/dashboard/Dashboard"));

const DashBoardPage = () => {
  return (
    <>
      <MasterLoayout>
        <Suspense fallback={<LazyLoader />}>
         <Dashboard />
        </Suspense>
    </MasterLoayout>
    </>
  )
}

export default DashBoardPage
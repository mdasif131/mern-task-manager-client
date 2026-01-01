import { lazy, Suspense } from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
const ForgetPass = lazy(() => import('../components/forgetPass/ForgetPass'));
const ForgetPssPage = () => {
  return (
    <div>
      <Suspense fallback={<LazyLoader />}>
        <ForgetPass />
      </Suspense>
    </div>
  );
}

export default ForgetPssPage
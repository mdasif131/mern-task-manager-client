import { lazy, Suspense } from 'react';
import MasterLoayout from '../components/masterLayout/MasterLoayout';
import LazyLoader from '../components/masterLayout/LazyLoader';

const New = lazy(() => import('../components/new/New'));
const NewPage = () => {
  return (
    <>
      <MasterLoayout>
        <Suspense fallback={<LazyLoader />}>
          <New />
        </Suspense>
      </MasterLoayout>
    </>
  );
};

export default NewPage;

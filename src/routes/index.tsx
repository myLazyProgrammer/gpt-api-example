import { Spin } from '@douyinfe/semi-ui';
import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/Home'));

const router = createBrowserRouter([
  {
    index: true,
    element: (
      <Suspense
        fallback={
          <Spin
            wrapperClassName="tw-h-full tw-w-full tw-items-center tw-justify-center"
            spinning={true}
          ></Spin>
        }
      >
        <Home />
      </Suspense>
    ),
  },
]);

export default router;

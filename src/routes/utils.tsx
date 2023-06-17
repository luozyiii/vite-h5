import { Suspense } from 'react';
import Loading from '../components/loading';

const withLoadingComponent = (comp: JSX.Element) => <Suspense fallback={<Loading />}>{comp}</Suspense>;

export { withLoadingComponent };

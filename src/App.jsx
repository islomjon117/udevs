import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import MainLayouts from './Layout/MainLayouts';
import HomePage from './pages/HomePage';



function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayouts />}>
        <Route path='/' element={<HomePage />} />
      </Route>
    ));
  return (
    <>
      <div className='App'>
        <RouterProvider router={routes} />
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default App


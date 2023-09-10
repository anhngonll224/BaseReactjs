import React from "react"
import { useRoutes } from "react-router-dom"
import ROUTER from "./index"
import Login from "../components/login/Login"
import Fa from "../components/2FA/2FA"
import PublicRoutes from "../components/PublicRouters"
import FA from "../components/2FA/2FA"
import Showtv from "../components/showtv/Showtv"
import Root1 from "../components/root_1/Root_1"
import Test from "../components/Test/Test"
// ANONYMOUS
// const LoginGoogle = React.lazy(() => import("src/pages/LoginGoogle"))

function LazyLoadingComponent({ children }) {
  return (
    <React.Suspense
      fallback={
        <div className="loading-center" style={{ height: "100vh" }}>
          {/* <Spin /> */}
        </div>
      }
    >
      {children}
    </React.Suspense>
  )
}

const routes = [
  // ADMIN
  {
    element: (
      <LazyLoadingComponent>
        <PublicRoutes />
      </LazyLoadingComponent>
    ),
    children: [

      {
        path: ROUTER.LOGIN,
        element: (
          <LazyLoadingComponent>
            <Login />
          </LazyLoadingComponent>
        ),
      },
      {
        path: ROUTER.FA,
        element: (
          <LazyLoadingComponent>
            <FA />
          </LazyLoadingComponent>
        ),
      },
      {
        path: ROUTER.SHOW_TV,
        element: (
          <LazyLoadingComponent>
            <Showtv />
          </LazyLoadingComponent>
        ),
      },
      {
        path: ROUTER.ROOT1,
        element: (
          <LazyLoadingComponent>
            <Root1 />
          </LazyLoadingComponent>
        ),
      },
      {
        path: ROUTER.TEST,
        element: (
          <LazyLoadingComponent>
            <Test />
          </LazyLoadingComponent>
        ),
      },

    ],
  },
  {
    path: "*",
    element: (
      <LazyLoadingComponent>
        <div>Lỗi</div>
      </LazyLoadingComponent>
    ),
  },
]
const AppRouter = () => {
  const renderRouter = useRoutes(routes)
  return renderRouter
}
export default AppRouter

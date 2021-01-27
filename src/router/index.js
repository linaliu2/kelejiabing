//router.js
import Index from '../components/Index'
import New from '../components/New'
import NewList from '../components/NewList'
import NewContent from '../components/NewContent'
import test from '../container/test'

const routes = [

  {
    path: "/",
    component: Index,
    exact: true
  },
  {
    path: "/new",
    component: New,
    routes: [
      {
        path: "/new/",
        component: NewContent
      },
      {
        path: "/new/newList",
        component: NewList
      }
    ]
  },
  {
    path: "/test",
    component: test
  }

]

export default routes
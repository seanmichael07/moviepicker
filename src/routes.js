import Dashboard from './pages/Dashboard'
import AddMovie from './pages/AddMovie'
import SelectMovie from './pages/SelectMovie'
import NotFound from './pages/NotFound'

const routes = [
  {
    path: "/dashboard",
    main: Dashboard
  },
  {
    path: "/add-movie",
    main: AddMovie
  },
  {
    path: "/select-movie",
    main: SelectMovie
  },
  {
    path: "*",
    main: NotFound
  }
]

export default routes

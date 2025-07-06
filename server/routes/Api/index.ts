import Router from '../Router'
import UserRoute from './User'

class ApiRoute extends Router {
  public baseRoute = '/api'

  public routes() {
    this.router.use(UserRoute.baseRoute, UserRoute.router)
  }
}

export default new ApiRoute()
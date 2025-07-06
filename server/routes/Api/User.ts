import UserController from '../../app/Controllers/User'
import Router from '../Router'

class UserRoute extends Router {
  public baseRoute = '/user'

  public routes() {
    this.router.get('/', UserController.get)
    this.router.post('/', UserController.create)
    this.router.get('/demo-error', UserController.testHandleHttpError)
  }
}

export default new UserRoute()
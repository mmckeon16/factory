import { Request, Response } from 'express'
import Controller from './Controller'

class UserController extends Controller {
  // NOTE: Please use arrow function to avoid ambiguous of "this"

  public get = (req: Request, res: Response) => {
    // dummy data. only for demo
    const payload: any[] = [
      { id: 1, name: 'Indomie', count: 2100 },
      { id: 2, name: 'Roti', count: 3000 },
      { id: 3, name: 'Aqua', count: 500 },
      { id: 4, name: 'Telur', count: 2500 },
      this.test()
    ]
    try {
      this.send(res, {
        code: 200,
        message: `OK`,
        payload
      })
    } catch (err: unknown) {
      if (err instanceof Error) {
        this.handleError(req, res, err)
      } else {
        // throw err
      }
    }
  }

  public create = (req: Request, res: Response) => {
    try {
      this.send(res, {
        code: 201,
        message: `Created`
      })
    } catch (err: unknown) {
      if (err instanceof Error) {
        this.handleError(req, res, err)
      } else {
        // throw err
      }
    }
  }

  public testHandleHttpError = (req: Request, res: Response) => {
    try {
      // make sure throwing error with Http helper works
      this.setError(400, 'Bad Request')
    } catch (err: unknown) {
      if (err instanceof Error) {
        this.handleError(req, res, err)
      } else {
        // throw err
      }
    }
  }

  private test = () => {
    return { id: 5, name: 'Beras', price: 9000 }
  }
}

export default new UserController()
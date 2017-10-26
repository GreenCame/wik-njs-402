import { BaseController, Route, NextFunction } from './'

export class TodoController extends BaseController {

  static basePath = '/todos'

  static routes: Route[] = [
    { path: '/', action: 'rootIndex', root: true },
    { path: '/', action: 'index' },
    { verb: 'post', path: '/', action: 'create' },
  ]

  /**
   * Action qui redirige vers la bonne route
   * 
   * @param {NextFunction} next 
   * @memberof TodoController
   */
  public rootIndex(next: NextFunction) {
    this.res.redirect(301, '/todos')
  }

  /**
   * Action qui liste nos Todos
   * 
   * @param {NextFunction} next 
   * @memberof TodoController
   */
  public index(next: NextFunction) {
    this.res.end('Voila')
  }

  /**
   * Action qui créé une Todo
   * 
   * @param {NextFunction} next 
   * @memberof TodoController
   */
  public create(next: NextFunction) {
    console.log(this.req.body)
    this.res.end('Voila')
  }
}

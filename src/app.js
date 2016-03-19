export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([{
      route: ['', 'todos'],
      name: 'todos',
      moduleId: './todos/todos',
      nav: true,
      title: 'Todos'
    }]);

    this.router = router;
  }
}

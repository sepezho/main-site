export type ExtendedStore = {
  router: RouterState;
};

export type ExtendedWindow = Window & {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function;
};
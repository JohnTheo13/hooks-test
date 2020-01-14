

class action  {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }
  execute = undefined;
}

export class checkEnabled extends action {
  execute = payload => this.dispatch({ type: 'CHECK_ENABLED', payload });
}

export class checkSupport extends action {
  execute = payload => this.dispatch({ type: 'CHECK_SUPPORT', payload });
}

export const myDispatch = (dispatch, type, payload) => dispatch({ type, payload });
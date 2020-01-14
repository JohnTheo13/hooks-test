const CHECK_SUPPORT = 'CHECK_SUPPORT',
      CHECK_ENABLED = 'CHECK_ENABLED';

export const types = { CHECK_ENABLED, CHECK_SUPPORT };

export const initialState = {
  supported: false,
  enabled: false
};

export const checkSupport = v => ({ type:CHECK_SUPPORT, payload: v }),
  checkEnebled = v => ({ type:CHECK_SUPPORT, payload: v });

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_SUPPORT:
      return { ...state, supported: action.payload }
    case CHECK_ENABLED:
      return { ...state, enabled: action.payload }
    default:
      return state
  }
};

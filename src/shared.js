const CHANGE = 'CHANGE';

const onChangeReducer = (state, { type, payload }) => {
  if (type === CHANGE) {
    return { ...state, value: payload };
  }
  return { ...state };
}

const initial = { value: '' };

export { CHANGE, onChangeReducer, initial };

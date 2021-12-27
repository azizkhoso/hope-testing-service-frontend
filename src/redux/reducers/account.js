export default function account(state = { teacher: 't1', student: 's1' }, action) {
  switch (action.type) {
    case 'LOGIN': return { ...state, ...action.payload };
    case 'LOGOUT': return {};
    default: return state;
  }
}

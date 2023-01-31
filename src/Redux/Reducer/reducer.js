import { CHANGE_CLASS } from "../action/action";

const INITIAL_STATE = {
  sobrebtn: false,
  projetosbtn: false,
  contatobtn: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_CLASS:
      return {
          // ...state,
          sobrebtn: action.payload.sobre,
          projetosbtn: action.payload.projeto,
          contatobtn: action.payload.contato,
      };
    default:
      return state;
  }
}

export default reducer;
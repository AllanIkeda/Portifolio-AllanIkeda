export const CHANGE_CLASS = 'CHANGE_CLASS';

export const changeClass = (sobre, contato) => ({
  type: CHANGE_CLASS,
  payload: {
    sobre: sobre,
    contato: contato,

  }
})
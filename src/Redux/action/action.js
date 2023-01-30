export const CHANGE_CLASS = 'CHANGE_CLASS';

export const changeClass = (sobre, projeto) => (
  {
  type: CHANGE_CLASS,
  payload: {
    sobre: sobre,
    projeto: projeto,
  }
})
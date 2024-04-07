const initState = {
  selected: [],
  all: [],
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'filter-new':
      return {...state, all: action.payload.filter}
    default:
      return state
  }
}

const initState = {}

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_MOVIE":
      console.log('added movie to list', action.movie)
      return state
      case 'CREATE_MOVIE_ERROR':
        console.log('create movie error', action.err)
        return state
    default:
      return state
  }
}

export default movieReducer

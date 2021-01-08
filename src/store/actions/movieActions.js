import { notification } from "antd"
export const createMovie = (movie) => {
  return (dispatch, getState, { getFirebase, getFirestore}) => {
    const firestore = getFirestore()
    firestore.collection('movies').add({
      ...movie,
      addedByFirstName: "Sean",
      addedByLastName: "Burrows",
      addedByID: 1234,
      addedAt: new Date()
    }).then(() => {
      notification.success({
        message: "Success",
        description:
          "You have successfully added " + movie.movieName + " to your list",
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
      dispatch({ type: 'CREATE_MOVIE', movie})
    }).catch((err) => {
      notification.error({
        message: "Error",
        description:
          "There was a problem adding " + movie.movieName + " to your list, please try again later",
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
      dispatch({ type: 'CREATE_MOVIE_ERROR', err })
    })
  }
}

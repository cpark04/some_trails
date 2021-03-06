import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import parksReducer from "./parks_reducer";
import trailsReducer from "./trails_reducer";
import reviewsReducer from "./reviews_reducer";
import photosReducer from "./photos_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  parks: parksReducer,
  trails: trailsReducer,
  reviews: reviewsReducer,
  photos: photosReducer
})

export default entitiesReducer;
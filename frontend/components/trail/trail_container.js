import { connect } from "react-redux";
import Trail from "./trail";
import { fetchTrail, fetchTrails } from "../../actions/trail_actions";
import { deleteReview } from "../../actions/review_actions";
import { fetchPhotos } from "../../actions/photo_actions";
import { fetchParks } from "../../actions/park_actions"


const mSTP = (state, ownProps) => {
  return {
    trail: state.entities.trails[ownProps.match.params.trailId],
    trails: Object.values(state.entities.trails),
    currentUser: state.session.id,
    photos: Object.values(state.entities.photos),
    parks: Object.values(state.entities.parks)
  }
}

const mDTP = (dispatch) => {
  return {
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
    fetchTrails: () => dispatch(fetchTrails()),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchParks: () => dispatch(fetchParks())
  }
}

export default connect(mSTP, mDTP)(Trail);
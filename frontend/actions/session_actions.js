import * as ApiUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const REMOVE_ERRORS = "REMOVE_ERRORS"


export const receiveCurrentUser= (currentUser)=>({
    type: RECEIVE_CURRENT_USER,
    currentUser
})
export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER  
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const login = (user) => (dispatch)=>(
    ApiUtil.login(user).then((user) => dispatch(receiveCurrentUser(user)),
        (errors) => (dispatch(receiveErrors(errors.responseJSON)))
    )
)

export const logout = () => (dispatch) => (
    ApiUtil.logout().then(() => dispatch(logoutCurrentUser()))
)

export const signup = (user) => (dispatch) => (
    ApiUtil.signup(user).then((user) => dispatch(receiveCurrentUser(user)),
        (errors) => (dispatch(receiveErrors(errors.responseJSON)))
    )
)



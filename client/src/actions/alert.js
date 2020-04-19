import uuid from 'uuid'
import { SET_ALERT, REMOVE_ALERT } from './type'

export const setSlert = (msg, alerType) => dispatch => {
    const id = uuidv4();
    dispatch({
        type: SET_ALERT,
        payload: {msg, alertType, id}
    })

}

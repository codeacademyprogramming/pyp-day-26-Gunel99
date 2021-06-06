import { ROOM_ACTIONS } from "../actions/const";

export const roomReducer = (state = initialData, action) => {
    switch (action.type) {
        case ROOM_ACTIONS.GET_ROOMS:
            return state;

        case ROOM_ACTIONS.ADD_RESERVATION:
            return state.map(room => {
                if(room.id === action.payload.roomId)
                    room.reservations.push(action.payload);

                return room;
            })
            
        default:
            break;
    }

    return state;
}


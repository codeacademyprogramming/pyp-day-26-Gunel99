import { IReservation } from "../../models/models";
import { ROOM_ACTIONS } from "./const";

export const addReservation = (reservation: IReservation) => {
    return {
        type: ROOM_ACTIONS.ADD_RESERVATION,
        payload: reservation,
    }
}
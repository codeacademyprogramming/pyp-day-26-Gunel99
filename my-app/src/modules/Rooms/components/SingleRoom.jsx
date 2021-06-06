import React from 'react';
import { IRoom } from "../../models/models";
import moment from 'moment';

interface IProps {
    coord: string;
    room: IRoom;
    onClick: Function;
}

export const SingleRoom: React.FC<IProps> = ({ coord, room, onClick }) => {
    
    const handleGetReservations = () => {
        return onClick(room);
    }

    const isRoomBusyNow = () => {
        const isBusy = room.reservations.some(r => moment(Date.now()).diff(moment(r.from), 'minutes') >= 0);
        return isBusy;
    }

    return (
        <rect
            className={`room ${isRoomBusyNow() ? "room__busy" : "room__available"}`}
            d={coord}
            onClick = {handleGetReservations}>
        </rect>
    )
}

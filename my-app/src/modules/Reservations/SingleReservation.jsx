import React from 'react';
import { IReservation } from '../models/models';

interface IProps {
    idx: number;
    reservation: IReservation;
}

export const SingleReservation: React.FC<IProps> = ({ idx, reservation }) => {
    
    return (
        <tr>
            <td>{idx}</td>
            <td>{reservation.reservedBy}</td>
            <td>{reservation.from}</td>
            <td>{reservation.to}</td>
            <td>{reservation.notes}</td>
        </tr>
    )
}


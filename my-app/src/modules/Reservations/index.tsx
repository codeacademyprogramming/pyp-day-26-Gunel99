import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import SingleReservation from './SingleReservation';
import { IRoom } from '../models/models';

export const Reservations = () => {
    interface IUrlParams {
        roomId: string
    }

    const room = useSelector((state: Array<IRoom>) => state.find(room => room.id === Number(roomId))!);

    const [update, setUpdate] = React.useState(false);

    const history = useHistory();

    return (

        <Container>
            <Table striped bordered hover className="mt-2">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Reserved by: </th>
                        <th>From: </th>
                        <th>To: </th>
                        <th>Notes: </th>
                    </tr>
                </thead>

                <tbody>
                    {room.reservations.map((r, idx) =>
                        <SingleReservation
                            reservation={r}
                            key={res.id}
                            idx={idx + 1}
                        />
                    )}
                    {room.reservations.length < 1 &&
                        <tr>
                            <td 
                                className="text-center"
                            >
                                Free
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>
        </Container>
    )
}


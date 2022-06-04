import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import * as React from 'react';
import { IRoom } from './modules';

interface IProps {
    list: Array<IRoom>;
}

export const RoomList:React.FC<IProps> = ({ list }) => {
    
    const renderRow = React.useCallback((room:IRoom) => (
        <TableRow>
                {room.reservations.map((reservation) => (
                    console.log(reservation)
                ))}
        </TableRow>
    ), []);
    
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Reserved By
                    </TableCell>
                    <TableCell>
                        From
                    </TableCell>
                    <TableCell>
                        To
                    </TableCell>
                    <TableCell>
                        Notes
                    </TableCell>
                    <TableCell>
                        Room Id
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>

            </TableBody>
        </Table>         
    )
}

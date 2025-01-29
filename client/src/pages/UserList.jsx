import React, { useContext, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from 'react-bootstrap';
import ToolBar from '../components/ToolBar';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchUsers } from '../http/userListAPI';

const UserList = observer(() => {
    const {user} = useContext(Context)
    const {users} = useContext(Context);
    useEffect(() => {
        fetchUsers().then(data => users.setUsers(data))
            .catch(error => console.error("Error fetching users:", error));
    }, [users]);

    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 250,
            editable: true,
        },
        {
            field: 'last_seen',
            headerName: 'Last seen',
            width: 250,
            editable: true,
        }
    ];

    return (
        <Container>
            <ToolBar disabled={!user.isAuth}/>
            <DataGrid 
                rows={users.users}
                columns={columns}
                getRowId={(row) => row.id}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 5,
                    },
                },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Container>
    )
})

export default UserList;
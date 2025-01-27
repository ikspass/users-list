import { Checkbox, FormControlLabel, FormGroup, Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const Table = ({props}) => {
    const columns = [
        {
            field: 'user_name',
            headerName: 'Name',
            width: 150,
            editable: true,
        },
        {
            field: 'user_email',
            headerName: 'Email',
            width: 250,
            editable: true,
        },
        {
            field: 'user_last_seen',
            headerName: 'Last seen',
            width: 250,
            editable: true,
        }
    ];
    const rows = props;
    console.log(props)
    return (
        
        <DataGrid 
            rows={rows}
            columns={columns}
            getRowId={(row) => row.user_id}
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
    )
}

export default Table;
import React, {useState} from "react";
import {DataGrid} from '@material-ui/data-grid';

const columns = [
	{field: 'id', headerName: 'ID', width: 70},
	{field: 'UserName', headerName: 'Username', width: 130},
	{field: 'website', headerName: 'Website', width: 130},
	//catchphrase
];

const UsersPaper = () => {
	const [users, setUsers] = useState([]);

	return <DataGrid rows={users} columns={columns} pageSize={10} checkboxSelection
					 onSelectionChange={(selection) => {

					 }
	}/>
}

export default UsersPaper

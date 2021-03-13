import React, {useState} from "react";
import {DataGrid} from '@material-ui/data-grid';

const columns = [
	{field: 'id', headerName: 'ID', width: 70},
	{field: 'UserName', headerName: 'Username', width: 130},
	{field: 'title', headerName: 'Title', width: 130},
	{field: 'completed', headerName: 'Completed', width: 130},
];

const TODOPaper = () => {
	const [todos, setTodos] = useState([]);

	return <DataGrid rows={todos} columns={columns} pageSize={10} checkboxSelection
					 onSelectionChange={(selection) => {

					 }
	}/>
}

export default TODOPaper

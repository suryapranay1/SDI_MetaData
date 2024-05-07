import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
} from '@mui/material';

import { Stack } from '@mui/joy';
import { useState } from 'react';
const columns = [
  {
    field: 'name',
    headerName: 'Name',

  },
  {
    field:'usermiald',
    headerName: 'User Mail Id',
    type:'string'
  },
  {
    field: 'CreatedDate',
    headerName: 'Created Date',
    sortable: true,
    type: 'string',
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: true,
  },
  {
    field:'usertype',
    headerName: 'User Type',
    type: 'string',
    sortable: true,
  },
  {
    field:'Organisation',
    headerName: 'Organisation',
    type: 'string',
    sortable: true,
  },
  {
    field: 'country',
    headerName: 'Country',
    type: 'string',
    sortable: true,
  },
  {
    field: 'state',
    headerName: 'State',
    type: 'string',
    sortable: true,
  }
];

function stat()
{
    const randomNumber= Math.floor(Math.random()*5);
    if(randomNumber<0.3)
        {
            return 'approved';
        }
    else if(randomNumber<0.6)
        {
            return 'pending';
        }
        else
        {
            return 'rejected';
        }
}
const generateRandomRows = (numRows: number) => {
  const rows = [];
  for (let i = 1; i <= numRows; i++) {
    rows.push({
      name: `user${i}`,
      usermiald: `user${i}@example.com`,
      CreatedDate: `${Math.floor(Math.random() * 30) + 1}-${
        Math.floor(Math.random() * 12) + 1
      }-${Math.floor(Math.random() * (2023 - 1990 + 1)) + 1990}`,
      usertype: Math.random() > 0.5 ? 'admin' : 'user',
      Organisation:Math.random() > 0.5 ? 'GCRS':'gcrs',
      country:Math.random()>0.5 ? 'Tajikisthan':'tajiksthan',
      state:Math.random()>0.5 ? 'Dushanbe' : 'Khatlon',
      status:stat(),
        });
  }
  return rows;
};

export default function DataTable2() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const rows = generateRandomRows(10);

  return (
    <Stack sx={{ height:'700', width: '80%', overflow: 'hidden' ,margin:'20px', ml:'8em'}}>
      <TableContainer sx={{ overflow: 'hidden'}} >
        <Table sx={{border:'1px solid #9a9c9b'}}>
          <TableHead>
            <TableRow sx={{ fontWeight: 'bold',}}>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  sx={{
                    fontWeight: '900',
                    textAlign: 'center',
                  }}
                >
                  <Stack direction={'row'} gap={'4px'}>
                    <p style={{fontWeight:'bold',fontSize:'1.12em',marginLeft:'1.2em'}}>{column.headerName}</p>
                  </Stack>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, rowIndex) => (
              <TableRow key={row.name}>
                {columns.map((column, colIndex) => (
                  <TableCell
                    key={colIndex}
                    sx={{
                      borderTop: '1px solid #9a9c9b',
                      textAlign: 'center',
                    }}
                  >
                    {column.field === 'UserMailId' &&
                    row.usermiald === null ? (
                      '-'
                    ) : (
                      row[column.field as keyof typeof row]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10,25]}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ overflow: 'hidden' }}
      />
    </Stack>
  );
}
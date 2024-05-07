import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import InputFileUpload from './fileupload';
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';
import MenuIconSideNavExample from './filterbutton';
import AppsMenu from './view';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ButtonAppBar() {
  const username='bharat'
  return (
    <Box sx={{ width:'100%',height:'sx' }}>
      <AppBar position="static" sx={{backgroundColor:"white"}}>
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
           {username && <InputFileUpload/>}
          <Input placeholder="search" variant="outlined" color="success" startDecorator={<SearchIcon/>} sx={{width:'.3',color:"green",ml:'8em',mr:'16em',flexGrow:'0.8',}} />
          <div>
            <AppsMenu/>
          </div>
          <div>
          <MenuIconSideNavExample/>
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
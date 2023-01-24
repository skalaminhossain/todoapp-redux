import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Navbaar = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{background:"#101010"}}>
                    <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{textAlign:"center"}}>
                         <h4>TODO APPLICATION</h4>
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navbaar;
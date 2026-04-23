import "./index.css";

import { AppBar, Toolbar, Typography } from '@mui/material';

export const TopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          7sith
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
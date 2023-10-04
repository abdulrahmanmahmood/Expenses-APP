import React from 'react';

const Appbar = () => {
  return (
    <div>
            <AppBar
          position="static"
          sx={{ ml: `${drawerWidth}px`, width: `calc(100% - ${drawerWidth}px)` }}
        >
          <Toolbar>
            <Link
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                "&:hover": { fontSize: "16.5px" },
              }}
              href="/"
              color="inherit"
            >
              My Expenses
            </Link>
            <Typography color="inherit" variant="body1" sx={{ mr: "20px" }}>
              AbdulRahman
            </Typography>
            <Avatar alt="" src={acpcImage} sx={{ width: 56, height: 56 }} />
          </Toolbar>
        </AppBar>
    </div>
  );
}

export default Appbar;

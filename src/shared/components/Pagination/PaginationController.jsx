import React, { useEffect } from "react";
import { Box, TablePagination, useMediaQuery, useTheme } from "@mui/material";

const PaginationController = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  itemsPerPageOptions = [10, 25, 50],
  label,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const customCSS = {
    "& .MuiTablePagination-toolbar": {
      paddingLeft: isMobile ? 0 : 2,
      paddingRight: isMobile ? 0 : 2,
    },
    "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows": {
      fontSize: isMobile ? "75%" : "100%",
    },
    "& .MuiSelect-select": {
      fontSize: isMobile ? "75%" : "100%",
    },
  };

  return (
    <Box
      marginTop={4}
      sx={{
        width: "100%",
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        backgroundColor:"coral"
      }}
    >
      <Box
        sx={{
          minWidth: isMobile ? 250 : "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TablePagination
          component="div"
          count={count}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          rowsPerPageOptions={itemsPerPageOptions}
          labelRowsPerPage={label}
          sx={{
            ...customCSS,
          }}
        />
      </Box>
    </Box>
  );
};

export default PaginationController;

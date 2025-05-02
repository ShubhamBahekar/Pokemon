import React, { useState } from 'react';
import { Box, Grid, TablePagination } from '@mui/material';

const PaginatedList = ({
  data = [],
  renderItem,
  itemsPerPageOptions = [10, 20, 50],
  label = 'Items per page:'
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(itemsPerPageOptions[0]);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box px={2} py={2}>
      <Grid container spacing={2} justifyContent="center">
        {paginatedData.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} xl={2.4}>
            {renderItem(item)}
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mt={2} >
        <TablePagination
          component="div"
          count={data.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={itemsPerPageOptions}
          labelRowsPerPage={label}
          
        />
      </Box>
    </Box>
  );
};

export default PaginatedList;

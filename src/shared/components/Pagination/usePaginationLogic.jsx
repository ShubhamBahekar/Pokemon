import React, { useEffect, useState } from 'react';
import { Box, Grid, TablePagination } from '@mui/material';

const usePaginationLogic = ({filterPokemonData=[],initialPerPage = 10}) =>{
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(initialPerPage);

  useEffect(()=>{
   console.log("Data...",filterPokemonData);
  },[filterPokemonData])


  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setTimeout(() => {
      setRowsPerPage(event.target.value);
      setPage(0);
      }, 0);
  };

  const paginatedData = filterPokemonData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    paginatedData
    }
};

export default usePaginationLogic;

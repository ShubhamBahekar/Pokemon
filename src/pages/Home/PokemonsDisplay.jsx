import Header from "../../Header/Header";
// import SearchBar from "./Components/SearchBar";
// import PokemonCard from "./Components/PaginationAndCard";
import SearchBar from "../../shared/components/SearchBar";
import Filter from "../../shared/components/Filter";
import PokemonCard from "../../shared/components/Card";
import CircularProgress from "@mui/material/CircularProgress";
import { pokemonContext } from "../../PokemonContextProvider/PokemonContextProvider";
import { useContext, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import usePaginationLogic from "../../shared/components/Pagination/usePaginationLogic";
import PaginationController from "../../shared/components/Pagination/PaginationController";
const PokemonsDisplay = () => {
  const { loading, filterPokemonData, fetchPokemonByName } =
    useContext(pokemonContext);
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    paginatedData,
  } = usePaginationLogic({ filterPokemonData, initialPerPage: 10 });

  useEffect(() => {
    console.log("Paginated Data", paginatedData);
  }, [paginatedData]);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            backgroundColor: "white",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Header />

          <Box sx={{ marginTop: "1rem" }}>
            <Stack
              direction={"row"}
              justifyContent="center"
              spacing={2}
              padding={"0.2rem"}
            >
              <SearchBar />
              <Filter />
            </Stack>
          </Box>

          <PokemonCard
            pokemonData={paginatedData}
            onPokemonClicked={fetchPokemonByName}
          />

          <PaginationController
            count={filterPokemonData.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            itemsPerPageOptions={[10, 25, 50]}
            label="Pokémons per page:"
          />
        </>
      )}
    </>
  );
};

export default PokemonsDisplay;

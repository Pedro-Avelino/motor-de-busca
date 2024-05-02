import React, { useState } from "react";
import axios from "axios";
import {
  IconButton,
  Pagination,
  ThemeProvider,
  CircularProgress,
} from "@mui/material";
import { OpenInNew, Search } from "@mui/icons-material";
import { ISearchResultProps } from "./types";
import AzulLogo from "../assets/images/azul-logo.png";
import {
  Container,
  Description,
  Divider,
  EmptyResults,
  FoundResults,
  LoadingContainer,
  LogoContainer,
  PaginationContainer,
  Pill,
  ResultsContainer,
  ResultsDescription,
  ResultsItem,
  ResultsTitle,
  ResultsTitleContainer,
  SearchBar,
  SearchBarContainer,
  Title,
  TitleContainer,
} from "./styles";
import theme from "../styles/theme/theme";

const App: React.FC = () => {
  const [queryState, setQueryState] = useState<string>("");
  const [resultsState, setResultsState] = useState<ISearchResultProps[]>([]);
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [currentPageState, setCurrentPageState] = useState<number>(1);
  const [totalPagesState, setTotalPagesState] = useState<number>(0);
  const [totalResultsState, setTotalResultsState] = useState<number>(0);
  const [searchInitiatedState, setSearchInitiatedState] =
    useState<boolean>(false);

  const resultsPerPage = 10;

  const handleSearch = async (page = 1) => {
    if (!queryState) return;
    setSearchInitiatedState(true);
    setIsLoadingState(true);
    const startIndex = (page - 1) * resultsPerPage + 1;
    const endpoint = `Pedir Código da URL no meu discord "pepeu1805"`;
    try {
      const response = await axios.get(endpoint);
      setResultsState(response.data.items);
      setCurrentPageState(page);
      const totalResultsCount = parseInt(
        response.data.searchInformation.totalResults,
        10
      );
      setTotalResultsState(totalResultsCount);
      const calculatedTotalPages = Math.ceil(
        totalResultsCount / resultsPerPage
      );
      setTotalPagesState(calculatedTotalPages);
    } catch (error) {
      console.error("Erro ao buscar dados: ", error);
      setResultsState([]);
    } finally {
      setIsLoadingState(false);
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <LogoContainer onClick={refreshPage}>
          <img src={AzulLogo} alt="LOGO" width={119} height={32} />
        </LogoContainer>
        <Divider />
        <TitleContainer>
          <Title>Motor de Busca</Title>
          <Description>Busque pela informação desejada.</Description>
        </TitleContainer>
        <SearchBarContainer>
          <SearchBar
            color="info"
            label="Buscar"
            placeholder="Digite o que você procura"
            variant="outlined"
            value={queryState}
            onChange={(e) => setQueryState(e.target.value)}
            fullWidth
          />
          <IconButton
            aria-label="delete"
            onClick={() => handleSearch(1)}
            color={"primary"}
          >
            <Search />
          </IconButton>
        </SearchBarContainer>
        {searchInitiatedState && (
          <FoundResults>
            Encontramos {totalResultsState} resultado
            {totalResultsState !== 1 && "s"} para sua busca
          </FoundResults>
        )}
        <ResultsContainer>
          {isLoadingState ? (
            <LoadingContainer>
              <CircularProgress size={50} />
            </LoadingContainer>
          ) : resultsState.length > 0 ? (
            resultsState.map((item, index) => (
              <ResultsItem key={index}>
                <ResultsTitleContainer>
                  <ResultsTitle>{item.title}</ResultsTitle>
                  <Pill
                    label="Ver artigo completo"
                    onClick={() => window.open(item.link, "_blank")}
                    icon={<OpenInNew />}
                    variant="outlined"
                    color="primary"
                    clickable
                    style={{ maxWidth: "fit-content" }}
                  />
                </ResultsTitleContainer>
                <ResultsDescription>{item.snippet}</ResultsDescription>

                <Divider />
              </ResultsItem>
            ))
          ) : searchInitiatedState ? (
            <EmptyResults>Nenhum resultado encontrado.</EmptyResults>
          ) : null}
        </ResultsContainer>
        {searchInitiatedState && totalPagesState > 0 && (
          <PaginationContainer>
            <Pagination
              color="secondary"
              count={totalPagesState}
              page={currentPageState}
              onChange={(event, page) => handleSearch(page)}
              size="large"
            />
          </PaginationContainer>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;

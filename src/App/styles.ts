import { Chip, TextField } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  min-height: calc(100vh);
  background: var(--background-header, linear-gradient(76deg, rgba(9, 18, 65, 0.96) 18.62%, rgba(16, 46, 98, 0.96) 71.81%));
  gap: 24px;
`;

const LogoContainer = styled.div`
    display: flex;
    cursor: pointer;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Title = styled.h1`
    color: #ffffff;
    font-family: "Helvetica Neue";
    font-size: 32px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin: 0;
`;

const FoundResults = styled.h2`
    color: #EBEBEB;
    font-family: "Helvetica Neue";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
`;

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Description = styled.h4`
    color: #ffffff;
    font-family: "Helvetica Neue";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin: 0;
`;

const SearchBarContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 16px;
`;

const SearchBar = styled(TextField)`
    background-color: #ffffff;
    border-radius: 8px !important;
`;

const ResultsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const ResultsItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const ResultsTitleContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`;

const ResultsTitle = styled.h3`
    color: #ffffff;
    font-family: "Helvetica Neue";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`;

const Pill = styled(Chip)`
    max-width: fit-content;
    margin-left: 16px;
`;

const ResultsDescription = styled.p`
    color: #ffffff;
    font-family: "Helvetica Neue";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.30);
`;

const EmptyResults = styled.h1`
    color: #ffffff;
    font-family: "Helvetica Neue";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const PaginationContainer = styled.div`
    display: flex;
    padding: 4px;
    background-color: #ffffff;
    border-radius: 8px;
    width: fit-content;
    align-self: center;
`;

export { 
    Container, 
    LogoContainer, 
    TitleContainer, 
    Title,
    FoundResults,
    LoadingContainer, 
    Description, 
    SearchBarContainer, 
    SearchBar, 
    ResultsContainer, 
    ResultsItem,
    ResultsTitleContainer,
    ResultsTitle,
    Pill, 
    ResultsDescription, 
    Divider,
    EmptyResults,
    PaginationContainer
};
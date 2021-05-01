import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Router from "./utils/router";
import DashBoardPage from "./pages/dashboard/DashBoardPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DashBoardPage />
    </QueryClientProvider>
  );
}

export default App;

import React from "react";
import "./App.css";
import Header from "./components/header";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from "./components/launches";
import ShowDetailsModal from "./common/show-launch-details";
import { GlobalProvider } from "./context/GlobalContext";

const client = new ApolloClient({
  uri: "http://192.168.0.106:2323/graphql",
});

function App() {
  return (
    <GlobalProvider>
      <ApolloProvider client={client}>
        <div className="min-h-screen w-full relative">
          <Header />
          <Launches />
        </div>
        <ShowDetailsModal />
      </ApolloProvider>
    </GlobalProvider>
  );
}

export default App;

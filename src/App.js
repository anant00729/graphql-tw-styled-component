import "./App.css";
import Header from "./components/header";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from "./components/launches";

const client = new ApolloClient({
  uri: "http://localhost:2323/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen w-full relative">
        <Header />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;

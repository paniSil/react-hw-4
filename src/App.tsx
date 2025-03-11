import { Suspense } from "react";
import "./App.css";
import MessageList from "./components/MessageComponent";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <h1>Message List:</h1>
      <ErrorBoundary>
        <Suspense fallback={<p>Loading...</p>}>
          <MessageList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;

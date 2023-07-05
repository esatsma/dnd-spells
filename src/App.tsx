import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ClassList from "./components/templates/ClassList/ClassList";
import SpellList from "./components/templates/SpellList/SpellList";
import { SpellDetailCard } from "./components/molecules/SpellDetailCard/SpellDetailCard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<ClassList />} />
          <Route path="/spells/:dndClass" element={<SpellList />} />
          <Route path="spells/details/:id" element={<SpellDetailCard />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("Where's my container?");
}
const root = createRoot(container);
root.render(<App />);

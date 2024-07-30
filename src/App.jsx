import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/developer/ui/home/Home";
import Single from "./components/pages/developer/ui/single/Single";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Post from "./components/pages/developer/dashboard/post/Post";
import { StoreProvider } from "./store/StoreContext";
import Category from "./components/pages/developer/dashboard/category/Category";
import Tag from "./components/pages/developer/dashboard/tag/Tag";
import { AnimatePresence } from "framer-motion";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/single' element={<Single />} />
              <Route path='/dashboard/post' element={<Post />} />
              <Route path='/dashboard/category' element={<Category />} />
              <Route path='/dashboard/tag' element={<Tag />} />
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

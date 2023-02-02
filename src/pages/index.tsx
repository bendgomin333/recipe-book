import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../shared/ui/layout";

const MainPage = lazy(() => import('./main'))
const RecipesPage = lazy(() => import('./recipes'))

export const Routing = () => {
  return (
    <>
      <Layout>

        {/* NEED TO: Create fallback for routing */}

        <Suspense fallback="load">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="recipes" element={<RecipesPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}
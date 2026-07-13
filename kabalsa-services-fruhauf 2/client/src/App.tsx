import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from './pages/Home';
import LegalNotice from './pages/LegalNotice';
import CGVI from './pages/CGVI';
import EspacesVerts from './pages/EspacesVerts';
import PiscineSpa from './pages/PiscineSpa';
import Piscine from './pages/Piscine';
import Jardin from './pages/Jardin';
import NosPacks from './pages/NosPacks';
import About from './pages/About';
import KaidanDetail from './pages/KaidanDetail';
import BahiaDetail from './pages/BahiaDetail';
import TinaDetail from './pages/TinaDetail';


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/piscine" component={Piscine} />
      <Route path="/jardin" component={Jardin} />
      <Route path="/nos-packs" component={NosPacks} />
      <Route path="/a-propos" component={About} />
      <Route path="/kaidan" component={KaidanDetail} />
      <Route path="/bahia" component={BahiaDetail} />
      <Route path="/tina" component={TinaDetail} />
      <Route path="/mentions-legales" component={LegalNotice} />
      <Route path="/cgvi" component={CGVI} />
      <Route path="/espaces-verts" component={EspacesVerts} />
      <Route path="/piscine-spa" component={PiscineSpa} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

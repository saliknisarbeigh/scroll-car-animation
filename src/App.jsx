import CarScrollSection from "./components/CarScrollSection";
  import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div>
      <Analytics />
      <CarScrollSection />
    </div>
  );
}

export default App;

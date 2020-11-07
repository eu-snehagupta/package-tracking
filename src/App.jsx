//components
import Header from "./components/organisms/Header";
import TrackForm from "./components/molecules/TrackForm";

//style
import "./css/style.css"

export default function App() {
  return (
    <div className="App">
      <Header />
      <TrackForm />
    </div>
  );
}

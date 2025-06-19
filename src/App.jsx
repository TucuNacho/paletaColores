import "bootstrap/dist/css/bootstrap.min.css";
import FormColores from "./components/FormColores";

function App() {
  return (
    <main
      className="text-center"
      style={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(to right, #8B0000, #2F4F4F)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "40px",
      }}
    >
      <FormColores />
    </main>
  );
}

export default App;

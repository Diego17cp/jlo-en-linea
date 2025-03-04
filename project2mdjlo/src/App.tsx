import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import "./App.css";
import { Layout } from "./components/Layout";
import { Section } from "./pages/Section";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />}></Route>
					<Route path="seccion/:id" element={<Section />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import "./App.css";
import { Layout } from "./components/Layouts/Layout";
import { Section } from "./pages/Section";
import { SectionLayout } from "./components/Layouts/SectionLayout";
import { Consultas } from "./components/Consultas";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />}></Route>
					<Route path="seccion" element={<SectionLayout />}>
                        <Route index element={<Section />} />
                        <Route path=":id" element={<Section />} />
                    </Route>
					<Route path="licencias">
						<Route path="consulta">
							<Route path=":id"
								element={<Consultas />}
							/>
						</Route>
					</Route>
					<Route path="transito">
						<Route path="consulta">
							<Route path=":id"
								element={<Consultas />}
							/>
						</Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import "./App.css";
import { Layout } from "./layouts/Layout";
import { Section } from "./pages/Section";
import { SectionLayout } from "./layouts/SectionLayout";
import { Consultas } from "./pages/Consultas";
import { NotFound } from "./pages/404";
import { GMunicipal } from "./pages/GMunicipal";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="seccion" element={<SectionLayout />}>
                        <Route index element={<Section />} />
                        <Route path=":id" element={<Section />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
                
                <Route path="licencias">
                    <Route path="consulta">
                        <Route path=":id" element={<Consultas />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
                
                <Route path="transito">
                    <Route path="consulta">
                        <Route path=":id" element={<Consultas />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="gmunicipal">
                    <Route path="consulta">
                        <Route path=":id" element={<GMunicipal />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

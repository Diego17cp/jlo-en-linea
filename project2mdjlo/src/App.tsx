import { Header } from "./components/header";
import { linksData } from "./utils";
import { LinkList } from "./components/LinkList";
function App() {
  return (
    <div>
      <Header />
      <LinkList data={linksData} />
    </div>
  );
}

export default App;

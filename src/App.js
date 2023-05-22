import "bootstrap/dist/css/bootstrap.min.css";
// import MateriRestRouter from "./Rest-Router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import MateriRedux from "./Redux";
library.add(fas);

function App() {
  return <MateriRedux />;
}

export default App;

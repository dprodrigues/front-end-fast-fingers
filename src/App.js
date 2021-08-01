import Routes from "./Routes";
import { GeneralProvider } from "./context/General";

const App = () => (
    <GeneralProvider>
        <Routes />
    </GeneralProvider>
);

export default App;

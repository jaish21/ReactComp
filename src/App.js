import './App.css';
import RTable from './components/RTable/RTable';
import { data, headerConfig } from './components/RTable/RTable.mock'


function App() {
  return (
    <RTable data={data} columnsConfig={headerConfig} />
  );
}

export default App;

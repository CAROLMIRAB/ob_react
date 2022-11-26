import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
//import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
        />
        {/* Componente propio*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
        <Ejemplo4 nombre='Martin'>
          <h3>contenido childrem</h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;

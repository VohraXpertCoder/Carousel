import { Carousel } from './components';
import { slides } from './samples/data.json';
import './App.css'

export const App = () => {
  return (
    <div className='app'>
      <Carousel  slides={slides}/>
      </div>
  );
}

export default App

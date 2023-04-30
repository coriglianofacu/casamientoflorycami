import './App.scss';
import { DressCode } from './components/dresscode/dresscode';
import { Form } from './components/form/form';
import { Frontpage } from './components/frontpage/frontpage';
import { GiftMap } from './components/map/giftmap';
import { SaveTheDate } from './components/savethedate/savethedate';

function App() {
  return (
    <div className="invitation">
        <Frontpage />
        <SaveTheDate />
        <DressCode />
        <Form />
        <GiftMap />
    </div>
  );
}

export default App;

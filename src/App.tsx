import dayjs from 'dayjs';
import Calendar from './Calendar';

function App() {
  return (
    <div className="App">
      <Calendar locale='en-US' value={dayjs('2024-4-14')} onChange={(date) => {
        alert(date.format('YYYY-MM-DD'));
      }}></Calendar>
    </div>
  );
}

export default App;

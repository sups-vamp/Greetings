
import './App.css';
import Greetingheader from './Components/greetingheader';

function App() {

let time = () => {
  time = new Date();
  time = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;

  return time;
}

let date = () => {
let date = new Date();
date = `${date.toDateString()}`;

return date;
}
  const greetingcal = () => {
    const dates = new Date();
    if (dates.getHours() < 12)   
    return "Good Morning!";
    else if (dates.getHours() >= 12 && dates.getHours < 19 )
    return "Good Afternoon!";
    else
    return "Good Evening!";
    
  }
  return (
    <div className="App">
      <Greetingheader wish = {greetingcal()} time={time()} date={date()} />
    </div>
  );
}

export default App;

import Myaddresse from './component/profile/Address.js';
import FullName from './component/profile/FullName.js';
import ProfilePhoto from './component/profile/ProfilePhoto';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Full Name:<FullName/></h1>
      <Myaddresse/>
      <ProfilePhoto/>

    </div>
  );
}

export default App;

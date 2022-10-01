import './App.css';
import Profile from './Profile/profile-component';
import img from './img/img.jpg';

function App() {
function sayName(name) {
  alert(name)
}
  return (
   <div>
    <Profile name="Mohammed" adresse="Anfa Casablanca Morocco" work="UX" sayName={sayName} >
      {img}
    </Profile>
</div>
  );
}

export default App;

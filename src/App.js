import './App.css';
import AdminHeader from './components/Admin/AdminHeader';
import Homeheader from './components/Home/Homeheader';
import { useSelector} from "react-redux"
import CreatorHeader from './components/Creator/CreatorHeader';
import UserHeader from './components/User/UserHeader';

function App() {
  const state = useSelector((state)=>({...state}));
  const header = state.course.head
  return (
    <div className="App">

    {(() => {
      switch(header){
        case 'MAIN':
          return <Homeheader/>

        case 'ADMIN':
        return <AdminHeader/>

        case 'CREATOR':
          return <CreatorHeader/>
        
        case 'USER':
          return <UserHeader/>

        default:
          return <Homeheader/>
      }})()}
    </div>
  );
}

export default App;

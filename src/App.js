import React, {useState, useEffect} from 'react';
import './App.css';
import Users from './component/users';
import PacmanLoader from 'react-spinners/PacmanLoader'


function App() {
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },3000)
    },[])
  return (
    <div className="App">
        {
            loading ? (
                <PacmanLoader size={50} color={"#e2af74"} loading={loading} />
            ) : (
         <Users/>
            )
        }
    </div>
  );
}

export default App;

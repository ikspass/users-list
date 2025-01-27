import logo from '../logo.svg';
import LoginForm from './LoginForm';
import ToolBar from './ToolBar';
import Table from './Table';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([])
    async function fetchData() {
        try {
            const response = await fetch('http://localhost:5000/api/data');
            if (!response.ok) {
                throw new Error('Сеть ответила с ошибкой: ' + response.status);
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    
    }
    useEffect(() => {
        fetchData(); // Вызываем fetchData при монтировании компонента
    }, []);
    return (
        <div className="container mt-80 gap-20 d-flex flex-column">
            <ToolBar />
            <Table props={data}/>
            <LoginForm />
        </div>
    );
}

export default App;

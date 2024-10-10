import { createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Login from './Form';
import Car from './car';
import Hello from './Hello';
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <login/>
    },
    {
        path: "/car",
        element: <car/>
    },
    {
        path: "/hello",
        element: <Hello/>
    },
    {
        path: "*",
        element: <div>Không tìm thấy web theo yêu cầu</div>
    }
]);
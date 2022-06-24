import { Sidebar } from "../components/Sidebar/Sidebar";
import '../styles/sidebar.scss';

export function Home() {
    return (
        <div>
            <Sidebar />
            <h1>HOME SCREEN</h1>
        </div>
    );
}
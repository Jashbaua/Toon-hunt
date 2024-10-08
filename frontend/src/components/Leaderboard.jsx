import { useState, useEffect } from "react";
import styles from "./Leaderboard.module.css";
import api from "../apiHandler";

export default function Leaderboard() {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            setData(await api.getData())
        }
        fetchData()
    }, []);
    useEffect(() => {
        setFilteredData(
            data.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm,data]);

    return (
        <>
            <h1 className={styles.mainHeader}>Leaderboard</h1>
            <div className={styles.tableContainer}>
                <input
                    type="text"
                    id="searchInput"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for name.."
                    className={styles.search}
                />
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Time Taken (s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.rank}>
                                <td>{item.rank}</td>
                                <td>{item.name}</td>
                                <td>{item.time_taken}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

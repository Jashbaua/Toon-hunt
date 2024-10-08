import { useState, useEffect } from "react";
import styles from "./Leaderboard.module.css";

const data = [
    { rank: 1, name: "John Doe", time: 45 },
    { rank: 2, name: "Jane Smith", time: 30 },
    { rank: 3, name: "Emily Johnson", time: 50 },
];

export default function Leaderboard() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        setFilteredData(
            data.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

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
                                <td>{item.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

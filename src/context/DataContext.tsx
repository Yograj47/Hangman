import type { Data } from "@/types/game";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

type DataContextType = {
    data: Data | null;
    loading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const DataProvider = ({ children }: { children: React.ReactNode }) => {

    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        axios.get("http://localhost:5000/data")
            .then((res) => {
                setData(res.data);
            }).catch((err) => {
                console.error("Error fetching data:", err);
            });

    }, []);

    return (
        <DataContext.Provider value={{ data, loading: !data }}>
            {children}
        </DataContext.Provider>
    )
}

export const useGameData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error("useGameData must be used within a DataProvider");
    }
    return context;
}

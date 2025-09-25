import { useGameData } from "@/context/DataContext"

export default function WordDisplay({ category, difficulty }: { category: string, difficulty: string }) {
    const { data, loading } = useGameData();

    if (loading) {
        return <div>Loading...</div>
    }
    console.log(data[category][difficulty]);
    return (
        <div>WordDisplay</div>
    )
}

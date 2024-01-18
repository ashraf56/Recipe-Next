
const getAllRecipe = async () => {
    const baseUrl = process.env.Base_URL
    try {
        const res = await fetch(`${baseUrl}/api/recipe`, {
            cache: "no-store"
        })
        if (!res.ok) {
            throw new Error("error")
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error);
    }
};

export default getAllRecipe;
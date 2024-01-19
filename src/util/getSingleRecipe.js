
const getSingleRecipe = async (id) => {
    const baseUrl = process.env.Base_URL
    try {
        const res = await fetch(`${baseUrl}/api/recipe/${id}`, {
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

export default getSingleRecipe;
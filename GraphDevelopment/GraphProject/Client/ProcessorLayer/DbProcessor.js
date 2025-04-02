const API_URL = "http://localhost:5000";

const DbProcessor = {
    async correctSentence(text) {
        debugger;
        try {
            const response = await fetch(`${API_URL}/correct`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text }),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.statusText}`);
            }

            const data = await response.json();
            return data.corrected;
        } catch (error) {
            console.error("Error correcting sentence:", error);
            return null;
        }
    }
};

export default DbProcessor;

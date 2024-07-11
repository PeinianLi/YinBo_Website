export default async function handler(req, res) {
    const { symbol } = req.body;
    const FINNHUB_API_KEY= "co9op29r01qgj7bnb510co9op29r01qgj7bnb51g";
    if (!symbol) {
        return res.status(400).json({ error: "Symbol is required." });
    }

    try {
        const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch stock data: ${response.statusText}`);
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching stock data:", error);
        res.status(500).json({ error: "Error fetching stock data." });
    }
}
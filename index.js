const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/orders', async (req, res) => {
    try {
        const response = await axios.get(\`\${process.env.SHOPIFY_STORE_URL}/admin/api/2023-07/orders.json?status=any\`, {
            headers: {
                'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

app.listen(port, () => {
    console.log(\`Server is running on port \${port}\`);
});

# shopify-proxy-api

Simple Express proxy for Shopify API

## Usage

1. Create a `.env` file and add:
```
SHOPIFY_STORE_URL=https://your-store.myshopify.com
SHOPIFY_ACCESS_TOKEN=your-shopify-access-token
```

2. Run:
```
npm install
npm start
```

Then access `/orders` endpoint to fetch order data from your Shopify store.

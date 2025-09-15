# BlockNinja2

This repository now provides a Next.js frontend and a Node.js/Express backend for the Block Ninja game. The UI and gameplay remain identical to the original HTML/CSS/JS version, but the game is rendered through React components and supports wallet connections.

## Structure

- `frontend` – Next.js application containing the game UI and logic.
- `backend` – Node.js/Express server with a simple health check endpoint.

## Development

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm start
```

The game supports wallet login with MetaMask and OKX Wallet on the Abstract mainnet (chain ID 2741).

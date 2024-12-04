const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Replace with your Blockfrost API key
const BLOCKFROST_API_KEY = process.env.BLOCKFROST_API_KEY;
const BLOCKFROST_BASE_URL = "https://cardano-mainnet.blockfrost.io/api/v0";

app.post('/api/create-wallet', async (req, res) => {
    try {
        // Generate keys using Cardano CLI (or other tools)
        exec('cardano-cli address key-gen --verification-key-file payment.vkey --signing-key-file payment.skey', (err) => {
            if (err) {
                return res.status(500).send('Error creating wallet keys');
            }
            res.send('Wallet created successfully');
        });
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
});

app.get('/api/balance/:address', async (req, res) => {
    const { address } = req.params;
    try {
        const response = await axios.get(`${BLOCKFROST_BASE_URL}/addresses/${address}`, {
            headers: { project_id: BLOCKFROST_API_KEY },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching balance');
    }
});

app.post('/api/send-transaction', async (req, res) => {
    const { fromAddress, toAddress, amount } = req.body;
    try {
        // Generate and send the transaction using Cardano CLI
        exec(
            `cardano-cli transaction build --tx-in ${fromAddress} --tx-out ${toAddress}+${amount} --out-file tx.raw`,
            (err) => {
                if (err) {
                    return res.status(500).send('Error building transaction');
                }
                res.send('Transaction sent successfully');
            }
        );
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

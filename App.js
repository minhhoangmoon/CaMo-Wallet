import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState('');
    const [toAddress, setToAddress] = useState('');
    const [amount, setAmount] = useState('');

    const fetchBalance = async () => {
        const response = await fetch(`http://<your-backend-url>/api/balance/${address}`);
        const data = await response.json();
        setBalance(data.amount);
    };

    const sendTransaction = async () => {
        await fetch('http://<your-backend-url>/api/send-transaction', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fromAddress: address, toAddress, amount }),
        });
        alert('Transaction Sent');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cardano Wallet</Text>
            <TextInput
                style={styles.input}
                placeholder="Your Address"
                onChangeText={setAddress}
            />
            <Button title="Check Balance" onPress={fetchBalance} />
            <Text style={styles.balance}>Balance: {balance} ADA</Text>
            <TextInput
                style={styles.input}
                placeholder="To Address"
                onChangeText={setToAddress}
            />
            <TextInput
                style={styles.input}
                placeholder="Amount"
                keyboardType="numeric"
                onChangeText={setAmount}
            />
            <Button title="Send Transaction" onPress={sendTransaction} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    input: { width: '100%', borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
    balance: { fontSize: 18, marginTop: 10, marginBottom: 20 },
});

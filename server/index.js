require('dotenv').config();


const axios = require('axios');
const express = require("express");
const cors = require("cors");
const { admin, db } = require("./firebase"); 
const { verificarToken } = require("./auth");

const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'https://urbanity.onrender.com']
}));
app.use(express.json());

// Rota de login para obter o token do Firebase (Método GET)
app.get("/protegido", async (req, res) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).send("Token ausente");

  try {
    const user = await verificarToken(token);
    res.send(user.email); 
  } catch (err) {
    res.status(401).send("Token inválido");
  }
});

// Rota para salvar usuário (Método POST)
app.post("/usuarios", async (req, res) => {
  const { uid, nome, email } = req.body;

  if (!uid || !email) {
    return res.status(400).json({ error: "uid e email são obrigatórios." });
  }

  try {
    const userRef = db.collection("usuarios").doc(uid);
    await userRef.set({
      nome: nome || null,
      email,
      criadoEm: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    return res.status(200).json({ message: "Usuário salvo com sucesso." });
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
    return res.status(500).json({ error: "Erro interno ao salvar usuário." });
  }
});


// Inicia servidor na porta 3001
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});

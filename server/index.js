require('dotenv').config();

const express = require("express");
const cors = require("cors");
const { admin, db } = require("./firebase");
const { verificarToken } = require("./auth");

const app = express();

// CORS: aceita todos os subdomínios da Vercel do seu projeto
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      "https://urbanity.vercel.app", // domínio fixo
    ];
    const vercelPreviewRegex = /^https:\/\/urbanity-[a-z0-9]+\.vercel\.app$/;

    if (!origin || allowedOrigins.includes(origin) || vercelPreviewRegex.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Preflight manual para /api/usuarios (recomendado em alguns casos)
app.options('/api/usuarios', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  return res.sendStatus(200);
});

// Rota protegida de exemplo
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

// Rota de cadastro de usuário (sem validações)
app.post("/api/usuarios", async (req, res) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).send("Token ausente");

  try {
    const decoded = await verificarToken(token);
    const { uid, nome, email } = req.body;

    const userRef = db.collection("usuarios").doc(uid);
    await userRef.set({
      nome,
      email,
      criadoEm: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    return res.status(200).json({ message: "Usuário salvo com sucesso." });
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
    return res.status(401).json({ error: "Token inválido ou erro interno." });
  }
});

// Inicializa servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});

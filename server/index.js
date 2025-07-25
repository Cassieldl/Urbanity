require('dotenv').config();

const { admin, db } = require("./firebase");
const { verificarToken } = require("./auth");
const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      "https://urbanity.vercel.app",
      "https://urbanity-olive.vercel.app"
    ];

    if (!origin || allowedOrigins.includes(origin)) {
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
app.options("*", cors(corsOptions));


// Rota protegida
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

// Salvar usuário
app.post("/api/usuarios", async (req, res) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).send("Token ausente");

  try {
    const decoded = await verificarToken(token);
    const { uid, nome, email } = req.body;

    if (!uid || !email) {
      return res.status(400).json({ error: "uid e email são obrigatórios." });
    }

    const userRef = db.collection("usuarios").doc(uid);
    await userRef.set({
      nome: nome || null,
      email,
      criadoEm: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    return res.status(200).json({ message: "Usuário salvo com sucesso." });
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
    return res.status(401).json({ error: "Token inválido ou erro interno." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});

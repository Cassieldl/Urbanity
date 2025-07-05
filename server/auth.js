const { admin } = require("./firebase");

async function verificarToken(idToken) {
  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    return decoded;
  } catch (err) {
    throw new Error("Token inválido");
  }
}

module.exports = { verificarToken };
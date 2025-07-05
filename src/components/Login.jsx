import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const apiKey = "AIzaSyDX6-l6Xo1v65CnZ41scxhuOhvLqkJKZxs"; 
    try {

      axios.get("/api/protegido", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });


      const res = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          email,
          password,
          returnSecureToken: true
        }
      );
      const token = res.data.idToken;
      localStorage.setItem("token", token);

      // Faz uma chamada para rota protegida no backend
      const resp = await axios.get("http://localhost:3001/protegido", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert(resp.data);
    } catch (err) {
      alert("Erro: " + err.response.data.error.message);
    }
  };

  return (
    <div>
      <h2>Login Firebase</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;

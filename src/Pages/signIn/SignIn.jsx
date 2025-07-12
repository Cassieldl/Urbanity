import api from '../api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box, Button, Checkbox, CssBaseline, FormControlLabel,
  Divider, FormLabel, FormControl, Link, TextField,
  Typography, Stack, Card as MuiCard
} from '@mui/material';
import { styled } from '@mui/material/styles';

import ForgotPassword from './components/ForgotPassword';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import { GoogleIcon } from './components/CustomIcons';

import { loginFirebase } from '../../../server/loginFirebase';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles?.('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles?.('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [open, setOpen] = useState(false);

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateInputs = () => {
    let isValid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage('Por favor, informe um e-mail válido.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password || password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('A senha deve ter pelo menos 6 caracteres.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); 

    if (!validateInputs()) return;

    try {
      const idToken = await loginFirebase(email, password);
      localStorage.setItem("token", idToken);

      const response = await axios.get("/protegido", {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      alert("Bem-vindo! ");
      navigate("/dashboard");

    } catch (err) {
       let errorMessage = "Ocorreu um erro desconhecido. Por favor, tente novamente.";

    // Tratamento de Erros do Axios (resposta do servidor)
    if (err.response) {
      console.log('Erro de resposta do servidor:', err.response); 

      if (err.response.status === 400) {
        if (err.response.data?.error?.message === 'INVALID_LOGIN_CREDENTIALS') {
          errorMessage = 'Usuário ou senha incorretos. Por favor, verifique suas informações.';
        } else if (err.response.data) {
          errorMessage = err.response.data.message || err.response.data.error || 'Dados de login inválidos.';
        } else {
          errorMessage = 'Requisição inválida. Verifique os dados enviados.';
        }
      } else if (err.response.status === 401) {
        errorMessage = "Acesso não autorizado. Você não tem permissão ou sua sessão expirou.";
      } else if (err.response.status === 403) {
        errorMessage = "Acesso proibido. Você não tem as permissões necessárias.";
      } else if (err.response.status >= 500) {
        errorMessage = "Ocorreu um erro interno no servidor. Tente novamente mais tarde.";
      } else {
        errorMessage = `Erro do servidor (${err.response.status}): ${err.response.data?.message || 'Ocorreu um erro na requisição.'}`;
      }
    }

    // Tratamento de Erros do Firebase
    else if (err.code) { 
      console.log('Erro de código Firebase:', err.code); 
      switch (err.code) {
        case 'auth/invalid-email':
          errorMessage = 'O endereço de e-mail está mal formatado.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'Sua conta foi desativada.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'Não há usuário com este e-mail.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Senha incorreta.';
          break;
        case 'auth/invalid-credential': 
          errorMessage = 'Usuário ou senha inválidos. Por favor, verifique suas informações.';
          break;
        
        case 'INVALID_LOGIN_CREDENTIALS':
          errorMessage = 'Usuário ou senha incorretos. Por favor, verifique suas informações.';
          break;
        default:
          errorMessage = `Erro de autenticação: ${err.message}`;
          break;
      }
    }
    else {
      console.log('Erro de rede ou desconhecido:', err); 
      errorMessage = `Erro de conexão: ${err.message || 'Não foi possível conectar ao servidor. Verifique sua conexão.'}`;
    }

    alert("Erro: " + errorMessage);
  }
};

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Entrar
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="seu@email.com"
                autoComplete="email"
                required
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Senha</FormLabel>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                required
                fullWidth
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Manter-me conectado"
            />

            <ForgotPassword open={open} handleClose={handleClose} />

            <Button type="submit" fullWidth variant="contained">
              Entrar
            </Button>

            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              Esqueci minha senha
            </Link>
          </Box>

          <Divider>ou</Divider>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Google')}
              startIcon={<GoogleIcon />}
            >
              Entrar com Google
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              Não tem uma conta?{' '}
              <Link href="/signup" variant="body2">
                Cadastrar-se
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
    </AppTheme>
  );
}

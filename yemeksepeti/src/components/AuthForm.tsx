import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Container, Typography, Grid, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Define types for form data
interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const [registerData, setRegisterData] = useState<RegisterFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
  });

  const [isLogin, setIsLogin] = useState<boolean>(true); 
  const [error, setError] = useState<string>(''); 
  const [success, setSuccess] = useState<string>(''); 
  const navigate = useNavigate();

  // Handle input change for both login and register forms
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (isLogin) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setRegisterData({
        ...registerData,
        [name]: value,
      });
    }
  };

  // Handle form submission for both login and register
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      const graphqlQuery = {
        query: `
          mutation {
            signIn(email: "${formData.email}", password: "${formData.password}") {
              user {
                firstName
                lastName
                email
              }
            }
          }
        `,
      };

      try {
        const response = await axios.post('http://10.0.0.25:8000/graphql/', graphqlQuery, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const user = response.data.data.signIn.user;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user)); 
          setSuccess('Giriş başarılı!');
          navigate('/');
          setError('');
        } else {
          setError('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
          setSuccess('');
        }
      } catch (err: any) {
        console.error('Giriş hatası:', err.response ? err.response.data : err.message);
        setError('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
        setSuccess('');
      }
    } else {
      if (registerData.password !== registerData.confirmPassword) {
        setError('Şifreler eşleşmiyor.');
        return;
      }

      const graphqlQuery = {
        query: `
          mutation {
            createUser(
              firstName: "${registerData.firstName}",
              lastName: "${registerData.lastName}",
              email: "${registerData.email}",
              password: "${registerData.password}",
              birthDate: "${registerData.birthDate}"
            ) {
              user {
                id
                email
              }
            }
          }
        `,
      };

      try {
        const response = await axios.post('http://10.0.0.25:8000/graphql/', graphqlQuery, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        setSuccess('Kayıt başarılı! Artık giriş yapabilirsiniz.');
        setError('');
        setIsLogin(true); // Switch back to login form after successful registration
      } catch (err: any) {
        console.error('Kayıt hatası:', err.response ? err.response.data : err.message);
        setError('Kayıt başarısız. Lütfen bilgilerinizi kontrol edin.');
        setSuccess('');
      }
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '120px' }}>
      <Typography variant="h6" gutterBottom>
        {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {!isLogin && (
            <>
              <Grid item xs={12}>
                <TextField
                  label="Ad"
                  variant="outlined"
                  fullWidth
                  name="firstName"
                  value={registerData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Soyad"
                  variant="outlined"
                  fullWidth
                  name="lastName"
                  value={registerData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Doğum Tarihi"
                  variant="outlined"
                  fullWidth
                  name="birthDate"
                  value={registerData.birthDate}
                  onChange={handleInputChange}
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
            </>
          )}
          <Grid item xs={12}>
            <TextField
              label="E-posta"
              variant="outlined"
              fullWidth
              name="email"
              value={isLogin ? formData.email : registerData.email}
              onChange={handleInputChange}
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Şifre"
              variant="outlined"
              fullWidth
              name="password"
              value={isLogin ? formData.password : registerData.password}
              onChange={handleInputChange}
              type="password"
              required
            />
          </Grid>
          {!isLogin && (
            <Grid item xs={12}>
              <TextField
                label="Şifreyi Onaylayın"
                variant="outlined"
                fullWidth
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleInputChange}
                type="password"
                required
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
            </Button>
          </Grid>
          {error && <Grid item xs={12}><Alert severity="error" sx={{ mt: 2 }}>{error}</Alert></Grid>}
          {success && <Grid item xs={12}><Alert severity="success" sx={{ mt: 2 }}>{success}</Alert></Grid>}
        </Grid>
      </form>
      <Grid container justifyContent="center" sx={{ mt: 2 }}>
        <Button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Hesabınız yok mu? Kaydolun' : 'Zaten bir hesabınız var mı? Giriş Yapın'}
        </Button>
      </Grid>
    </Container>
  );
};

export default LoginPage;

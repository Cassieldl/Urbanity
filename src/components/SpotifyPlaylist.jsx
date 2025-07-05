import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpotifyPlaylist from './SpotifyPlaylist'; // O componente que já criamos

const SpotifyWrapper = () => {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await axios.get('http://localhost:3001/spotify/token');
        setToken(res.data.accessToken);
      } catch (error) {
        console.error('Erro ao buscar token do backend:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, []);

  if (loading) return <p>Carregando token do Spotify...</p>;
  if (!token) return <p>Erro ao obter token do Spotify.</p>;

  return (
    <SpotifyPlaylist
      playlistId="4PgfFTQXF0UJBxyPUVUMgF?si=bfa9c9e5b7db4d60" // substitua pela sua playlist
      accessToken={token}
    />
  );
};

export default SpotifyWrapper;

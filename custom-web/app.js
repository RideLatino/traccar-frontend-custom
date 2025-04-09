// JS personalizado para el mapa Life360-style

const serverUrl = 'https://traccar-producción-3522.up.railway.app'; // URL de tu Traccar en Railway

async function login(user, pass) {
  const response = await fetch(`${serverUrl}/api/session`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: user, password: pass })
  });

  if (!response.ok) {
    throw new Error('Error al iniciar sesión');
  }

  const data = await response.json();
  console.log('Sesión iniciada correctamente:', data);
  return data;
}

async function obtenerDispositivos() {
  const response = await fetch(`${serverUrl}/api/devices`, {
    credentials: 'include'
  });

  if (!response.ok) {
    throw new Error('No se pudieron obtener los dispositivos');
  }

  const dispositivos = await response.json();
  console.log('Dispositivos:', dispositivos);
  return dispositivos;
}

// Ejemplo de uso (borrar o ajustar para uso real)
login('admin', 'admin').then(() => {
  obtenerDispositivos();
});

const serverVars = {
  authUrl: '#{authUrl}#',
  apiUrl: '#{apiUrl}#',
};

const localVars = {
  authUrl: 'local_auth_url',
  apiUrl: 'https://localhost:5001',
};

export function getConfiguration() {
  if (process.env.NODE_ENV === 'production') {
    return serverVars;
  }

  return localVars;
}

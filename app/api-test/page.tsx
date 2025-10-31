'use client';
import { useEffect, useState } from 'react';

export default function ApiTest() {
  const [data, setData] = useState<any>(null);
  const apiBase = process.env.NEXT_PUBLIC_API_BASE;

  useEffect(() => {
    fetch(`${apiBase}/healthz`)
      .then(res => res.json())
      .then(setData)
      .catch(e => setData({ error: e.message }));
  }, [apiBase]);

  return (
    <main style={{ padding: 24 }}>
      <h1>API Test</h1>
      <p><strong>Backend:</strong> {apiBase}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}

// components/AuthForm.jsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthForm = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/auth/${type}`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setMsg(`${type === 'signup' ? 'Account created' : 'Login successful'}`);
      if (type === 'signin') router.push('/');
    } else {
      setMsg(data.error || 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-12 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">{type === 'signup' ? 'Sign Up' : 'Sign In'}</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-3 p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-primary w-full">
        {type === 'signup' ? 'Sign Up' : 'Sign In'}
      </button>
      {msg && <p className="mt-4 text-center text-sm text-red-500">{msg}</p>}
    </form>
  );
};

export default AuthForm;

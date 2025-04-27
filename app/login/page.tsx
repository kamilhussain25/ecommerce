// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import { login } from '@/lib/api'

// export default function LoginPage() {
//   const router = useRouter()
//   const [form, setForm] = useState({ email: '', password: '' })
//   const [error, setError] = useState('')

//   const handleSubmit = async () => {
//     // Client-side validation
//     if (!form.email || !form.password) {
//       setError('Please enter both email and password');
//       return;
//     }

//     try {
//       const res = await login(form);
//       localStorage.setItem('token', res.data.token);
//       router.push('/');
//     } catch (err) {
//       const errorMessage = err.response?.data?.message || 'Invalid email or password';
//       setError(errorMessage);  // Display more detailed error message
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       {error && <p className="text-red-500 mb-2">{error}</p>}
//       <div className="space-y-2">
//         <Input
//           placeholder="Email"
//           value={form.email}
//           onChange={e => setForm({ ...form, email: e.target.value })}
//         />
//         <Input
//           placeholder="Password"
//           type="password"
//           value={form.password}
//           onChange={e => setForm({ ...form, password: e.target.value })}
//         />
//         <Button onClick={handleSubmit}>Login</Button>
//       </div>
//     </div>
//   )
// }


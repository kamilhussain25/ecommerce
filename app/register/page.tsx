// const handleSubmit = async () => {
//     const name = form.name.trim()
//     const lastname = form.lastname.trim()
//     const email = form.email.trim()
//     const password = form.password.trim()
  
//     console.log('🚨 Form Values:', {
//       name, lastname, email, password
//     })
  
//     if (!name || !lastname || !email || !password) {
//       alert('All fields are required!')
//       return
//     }
  
//     try {
//       await register({ name, lastname, email, password })
//       alert('Registration successful!')
//     } catch (err: any) {
//       console.error('❌ Registration Error:', err)
//       const errorMessage = err.response?.data?.message || 'Registration failed!'
//       alert(errorMessage)
//     }
//   }
  
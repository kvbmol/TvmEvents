import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Your config file
import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      // Redirect to events
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <input {...register("email")} type="email" placeholder="Email" className="w-full p-3 border rounded mb-4" />
      <input {...register("password")} type="password" placeholder="Password" className="w-full p-3 border rounded mb-4" />
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">Sign In</button>
    </form>
  );
}

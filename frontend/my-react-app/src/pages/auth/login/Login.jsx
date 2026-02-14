import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from "../../../schema/authSchemas";
import { authAPI } from "../../../api/auth.js";
import { useAuth } from '../../../hooks/useAuth.js';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    setApiError('');
    try {
      const response = await authAPI.login(data.email, data.password);
      if (response.token) {
        localStorage.setItem('token', response.token);
        login(response);
      }
      navigate('/home');
    } catch (err) {
      setApiError(err.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] p-6 selection:bg-[#FFE2C6]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[350px] h-[350px] bg-[#FFE2C6] rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="relative z-10 w-full max-w-[420px]">
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-white/60 p-10 backdrop-blur-md">
          
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black text-[#1F2937] tracking-tight">
              Sign In<span className="text-[#FF7A00]">.</span>
            </h2>
          </div>

          {apiError && (
            <div className="mb-5 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
              <p className="text-sm text-red-700 font-medium">{apiError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-widest font-bold text-[#6B7280] ml-1">
                Email Address
              </label>
              <input
                type="email"
                {...register('email')}
                className={`w-full px-5 py-4 bg-[#F3F4F6] border-2 rounded-2xl text-[#1F2937] transition-all focus:bg-white outline-none ${
                  errors.email 
                    ? 'border-red-400 focus:border-red-500' 
                    : 'border-transparent focus:border-[#FF7A00]'
                }`}
                placeholder="Enter email"
              />
              {errors.email && (
                <p className="text-xs text-red-600 ml-1 mt-1 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-widest font-bold text-[#6B7280] ml-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register('password')}
                  className={`w-full px-5 py-4 bg-[#F3F4F6] border-2 rounded-2xl text-[#1F2937] transition-all focus:bg-white outline-none placeholder:text-gray-400 ${
                    errors.password 
                      ? 'border-red-400 focus:border-red-500' 
                      : 'border-transparent focus:border-[#FF7A00]'
                  }`}
                  placeholder="••••••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#FF7A00] transition-colors p-2"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.323 7.943 7.243 4.5 12 4.5c4.757 0 8.677 3.443 9.964 7.878.085.292.085.586 0 .878C20.677 17.057 16.757 20.5 12 20.5c-4.758 0-8.678-3.443-9.964-7.878z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-600 ml-1 mt-1 font-medium">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#1F2937] hover:bg-[#FF7A00] text-white font-bold py-4 rounded-2xl transition-all duration-500 shadow-lg group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="flex items-center justify-center gap-2">
                {isSubmitting ? 'Authenticating...' : 'Sign In'}
                {!isSubmitting && <span className="group-hover:translate-x-1 transition-transform">→</span>}
              </span>
            </button>
          </form>

          <div className="mt-10 pt-6 border-t border-gray-100 text-center text-sm">
            <p className="text-[#6B7280]">
              New here? <Link to="/register" className="text-[#FF7A00] font-bold">Create account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z.object({
  fullName: z
  .string()
  .min(1, 'Full name is required')
  .min(6, 'Full name must be at least 6 characters'),
  telNo: z.int(),
  address: z
  .string()
  .min(1, 'Address is required')
  .min(6, 'Address must be at least 6 characters'),
  
  
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  role: z.enum(['customer', 'vendor', 'rider'], {
    required_error: 'Please select a role',
  }),
});
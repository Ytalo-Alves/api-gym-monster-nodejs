import z from "zod";


export const createUserSchema = z.object({
  name: z.string(),
  email:  z.email(),
  password: z.string().min(6),
  role: z.enum(['admin', 'trainer', 'staff']).default('admin')
})

export type CreateUserInput = z.infer<typeof createUserSchema>


export const updatedUserSchema = z.object({
  name: z.string().optional(),
  email: z.email().optional()
})

export type UpdateUserSchema = z.infer<typeof updatedUserSchema>
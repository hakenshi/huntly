import z from "zod";

const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(6)
})

const registerSchama = loginSchema.extend({
    confirmPassword: z.string().min(6)
})

export { loginSchema, registerSchama }

export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchama>
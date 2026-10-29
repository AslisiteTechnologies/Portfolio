import { z } from 'zod'

export const inquirySchema = z.object({
  name: z.string().min(2,'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  projectType: z.string().min(1,'Choose a project type.'),
  budget: z.string().min(1,'Please select an approximate budget.'),
  timeline: z.string().min(1,'Please select an ideal timeline.'),
  message: z.string().min(20,'Tell us a little more (at least 20 characters).'),
})

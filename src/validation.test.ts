import { describe, expect, it } from 'vitest'
import { inquirySchema } from './validation'

describe('inquiry form validation', () => {
  it('accepts a complete inquiry', () => {
    expect(inquirySchema.safeParse({name:'Alex Lee',email:'alex@example.com',projectType:'Private residence',budget:'Under $250k',timeline:'Within 6 months',message:'We are considering a careful renovation.'}).success).toBe(true)
  })
  it('rejects missing fields, malformed email and a short project note', () => {
    expect(inquirySchema.safeParse({name:'A',email:'not-an-email',projectType:'',budget:'',timeline:'',message:'Short'}).success).toBe(false)
  })
})

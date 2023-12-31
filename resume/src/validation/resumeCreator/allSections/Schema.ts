import * as z from "zod";
import { formMessage } from "./Message";

export const formSchema = z.object({
  photo: z.string().optional(),
  name: z.string().optional(),
  surname: z.string().optional(),
  phoneNumber: z
    .string()
    .regex(
      new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
      { message: formMessage.phoneNumber.invalid }
    )
    .optional(),
  email: z.string().email({ message: formMessage.email.invalid }).optional(),
  websiteURL: z.string().optional(),
});

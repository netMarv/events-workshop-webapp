import { z } from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, "Titel muss mindestens 3 Zeichen lang sein"),
  description: z
    .string()
    .min(3, "Beschreibung muss mindestens 3 Zeichen lang sein")
    .max(600, "Beschreibung muss weniger als 600 Zeichen lang sein"),
  location: z
    .string()
    .min(3, "Ort muss mindestens 3 Zeichen lang sein")
    .max(100, "Ort muss weniger als 100 Zeichen lang sein"),
  imageUrl: z.string().url(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});

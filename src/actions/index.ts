import { defineAction, z } from "astro:actions";
import { supabase } from "@lib/supabase.ts";

export const server = {
  workshop: defineAction({
    accept: "form",
    input: z.object({
      title: z.string(),
      teaser: z.string(),
      owner:z.string().email(),
      description: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      location: z.string(),
      startTime: z.string(),
      closingTime: z.string(),
      mode:z.string()
    }),
    handler: async ({title,teaser,owner,description,startDate,endDate,startTime,closingTime,mode,location }) => {
      // call a mailing service, or store to a database
      console.log({title,teaser,description,startDate, owner,endDate,startTime,closingTime, location, mode });

      const { data, error } = await supabase
        .from('workshops')
        .insert([
          {title,teaser,description,startDate, owner,endDate,startTime,closingTime, location, mode },
        ])
        .select()



      return { success: true, data, error };
    },
  }),
};
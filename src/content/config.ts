// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});



const trainingCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    teaser: z.string(),
    snippet: z.string(),
    description:z.string(),
    numberOfDays:z.number().default(1),
    duration:z.number().default(40),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Skyfusion'),
    authorLink:z.string().default(""),
    deadline:z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    status: z.enum(['Paid','Free']).default('Free'),
    content: z.array(z.object({
      title: z.string(),
      description: z.string(),

    })),
    workshopSecurityCode:z.string(),
    capstoneProjects:z.optional(z.number().default(0)),
    actualPrice: z.optional(z.number()),
    discount: z.optional(z.number()),
    instructorBio: z.string().default(''),
    instructorImage:z.string().default(''),
    learn:z.array(z.string()),
    requirements:z.array(z.string()),
    workshopDetails: z.optional(z.object(
      {
        startDate: z.string(),
        endDate: z.string(),
        location: z.string(),
        startTime: z.string(),
        breakTime: z.string(),
        closingTime: z.string(),
        otherDetails: z.optional(z.string()),

      }
    ),)
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
  'training':trainingCollection,
};
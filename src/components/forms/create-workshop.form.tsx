import { useState, useEffect } from "react";
import { supabase } from "@lib/supabase.ts";
import { z } from "zod";
import { actions, getActionProps } from "astro:actions";

// Define validation schema using Zod
const workshopSchema = z.object({
  title: z.string().min(10).max(100),
  teaser: z.string().min(10).max(100),
  description: z.string(),
  startDate: z.string().nonempty("Start date is required"),
  endDate: z.string().nonempty("End date is required"),
  startTime: z.string().nonempty("Start time is required"),
  closingTime: z.string().nonempty("Closing time is required"),
  mode: z.enum(["In-Person", "Virtual", "Hybrid"]),
  location: z.string().nonempty("Location is required"),
});

export default function CreateWorkshopForm({ owner }: { owner: string }) {
  const [message, setMessage] = useState<string>();
  const [workshopsCount, setWorkshopsCount] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {}, []);

  const validateForm = (formData: FormData) => {
    const formObject = Object.fromEntries(formData);
    const result = workshopSchema.safeParse(formObject);

    if (!result.success) {
      const newErrors = result.error.errors.reduce((acc, error) => {
        acc[error.path[0]] = error.message;
        return acc;
      }, {} as Record<string, string>);
      setErrors(newErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  return (
    <form
      id="workshop-form"
      method="POST"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        if (!validateForm(formData)) {
          return;
        }

        const result = await actions.workshop(formData);
        // Handle the result
      }}
      className="max-w-3xl p-6 space-y-6 gap-6"
    >
      <input {...getActionProps(actions.workshop)} />
      <div className="col-span-1">
        <input type="hidden" name="owner" value={owner} />
        <label htmlFor="title" className="block text-base font-semibold text-gray-800">
          Creative Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="mt-1 block w-full border-2 border-blue-300 rounded-lg shadow-sm p-3 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          placeholder="Enter workshop title"
          onChange={(e) => {
            setTimeout(async () => {
              setMessage(e.target.value);

              let result = await supabase
                .from("workshops")
                .select("*")
                .ilike("title", `%${message}%`);
              setWorkshopsCount(result?.data?.length as number);
              console.log("results", result?.data?.length);
            }, 3500);
          }}
        />
        {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
        {message && (
          <small className={`${workshopsCount <= 0 ? "text-green-600" : "text-red-600"}`}>
            {workshopsCount <= 0 ? "Available" : "Unavailable"}
          </small>
        )}
      </div>

      <div className="col-span-1">
        <label htmlFor="teaser" className="block text-base font-semibold text-gray-800">
          Teaser
        </label>
        <input
          type="text"
          id="teaser"
          name="teaser"
          className="mt-1 block w-full border-2 border-blue-300 rounded-lg shadow-sm p-3 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          placeholder="Enter a short teaser"
        />
        {errors.teaser && <p className="text-red-600 text-sm mt-1">{errors.teaser}</p>}
      </div>

      <div className="col-span-2">
        <label htmlFor="description" className="block text-base font-semibold text-gray-800">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="mt-1 block w-full border-2 border-blue-300 rounded-lg shadow-sm p-3 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          placeholder="Provide a detailed description of the workshop"
        ></textarea>
        {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
      </div>

      <div className="flex justify-between w-full gap-4">
        <div className="w-full">
          <label htmlFor="startDate" className="block text-base font-semibold text-gray-800">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            className="mt-1 block w-full border-2 border-blue-300 rounded-lg shadow-sm p-3 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          />
          {errors.startDate && <p className="text-red-600 text-sm mt-1">{errors.startDate}</p>}
        </div>

        <div className="w-full">
          <label htmlFor="endDate" className="block text-base font-semibold text-gray-800">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            className="mt-1 block w-full border-2 border-blue-300 rounded-lg shadow-sm p-3 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          />
          {errors.endDate && <p className="text-red-600 text-sm mt-1">{errors.endDate}</p>}
        </div>

        <div className="w-full">
          <label htmlFor="startTime" className="block text-base font-semibold text-gray-800">
            Start Time
          </label>
          <input
            type="time"
            id="startTime"
            name="startTime"
            className="mt-1 block w-full border-2 border-blue-300 rounded-lg shadow-sm p-3 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          />
          {errors.startTime && <p className="text-red-600 text-sm mt-1">{errors.startTime}</p>}
        </div>

        <div className="w-full">
          <label htmlFor="closingTime" className="block text-base font-semibold text-gray-800">
            Closing Time
          </label>
          <input
            type="time"
            id="closingTime"
            name="closingTime"
            className="mt-1 block w-full border-2 border-blue-300 rounded-lg shadow-sm p-3 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          />
          {errors.closingTime && <p className="text-red-600 text-sm mt-1">{errors.closingTime}</p>}
        </div>
      </div>

      <div className="flex justify-between w-full gap-4">
        <div className="w-full">
          <label htmlFor="mode" className="block text-base font-semibold text-gray-800">
            Mode
          </label>
          <select
            id="mode"
            name="mode"
            className="mt-1 block w-full border-2 border-blue-300 rounded-lg shadow-sm p-3 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          >
            <option value="" disabled>
              Select mode
            </option>
            <option value="In-Person">In-Person</option>
            <option value="Virtual">Virtual</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          {errors.mode && <p className="text-red-600 text-sm mt-1">{errors.mode}</p>}
        </div>

        <div className="w-full">
          <label htmlFor="location" className="block text-base font-semibold text-gray-800">
            Location
          </label>
          <input
            type="text"
            name="location"
            className="mt-1 block w-full border-2 border-blue-300 rounded-lg shadow-sm p-3 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          />
          {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location}</p>}
        </div>
      </div>

      <div className="col-span-2">
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Create Workshop
        </button>
      </div>
    </form>
  );
}

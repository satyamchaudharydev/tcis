import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  
  const data = await request.formData();

  data.append("Date_Time", new Date().toLocaleString('en-GB', { timeZone: 'IST' }));

  const response = await fetch('https://script.google.com/macros/s/AKfycbwBgKidSakQwW88Y4dz9WnGBfjAfqicGCte6VoyEk5NSOv4vGFDgLu2KFDQdXNDmWY/exec', {
    method: 'POST',
    body: data
  });

  const res =  await response.json()


  return new Response(
    JSON.stringify({
      message: "Success hit!"
    }),
    { status: 200 }
  );
};
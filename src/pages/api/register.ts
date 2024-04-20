import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  
  const data = await request.formData();

  data.append("Date_Time", new Date().toLocaleString('en-GB', { timeZone: 'IST' }));

  const response = await fetch('https://script.google.com/macros/s/AKfycbyUxN8m6_5nqrusHLMwsN7rTtpjDXtDHeoNGidAAr-ZeSeDZa90vzgwZHv3Z6AjKe1Ycg/exec', {
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
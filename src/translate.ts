export async function translate(lang: string, text: string): Promise<string> {
  let data = {
    lang: lang,
    text: text,
  };

  let url =
    "https://script.google.com/macros/s/AKfycby9SKSCP2VbtBnyuVl1RhSYflnFLcXFhZSTI2qie8SyOEyynhDbOyHJ8IEiHBcfKzdfkg/exec";

  let response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let result = await (await response).json().then((value) => {
    return value;
  });

  return result.text;
}

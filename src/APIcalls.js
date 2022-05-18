const responseData = (prompt) => {
  console.log(prompt);
  const data = {
    prompt: `${prompt}`,
    temperature: 0.3,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  return fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_MY_API_KEY}`,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export default responseData;

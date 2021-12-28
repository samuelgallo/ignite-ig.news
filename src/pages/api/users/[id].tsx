import { NextApiRequest, NextApiResponse } from "next";

// JWT (local storage)
// Next Auth (social login)
// Cognito,Auth0

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query);
  const users = [
    { id: 1, name: "João" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Pé de Feijão" },
  ];

  return response.json(users);
};

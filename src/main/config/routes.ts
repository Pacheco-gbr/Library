import express, { Express } from "express";

export const setupRoutes = (app: Express) => {
  app.get("/", (request, response) =>
    response.status(200).json("The API is running successfully!")
  );
};

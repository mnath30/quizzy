import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import {
  getAllQuizHandler,
  getQuizHandler,
} from "./backend/controllers/QuizController";
import { quizes } from "./backend/db/quizes";
import { categories } from "./backend/db/categories";
import {
  getAllCategoriesHandler,
  getCategoryHandler,
} from "./backend/controllers/CategoryController";
import { users } from "./backend/db/users";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    // TODO: Use Relationships to have named relational Data
    models: {
      quiz: Model,
      category: Model,
      user: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      server.logging = false;
      quizes.forEach((item) => {
        server.create("quiz", { ...item });
      });
      categories.forEach((item) => server.create("category", { ...item }));
      users.forEach((item) =>
        server.create("user", {
          ...item,
        })
      );
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // quiz routes (public)
      this.get("/quiz", getAllQuizHandler.bind(this));
      this.get("/quiz/:quizId", getQuizHandler.bind(this));

      // TODO: POST Quiz TO DB

      // categories routes (public)
      this.get("/categories", getAllCategoriesHandler.bind(this));
      this.get("/categories/:categoryId", getCategoryHandler.bind(this));
    },
  });
}

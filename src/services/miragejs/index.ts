import {
  ActiveModelSerializer,
  createServer,
  Factory,
  Model,
  Response,
} from "miragejs";
import { faker } from "@faker-js/faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export const startMirage = () => {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.internet.userName();
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        created_at() {
          return faker.date.recent(10, new Date());
        },
      }),
    },

    seeds: (server) => {
      server.createList("user", 5);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users", (schema, req) => {
        const { page = 1, per_page = 10 } = req.queryParams;

        const total: number = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = schema.all("user").models.slice(pageStart, pageEnd);

        return new Response(200, { "x-total-count": String(total) }, { users });
      });

      this.get("/users/:id");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
};

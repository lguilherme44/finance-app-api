import { serverHttp } from "./app";

serverHttp.listen(process.env.PORT || 4000, () =>
  console.log("Server started on port: 4000", process.env.NODE_ENV)
);

import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { CreateTransactionController } from "./controllers/transactions/CreateTransactionController";
import { DeleteTransactionController } from "./controllers/transactions/DeleteTransactionController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { GetTransactionsController } from "./controllers/transactions/GetTransactionsController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticate } from "./middleware/ensureAuthenticate";
import { UpdateTransactionsController } from "./controllers/transactions/UpdateTransactionsController";

/** summary */
import { ExpenseSummaryController } from "./controllers/summary/ExpenseSummaryController";
import { IncomeSummaryController } from "./controllers/summary/IncomeSummaryController";

const router = Router();

router.get("/", (request, response) => {
  return response.json("API Funcionando");
});

router.get("/github", (request, response) => {
  const ClientID =
    process.env.NODE_ENV === "dev"
      ? process.env.GITHUB_CLIENT_ID_DEV
      : process.env.GITHUB_CLIENT_ID;

  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${ClientID}`
  );
});

router.get("/signin/callback", (request, response) => {
  const { code } = request.query;

  return response.json({ code: code });
});

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/messages",
  ensureAuthenticate,
  new CreateMessageController().handle
);

router.get("/messages/last3", new GetLast3MessagesController().handle);

router.get("/profile", ensureAuthenticate, new ProfileUserController().handle);

/** summary */
router.get(
  "/summary/income",
  ensureAuthenticate,
  new IncomeSummaryController().handle
);
router.get(
  "/summary/expense",
  ensureAuthenticate,
  new ExpenseSummaryController().handle
);

/** transaction */
router.get(
  "/transactions",
  ensureAuthenticate,
  new GetTransactionsController().handle
);

router.post(
  "/transaction",
  ensureAuthenticate,
  new CreateTransactionController().handle
);

router.delete("/transaction/:id", new DeleteTransactionController().handle);

router.patch("/transaction/:id", new UpdateTransactionsController().handle);

export { router };

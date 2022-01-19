import { Router } from "express";
import { CreateTransactionController } from "./controllers/transactions/CreateTransactionController";
import { DeleteTransactionController } from "./controllers/transactions/DeleteTransactionController";
import { GetTransactionsController } from "./controllers/transactions/GetTransactionsController";
import { ensureAuthenticate } from "./middleware/ensureAuthenticate";
import { UpdateTransactionsController } from "./controllers/transactions/UpdateTransactionsController";

/** summary */
import { ExpenseSummaryController } from "./controllers/summary/ExpenseSummaryController";
import { IncomeSummaryController } from "./controllers/summary/IncomeSummaryController";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

router.get("/", (request, response) => {
  return response.json(`API Funcionando, MODO: ${process.env.NODE_ENV}`);
});

router.post("/authenticate", new CreateUserController().handle);

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

import { Router } from "express";

/** transactions */
import { CreateTransactionController } from "./controllers/transactions/CreateTransactionController";
import { DeleteTransactionController } from "./controllers/transactions/DeleteTransactionController";
import { GetTransactionsController } from "./controllers/transactions/GetTransactionsController";
import { UpdateTransactionsController } from "./controllers/transactions/UpdateTransactionsController";

/** middleware */
import { ensureAuthenticate } from "./middleware/ensureAuthenticate";

/** summary */
import { ExpenseSummaryController } from "./controllers/summary/ExpenseSummaryController";
import { IncomeSummaryController } from "./controllers/summary/IncomeSummaryController";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

router.get("/", (request, response) => {
  return response.json(`API Funcionando, MODO: ${process.env.NODE_ENV}`);
});

router.post("/user/create", new CreateUserController().handle);

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

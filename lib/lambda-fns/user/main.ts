import { Logger } from "@aws-lambda-powertools/logger";
import createUserAccount from "./createUserAccounts";
import { AppSyncResolverEvent, Context } from "aws-lambda";
import UserInput from "./CreateUserInput";

const logger = new Logger({ serviceName: "ApartmentComplexManagementApp" });

exports.handler = async (
  event: AppSyncResolverEvent<{ input: UserInput }>, // Adjusted the event type
  context: Context
) => {
  logger.addContext(context);
  logger.info(
    `appsync event arguments ${JSON.stringify(event.arguments.input)}`
  );

  switch (event.info.fieldName) {
    case "createUserAccount":
      return await createUserAccount(event.arguments.input, logger); // Adjusted the arguments

    default:
      return null;
  }
};

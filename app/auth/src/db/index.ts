import {
    account,
    accountRelations,
    session,
    sessionRelations,
    user,
    userRelations,
    verification
} from "./auth-schema";

const databaseTable = {
    account,
    accountRelations,
    session,
    sessionRelations,
    user,
    userRelations,
    verification
};

export {
    databaseTable
}
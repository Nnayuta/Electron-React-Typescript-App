
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.12.0
 * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
 */
Prisma.prismaVersion = {
  client: "4.12.0",
  engine: "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.CHANNELScalarFieldEnum = makeEnum({
  ID: 'ID',
  NAME: 'NAME',
  CHANNEL_NUMBER: 'CHANNEL_NUMBER'
});

exports.Prisma.FLAGScalarFieldEnum = makeEnum({
  ID: 'ID',
  NAME: 'NAME'
});

exports.Prisma.REGIONScalarFieldEnum = makeEnum({
  ID: 'ID',
  NAME: 'NAME'
});

exports.Prisma.SQLITEADMIN_QUERIESScalarFieldEnum = makeEnum({
  ID: 'ID',
  NAME: 'NAME',
  SQL: 'SQL'
});

exports.Prisma.STOREScalarFieldEnum = makeEnum({
  STORE_KEY: 'STORE_KEY',
  STORE_NAME: 'STORE_NAME',
  STORE_ID: 'STORE_ID',
  STORE_ADDRESS: 'STORE_ADDRESS',
  STORE_NEIG: 'STORE_NEIG',
  STORE_CITY: 'STORE_CITY',
  STORE_STATE: 'STORE_STATE',
  STORE_ZIP: 'STORE_ZIP',
  STORE_PHONE: 'STORE_PHONE',
  STORE_REGION: 'STORE_REGION',
  STORE_SUPPORT: 'STORE_SUPPORT',
  STORE_LEADER: 'STORE_LEADER',
  STORE_TYPE: 'STORE_TYPE',
  STORE_CHANNEL: 'STORE_CHANNEL',
  STORE_FLAG: 'STORE_FLAG'
});

exports.Prisma.SUPPORTScalarFieldEnum = makeEnum({
  ID: 'ID',
  NAME: 'NAME'
});

exports.Prisma.SUPPORT_LEADERScalarFieldEnum = makeEnum({
  ID: 'ID',
  NAME: 'NAME'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TYPEScalarFieldEnum = makeEnum({
  ID: 'ID',
  NAME: 'NAME'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  CHANNEL: 'CHANNEL',
  FLAG: 'FLAG',
  REGION: 'REGION',
  SQLITEADMIN_QUERIES: 'SQLITEADMIN_QUERIES',
  STORE: 'STORE',
  SUPPORT: 'SUPPORT',
  SUPPORT_LEADER: 'SUPPORT_LEADER',
  TYPE: 'TYPE'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

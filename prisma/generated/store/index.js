
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} = require('./runtime/library')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


  const path = require('path')

const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma\\generated\\store",
    "generated\\store",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"CHANNEL\",\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANNEL_NUMBER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"STORE\",\"relationName\":\"CHANNELToSTORE\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"FLAG\",\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"STORE\",\"relationName\":\"FLAGToSTORE\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"REGION\",\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"STORE\",\"relationName\":\"REGIONToSTORE\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"SQLITEADMIN_QUERIES\",\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SQL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"STORE\",\"dbName\":null,\"fields\":[{\"name\":\"STORE_KEY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE_ADDRESS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE_NEIG\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE_CITY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE_STATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE_ZIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE_PHONE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE_REGION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE_SUPPORT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE_LEADER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE_TYPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE_CHANNEL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE_FLAG\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FLAG\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FLAG\",\"relationName\":\"FLAGToSTORE\",\"relationFromFields\":[\"STORE_FLAG\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANNEL\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CHANNEL\",\"relationName\":\"CHANNELToSTORE\",\"relationFromFields\":[\"STORE_CHANNEL\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TYPE\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TYPE\",\"relationName\":\"STOREToTYPE\",\"relationFromFields\":[\"STORE_TYPE\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUPPORT_LEADER\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SUPPORT_LEADER\",\"relationName\":\"STOREToSUPPORT_LEADER\",\"relationFromFields\":[\"STORE_LEADER\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUPPORT\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SUPPORT\",\"relationName\":\"STOREToSUPPORT\",\"relationFromFields\":[\"STORE_SUPPORT\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REGION\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"REGION\",\"relationName\":\"REGIONToSTORE\",\"relationFromFields\":[\"STORE_REGION\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"SUPPORT\",\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"STORE\",\"relationName\":\"STOREToSUPPORT\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"SUPPORT_LEADER\",\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"STORE\",\"relationName\":\"STOREToSUPPORT_LEADER\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TYPE\",\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STORE\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"STORE\",\"relationName\":\"STOREToTYPE\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"CHANNEL\",\"plural\":\"cHANNELS\",\"findUnique\":\"findUniqueCHANNEL\",\"findUniqueOrThrow\":\"findUniqueCHANNELOrThrow\",\"findFirst\":\"findFirstCHANNEL\",\"findFirstOrThrow\":\"findFirstCHANNELOrThrow\",\"findMany\":\"findManyCHANNEL\",\"create\":\"createOneCHANNEL\",\"delete\":\"deleteOneCHANNEL\",\"update\":\"updateOneCHANNEL\",\"deleteMany\":\"deleteManyCHANNEL\",\"updateMany\":\"updateManyCHANNEL\",\"upsert\":\"upsertOneCHANNEL\",\"aggregate\":\"aggregateCHANNEL\",\"groupBy\":\"groupByCHANNEL\"},{\"model\":\"FLAG\",\"plural\":\"fLAGS\",\"findUnique\":\"findUniqueFLAG\",\"findUniqueOrThrow\":\"findUniqueFLAGOrThrow\",\"findFirst\":\"findFirstFLAG\",\"findFirstOrThrow\":\"findFirstFLAGOrThrow\",\"findMany\":\"findManyFLAG\",\"create\":\"createOneFLAG\",\"delete\":\"deleteOneFLAG\",\"update\":\"updateOneFLAG\",\"deleteMany\":\"deleteManyFLAG\",\"updateMany\":\"updateManyFLAG\",\"upsert\":\"upsertOneFLAG\",\"aggregate\":\"aggregateFLAG\",\"groupBy\":\"groupByFLAG\"},{\"model\":\"REGION\",\"plural\":\"rEGIONS\",\"findUnique\":\"findUniqueREGION\",\"findUniqueOrThrow\":\"findUniqueREGIONOrThrow\",\"findFirst\":\"findFirstREGION\",\"findFirstOrThrow\":\"findFirstREGIONOrThrow\",\"findMany\":\"findManyREGION\",\"create\":\"createOneREGION\",\"delete\":\"deleteOneREGION\",\"update\":\"updateOneREGION\",\"deleteMany\":\"deleteManyREGION\",\"updateMany\":\"updateManyREGION\",\"upsert\":\"upsertOneREGION\",\"aggregate\":\"aggregateREGION\",\"groupBy\":\"groupByREGION\"},{\"model\":\"SQLITEADMIN_QUERIES\",\"plural\":\"sQLITEADMIN_QUERIES\",\"findUnique\":\"findUniqueSQLITEADMIN_QUERIES\",\"findUniqueOrThrow\":\"findUniqueSQLITEADMIN_QUERIESOrThrow\",\"findFirst\":\"findFirstSQLITEADMIN_QUERIES\",\"findFirstOrThrow\":\"findFirstSQLITEADMIN_QUERIESOrThrow\",\"findMany\":\"findManySQLITEADMIN_QUERIES\",\"create\":\"createOneSQLITEADMIN_QUERIES\",\"delete\":\"deleteOneSQLITEADMIN_QUERIES\",\"update\":\"updateOneSQLITEADMIN_QUERIES\",\"deleteMany\":\"deleteManySQLITEADMIN_QUERIES\",\"updateMany\":\"updateManySQLITEADMIN_QUERIES\",\"upsert\":\"upsertOneSQLITEADMIN_QUERIES\",\"aggregate\":\"aggregateSQLITEADMIN_QUERIES\",\"groupBy\":\"groupBySQLITEADMIN_QUERIES\"},{\"model\":\"STORE\",\"plural\":\"sTORES\",\"findUnique\":\"findUniqueSTORE\",\"findUniqueOrThrow\":\"findUniqueSTOREOrThrow\",\"findFirst\":\"findFirstSTORE\",\"findFirstOrThrow\":\"findFirstSTOREOrThrow\",\"findMany\":\"findManySTORE\",\"create\":\"createOneSTORE\",\"delete\":\"deleteOneSTORE\",\"update\":\"updateOneSTORE\",\"deleteMany\":\"deleteManySTORE\",\"updateMany\":\"updateManySTORE\",\"upsert\":\"upsertOneSTORE\",\"aggregate\":\"aggregateSTORE\",\"groupBy\":\"groupBySTORE\"},{\"model\":\"SUPPORT\",\"plural\":\"sUPPORTS\",\"findUnique\":\"findUniqueSUPPORT\",\"findUniqueOrThrow\":\"findUniqueSUPPORTOrThrow\",\"findFirst\":\"findFirstSUPPORT\",\"findFirstOrThrow\":\"findFirstSUPPORTOrThrow\",\"findMany\":\"findManySUPPORT\",\"create\":\"createOneSUPPORT\",\"delete\":\"deleteOneSUPPORT\",\"update\":\"updateOneSUPPORT\",\"deleteMany\":\"deleteManySUPPORT\",\"updateMany\":\"updateManySUPPORT\",\"upsert\":\"upsertOneSUPPORT\",\"aggregate\":\"aggregateSUPPORT\",\"groupBy\":\"groupBySUPPORT\"},{\"model\":\"SUPPORT_LEADER\",\"plural\":\"sUPPORT_LEADERS\",\"findUnique\":\"findUniqueSUPPORT_LEADER\",\"findUniqueOrThrow\":\"findUniqueSUPPORT_LEADEROrThrow\",\"findFirst\":\"findFirstSUPPORT_LEADER\",\"findFirstOrThrow\":\"findFirstSUPPORT_LEADEROrThrow\",\"findMany\":\"findManySUPPORT_LEADER\",\"create\":\"createOneSUPPORT_LEADER\",\"delete\":\"deleteOneSUPPORT_LEADER\",\"update\":\"updateOneSUPPORT_LEADER\",\"deleteMany\":\"deleteManySUPPORT_LEADER\",\"updateMany\":\"updateManySUPPORT_LEADER\",\"upsert\":\"upsertOneSUPPORT_LEADER\",\"aggregate\":\"aggregateSUPPORT_LEADER\",\"groupBy\":\"groupBySUPPORT_LEADER\"},{\"model\":\"TYPE\",\"plural\":\"tYPES\",\"findUnique\":\"findUniqueTYPE\",\"findUniqueOrThrow\":\"findUniqueTYPEOrThrow\",\"findFirst\":\"findFirstTYPE\",\"findFirstOrThrow\":\"findFirstTYPEOrThrow\",\"findMany\":\"findManyTYPE\",\"create\":\"createOneTYPE\",\"delete\":\"deleteOneTYPE\",\"update\":\"updateOneTYPE\",\"deleteMany\":\"deleteManyTYPE\",\"updateMany\":\"updateManyTYPE\",\"upsert\":\"upsertOneTYPE\",\"aggregate\":\"aggregateTYPE\",\"groupBy\":\"groupByTYPE\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\DEV\\cspdv\\prisma\\generated\\store",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "..\\..",
  "clientVersion": "4.12.0",
  "engineVersion": "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "dataProxy": false
}
config.dirname = dirname
config.document = dmmf




const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})


const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma\\generated\\store\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma\\generated\\store\\schema.prisma")

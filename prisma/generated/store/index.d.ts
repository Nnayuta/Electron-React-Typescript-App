
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model CHANNEL
 * 
 */
export type CHANNEL = {
  ID: number
  NAME: string
  CHANNEL_NUMBER: string
}

/**
 * Model FLAG
 * 
 */
export type FLAG = {
  ID: number
  NAME: string
}

/**
 * Model REGION
 * 
 */
export type REGION = {
  ID: number
  NAME: string
}

/**
 * Model SQLITEADMIN_QUERIES
 * 
 */
export type SQLITEADMIN_QUERIES = {
  ID: number
  NAME: string | null
  SQL: string | null
}

/**
 * Model STORE
 * 
 */
export type STORE = {
  STORE_KEY: number
  STORE_NAME: string | null
  STORE_ID: string | null
  STORE_ADDRESS: string | null
  STORE_NEIG: string | null
  STORE_CITY: string | null
  STORE_STATE: string | null
  STORE_ZIP: string | null
  STORE_PHONE: string | null
  STORE_REGION: number
  STORE_SUPPORT: number
  STORE_LEADER: number
  STORE_TYPE: number
  STORE_CHANNEL: number
  STORE_FLAG: number
}

/**
 * Model SUPPORT
 * 
 */
export type SUPPORT = {
  ID: number
  NAME: string
}

/**
 * Model SUPPORT_LEADER
 * 
 */
export type SUPPORT_LEADER = {
  ID: number
  NAME: string
}

/**
 * Model TYPE
 * 
 */
export type TYPE = {
  ID: number
  NAME: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CHANNELS
 * const cHANNELS = await prisma.cHANNEL.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CHANNELS
   * const cHANNELS = await prisma.cHANNEL.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.cHANNEL`: Exposes CRUD operations for the **CHANNEL** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CHANNELS
    * const cHANNELS = await prisma.cHANNEL.findMany()
    * ```
    */
  get cHANNEL(): Prisma.CHANNELDelegate<GlobalReject>;

  /**
   * `prisma.fLAG`: Exposes CRUD operations for the **FLAG** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FLAGS
    * const fLAGS = await prisma.fLAG.findMany()
    * ```
    */
  get fLAG(): Prisma.FLAGDelegate<GlobalReject>;

  /**
   * `prisma.rEGION`: Exposes CRUD operations for the **REGION** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more REGIONS
    * const rEGIONS = await prisma.rEGION.findMany()
    * ```
    */
  get rEGION(): Prisma.REGIONDelegate<GlobalReject>;

  /**
   * `prisma.sQLITEADMIN_QUERIES`: Exposes CRUD operations for the **SQLITEADMIN_QUERIES** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SQLITEADMIN_QUERIES
    * const sQLITEADMIN_QUERIES = await prisma.sQLITEADMIN_QUERIES.findMany()
    * ```
    */
  get sQLITEADMIN_QUERIES(): Prisma.SQLITEADMIN_QUERIESDelegate<GlobalReject>;

  /**
   * `prisma.sTORE`: Exposes CRUD operations for the **STORE** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more STORES
    * const sTORES = await prisma.sTORE.findMany()
    * ```
    */
  get sTORE(): Prisma.STOREDelegate<GlobalReject>;

  /**
   * `prisma.sUPPORT`: Exposes CRUD operations for the **SUPPORT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SUPPORTS
    * const sUPPORTS = await prisma.sUPPORT.findMany()
    * ```
    */
  get sUPPORT(): Prisma.SUPPORTDelegate<GlobalReject>;

  /**
   * `prisma.sUPPORT_LEADER`: Exposes CRUD operations for the **SUPPORT_LEADER** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SUPPORT_LEADERS
    * const sUPPORT_LEADERS = await prisma.sUPPORT_LEADER.findMany()
    * ```
    */
  get sUPPORT_LEADER(): Prisma.SUPPORT_LEADERDelegate<GlobalReject>;

  /**
   * `prisma.tYPE`: Exposes CRUD operations for the **TYPE** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TYPES
    * const tYPES = await prisma.tYPE.findMany()
    * ```
    */
  get tYPE(): Prisma.TYPEDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CHANNEL: 'CHANNEL',
    FLAG: 'FLAG',
    REGION: 'REGION',
    SQLITEADMIN_QUERIES: 'SQLITEADMIN_QUERIES',
    STORE: 'STORE',
    SUPPORT: 'SUPPORT',
    SUPPORT_LEADER: 'SUPPORT_LEADER',
    TYPE: 'TYPE'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CHANNELCountOutputType
   */


  export type CHANNELCountOutputType = {
    STORE: number
  }

  export type CHANNELCountOutputTypeSelect = {
    STORE?: boolean
  }

  export type CHANNELCountOutputTypeGetPayload<S extends boolean | null | undefined | CHANNELCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CHANNELCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CHANNELCountOutputTypeArgs)
    ? CHANNELCountOutputType 
    : S extends { select: any } & (CHANNELCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CHANNELCountOutputType ? CHANNELCountOutputType[P] : never
  } 
      : CHANNELCountOutputType




  // Custom InputTypes

  /**
   * CHANNELCountOutputType without action
   */
  export type CHANNELCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CHANNELCountOutputType
     */
    select?: CHANNELCountOutputTypeSelect | null
  }



  /**
   * Count Type FLAGCountOutputType
   */


  export type FLAGCountOutputType = {
    STORE: number
  }

  export type FLAGCountOutputTypeSelect = {
    STORE?: boolean
  }

  export type FLAGCountOutputTypeGetPayload<S extends boolean | null | undefined | FLAGCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FLAGCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (FLAGCountOutputTypeArgs)
    ? FLAGCountOutputType 
    : S extends { select: any } & (FLAGCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof FLAGCountOutputType ? FLAGCountOutputType[P] : never
  } 
      : FLAGCountOutputType




  // Custom InputTypes

  /**
   * FLAGCountOutputType without action
   */
  export type FLAGCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FLAGCountOutputType
     */
    select?: FLAGCountOutputTypeSelect | null
  }



  /**
   * Count Type REGIONCountOutputType
   */


  export type REGIONCountOutputType = {
    STORE: number
  }

  export type REGIONCountOutputTypeSelect = {
    STORE?: boolean
  }

  export type REGIONCountOutputTypeGetPayload<S extends boolean | null | undefined | REGIONCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? REGIONCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (REGIONCountOutputTypeArgs)
    ? REGIONCountOutputType 
    : S extends { select: any } & (REGIONCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof REGIONCountOutputType ? REGIONCountOutputType[P] : never
  } 
      : REGIONCountOutputType




  // Custom InputTypes

  /**
   * REGIONCountOutputType without action
   */
  export type REGIONCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the REGIONCountOutputType
     */
    select?: REGIONCountOutputTypeSelect | null
  }



  /**
   * Count Type SUPPORTCountOutputType
   */


  export type SUPPORTCountOutputType = {
    STORE: number
  }

  export type SUPPORTCountOutputTypeSelect = {
    STORE?: boolean
  }

  export type SUPPORTCountOutputTypeGetPayload<S extends boolean | null | undefined | SUPPORTCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SUPPORTCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (SUPPORTCountOutputTypeArgs)
    ? SUPPORTCountOutputType 
    : S extends { select: any } & (SUPPORTCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SUPPORTCountOutputType ? SUPPORTCountOutputType[P] : never
  } 
      : SUPPORTCountOutputType




  // Custom InputTypes

  /**
   * SUPPORTCountOutputType without action
   */
  export type SUPPORTCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SUPPORTCountOutputType
     */
    select?: SUPPORTCountOutputTypeSelect | null
  }



  /**
   * Count Type SUPPORT_LEADERCountOutputType
   */


  export type SUPPORT_LEADERCountOutputType = {
    STORE: number
  }

  export type SUPPORT_LEADERCountOutputTypeSelect = {
    STORE?: boolean
  }

  export type SUPPORT_LEADERCountOutputTypeGetPayload<S extends boolean | null | undefined | SUPPORT_LEADERCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SUPPORT_LEADERCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (SUPPORT_LEADERCountOutputTypeArgs)
    ? SUPPORT_LEADERCountOutputType 
    : S extends { select: any } & (SUPPORT_LEADERCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SUPPORT_LEADERCountOutputType ? SUPPORT_LEADERCountOutputType[P] : never
  } 
      : SUPPORT_LEADERCountOutputType




  // Custom InputTypes

  /**
   * SUPPORT_LEADERCountOutputType without action
   */
  export type SUPPORT_LEADERCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SUPPORT_LEADERCountOutputType
     */
    select?: SUPPORT_LEADERCountOutputTypeSelect | null
  }



  /**
   * Count Type TYPECountOutputType
   */


  export type TYPECountOutputType = {
    STORE: number
  }

  export type TYPECountOutputTypeSelect = {
    STORE?: boolean
  }

  export type TYPECountOutputTypeGetPayload<S extends boolean | null | undefined | TYPECountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TYPECountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TYPECountOutputTypeArgs)
    ? TYPECountOutputType 
    : S extends { select: any } & (TYPECountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TYPECountOutputType ? TYPECountOutputType[P] : never
  } 
      : TYPECountOutputType




  // Custom InputTypes

  /**
   * TYPECountOutputType without action
   */
  export type TYPECountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TYPECountOutputType
     */
    select?: TYPECountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model CHANNEL
   */


  export type AggregateCHANNEL = {
    _count: CHANNELCountAggregateOutputType | null
    _avg: CHANNELAvgAggregateOutputType | null
    _sum: CHANNELSumAggregateOutputType | null
    _min: CHANNELMinAggregateOutputType | null
    _max: CHANNELMaxAggregateOutputType | null
  }

  export type CHANNELAvgAggregateOutputType = {
    ID: number | null
  }

  export type CHANNELSumAggregateOutputType = {
    ID: number | null
  }

  export type CHANNELMinAggregateOutputType = {
    ID: number | null
    NAME: string | null
    CHANNEL_NUMBER: string | null
  }

  export type CHANNELMaxAggregateOutputType = {
    ID: number | null
    NAME: string | null
    CHANNEL_NUMBER: string | null
  }

  export type CHANNELCountAggregateOutputType = {
    ID: number
    NAME: number
    CHANNEL_NUMBER: number
    _all: number
  }


  export type CHANNELAvgAggregateInputType = {
    ID?: true
  }

  export type CHANNELSumAggregateInputType = {
    ID?: true
  }

  export type CHANNELMinAggregateInputType = {
    ID?: true
    NAME?: true
    CHANNEL_NUMBER?: true
  }

  export type CHANNELMaxAggregateInputType = {
    ID?: true
    NAME?: true
    CHANNEL_NUMBER?: true
  }

  export type CHANNELCountAggregateInputType = {
    ID?: true
    NAME?: true
    CHANNEL_NUMBER?: true
    _all?: true
  }

  export type CHANNELAggregateArgs = {
    /**
     * Filter which CHANNEL to aggregate.
     */
    where?: CHANNELWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHANNELS to fetch.
     */
    orderBy?: Enumerable<CHANNELOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CHANNELWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHANNELS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHANNELS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CHANNELS
    **/
    _count?: true | CHANNELCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CHANNELAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CHANNELSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CHANNELMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CHANNELMaxAggregateInputType
  }

  export type GetCHANNELAggregateType<T extends CHANNELAggregateArgs> = {
        [P in keyof T & keyof AggregateCHANNEL]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCHANNEL[P]>
      : GetScalarType<T[P], AggregateCHANNEL[P]>
  }




  export type CHANNELGroupByArgs = {
    where?: CHANNELWhereInput
    orderBy?: Enumerable<CHANNELOrderByWithAggregationInput>
    by: CHANNELScalarFieldEnum[]
    having?: CHANNELScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CHANNELCountAggregateInputType | true
    _avg?: CHANNELAvgAggregateInputType
    _sum?: CHANNELSumAggregateInputType
    _min?: CHANNELMinAggregateInputType
    _max?: CHANNELMaxAggregateInputType
  }


  export type CHANNELGroupByOutputType = {
    ID: number
    NAME: string
    CHANNEL_NUMBER: string
    _count: CHANNELCountAggregateOutputType | null
    _avg: CHANNELAvgAggregateOutputType | null
    _sum: CHANNELSumAggregateOutputType | null
    _min: CHANNELMinAggregateOutputType | null
    _max: CHANNELMaxAggregateOutputType | null
  }

  type GetCHANNELGroupByPayload<T extends CHANNELGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CHANNELGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CHANNELGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CHANNELGroupByOutputType[P]>
            : GetScalarType<T[P], CHANNELGroupByOutputType[P]>
        }
      >
    >


  export type CHANNELSelect = {
    ID?: boolean
    NAME?: boolean
    CHANNEL_NUMBER?: boolean
    STORE?: boolean | CHANNEL$STOREArgs
    _count?: boolean | CHANNELCountOutputTypeArgs
  }


  export type CHANNELInclude = {
    STORE?: boolean | CHANNEL$STOREArgs
    _count?: boolean | CHANNELCountOutputTypeArgs
  }

  export type CHANNELGetPayload<S extends boolean | null | undefined | CHANNELArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CHANNEL :
    S extends undefined ? never :
    S extends { include: any } & (CHANNELArgs | CHANNELFindManyArgs)
    ? CHANNEL  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'STORE' ? Array < STOREGetPayload<S['include'][P]>>  :
        P extends '_count' ? CHANNELCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CHANNELArgs | CHANNELFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'STORE' ? Array < STOREGetPayload<S['select'][P]>>  :
        P extends '_count' ? CHANNELCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof CHANNEL ? CHANNEL[P] : never
  } 
      : CHANNEL


  type CHANNELCountArgs = 
    Omit<CHANNELFindManyArgs, 'select' | 'include'> & {
      select?: CHANNELCountAggregateInputType | true
    }

  export interface CHANNELDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CHANNEL that matches the filter.
     * @param {CHANNELFindUniqueArgs} args - Arguments to find a CHANNEL
     * @example
     * // Get one CHANNEL
     * const cHANNEL = await prisma.cHANNEL.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CHANNELFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CHANNELFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CHANNEL'> extends True ? Prisma__CHANNELClient<CHANNELGetPayload<T>> : Prisma__CHANNELClient<CHANNELGetPayload<T> | null, null>

    /**
     * Find one CHANNEL that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CHANNELFindUniqueOrThrowArgs} args - Arguments to find a CHANNEL
     * @example
     * // Get one CHANNEL
     * const cHANNEL = await prisma.cHANNEL.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CHANNELFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CHANNELFindUniqueOrThrowArgs>
    ): Prisma__CHANNELClient<CHANNELGetPayload<T>>

    /**
     * Find the first CHANNEL that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHANNELFindFirstArgs} args - Arguments to find a CHANNEL
     * @example
     * // Get one CHANNEL
     * const cHANNEL = await prisma.cHANNEL.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CHANNELFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CHANNELFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CHANNEL'> extends True ? Prisma__CHANNELClient<CHANNELGetPayload<T>> : Prisma__CHANNELClient<CHANNELGetPayload<T> | null, null>

    /**
     * Find the first CHANNEL that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHANNELFindFirstOrThrowArgs} args - Arguments to find a CHANNEL
     * @example
     * // Get one CHANNEL
     * const cHANNEL = await prisma.cHANNEL.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CHANNELFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CHANNELFindFirstOrThrowArgs>
    ): Prisma__CHANNELClient<CHANNELGetPayload<T>>

    /**
     * Find zero or more CHANNELS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHANNELFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CHANNELS
     * const cHANNELS = await prisma.cHANNEL.findMany()
     * 
     * // Get first 10 CHANNELS
     * const cHANNELS = await prisma.cHANNEL.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const cHANNELWithIDOnly = await prisma.cHANNEL.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends CHANNELFindManyArgs>(
      args?: SelectSubset<T, CHANNELFindManyArgs>
    ): Prisma.PrismaPromise<Array<CHANNELGetPayload<T>>>

    /**
     * Create a CHANNEL.
     * @param {CHANNELCreateArgs} args - Arguments to create a CHANNEL.
     * @example
     * // Create one CHANNEL
     * const CHANNEL = await prisma.cHANNEL.create({
     *   data: {
     *     // ... data to create a CHANNEL
     *   }
     * })
     * 
    **/
    create<T extends CHANNELCreateArgs>(
      args: SelectSubset<T, CHANNELCreateArgs>
    ): Prisma__CHANNELClient<CHANNELGetPayload<T>>

    /**
     * Delete a CHANNEL.
     * @param {CHANNELDeleteArgs} args - Arguments to delete one CHANNEL.
     * @example
     * // Delete one CHANNEL
     * const CHANNEL = await prisma.cHANNEL.delete({
     *   where: {
     *     // ... filter to delete one CHANNEL
     *   }
     * })
     * 
    **/
    delete<T extends CHANNELDeleteArgs>(
      args: SelectSubset<T, CHANNELDeleteArgs>
    ): Prisma__CHANNELClient<CHANNELGetPayload<T>>

    /**
     * Update one CHANNEL.
     * @param {CHANNELUpdateArgs} args - Arguments to update one CHANNEL.
     * @example
     * // Update one CHANNEL
     * const cHANNEL = await prisma.cHANNEL.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CHANNELUpdateArgs>(
      args: SelectSubset<T, CHANNELUpdateArgs>
    ): Prisma__CHANNELClient<CHANNELGetPayload<T>>

    /**
     * Delete zero or more CHANNELS.
     * @param {CHANNELDeleteManyArgs} args - Arguments to filter CHANNELS to delete.
     * @example
     * // Delete a few CHANNELS
     * const { count } = await prisma.cHANNEL.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CHANNELDeleteManyArgs>(
      args?: SelectSubset<T, CHANNELDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CHANNELS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHANNELUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CHANNELS
     * const cHANNEL = await prisma.cHANNEL.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CHANNELUpdateManyArgs>(
      args: SelectSubset<T, CHANNELUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CHANNEL.
     * @param {CHANNELUpsertArgs} args - Arguments to update or create a CHANNEL.
     * @example
     * // Update or create a CHANNEL
     * const cHANNEL = await prisma.cHANNEL.upsert({
     *   create: {
     *     // ... data to create a CHANNEL
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CHANNEL we want to update
     *   }
     * })
    **/
    upsert<T extends CHANNELUpsertArgs>(
      args: SelectSubset<T, CHANNELUpsertArgs>
    ): Prisma__CHANNELClient<CHANNELGetPayload<T>>

    /**
     * Count the number of CHANNELS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHANNELCountArgs} args - Arguments to filter CHANNELS to count.
     * @example
     * // Count the number of CHANNELS
     * const count = await prisma.cHANNEL.count({
     *   where: {
     *     // ... the filter for the CHANNELS we want to count
     *   }
     * })
    **/
    count<T extends CHANNELCountArgs>(
      args?: Subset<T, CHANNELCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CHANNELCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CHANNEL.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHANNELAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CHANNELAggregateArgs>(args: Subset<T, CHANNELAggregateArgs>): Prisma.PrismaPromise<GetCHANNELAggregateType<T>>

    /**
     * Group by CHANNEL.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHANNELGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CHANNELGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CHANNELGroupByArgs['orderBy'] }
        : { orderBy?: CHANNELGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CHANNELGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCHANNELGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CHANNEL.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CHANNELClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    STORE<T extends CHANNEL$STOREArgs= {}>(args?: Subset<T, CHANNEL$STOREArgs>): Prisma.PrismaPromise<Array<STOREGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CHANNEL base type for findUnique actions
   */
  export type CHANNELFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CHANNEL
     */
    select?: CHANNELSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CHANNELInclude | null
    /**
     * Filter, which CHANNEL to fetch.
     */
    where: CHANNELWhereUniqueInput
  }

  /**
   * CHANNEL findUnique
   */
  export interface CHANNELFindUniqueArgs extends CHANNELFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CHANNEL findUniqueOrThrow
   */
  export type CHANNELFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CHANNEL
     */
    select?: CHANNELSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CHANNELInclude | null
    /**
     * Filter, which CHANNEL to fetch.
     */
    where: CHANNELWhereUniqueInput
  }


  /**
   * CHANNEL base type for findFirst actions
   */
  export type CHANNELFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CHANNEL
     */
    select?: CHANNELSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CHANNELInclude | null
    /**
     * Filter, which CHANNEL to fetch.
     */
    where?: CHANNELWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHANNELS to fetch.
     */
    orderBy?: Enumerable<CHANNELOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CHANNELS.
     */
    cursor?: CHANNELWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHANNELS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHANNELS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CHANNELS.
     */
    distinct?: Enumerable<CHANNELScalarFieldEnum>
  }

  /**
   * CHANNEL findFirst
   */
  export interface CHANNELFindFirstArgs extends CHANNELFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CHANNEL findFirstOrThrow
   */
  export type CHANNELFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CHANNEL
     */
    select?: CHANNELSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CHANNELInclude | null
    /**
     * Filter, which CHANNEL to fetch.
     */
    where?: CHANNELWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHANNELS to fetch.
     */
    orderBy?: Enumerable<CHANNELOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CHANNELS.
     */
    cursor?: CHANNELWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHANNELS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHANNELS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CHANNELS.
     */
    distinct?: Enumerable<CHANNELScalarFieldEnum>
  }


  /**
   * CHANNEL findMany
   */
  export type CHANNELFindManyArgs = {
    /**
     * Select specific fields to fetch from the CHANNEL
     */
    select?: CHANNELSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CHANNELInclude | null
    /**
     * Filter, which CHANNELS to fetch.
     */
    where?: CHANNELWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHANNELS to fetch.
     */
    orderBy?: Enumerable<CHANNELOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CHANNELS.
     */
    cursor?: CHANNELWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHANNELS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHANNELS.
     */
    skip?: number
    distinct?: Enumerable<CHANNELScalarFieldEnum>
  }


  /**
   * CHANNEL create
   */
  export type CHANNELCreateArgs = {
    /**
     * Select specific fields to fetch from the CHANNEL
     */
    select?: CHANNELSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CHANNELInclude | null
    /**
     * The data needed to create a CHANNEL.
     */
    data: XOR<CHANNELCreateInput, CHANNELUncheckedCreateInput>
  }


  /**
   * CHANNEL update
   */
  export type CHANNELUpdateArgs = {
    /**
     * Select specific fields to fetch from the CHANNEL
     */
    select?: CHANNELSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CHANNELInclude | null
    /**
     * The data needed to update a CHANNEL.
     */
    data: XOR<CHANNELUpdateInput, CHANNELUncheckedUpdateInput>
    /**
     * Choose, which CHANNEL to update.
     */
    where: CHANNELWhereUniqueInput
  }


  /**
   * CHANNEL updateMany
   */
  export type CHANNELUpdateManyArgs = {
    /**
     * The data used to update CHANNELS.
     */
    data: XOR<CHANNELUpdateManyMutationInput, CHANNELUncheckedUpdateManyInput>
    /**
     * Filter which CHANNELS to update
     */
    where?: CHANNELWhereInput
  }


  /**
   * CHANNEL upsert
   */
  export type CHANNELUpsertArgs = {
    /**
     * Select specific fields to fetch from the CHANNEL
     */
    select?: CHANNELSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CHANNELInclude | null
    /**
     * The filter to search for the CHANNEL to update in case it exists.
     */
    where: CHANNELWhereUniqueInput
    /**
     * In case the CHANNEL found by the `where` argument doesn't exist, create a new CHANNEL with this data.
     */
    create: XOR<CHANNELCreateInput, CHANNELUncheckedCreateInput>
    /**
     * In case the CHANNEL was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CHANNELUpdateInput, CHANNELUncheckedUpdateInput>
  }


  /**
   * CHANNEL delete
   */
  export type CHANNELDeleteArgs = {
    /**
     * Select specific fields to fetch from the CHANNEL
     */
    select?: CHANNELSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CHANNELInclude | null
    /**
     * Filter which CHANNEL to delete.
     */
    where: CHANNELWhereUniqueInput
  }


  /**
   * CHANNEL deleteMany
   */
  export type CHANNELDeleteManyArgs = {
    /**
     * Filter which CHANNELS to delete
     */
    where?: CHANNELWhereInput
  }


  /**
   * CHANNEL.STORE
   */
  export type CHANNEL$STOREArgs = {
    /**
     * Select specific fields to fetch from the STORE
     */
    select?: STORESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: STOREInclude | null
    where?: STOREWhereInput
    orderBy?: Enumerable<STOREOrderByWithRelationInput>
    cursor?: STOREWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<STOREScalarFieldEnum>
  }


  /**
   * CHANNEL without action
   */
  export type CHANNELArgs = {
    /**
     * Select specific fields to fetch from the CHANNEL
     */
    select?: CHANNELSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CHANNELInclude | null
  }



  /**
   * Model FLAG
   */


  export type AggregateFLAG = {
    _count: FLAGCountAggregateOutputType | null
    _avg: FLAGAvgAggregateOutputType | null
    _sum: FLAGSumAggregateOutputType | null
    _min: FLAGMinAggregateOutputType | null
    _max: FLAGMaxAggregateOutputType | null
  }

  export type FLAGAvgAggregateOutputType = {
    ID: number | null
  }

  export type FLAGSumAggregateOutputType = {
    ID: number | null
  }

  export type FLAGMinAggregateOutputType = {
    ID: number | null
    NAME: string | null
  }

  export type FLAGMaxAggregateOutputType = {
    ID: number | null
    NAME: string | null
  }

  export type FLAGCountAggregateOutputType = {
    ID: number
    NAME: number
    _all: number
  }


  export type FLAGAvgAggregateInputType = {
    ID?: true
  }

  export type FLAGSumAggregateInputType = {
    ID?: true
  }

  export type FLAGMinAggregateInputType = {
    ID?: true
    NAME?: true
  }

  export type FLAGMaxAggregateInputType = {
    ID?: true
    NAME?: true
  }

  export type FLAGCountAggregateInputType = {
    ID?: true
    NAME?: true
    _all?: true
  }

  export type FLAGAggregateArgs = {
    /**
     * Filter which FLAG to aggregate.
     */
    where?: FLAGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FLAGS to fetch.
     */
    orderBy?: Enumerable<FLAGOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FLAGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FLAGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FLAGS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FLAGS
    **/
    _count?: true | FLAGCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FLAGAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FLAGSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FLAGMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FLAGMaxAggregateInputType
  }

  export type GetFLAGAggregateType<T extends FLAGAggregateArgs> = {
        [P in keyof T & keyof AggregateFLAG]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFLAG[P]>
      : GetScalarType<T[P], AggregateFLAG[P]>
  }




  export type FLAGGroupByArgs = {
    where?: FLAGWhereInput
    orderBy?: Enumerable<FLAGOrderByWithAggregationInput>
    by: FLAGScalarFieldEnum[]
    having?: FLAGScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FLAGCountAggregateInputType | true
    _avg?: FLAGAvgAggregateInputType
    _sum?: FLAGSumAggregateInputType
    _min?: FLAGMinAggregateInputType
    _max?: FLAGMaxAggregateInputType
  }


  export type FLAGGroupByOutputType = {
    ID: number
    NAME: string
    _count: FLAGCountAggregateOutputType | null
    _avg: FLAGAvgAggregateOutputType | null
    _sum: FLAGSumAggregateOutputType | null
    _min: FLAGMinAggregateOutputType | null
    _max: FLAGMaxAggregateOutputType | null
  }

  type GetFLAGGroupByPayload<T extends FLAGGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FLAGGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FLAGGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FLAGGroupByOutputType[P]>
            : GetScalarType<T[P], FLAGGroupByOutputType[P]>
        }
      >
    >


  export type FLAGSelect = {
    ID?: boolean
    NAME?: boolean
    STORE?: boolean | FLAG$STOREArgs
    _count?: boolean | FLAGCountOutputTypeArgs
  }


  export type FLAGInclude = {
    STORE?: boolean | FLAG$STOREArgs
    _count?: boolean | FLAGCountOutputTypeArgs
  }

  export type FLAGGetPayload<S extends boolean | null | undefined | FLAGArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FLAG :
    S extends undefined ? never :
    S extends { include: any } & (FLAGArgs | FLAGFindManyArgs)
    ? FLAG  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'STORE' ? Array < STOREGetPayload<S['include'][P]>>  :
        P extends '_count' ? FLAGCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FLAGArgs | FLAGFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'STORE' ? Array < STOREGetPayload<S['select'][P]>>  :
        P extends '_count' ? FLAGCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof FLAG ? FLAG[P] : never
  } 
      : FLAG


  type FLAGCountArgs = 
    Omit<FLAGFindManyArgs, 'select' | 'include'> & {
      select?: FLAGCountAggregateInputType | true
    }

  export interface FLAGDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one FLAG that matches the filter.
     * @param {FLAGFindUniqueArgs} args - Arguments to find a FLAG
     * @example
     * // Get one FLAG
     * const fLAG = await prisma.fLAG.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FLAGFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FLAGFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FLAG'> extends True ? Prisma__FLAGClient<FLAGGetPayload<T>> : Prisma__FLAGClient<FLAGGetPayload<T> | null, null>

    /**
     * Find one FLAG that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FLAGFindUniqueOrThrowArgs} args - Arguments to find a FLAG
     * @example
     * // Get one FLAG
     * const fLAG = await prisma.fLAG.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FLAGFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FLAGFindUniqueOrThrowArgs>
    ): Prisma__FLAGClient<FLAGGetPayload<T>>

    /**
     * Find the first FLAG that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FLAGFindFirstArgs} args - Arguments to find a FLAG
     * @example
     * // Get one FLAG
     * const fLAG = await prisma.fLAG.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FLAGFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FLAGFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FLAG'> extends True ? Prisma__FLAGClient<FLAGGetPayload<T>> : Prisma__FLAGClient<FLAGGetPayload<T> | null, null>

    /**
     * Find the first FLAG that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FLAGFindFirstOrThrowArgs} args - Arguments to find a FLAG
     * @example
     * // Get one FLAG
     * const fLAG = await prisma.fLAG.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FLAGFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FLAGFindFirstOrThrowArgs>
    ): Prisma__FLAGClient<FLAGGetPayload<T>>

    /**
     * Find zero or more FLAGS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FLAGFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FLAGS
     * const fLAGS = await prisma.fLAG.findMany()
     * 
     * // Get first 10 FLAGS
     * const fLAGS = await prisma.fLAG.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const fLAGWithIDOnly = await prisma.fLAG.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends FLAGFindManyArgs>(
      args?: SelectSubset<T, FLAGFindManyArgs>
    ): Prisma.PrismaPromise<Array<FLAGGetPayload<T>>>

    /**
     * Create a FLAG.
     * @param {FLAGCreateArgs} args - Arguments to create a FLAG.
     * @example
     * // Create one FLAG
     * const FLAG = await prisma.fLAG.create({
     *   data: {
     *     // ... data to create a FLAG
     *   }
     * })
     * 
    **/
    create<T extends FLAGCreateArgs>(
      args: SelectSubset<T, FLAGCreateArgs>
    ): Prisma__FLAGClient<FLAGGetPayload<T>>

    /**
     * Delete a FLAG.
     * @param {FLAGDeleteArgs} args - Arguments to delete one FLAG.
     * @example
     * // Delete one FLAG
     * const FLAG = await prisma.fLAG.delete({
     *   where: {
     *     // ... filter to delete one FLAG
     *   }
     * })
     * 
    **/
    delete<T extends FLAGDeleteArgs>(
      args: SelectSubset<T, FLAGDeleteArgs>
    ): Prisma__FLAGClient<FLAGGetPayload<T>>

    /**
     * Update one FLAG.
     * @param {FLAGUpdateArgs} args - Arguments to update one FLAG.
     * @example
     * // Update one FLAG
     * const fLAG = await prisma.fLAG.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FLAGUpdateArgs>(
      args: SelectSubset<T, FLAGUpdateArgs>
    ): Prisma__FLAGClient<FLAGGetPayload<T>>

    /**
     * Delete zero or more FLAGS.
     * @param {FLAGDeleteManyArgs} args - Arguments to filter FLAGS to delete.
     * @example
     * // Delete a few FLAGS
     * const { count } = await prisma.fLAG.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FLAGDeleteManyArgs>(
      args?: SelectSubset<T, FLAGDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FLAGS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FLAGUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FLAGS
     * const fLAG = await prisma.fLAG.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FLAGUpdateManyArgs>(
      args: SelectSubset<T, FLAGUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FLAG.
     * @param {FLAGUpsertArgs} args - Arguments to update or create a FLAG.
     * @example
     * // Update or create a FLAG
     * const fLAG = await prisma.fLAG.upsert({
     *   create: {
     *     // ... data to create a FLAG
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FLAG we want to update
     *   }
     * })
    **/
    upsert<T extends FLAGUpsertArgs>(
      args: SelectSubset<T, FLAGUpsertArgs>
    ): Prisma__FLAGClient<FLAGGetPayload<T>>

    /**
     * Count the number of FLAGS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FLAGCountArgs} args - Arguments to filter FLAGS to count.
     * @example
     * // Count the number of FLAGS
     * const count = await prisma.fLAG.count({
     *   where: {
     *     // ... the filter for the FLAGS we want to count
     *   }
     * })
    **/
    count<T extends FLAGCountArgs>(
      args?: Subset<T, FLAGCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FLAGCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FLAG.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FLAGAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FLAGAggregateArgs>(args: Subset<T, FLAGAggregateArgs>): Prisma.PrismaPromise<GetFLAGAggregateType<T>>

    /**
     * Group by FLAG.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FLAGGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FLAGGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FLAGGroupByArgs['orderBy'] }
        : { orderBy?: FLAGGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FLAGGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFLAGGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FLAG.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FLAGClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    STORE<T extends FLAG$STOREArgs= {}>(args?: Subset<T, FLAG$STOREArgs>): Prisma.PrismaPromise<Array<STOREGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FLAG base type for findUnique actions
   */
  export type FLAGFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FLAG
     */
    select?: FLAGSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FLAGInclude | null
    /**
     * Filter, which FLAG to fetch.
     */
    where: FLAGWhereUniqueInput
  }

  /**
   * FLAG findUnique
   */
  export interface FLAGFindUniqueArgs extends FLAGFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FLAG findUniqueOrThrow
   */
  export type FLAGFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FLAG
     */
    select?: FLAGSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FLAGInclude | null
    /**
     * Filter, which FLAG to fetch.
     */
    where: FLAGWhereUniqueInput
  }


  /**
   * FLAG base type for findFirst actions
   */
  export type FLAGFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FLAG
     */
    select?: FLAGSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FLAGInclude | null
    /**
     * Filter, which FLAG to fetch.
     */
    where?: FLAGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FLAGS to fetch.
     */
    orderBy?: Enumerable<FLAGOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FLAGS.
     */
    cursor?: FLAGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FLAGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FLAGS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FLAGS.
     */
    distinct?: Enumerable<FLAGScalarFieldEnum>
  }

  /**
   * FLAG findFirst
   */
  export interface FLAGFindFirstArgs extends FLAGFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FLAG findFirstOrThrow
   */
  export type FLAGFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FLAG
     */
    select?: FLAGSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FLAGInclude | null
    /**
     * Filter, which FLAG to fetch.
     */
    where?: FLAGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FLAGS to fetch.
     */
    orderBy?: Enumerable<FLAGOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FLAGS.
     */
    cursor?: FLAGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FLAGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FLAGS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FLAGS.
     */
    distinct?: Enumerable<FLAGScalarFieldEnum>
  }


  /**
   * FLAG findMany
   */
  export type FLAGFindManyArgs = {
    /**
     * Select specific fields to fetch from the FLAG
     */
    select?: FLAGSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FLAGInclude | null
    /**
     * Filter, which FLAGS to fetch.
     */
    where?: FLAGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FLAGS to fetch.
     */
    orderBy?: Enumerable<FLAGOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FLAGS.
     */
    cursor?: FLAGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FLAGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FLAGS.
     */
    skip?: number
    distinct?: Enumerable<FLAGScalarFieldEnum>
  }


  /**
   * FLAG create
   */
  export type FLAGCreateArgs = {
    /**
     * Select specific fields to fetch from the FLAG
     */
    select?: FLAGSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FLAGInclude | null
    /**
     * The data needed to create a FLAG.
     */
    data: XOR<FLAGCreateInput, FLAGUncheckedCreateInput>
  }


  /**
   * FLAG update
   */
  export type FLAGUpdateArgs = {
    /**
     * Select specific fields to fetch from the FLAG
     */
    select?: FLAGSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FLAGInclude | null
    /**
     * The data needed to update a FLAG.
     */
    data: XOR<FLAGUpdateInput, FLAGUncheckedUpdateInput>
    /**
     * Choose, which FLAG to update.
     */
    where: FLAGWhereUniqueInput
  }


  /**
   * FLAG updateMany
   */
  export type FLAGUpdateManyArgs = {
    /**
     * The data used to update FLAGS.
     */
    data: XOR<FLAGUpdateManyMutationInput, FLAGUncheckedUpdateManyInput>
    /**
     * Filter which FLAGS to update
     */
    where?: FLAGWhereInput
  }


  /**
   * FLAG upsert
   */
  export type FLAGUpsertArgs = {
    /**
     * Select specific fields to fetch from the FLAG
     */
    select?: FLAGSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FLAGInclude | null
    /**
     * The filter to search for the FLAG to update in case it exists.
     */
    where: FLAGWhereUniqueInput
    /**
     * In case the FLAG found by the `where` argument doesn't exist, create a new FLAG with this data.
     */
    create: XOR<FLAGCreateInput, FLAGUncheckedCreateInput>
    /**
     * In case the FLAG was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FLAGUpdateInput, FLAGUncheckedUpdateInput>
  }


  /**
   * FLAG delete
   */
  export type FLAGDeleteArgs = {
    /**
     * Select specific fields to fetch from the FLAG
     */
    select?: FLAGSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FLAGInclude | null
    /**
     * Filter which FLAG to delete.
     */
    where: FLAGWhereUniqueInput
  }


  /**
   * FLAG deleteMany
   */
  export type FLAGDeleteManyArgs = {
    /**
     * Filter which FLAGS to delete
     */
    where?: FLAGWhereInput
  }


  /**
   * FLAG.STORE
   */
  export type FLAG$STOREArgs = {
    /**
     * Select specific fields to fetch from the STORE
     */
    select?: STORESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: STOREInclude | null
    where?: STOREWhereInput
    orderBy?: Enumerable<STOREOrderByWithRelationInput>
    cursor?: STOREWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<STOREScalarFieldEnum>
  }


  /**
   * FLAG without action
   */
  export type FLAGArgs = {
    /**
     * Select specific fields to fetch from the FLAG
     */
    select?: FLAGSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FLAGInclude | null
  }



  /**
   * Model REGION
   */


  export type AggregateREGION = {
    _count: REGIONCountAggregateOutputType | null
    _avg: REGIONAvgAggregateOutputType | null
    _sum: REGIONSumAggregateOutputType | null
    _min: REGIONMinAggregateOutputType | null
    _max: REGIONMaxAggregateOutputType | null
  }

  export type REGIONAvgAggregateOutputType = {
    ID: number | null
  }

  export type REGIONSumAggregateOutputType = {
    ID: number | null
  }

  export type REGIONMinAggregateOutputType = {
    ID: number | null
    NAME: string | null
  }

  export type REGIONMaxAggregateOutputType = {
    ID: number | null
    NAME: string | null
  }

  export type REGIONCountAggregateOutputType = {
    ID: number
    NAME: number
    _all: number
  }


  export type REGIONAvgAggregateInputType = {
    ID?: true
  }

  export type REGIONSumAggregateInputType = {
    ID?: true
  }

  export type REGIONMinAggregateInputType = {
    ID?: true
    NAME?: true
  }

  export type REGIONMaxAggregateInputType = {
    ID?: true
    NAME?: true
  }

  export type REGIONCountAggregateInputType = {
    ID?: true
    NAME?: true
    _all?: true
  }

  export type REGIONAggregateArgs = {
    /**
     * Filter which REGION to aggregate.
     */
    where?: REGIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REGIONS to fetch.
     */
    orderBy?: Enumerable<REGIONOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: REGIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REGIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REGIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned REGIONS
    **/
    _count?: true | REGIONCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: REGIONAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: REGIONSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: REGIONMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: REGIONMaxAggregateInputType
  }

  export type GetREGIONAggregateType<T extends REGIONAggregateArgs> = {
        [P in keyof T & keyof AggregateREGION]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateREGION[P]>
      : GetScalarType<T[P], AggregateREGION[P]>
  }




  export type REGIONGroupByArgs = {
    where?: REGIONWhereInput
    orderBy?: Enumerable<REGIONOrderByWithAggregationInput>
    by: REGIONScalarFieldEnum[]
    having?: REGIONScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: REGIONCountAggregateInputType | true
    _avg?: REGIONAvgAggregateInputType
    _sum?: REGIONSumAggregateInputType
    _min?: REGIONMinAggregateInputType
    _max?: REGIONMaxAggregateInputType
  }


  export type REGIONGroupByOutputType = {
    ID: number
    NAME: string
    _count: REGIONCountAggregateOutputType | null
    _avg: REGIONAvgAggregateOutputType | null
    _sum: REGIONSumAggregateOutputType | null
    _min: REGIONMinAggregateOutputType | null
    _max: REGIONMaxAggregateOutputType | null
  }

  type GetREGIONGroupByPayload<T extends REGIONGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<REGIONGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof REGIONGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], REGIONGroupByOutputType[P]>
            : GetScalarType<T[P], REGIONGroupByOutputType[P]>
        }
      >
    >


  export type REGIONSelect = {
    ID?: boolean
    NAME?: boolean
    STORE?: boolean | REGION$STOREArgs
    _count?: boolean | REGIONCountOutputTypeArgs
  }


  export type REGIONInclude = {
    STORE?: boolean | REGION$STOREArgs
    _count?: boolean | REGIONCountOutputTypeArgs
  }

  export type REGIONGetPayload<S extends boolean | null | undefined | REGIONArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? REGION :
    S extends undefined ? never :
    S extends { include: any } & (REGIONArgs | REGIONFindManyArgs)
    ? REGION  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'STORE' ? Array < STOREGetPayload<S['include'][P]>>  :
        P extends '_count' ? REGIONCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (REGIONArgs | REGIONFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'STORE' ? Array < STOREGetPayload<S['select'][P]>>  :
        P extends '_count' ? REGIONCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof REGION ? REGION[P] : never
  } 
      : REGION


  type REGIONCountArgs = 
    Omit<REGIONFindManyArgs, 'select' | 'include'> & {
      select?: REGIONCountAggregateInputType | true
    }

  export interface REGIONDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one REGION that matches the filter.
     * @param {REGIONFindUniqueArgs} args - Arguments to find a REGION
     * @example
     * // Get one REGION
     * const rEGION = await prisma.rEGION.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends REGIONFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, REGIONFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'REGION'> extends True ? Prisma__REGIONClient<REGIONGetPayload<T>> : Prisma__REGIONClient<REGIONGetPayload<T> | null, null>

    /**
     * Find one REGION that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {REGIONFindUniqueOrThrowArgs} args - Arguments to find a REGION
     * @example
     * // Get one REGION
     * const rEGION = await prisma.rEGION.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends REGIONFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, REGIONFindUniqueOrThrowArgs>
    ): Prisma__REGIONClient<REGIONGetPayload<T>>

    /**
     * Find the first REGION that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REGIONFindFirstArgs} args - Arguments to find a REGION
     * @example
     * // Get one REGION
     * const rEGION = await prisma.rEGION.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends REGIONFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, REGIONFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'REGION'> extends True ? Prisma__REGIONClient<REGIONGetPayload<T>> : Prisma__REGIONClient<REGIONGetPayload<T> | null, null>

    /**
     * Find the first REGION that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REGIONFindFirstOrThrowArgs} args - Arguments to find a REGION
     * @example
     * // Get one REGION
     * const rEGION = await prisma.rEGION.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends REGIONFindFirstOrThrowArgs>(
      args?: SelectSubset<T, REGIONFindFirstOrThrowArgs>
    ): Prisma__REGIONClient<REGIONGetPayload<T>>

    /**
     * Find zero or more REGIONS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REGIONFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all REGIONS
     * const rEGIONS = await prisma.rEGION.findMany()
     * 
     * // Get first 10 REGIONS
     * const rEGIONS = await prisma.rEGION.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const rEGIONWithIDOnly = await prisma.rEGION.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends REGIONFindManyArgs>(
      args?: SelectSubset<T, REGIONFindManyArgs>
    ): Prisma.PrismaPromise<Array<REGIONGetPayload<T>>>

    /**
     * Create a REGION.
     * @param {REGIONCreateArgs} args - Arguments to create a REGION.
     * @example
     * // Create one REGION
     * const REGION = await prisma.rEGION.create({
     *   data: {
     *     // ... data to create a REGION
     *   }
     * })
     * 
    **/
    create<T extends REGIONCreateArgs>(
      args: SelectSubset<T, REGIONCreateArgs>
    ): Prisma__REGIONClient<REGIONGetPayload<T>>

    /**
     * Delete a REGION.
     * @param {REGIONDeleteArgs} args - Arguments to delete one REGION.
     * @example
     * // Delete one REGION
     * const REGION = await prisma.rEGION.delete({
     *   where: {
     *     // ... filter to delete one REGION
     *   }
     * })
     * 
    **/
    delete<T extends REGIONDeleteArgs>(
      args: SelectSubset<T, REGIONDeleteArgs>
    ): Prisma__REGIONClient<REGIONGetPayload<T>>

    /**
     * Update one REGION.
     * @param {REGIONUpdateArgs} args - Arguments to update one REGION.
     * @example
     * // Update one REGION
     * const rEGION = await prisma.rEGION.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends REGIONUpdateArgs>(
      args: SelectSubset<T, REGIONUpdateArgs>
    ): Prisma__REGIONClient<REGIONGetPayload<T>>

    /**
     * Delete zero or more REGIONS.
     * @param {REGIONDeleteManyArgs} args - Arguments to filter REGIONS to delete.
     * @example
     * // Delete a few REGIONS
     * const { count } = await prisma.rEGION.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends REGIONDeleteManyArgs>(
      args?: SelectSubset<T, REGIONDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more REGIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REGIONUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many REGIONS
     * const rEGION = await prisma.rEGION.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends REGIONUpdateManyArgs>(
      args: SelectSubset<T, REGIONUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one REGION.
     * @param {REGIONUpsertArgs} args - Arguments to update or create a REGION.
     * @example
     * // Update or create a REGION
     * const rEGION = await prisma.rEGION.upsert({
     *   create: {
     *     // ... data to create a REGION
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the REGION we want to update
     *   }
     * })
    **/
    upsert<T extends REGIONUpsertArgs>(
      args: SelectSubset<T, REGIONUpsertArgs>
    ): Prisma__REGIONClient<REGIONGetPayload<T>>

    /**
     * Count the number of REGIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REGIONCountArgs} args - Arguments to filter REGIONS to count.
     * @example
     * // Count the number of REGIONS
     * const count = await prisma.rEGION.count({
     *   where: {
     *     // ... the filter for the REGIONS we want to count
     *   }
     * })
    **/
    count<T extends REGIONCountArgs>(
      args?: Subset<T, REGIONCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], REGIONCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a REGION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REGIONAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends REGIONAggregateArgs>(args: Subset<T, REGIONAggregateArgs>): Prisma.PrismaPromise<GetREGIONAggregateType<T>>

    /**
     * Group by REGION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REGIONGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends REGIONGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: REGIONGroupByArgs['orderBy'] }
        : { orderBy?: REGIONGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, REGIONGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetREGIONGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for REGION.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__REGIONClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    STORE<T extends REGION$STOREArgs= {}>(args?: Subset<T, REGION$STOREArgs>): Prisma.PrismaPromise<Array<STOREGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * REGION base type for findUnique actions
   */
  export type REGIONFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the REGION
     */
    select?: REGIONSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REGIONInclude | null
    /**
     * Filter, which REGION to fetch.
     */
    where: REGIONWhereUniqueInput
  }

  /**
   * REGION findUnique
   */
  export interface REGIONFindUniqueArgs extends REGIONFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * REGION findUniqueOrThrow
   */
  export type REGIONFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the REGION
     */
    select?: REGIONSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REGIONInclude | null
    /**
     * Filter, which REGION to fetch.
     */
    where: REGIONWhereUniqueInput
  }


  /**
   * REGION base type for findFirst actions
   */
  export type REGIONFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the REGION
     */
    select?: REGIONSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REGIONInclude | null
    /**
     * Filter, which REGION to fetch.
     */
    where?: REGIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REGIONS to fetch.
     */
    orderBy?: Enumerable<REGIONOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REGIONS.
     */
    cursor?: REGIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REGIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REGIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REGIONS.
     */
    distinct?: Enumerable<REGIONScalarFieldEnum>
  }

  /**
   * REGION findFirst
   */
  export interface REGIONFindFirstArgs extends REGIONFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * REGION findFirstOrThrow
   */
  export type REGIONFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the REGION
     */
    select?: REGIONSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REGIONInclude | null
    /**
     * Filter, which REGION to fetch.
     */
    where?: REGIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REGIONS to fetch.
     */
    orderBy?: Enumerable<REGIONOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REGIONS.
     */
    cursor?: REGIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REGIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REGIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REGIONS.
     */
    distinct?: Enumerable<REGIONScalarFieldEnum>
  }


  /**
   * REGION findMany
   */
  export type REGIONFindManyArgs = {
    /**
     * Select specific fields to fetch from the REGION
     */
    select?: REGIONSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REGIONInclude | null
    /**
     * Filter, which REGIONS to fetch.
     */
    where?: REGIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REGIONS to fetch.
     */
    orderBy?: Enumerable<REGIONOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing REGIONS.
     */
    cursor?: REGIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REGIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REGIONS.
     */
    skip?: number
    distinct?: Enumerable<REGIONScalarFieldEnum>
  }


  /**
   * REGION create
   */
  export type REGIONCreateArgs = {
    /**
     * Select specific fields to fetch from the REGION
     */
    select?: REGIONSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REGIONInclude | null
    /**
     * The data needed to create a REGION.
     */
    data: XOR<REGIONCreateInput, REGIONUncheckedCreateInput>
  }


  /**
   * REGION update
   */
  export type REGIONUpdateArgs = {
    /**
     * Select specific fields to fetch from the REGION
     */
    select?: REGIONSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REGIONInclude | null
    /**
     * The data needed to update a REGION.
     */
    data: XOR<REGIONUpdateInput, REGIONUncheckedUpdateInput>
    /**
     * Choose, which REGION to update.
     */
    where: REGIONWhereUniqueInput
  }


  /**
   * REGION updateMany
   */
  export type REGIONUpdateManyArgs = {
    /**
     * The data used to update REGIONS.
     */
    data: XOR<REGIONUpdateManyMutationInput, REGIONUncheckedUpdateManyInput>
    /**
     * Filter which REGIONS to update
     */
    where?: REGIONWhereInput
  }


  /**
   * REGION upsert
   */
  export type REGIONUpsertArgs = {
    /**
     * Select specific fields to fetch from the REGION
     */
    select?: REGIONSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REGIONInclude | null
    /**
     * The filter to search for the REGION to update in case it exists.
     */
    where: REGIONWhereUniqueInput
    /**
     * In case the REGION found by the `where` argument doesn't exist, create a new REGION with this data.
     */
    create: XOR<REGIONCreateInput, REGIONUncheckedCreateInput>
    /**
     * In case the REGION was found with the provided `where` argument, update it with this data.
     */
    update: XOR<REGIONUpdateInput, REGIONUncheckedUpdateInput>
  }


  /**
   * REGION delete
   */
  export type REGIONDeleteArgs = {
    /**
     * Select specific fields to fetch from the REGION
     */
    select?: REGIONSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REGIONInclude | null
    /**
     * Filter which REGION to delete.
     */
    where: REGIONWhereUniqueInput
  }


  /**
   * REGION deleteMany
   */
  export type REGIONDeleteManyArgs = {
    /**
     * Filter which REGIONS to delete
     */
    where?: REGIONWhereInput
  }


  /**
   * REGION.STORE
   */
  export type REGION$STOREArgs = {
    /**
     * Select specific fields to fetch from the STORE
     */
    select?: STORESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: STOREInclude | null
    where?: STOREWhereInput
    orderBy?: Enumerable<STOREOrderByWithRelationInput>
    cursor?: STOREWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<STOREScalarFieldEnum>
  }


  /**
   * REGION without action
   */
  export type REGIONArgs = {
    /**
     * Select specific fields to fetch from the REGION
     */
    select?: REGIONSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REGIONInclude | null
  }



  /**
   * Model SQLITEADMIN_QUERIES
   */


  export type AggregateSQLITEADMIN_QUERIES = {
    _count: SQLITEADMIN_QUERIESCountAggregateOutputType | null
    _avg: SQLITEADMIN_QUERIESAvgAggregateOutputType | null
    _sum: SQLITEADMIN_QUERIESSumAggregateOutputType | null
    _min: SQLITEADMIN_QUERIESMinAggregateOutputType | null
    _max: SQLITEADMIN_QUERIESMaxAggregateOutputType | null
  }

  export type SQLITEADMIN_QUERIESAvgAggregateOutputType = {
    ID: number | null
  }

  export type SQLITEADMIN_QUERIESSumAggregateOutputType = {
    ID: number | null
  }

  export type SQLITEADMIN_QUERIESMinAggregateOutputType = {
    ID: number | null
    NAME: string | null
    SQL: string | null
  }

  export type SQLITEADMIN_QUERIESMaxAggregateOutputType = {
    ID: number | null
    NAME: string | null
    SQL: string | null
  }

  export type SQLITEADMIN_QUERIESCountAggregateOutputType = {
    ID: number
    NAME: number
    SQL: number
    _all: number
  }


  export type SQLITEADMIN_QUERIESAvgAggregateInputType = {
    ID?: true
  }

  export type SQLITEADMIN_QUERIESSumAggregateInputType = {
    ID?: true
  }

  export type SQLITEADMIN_QUERIESMinAggregateInputType = {
    ID?: true
    NAME?: true
    SQL?: true
  }

  export type SQLITEADMIN_QUERIESMaxAggregateInputType = {
    ID?: true
    NAME?: true
    SQL?: true
  }

  export type SQLITEADMIN_QUERIESCountAggregateInputType = {
    ID?: true
    NAME?: true
    SQL?: true
    _all?: true
  }

  export type SQLITEADMIN_QUERIESAggregateArgs = {
    /**
     * Filter which SQLITEADMIN_QUERIES to aggregate.
     */
    where?: SQLITEADMIN_QUERIESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SQLITEADMIN_QUERIES to fetch.
     */
    orderBy?: Enumerable<SQLITEADMIN_QUERIESOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SQLITEADMIN_QUERIESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SQLITEADMIN_QUERIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SQLITEADMIN_QUERIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SQLITEADMIN_QUERIES
    **/
    _count?: true | SQLITEADMIN_QUERIESCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SQLITEADMIN_QUERIESAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SQLITEADMIN_QUERIESSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SQLITEADMIN_QUERIESMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SQLITEADMIN_QUERIESMaxAggregateInputType
  }

  export type GetSQLITEADMIN_QUERIESAggregateType<T extends SQLITEADMIN_QUERIESAggregateArgs> = {
        [P in keyof T & keyof AggregateSQLITEADMIN_QUERIES]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSQLITEADMIN_QUERIES[P]>
      : GetScalarType<T[P], AggregateSQLITEADMIN_QUERIES[P]>
  }




  export type SQLITEADMIN_QUERIESGroupByArgs = {
    where?: SQLITEADMIN_QUERIESWhereInput
    orderBy?: Enumerable<SQLITEADMIN_QUERIESOrderByWithAggregationInput>
    by: SQLITEADMIN_QUERIESScalarFieldEnum[]
    having?: SQLITEADMIN_QUERIESScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SQLITEADMIN_QUERIESCountAggregateInputType | true
    _avg?: SQLITEADMIN_QUERIESAvgAggregateInputType
    _sum?: SQLITEADMIN_QUERIESSumAggregateInputType
    _min?: SQLITEADMIN_QUERIESMinAggregateInputType
    _max?: SQLITEADMIN_QUERIESMaxAggregateInputType
  }


  export type SQLITEADMIN_QUERIESGroupByOutputType = {
    ID: number
    NAME: string | null
    SQL: string | null
    _count: SQLITEADMIN_QUERIESCountAggregateOutputType | null
    _avg: SQLITEADMIN_QUERIESAvgAggregateOutputType | null
    _sum: SQLITEADMIN_QUERIESSumAggregateOutputType | null
    _min: SQLITEADMIN_QUERIESMinAggregateOutputType | null
    _max: SQLITEADMIN_QUERIESMaxAggregateOutputType | null
  }

  type GetSQLITEADMIN_QUERIESGroupByPayload<T extends SQLITEADMIN_QUERIESGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SQLITEADMIN_QUERIESGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SQLITEADMIN_QUERIESGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SQLITEADMIN_QUERIESGroupByOutputType[P]>
            : GetScalarType<T[P], SQLITEADMIN_QUERIESGroupByOutputType[P]>
        }
      >
    >


  export type SQLITEADMIN_QUERIESSelect = {
    ID?: boolean
    NAME?: boolean
    SQL?: boolean
  }


  export type SQLITEADMIN_QUERIESGetPayload<S extends boolean | null | undefined | SQLITEADMIN_QUERIESArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SQLITEADMIN_QUERIES :
    S extends undefined ? never :
    S extends { include: any } & (SQLITEADMIN_QUERIESArgs | SQLITEADMIN_QUERIESFindManyArgs)
    ? SQLITEADMIN_QUERIES 
    : S extends { select: any } & (SQLITEADMIN_QUERIESArgs | SQLITEADMIN_QUERIESFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SQLITEADMIN_QUERIES ? SQLITEADMIN_QUERIES[P] : never
  } 
      : SQLITEADMIN_QUERIES


  type SQLITEADMIN_QUERIESCountArgs = 
    Omit<SQLITEADMIN_QUERIESFindManyArgs, 'select' | 'include'> & {
      select?: SQLITEADMIN_QUERIESCountAggregateInputType | true
    }

  export interface SQLITEADMIN_QUERIESDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one SQLITEADMIN_QUERIES that matches the filter.
     * @param {SQLITEADMIN_QUERIESFindUniqueArgs} args - Arguments to find a SQLITEADMIN_QUERIES
     * @example
     * // Get one SQLITEADMIN_QUERIES
     * const sQLITEADMIN_QUERIES = await prisma.sQLITEADMIN_QUERIES.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SQLITEADMIN_QUERIESFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SQLITEADMIN_QUERIESFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SQLITEADMIN_QUERIES'> extends True ? Prisma__SQLITEADMIN_QUERIESClient<SQLITEADMIN_QUERIESGetPayload<T>> : Prisma__SQLITEADMIN_QUERIESClient<SQLITEADMIN_QUERIESGetPayload<T> | null, null>

    /**
     * Find one SQLITEADMIN_QUERIES that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SQLITEADMIN_QUERIESFindUniqueOrThrowArgs} args - Arguments to find a SQLITEADMIN_QUERIES
     * @example
     * // Get one SQLITEADMIN_QUERIES
     * const sQLITEADMIN_QUERIES = await prisma.sQLITEADMIN_QUERIES.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SQLITEADMIN_QUERIESFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SQLITEADMIN_QUERIESFindUniqueOrThrowArgs>
    ): Prisma__SQLITEADMIN_QUERIESClient<SQLITEADMIN_QUERIESGetPayload<T>>

    /**
     * Find the first SQLITEADMIN_QUERIES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SQLITEADMIN_QUERIESFindFirstArgs} args - Arguments to find a SQLITEADMIN_QUERIES
     * @example
     * // Get one SQLITEADMIN_QUERIES
     * const sQLITEADMIN_QUERIES = await prisma.sQLITEADMIN_QUERIES.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SQLITEADMIN_QUERIESFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SQLITEADMIN_QUERIESFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SQLITEADMIN_QUERIES'> extends True ? Prisma__SQLITEADMIN_QUERIESClient<SQLITEADMIN_QUERIESGetPayload<T>> : Prisma__SQLITEADMIN_QUERIESClient<SQLITEADMIN_QUERIESGetPayload<T> | null, null>

    /**
     * Find the first SQLITEADMIN_QUERIES that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SQLITEADMIN_QUERIESFindFirstOrThrowArgs} args - Arguments to find a SQLITEADMIN_QUERIES
     * @example
     * // Get one SQLITEADMIN_QUERIES
     * const sQLITEADMIN_QUERIES = await prisma.sQLITEADMIN_QUERIES.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SQLITEADMIN_QUERIESFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SQLITEADMIN_QUERIESFindFirstOrThrowArgs>
    ): Prisma__SQLITEADMIN_QUERIESClient<SQLITEADMIN_QUERIESGetPayload<T>>

    /**
     * Find zero or more SQLITEADMIN_QUERIES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SQLITEADMIN_QUERIESFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SQLITEADMIN_QUERIES
     * const sQLITEADMIN_QUERIES = await prisma.sQLITEADMIN_QUERIES.findMany()
     * 
     * // Get first 10 SQLITEADMIN_QUERIES
     * const sQLITEADMIN_QUERIES = await prisma.sQLITEADMIN_QUERIES.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const sQLITEADMIN_QUERIESWithIDOnly = await prisma.sQLITEADMIN_QUERIES.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends SQLITEADMIN_QUERIESFindManyArgs>(
      args?: SelectSubset<T, SQLITEADMIN_QUERIESFindManyArgs>
    ): Prisma.PrismaPromise<Array<SQLITEADMIN_QUERIESGetPayload<T>>>

    /**
     * Create a SQLITEADMIN_QUERIES.
     * @param {SQLITEADMIN_QUERIESCreateArgs} args - Arguments to create a SQLITEADMIN_QUERIES.
     * @example
     * // Create one SQLITEADMIN_QUERIES
     * const SQLITEADMIN_QUERIES = await prisma.sQLITEADMIN_QUERIES.create({
     *   data: {
     *     // ... data to create a SQLITEADMIN_QUERIES
     *   }
     * })
     * 
    **/
    create<T extends SQLITEADMIN_QUERIESCreateArgs>(
      args: SelectSubset<T, SQLITEADMIN_QUERIESCreateArgs>
    ): Prisma__SQLITEADMIN_QUERIESClient<SQLITEADMIN_QUERIESGetPayload<T>>

    /**
     * Delete a SQLITEADMIN_QUERIES.
     * @param {SQLITEADMIN_QUERIESDeleteArgs} args - Arguments to delete one SQLITEADMIN_QUERIES.
     * @example
     * // Delete one SQLITEADMIN_QUERIES
     * const SQLITEADMIN_QUERIES = await prisma.sQLITEADMIN_QUERIES.delete({
     *   where: {
     *     // ... filter to delete one SQLITEADMIN_QUERIES
     *   }
     * })
     * 
    **/
    delete<T extends SQLITEADMIN_QUERIESDeleteArgs>(
      args: SelectSubset<T, SQLITEADMIN_QUERIESDeleteArgs>
    ): Prisma__SQLITEADMIN_QUERIESClient<SQLITEADMIN_QUERIESGetPayload<T>>

    /**
     * Update one SQLITEADMIN_QUERIES.
     * @param {SQLITEADMIN_QUERIESUpdateArgs} args - Arguments to update one SQLITEADMIN_QUERIES.
     * @example
     * // Update one SQLITEADMIN_QUERIES
     * const sQLITEADMIN_QUERIES = await prisma.sQLITEADMIN_QUERIES.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SQLITEADMIN_QUERIESUpdateArgs>(
      args: SelectSubset<T, SQLITEADMIN_QUERIESUpdateArgs>
    ): Prisma__SQLITEADMIN_QUERIESClient<SQLITEADMIN_QUERIESGetPayload<T>>

    /**
     * Delete zero or more SQLITEADMIN_QUERIES.
     * @param {SQLITEADMIN_QUERIESDeleteManyArgs} args - Arguments to filter SQLITEADMIN_QUERIES to delete.
     * @example
     * // Delete a few SQLITEADMIN_QUERIES
     * const { count } = await prisma.sQLITEADMIN_QUERIES.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SQLITEADMIN_QUERIESDeleteManyArgs>(
      args?: SelectSubset<T, SQLITEADMIN_QUERIESDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SQLITEADMIN_QUERIES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SQLITEADMIN_QUERIESUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SQLITEADMIN_QUERIES
     * const sQLITEADMIN_QUERIES = await prisma.sQLITEADMIN_QUERIES.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SQLITEADMIN_QUERIESUpdateManyArgs>(
      args: SelectSubset<T, SQLITEADMIN_QUERIESUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SQLITEADMIN_QUERIES.
     * @param {SQLITEADMIN_QUERIESUpsertArgs} args - Arguments to update or create a SQLITEADMIN_QUERIES.
     * @example
     * // Update or create a SQLITEADMIN_QUERIES
     * const sQLITEADMIN_QUERIES = await prisma.sQLITEADMIN_QUERIES.upsert({
     *   create: {
     *     // ... data to create a SQLITEADMIN_QUERIES
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SQLITEADMIN_QUERIES we want to update
     *   }
     * })
    **/
    upsert<T extends SQLITEADMIN_QUERIESUpsertArgs>(
      args: SelectSubset<T, SQLITEADMIN_QUERIESUpsertArgs>
    ): Prisma__SQLITEADMIN_QUERIESClient<SQLITEADMIN_QUERIESGetPayload<T>>

    /**
     * Count the number of SQLITEADMIN_QUERIES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SQLITEADMIN_QUERIESCountArgs} args - Arguments to filter SQLITEADMIN_QUERIES to count.
     * @example
     * // Count the number of SQLITEADMIN_QUERIES
     * const count = await prisma.sQLITEADMIN_QUERIES.count({
     *   where: {
     *     // ... the filter for the SQLITEADMIN_QUERIES we want to count
     *   }
     * })
    **/
    count<T extends SQLITEADMIN_QUERIESCountArgs>(
      args?: Subset<T, SQLITEADMIN_QUERIESCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SQLITEADMIN_QUERIESCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SQLITEADMIN_QUERIES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SQLITEADMIN_QUERIESAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SQLITEADMIN_QUERIESAggregateArgs>(args: Subset<T, SQLITEADMIN_QUERIESAggregateArgs>): Prisma.PrismaPromise<GetSQLITEADMIN_QUERIESAggregateType<T>>

    /**
     * Group by SQLITEADMIN_QUERIES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SQLITEADMIN_QUERIESGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SQLITEADMIN_QUERIESGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SQLITEADMIN_QUERIESGroupByArgs['orderBy'] }
        : { orderBy?: SQLITEADMIN_QUERIESGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SQLITEADMIN_QUERIESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSQLITEADMIN_QUERIESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SQLITEADMIN_QUERIES.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SQLITEADMIN_QUERIESClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SQLITEADMIN_QUERIES base type for findUnique actions
   */
  export type SQLITEADMIN_QUERIESFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SQLITEADMIN_QUERIES
     */
    select?: SQLITEADMIN_QUERIESSelect | null
    /**
     * Filter, which SQLITEADMIN_QUERIES to fetch.
     */
    where: SQLITEADMIN_QUERIESWhereUniqueInput
  }

  /**
   * SQLITEADMIN_QUERIES findUnique
   */
  export interface SQLITEADMIN_QUERIESFindUniqueArgs extends SQLITEADMIN_QUERIESFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SQLITEADMIN_QUERIES findUniqueOrThrow
   */
  export type SQLITEADMIN_QUERIESFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SQLITEADMIN_QUERIES
     */
    select?: SQLITEADMIN_QUERIESSelect | null
    /**
     * Filter, which SQLITEADMIN_QUERIES to fetch.
     */
    where: SQLITEADMIN_QUERIESWhereUniqueInput
  }


  /**
   * SQLITEADMIN_QUERIES base type for findFirst actions
   */
  export type SQLITEADMIN_QUERIESFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SQLITEADMIN_QUERIES
     */
    select?: SQLITEADMIN_QUERIESSelect | null
    /**
     * Filter, which SQLITEADMIN_QUERIES to fetch.
     */
    where?: SQLITEADMIN_QUERIESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SQLITEADMIN_QUERIES to fetch.
     */
    orderBy?: Enumerable<SQLITEADMIN_QUERIESOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SQLITEADMIN_QUERIES.
     */
    cursor?: SQLITEADMIN_QUERIESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SQLITEADMIN_QUERIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SQLITEADMIN_QUERIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SQLITEADMIN_QUERIES.
     */
    distinct?: Enumerable<SQLITEADMIN_QUERIESScalarFieldEnum>
  }

  /**
   * SQLITEADMIN_QUERIES findFirst
   */
  export interface SQLITEADMIN_QUERIESFindFirstArgs extends SQLITEADMIN_QUERIESFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SQLITEADMIN_QUERIES findFirstOrThrow
   */
  export type SQLITEADMIN_QUERIESFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SQLITEADMIN_QUERIES
     */
    select?: SQLITEADMIN_QUERIESSelect | null
    /**
     * Filter, which SQLITEADMIN_QUERIES to fetch.
     */
    where?: SQLITEADMIN_QUERIESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SQLITEADMIN_QUERIES to fetch.
     */
    orderBy?: Enumerable<SQLITEADMIN_QUERIESOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SQLITEADMIN_QUERIES.
     */
    cursor?: SQLITEADMIN_QUERIESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SQLITEADMIN_QUERIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SQLITEADMIN_QUERIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SQLITEADMIN_QUERIES.
     */
    distinct?: Enumerable<SQLITEADMIN_QUERIESScalarFieldEnum>
  }


  /**
   * SQLITEADMIN_QUERIES findMany
   */
  export type SQLITEADMIN_QUERIESFindManyArgs = {
    /**
     * Select specific fields to fetch from the SQLITEADMIN_QUERIES
     */
    select?: SQLITEADMIN_QUERIESSelect | null
    /**
     * Filter, which SQLITEADMIN_QUERIES to fetch.
     */
    where?: SQLITEADMIN_QUERIESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SQLITEADMIN_QUERIES to fetch.
     */
    orderBy?: Enumerable<SQLITEADMIN_QUERIESOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SQLITEADMIN_QUERIES.
     */
    cursor?: SQLITEADMIN_QUERIESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SQLITEADMIN_QUERIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SQLITEADMIN_QUERIES.
     */
    skip?: number
    distinct?: Enumerable<SQLITEADMIN_QUERIESScalarFieldEnum>
  }


  /**
   * SQLITEADMIN_QUERIES create
   */
  export type SQLITEADMIN_QUERIESCreateArgs = {
    /**
     * Select specific fields to fetch from the SQLITEADMIN_QUERIES
     */
    select?: SQLITEADMIN_QUERIESSelect | null
    /**
     * The data needed to create a SQLITEADMIN_QUERIES.
     */
    data: XOR<SQLITEADMIN_QUERIESCreateInput, SQLITEADMIN_QUERIESUncheckedCreateInput>
  }


  /**
   * SQLITEADMIN_QUERIES update
   */
  export type SQLITEADMIN_QUERIESUpdateArgs = {
    /**
     * Select specific fields to fetch from the SQLITEADMIN_QUERIES
     */
    select?: SQLITEADMIN_QUERIESSelect | null
    /**
     * The data needed to update a SQLITEADMIN_QUERIES.
     */
    data: XOR<SQLITEADMIN_QUERIESUpdateInput, SQLITEADMIN_QUERIESUncheckedUpdateInput>
    /**
     * Choose, which SQLITEADMIN_QUERIES to update.
     */
    where: SQLITEADMIN_QUERIESWhereUniqueInput
  }


  /**
   * SQLITEADMIN_QUERIES updateMany
   */
  export type SQLITEADMIN_QUERIESUpdateManyArgs = {
    /**
     * The data used to update SQLITEADMIN_QUERIES.
     */
    data: XOR<SQLITEADMIN_QUERIESUpdateManyMutationInput, SQLITEADMIN_QUERIESUncheckedUpdateManyInput>
    /**
     * Filter which SQLITEADMIN_QUERIES to update
     */
    where?: SQLITEADMIN_QUERIESWhereInput
  }


  /**
   * SQLITEADMIN_QUERIES upsert
   */
  export type SQLITEADMIN_QUERIESUpsertArgs = {
    /**
     * Select specific fields to fetch from the SQLITEADMIN_QUERIES
     */
    select?: SQLITEADMIN_QUERIESSelect | null
    /**
     * The filter to search for the SQLITEADMIN_QUERIES to update in case it exists.
     */
    where: SQLITEADMIN_QUERIESWhereUniqueInput
    /**
     * In case the SQLITEADMIN_QUERIES found by the `where` argument doesn't exist, create a new SQLITEADMIN_QUERIES with this data.
     */
    create: XOR<SQLITEADMIN_QUERIESCreateInput, SQLITEADMIN_QUERIESUncheckedCreateInput>
    /**
     * In case the SQLITEADMIN_QUERIES was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SQLITEADMIN_QUERIESUpdateInput, SQLITEADMIN_QUERIESUncheckedUpdateInput>
  }


  /**
   * SQLITEADMIN_QUERIES delete
   */
  export type SQLITEADMIN_QUERIESDeleteArgs = {
    /**
     * Select specific fields to fetch from the SQLITEADMIN_QUERIES
     */
    select?: SQLITEADMIN_QUERIESSelect | null
    /**
     * Filter which SQLITEADMIN_QUERIES to delete.
     */
    where: SQLITEADMIN_QUERIESWhereUniqueInput
  }


  /**
   * SQLITEADMIN_QUERIES deleteMany
   */
  export type SQLITEADMIN_QUERIESDeleteManyArgs = {
    /**
     * Filter which SQLITEADMIN_QUERIES to delete
     */
    where?: SQLITEADMIN_QUERIESWhereInput
  }


  /**
   * SQLITEADMIN_QUERIES without action
   */
  export type SQLITEADMIN_QUERIESArgs = {
    /**
     * Select specific fields to fetch from the SQLITEADMIN_QUERIES
     */
    select?: SQLITEADMIN_QUERIESSelect | null
  }



  /**
   * Model STORE
   */


  export type AggregateSTORE = {
    _count: STORECountAggregateOutputType | null
    _avg: STOREAvgAggregateOutputType | null
    _sum: STORESumAggregateOutputType | null
    _min: STOREMinAggregateOutputType | null
    _max: STOREMaxAggregateOutputType | null
  }

  export type STOREAvgAggregateOutputType = {
    STORE_KEY: number | null
    STORE_REGION: number | null
    STORE_SUPPORT: number | null
    STORE_LEADER: number | null
    STORE_TYPE: number | null
    STORE_CHANNEL: number | null
    STORE_FLAG: number | null
  }

  export type STORESumAggregateOutputType = {
    STORE_KEY: number | null
    STORE_REGION: number | null
    STORE_SUPPORT: number | null
    STORE_LEADER: number | null
    STORE_TYPE: number | null
    STORE_CHANNEL: number | null
    STORE_FLAG: number | null
  }

  export type STOREMinAggregateOutputType = {
    STORE_KEY: number | null
    STORE_NAME: string | null
    STORE_ID: string | null
    STORE_ADDRESS: string | null
    STORE_NEIG: string | null
    STORE_CITY: string | null
    STORE_STATE: string | null
    STORE_ZIP: string | null
    STORE_PHONE: string | null
    STORE_REGION: number | null
    STORE_SUPPORT: number | null
    STORE_LEADER: number | null
    STORE_TYPE: number | null
    STORE_CHANNEL: number | null
    STORE_FLAG: number | null
  }

  export type STOREMaxAggregateOutputType = {
    STORE_KEY: number | null
    STORE_NAME: string | null
    STORE_ID: string | null
    STORE_ADDRESS: string | null
    STORE_NEIG: string | null
    STORE_CITY: string | null
    STORE_STATE: string | null
    STORE_ZIP: string | null
    STORE_PHONE: string | null
    STORE_REGION: number | null
    STORE_SUPPORT: number | null
    STORE_LEADER: number | null
    STORE_TYPE: number | null
    STORE_CHANNEL: number | null
    STORE_FLAG: number | null
  }

  export type STORECountAggregateOutputType = {
    STORE_KEY: number
    STORE_NAME: number
    STORE_ID: number
    STORE_ADDRESS: number
    STORE_NEIG: number
    STORE_CITY: number
    STORE_STATE: number
    STORE_ZIP: number
    STORE_PHONE: number
    STORE_REGION: number
    STORE_SUPPORT: number
    STORE_LEADER: number
    STORE_TYPE: number
    STORE_CHANNEL: number
    STORE_FLAG: number
    _all: number
  }


  export type STOREAvgAggregateInputType = {
    STORE_KEY?: true
    STORE_REGION?: true
    STORE_SUPPORT?: true
    STORE_LEADER?: true
    STORE_TYPE?: true
    STORE_CHANNEL?: true
    STORE_FLAG?: true
  }

  export type STORESumAggregateInputType = {
    STORE_KEY?: true
    STORE_REGION?: true
    STORE_SUPPORT?: true
    STORE_LEADER?: true
    STORE_TYPE?: true
    STORE_CHANNEL?: true
    STORE_FLAG?: true
  }

  export type STOREMinAggregateInputType = {
    STORE_KEY?: true
    STORE_NAME?: true
    STORE_ID?: true
    STORE_ADDRESS?: true
    STORE_NEIG?: true
    STORE_CITY?: true
    STORE_STATE?: true
    STORE_ZIP?: true
    STORE_PHONE?: true
    STORE_REGION?: true
    STORE_SUPPORT?: true
    STORE_LEADER?: true
    STORE_TYPE?: true
    STORE_CHANNEL?: true
    STORE_FLAG?: true
  }

  export type STOREMaxAggregateInputType = {
    STORE_KEY?: true
    STORE_NAME?: true
    STORE_ID?: true
    STORE_ADDRESS?: true
    STORE_NEIG?: true
    STORE_CITY?: true
    STORE_STATE?: true
    STORE_ZIP?: true
    STORE_PHONE?: true
    STORE_REGION?: true
    STORE_SUPPORT?: true
    STORE_LEADER?: true
    STORE_TYPE?: true
    STORE_CHANNEL?: true
    STORE_FLAG?: true
  }

  export type STORECountAggregateInputType = {
    STORE_KEY?: true
    STORE_NAME?: true
    STORE_ID?: true
    STORE_ADDRESS?: true
    STORE_NEIG?: true
    STORE_CITY?: true
    STORE_STATE?: true
    STORE_ZIP?: true
    STORE_PHONE?: true
    STORE_REGION?: true
    STORE_SUPPORT?: true
    STORE_LEADER?: true
    STORE_TYPE?: true
    STORE_CHANNEL?: true
    STORE_FLAG?: true
    _all?: true
  }

  export type STOREAggregateArgs = {
    /**
     * Filter which STORE to aggregate.
     */
    where?: STOREWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STORES to fetch.
     */
    orderBy?: Enumerable<STOREOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: STOREWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STORES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STORES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned STORES
    **/
    _count?: true | STORECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: STOREAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: STORESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: STOREMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: STOREMaxAggregateInputType
  }

  export type GetSTOREAggregateType<T extends STOREAggregateArgs> = {
        [P in keyof T & keyof AggregateSTORE]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSTORE[P]>
      : GetScalarType<T[P], AggregateSTORE[P]>
  }




  export type STOREGroupByArgs = {
    where?: STOREWhereInput
    orderBy?: Enumerable<STOREOrderByWithAggregationInput>
    by: STOREScalarFieldEnum[]
    having?: STOREScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: STORECountAggregateInputType | true
    _avg?: STOREAvgAggregateInputType
    _sum?: STORESumAggregateInputType
    _min?: STOREMinAggregateInputType
    _max?: STOREMaxAggregateInputType
  }


  export type STOREGroupByOutputType = {
    STORE_KEY: number
    STORE_NAME: string | null
    STORE_ID: string | null
    STORE_ADDRESS: string | null
    STORE_NEIG: string | null
    STORE_CITY: string | null
    STORE_STATE: string | null
    STORE_ZIP: string | null
    STORE_PHONE: string | null
    STORE_REGION: number
    STORE_SUPPORT: number
    STORE_LEADER: number
    STORE_TYPE: number
    STORE_CHANNEL: number
    STORE_FLAG: number
    _count: STORECountAggregateOutputType | null
    _avg: STOREAvgAggregateOutputType | null
    _sum: STORESumAggregateOutputType | null
    _min: STOREMinAggregateOutputType | null
    _max: STOREMaxAggregateOutputType | null
  }

  type GetSTOREGroupByPayload<T extends STOREGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<STOREGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof STOREGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], STOREGroupByOutputType[P]>
            : GetScalarType<T[P], STOREGroupByOutputType[P]>
        }
      >
    >


  export type STORESelect = {
    STORE_KEY?: boolean
    STORE_NAME?: boolean
    STORE_ID?: boolean
    STORE_ADDRESS?: boolean
    STORE_NEIG?: boolean
    STORE_CITY?: boolean
    STORE_STATE?: boolean
    STORE_ZIP?: boolean
    STORE_PHONE?: boolean
    STORE_REGION?: boolean
    STORE_SUPPORT?: boolean
    STORE_LEADER?: boolean
    STORE_TYPE?: boolean
    STORE_CHANNEL?: boolean
    STORE_FLAG?: boolean
    FLAG?: boolean | FLAGArgs
    CHANNEL?: boolean | CHANNELArgs
    TYPE?: boolean | TYPEArgs
    SUPPORT_LEADER?: boolean | SUPPORT_LEADERArgs
    SUPPORT?: boolean | SUPPORTArgs
    REGION?: boolean | REGIONArgs
  }


  export type STOREInclude = {
    FLAG?: boolean | FLAGArgs
    CHANNEL?: boolean | CHANNELArgs
    TYPE?: boolean | TYPEArgs
    SUPPORT_LEADER?: boolean | SUPPORT_LEADERArgs
    SUPPORT?: boolean | SUPPORTArgs
    REGION?: boolean | REGIONArgs
  }

  export type STOREGetPayload<S extends boolean | null | undefined | STOREArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? STORE :
    S extends undefined ? never :
    S extends { include: any } & (STOREArgs | STOREFindManyArgs)
    ? STORE  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'FLAG' ? FLAGGetPayload<S['include'][P]> :
        P extends 'CHANNEL' ? CHANNELGetPayload<S['include'][P]> :
        P extends 'TYPE' ? TYPEGetPayload<S['include'][P]> :
        P extends 'SUPPORT_LEADER' ? SUPPORT_LEADERGetPayload<S['include'][P]> :
        P extends 'SUPPORT' ? SUPPORTGetPayload<S['include'][P]> :
        P extends 'REGION' ? REGIONGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (STOREArgs | STOREFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'FLAG' ? FLAGGetPayload<S['select'][P]> :
        P extends 'CHANNEL' ? CHANNELGetPayload<S['select'][P]> :
        P extends 'TYPE' ? TYPEGetPayload<S['select'][P]> :
        P extends 'SUPPORT_LEADER' ? SUPPORT_LEADERGetPayload<S['select'][P]> :
        P extends 'SUPPORT' ? SUPPORTGetPayload<S['select'][P]> :
        P extends 'REGION' ? REGIONGetPayload<S['select'][P]> :  P extends keyof STORE ? STORE[P] : never
  } 
      : STORE


  type STORECountArgs = 
    Omit<STOREFindManyArgs, 'select' | 'include'> & {
      select?: STORECountAggregateInputType | true
    }

  export interface STOREDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one STORE that matches the filter.
     * @param {STOREFindUniqueArgs} args - Arguments to find a STORE
     * @example
     * // Get one STORE
     * const sTORE = await prisma.sTORE.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends STOREFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, STOREFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'STORE'> extends True ? Prisma__STOREClient<STOREGetPayload<T>> : Prisma__STOREClient<STOREGetPayload<T> | null, null>

    /**
     * Find one STORE that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {STOREFindUniqueOrThrowArgs} args - Arguments to find a STORE
     * @example
     * // Get one STORE
     * const sTORE = await prisma.sTORE.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends STOREFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, STOREFindUniqueOrThrowArgs>
    ): Prisma__STOREClient<STOREGetPayload<T>>

    /**
     * Find the first STORE that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STOREFindFirstArgs} args - Arguments to find a STORE
     * @example
     * // Get one STORE
     * const sTORE = await prisma.sTORE.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends STOREFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, STOREFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'STORE'> extends True ? Prisma__STOREClient<STOREGetPayload<T>> : Prisma__STOREClient<STOREGetPayload<T> | null, null>

    /**
     * Find the first STORE that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STOREFindFirstOrThrowArgs} args - Arguments to find a STORE
     * @example
     * // Get one STORE
     * const sTORE = await prisma.sTORE.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends STOREFindFirstOrThrowArgs>(
      args?: SelectSubset<T, STOREFindFirstOrThrowArgs>
    ): Prisma__STOREClient<STOREGetPayload<T>>

    /**
     * Find zero or more STORES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STOREFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all STORES
     * const sTORES = await prisma.sTORE.findMany()
     * 
     * // Get first 10 STORES
     * const sTORES = await prisma.sTORE.findMany({ take: 10 })
     * 
     * // Only select the `STORE_KEY`
     * const sTOREWithSTORE_KEYOnly = await prisma.sTORE.findMany({ select: { STORE_KEY: true } })
     * 
    **/
    findMany<T extends STOREFindManyArgs>(
      args?: SelectSubset<T, STOREFindManyArgs>
    ): Prisma.PrismaPromise<Array<STOREGetPayload<T>>>

    /**
     * Create a STORE.
     * @param {STORECreateArgs} args - Arguments to create a STORE.
     * @example
     * // Create one STORE
     * const STORE = await prisma.sTORE.create({
     *   data: {
     *     // ... data to create a STORE
     *   }
     * })
     * 
    **/
    create<T extends STORECreateArgs>(
      args: SelectSubset<T, STORECreateArgs>
    ): Prisma__STOREClient<STOREGetPayload<T>>

    /**
     * Delete a STORE.
     * @param {STOREDeleteArgs} args - Arguments to delete one STORE.
     * @example
     * // Delete one STORE
     * const STORE = await prisma.sTORE.delete({
     *   where: {
     *     // ... filter to delete one STORE
     *   }
     * })
     * 
    **/
    delete<T extends STOREDeleteArgs>(
      args: SelectSubset<T, STOREDeleteArgs>
    ): Prisma__STOREClient<STOREGetPayload<T>>

    /**
     * Update one STORE.
     * @param {STOREUpdateArgs} args - Arguments to update one STORE.
     * @example
     * // Update one STORE
     * const sTORE = await prisma.sTORE.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends STOREUpdateArgs>(
      args: SelectSubset<T, STOREUpdateArgs>
    ): Prisma__STOREClient<STOREGetPayload<T>>

    /**
     * Delete zero or more STORES.
     * @param {STOREDeleteManyArgs} args - Arguments to filter STORES to delete.
     * @example
     * // Delete a few STORES
     * const { count } = await prisma.sTORE.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends STOREDeleteManyArgs>(
      args?: SelectSubset<T, STOREDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more STORES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STOREUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many STORES
     * const sTORE = await prisma.sTORE.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends STOREUpdateManyArgs>(
      args: SelectSubset<T, STOREUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one STORE.
     * @param {STOREUpsertArgs} args - Arguments to update or create a STORE.
     * @example
     * // Update or create a STORE
     * const sTORE = await prisma.sTORE.upsert({
     *   create: {
     *     // ... data to create a STORE
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the STORE we want to update
     *   }
     * })
    **/
    upsert<T extends STOREUpsertArgs>(
      args: SelectSubset<T, STOREUpsertArgs>
    ): Prisma__STOREClient<STOREGetPayload<T>>

    /**
     * Count the number of STORES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STORECountArgs} args - Arguments to filter STORES to count.
     * @example
     * // Count the number of STORES
     * const count = await prisma.sTORE.count({
     *   where: {
     *     // ... the filter for the STORES we want to count
     *   }
     * })
    **/
    count<T extends STORECountArgs>(
      args?: Subset<T, STORECountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], STORECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a STORE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STOREAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends STOREAggregateArgs>(args: Subset<T, STOREAggregateArgs>): Prisma.PrismaPromise<GetSTOREAggregateType<T>>

    /**
     * Group by STORE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STOREGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends STOREGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: STOREGroupByArgs['orderBy'] }
        : { orderBy?: STOREGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, STOREGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSTOREGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for STORE.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__STOREClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    FLAG<T extends FLAGArgs= {}>(args?: Subset<T, FLAGArgs>): Prisma__FLAGClient<FLAGGetPayload<T> | Null>;

    CHANNEL<T extends CHANNELArgs= {}>(args?: Subset<T, CHANNELArgs>): Prisma__CHANNELClient<CHANNELGetPayload<T> | Null>;

    TYPE<T extends TYPEArgs= {}>(args?: Subset<T, TYPEArgs>): Prisma__TYPEClient<TYPEGetPayload<T> | Null>;

    SUPPORT_LEADER<T extends SUPPORT_LEADERArgs= {}>(args?: Subset<T, SUPPORT_LEADERArgs>): Prisma__SUPPORT_LEADERClient<SUPPORT_LEADERGetPayload<T> | Null>;

    SUPPORT<T extends SUPPORTArgs= {}>(args?: Subset<T, SUPPORTArgs>): Prisma__SUPPORTClient<SUPPORTGetPayload<T> | Null>;

    REGION<T extends REGIONArgs= {}>(args?: Subset<T, REGIONArgs>): Prisma__REGIONClient<REGIONGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * STORE base type for findUnique actions
   */
  export type STOREFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the STORE
     */
    select?: STORESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: STOREInclude | null
    /**
     * Filter, which STORE to fetch.
     */
    where: STOREWhereUniqueInput
  }

  /**
   * STORE findUnique
   */
  export interface STOREFindUniqueArgs extends STOREFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * STORE findUniqueOrThrow
   */
  export type STOREFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the STORE
     */
    select?: STORESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: STOREInclude | null
    /**
     * Filter, which STORE to fetch.
     */
    where: STOREWhereUniqueInput
  }


  /**
   * STORE base type for findFirst actions
   */
  export type STOREFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the STORE
     */
    select?: STORESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: STOREInclude | null
    /**
     * Filter, which STORE to fetch.
     */
    where?: STOREWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STORES to fetch.
     */
    orderBy?: Enumerable<STOREOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for STORES.
     */
    cursor?: STOREWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STORES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STORES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of STORES.
     */
    distinct?: Enumerable<STOREScalarFieldEnum>
  }

  /**
   * STORE findFirst
   */
  export interface STOREFindFirstArgs extends STOREFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * STORE findFirstOrThrow
   */
  export type STOREFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the STORE
     */
    select?: STORESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: STOREInclude | null
    /**
     * Filter, which STORE to fetch.
     */
    where?: STOREWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STORES to fetch.
     */
    orderBy?: Enumerable<STOREOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for STORES.
     */
    cursor?: STOREWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STORES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STORES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of STORES.
     */
    distinct?: Enumerable<STOREScalarFieldEnum>
  }


  /**
   * STORE findMany
   */
  export type STOREFindManyArgs = {
    /**
     * Select specific fields to fetch from the STORE
     */
    select?: STORESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: STOREInclude | null
    /**
     * Filter, which STORES to fetch.
     */
    where?: STOREWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STORES to fetch.
     */
    orderBy?: Enumerable<STOREOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing STORES.
     */
    cursor?: STOREWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STORES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STORES.
     */
    skip?: number
    distinct?: Enumerable<STOREScalarFieldEnum>
  }


  /**
   * STORE create
   */
  export type STORECreateArgs = {
    /**
     * Select specific fields to fetch from the STORE
     */
    select?: STORESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: STOREInclude | null
    /**
     * The data needed to create a STORE.
     */
    data: XOR<STORECreateInput, STOREUncheckedCreateInput>
  }


  /**
   * STORE update
   */
  export type STOREUpdateArgs = {
    /**
     * Select specific fields to fetch from the STORE
     */
    select?: STORESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: STOREInclude | null
    /**
     * The data needed to update a STORE.
     */
    data: XOR<STOREUpdateInput, STOREUncheckedUpdateInput>
    /**
     * Choose, which STORE to update.
     */
    where: STOREWhereUniqueInput
  }


  /**
   * STORE updateMany
   */
  export type STOREUpdateManyArgs = {
    /**
     * The data used to update STORES.
     */
    data: XOR<STOREUpdateManyMutationInput, STOREUncheckedUpdateManyInput>
    /**
     * Filter which STORES to update
     */
    where?: STOREWhereInput
  }


  /**
   * STORE upsert
   */
  export type STOREUpsertArgs = {
    /**
     * Select specific fields to fetch from the STORE
     */
    select?: STORESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: STOREInclude | null
    /**
     * The filter to search for the STORE to update in case it exists.
     */
    where: STOREWhereUniqueInput
    /**
     * In case the STORE found by the `where` argument doesn't exist, create a new STORE with this data.
     */
    create: XOR<STORECreateInput, STOREUncheckedCreateInput>
    /**
     * In case the STORE was found with the provided `where` argument, update it with this data.
     */
    update: XOR<STOREUpdateInput, STOREUncheckedUpdateInput>
  }


  /**
   * STORE delete
   */
  export type STOREDeleteArgs = {
    /**
     * Select specific fields to fetch from the STORE
     */
    select?: STORESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: STOREInclude | null
    /**
     * Filter which STORE to delete.
     */
    where: STOREWhereUniqueInput
  }


  /**
   * STORE deleteMany
   */
  export type STOREDeleteManyArgs = {
    /**
     * Filter which STORES to delete
     */
    where?: STOREWhereInput
  }


  /**
   * STORE without action
   */
  export type STOREArgs = {
    /**
     * Select specific fields to fetch from the STORE
     */
    select?: STORESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: STOREInclude | null
  }



  /**
   * Model SUPPORT
   */


  export type AggregateSUPPORT = {
    _count: SUPPORTCountAggregateOutputType | null
    _avg: SUPPORTAvgAggregateOutputType | null
    _sum: SUPPORTSumAggregateOutputType | null
    _min: SUPPORTMinAggregateOutputType | null
    _max: SUPPORTMaxAggregateOutputType | null
  }

  export type SUPPORTAvgAggregateOutputType = {
    ID: number | null
  }

  export type SUPPORTSumAggregateOutputType = {
    ID: number | null
  }

  export type SUPPORTMinAggregateOutputType = {
    ID: number | null
    NAME: string | null
  }

  export type SUPPORTMaxAggregateOutputType = {
    ID: number | null
    NAME: string | null
  }

  export type SUPPORTCountAggregateOutputType = {
    ID: number
    NAME: number
    _all: number
  }


  export type SUPPORTAvgAggregateInputType = {
    ID?: true
  }

  export type SUPPORTSumAggregateInputType = {
    ID?: true
  }

  export type SUPPORTMinAggregateInputType = {
    ID?: true
    NAME?: true
  }

  export type SUPPORTMaxAggregateInputType = {
    ID?: true
    NAME?: true
  }

  export type SUPPORTCountAggregateInputType = {
    ID?: true
    NAME?: true
    _all?: true
  }

  export type SUPPORTAggregateArgs = {
    /**
     * Filter which SUPPORT to aggregate.
     */
    where?: SUPPORTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SUPPORTS to fetch.
     */
    orderBy?: Enumerable<SUPPORTOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SUPPORTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SUPPORTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SUPPORTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SUPPORTS
    **/
    _count?: true | SUPPORTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SUPPORTAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SUPPORTSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SUPPORTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SUPPORTMaxAggregateInputType
  }

  export type GetSUPPORTAggregateType<T extends SUPPORTAggregateArgs> = {
        [P in keyof T & keyof AggregateSUPPORT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSUPPORT[P]>
      : GetScalarType<T[P], AggregateSUPPORT[P]>
  }




  export type SUPPORTGroupByArgs = {
    where?: SUPPORTWhereInput
    orderBy?: Enumerable<SUPPORTOrderByWithAggregationInput>
    by: SUPPORTScalarFieldEnum[]
    having?: SUPPORTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SUPPORTCountAggregateInputType | true
    _avg?: SUPPORTAvgAggregateInputType
    _sum?: SUPPORTSumAggregateInputType
    _min?: SUPPORTMinAggregateInputType
    _max?: SUPPORTMaxAggregateInputType
  }


  export type SUPPORTGroupByOutputType = {
    ID: number
    NAME: string
    _count: SUPPORTCountAggregateOutputType | null
    _avg: SUPPORTAvgAggregateOutputType | null
    _sum: SUPPORTSumAggregateOutputType | null
    _min: SUPPORTMinAggregateOutputType | null
    _max: SUPPORTMaxAggregateOutputType | null
  }

  type GetSUPPORTGroupByPayload<T extends SUPPORTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SUPPORTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SUPPORTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SUPPORTGroupByOutputType[P]>
            : GetScalarType<T[P], SUPPORTGroupByOutputType[P]>
        }
      >
    >


  export type SUPPORTSelect = {
    ID?: boolean
    NAME?: boolean
    STORE?: boolean | SUPPORT$STOREArgs
    _count?: boolean | SUPPORTCountOutputTypeArgs
  }


  export type SUPPORTInclude = {
    STORE?: boolean | SUPPORT$STOREArgs
    _count?: boolean | SUPPORTCountOutputTypeArgs
  }

  export type SUPPORTGetPayload<S extends boolean | null | undefined | SUPPORTArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SUPPORT :
    S extends undefined ? never :
    S extends { include: any } & (SUPPORTArgs | SUPPORTFindManyArgs)
    ? SUPPORT  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'STORE' ? Array < STOREGetPayload<S['include'][P]>>  :
        P extends '_count' ? SUPPORTCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SUPPORTArgs | SUPPORTFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'STORE' ? Array < STOREGetPayload<S['select'][P]>>  :
        P extends '_count' ? SUPPORTCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof SUPPORT ? SUPPORT[P] : never
  } 
      : SUPPORT


  type SUPPORTCountArgs = 
    Omit<SUPPORTFindManyArgs, 'select' | 'include'> & {
      select?: SUPPORTCountAggregateInputType | true
    }

  export interface SUPPORTDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one SUPPORT that matches the filter.
     * @param {SUPPORTFindUniqueArgs} args - Arguments to find a SUPPORT
     * @example
     * // Get one SUPPORT
     * const sUPPORT = await prisma.sUPPORT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SUPPORTFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SUPPORTFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SUPPORT'> extends True ? Prisma__SUPPORTClient<SUPPORTGetPayload<T>> : Prisma__SUPPORTClient<SUPPORTGetPayload<T> | null, null>

    /**
     * Find one SUPPORT that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SUPPORTFindUniqueOrThrowArgs} args - Arguments to find a SUPPORT
     * @example
     * // Get one SUPPORT
     * const sUPPORT = await prisma.sUPPORT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SUPPORTFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SUPPORTFindUniqueOrThrowArgs>
    ): Prisma__SUPPORTClient<SUPPORTGetPayload<T>>

    /**
     * Find the first SUPPORT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUPPORTFindFirstArgs} args - Arguments to find a SUPPORT
     * @example
     * // Get one SUPPORT
     * const sUPPORT = await prisma.sUPPORT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SUPPORTFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SUPPORTFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SUPPORT'> extends True ? Prisma__SUPPORTClient<SUPPORTGetPayload<T>> : Prisma__SUPPORTClient<SUPPORTGetPayload<T> | null, null>

    /**
     * Find the first SUPPORT that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUPPORTFindFirstOrThrowArgs} args - Arguments to find a SUPPORT
     * @example
     * // Get one SUPPORT
     * const sUPPORT = await prisma.sUPPORT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SUPPORTFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SUPPORTFindFirstOrThrowArgs>
    ): Prisma__SUPPORTClient<SUPPORTGetPayload<T>>

    /**
     * Find zero or more SUPPORTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUPPORTFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SUPPORTS
     * const sUPPORTS = await prisma.sUPPORT.findMany()
     * 
     * // Get first 10 SUPPORTS
     * const sUPPORTS = await prisma.sUPPORT.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const sUPPORTWithIDOnly = await prisma.sUPPORT.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends SUPPORTFindManyArgs>(
      args?: SelectSubset<T, SUPPORTFindManyArgs>
    ): Prisma.PrismaPromise<Array<SUPPORTGetPayload<T>>>

    /**
     * Create a SUPPORT.
     * @param {SUPPORTCreateArgs} args - Arguments to create a SUPPORT.
     * @example
     * // Create one SUPPORT
     * const SUPPORT = await prisma.sUPPORT.create({
     *   data: {
     *     // ... data to create a SUPPORT
     *   }
     * })
     * 
    **/
    create<T extends SUPPORTCreateArgs>(
      args: SelectSubset<T, SUPPORTCreateArgs>
    ): Prisma__SUPPORTClient<SUPPORTGetPayload<T>>

    /**
     * Delete a SUPPORT.
     * @param {SUPPORTDeleteArgs} args - Arguments to delete one SUPPORT.
     * @example
     * // Delete one SUPPORT
     * const SUPPORT = await prisma.sUPPORT.delete({
     *   where: {
     *     // ... filter to delete one SUPPORT
     *   }
     * })
     * 
    **/
    delete<T extends SUPPORTDeleteArgs>(
      args: SelectSubset<T, SUPPORTDeleteArgs>
    ): Prisma__SUPPORTClient<SUPPORTGetPayload<T>>

    /**
     * Update one SUPPORT.
     * @param {SUPPORTUpdateArgs} args - Arguments to update one SUPPORT.
     * @example
     * // Update one SUPPORT
     * const sUPPORT = await prisma.sUPPORT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SUPPORTUpdateArgs>(
      args: SelectSubset<T, SUPPORTUpdateArgs>
    ): Prisma__SUPPORTClient<SUPPORTGetPayload<T>>

    /**
     * Delete zero or more SUPPORTS.
     * @param {SUPPORTDeleteManyArgs} args - Arguments to filter SUPPORTS to delete.
     * @example
     * // Delete a few SUPPORTS
     * const { count } = await prisma.sUPPORT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SUPPORTDeleteManyArgs>(
      args?: SelectSubset<T, SUPPORTDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SUPPORTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUPPORTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SUPPORTS
     * const sUPPORT = await prisma.sUPPORT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SUPPORTUpdateManyArgs>(
      args: SelectSubset<T, SUPPORTUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SUPPORT.
     * @param {SUPPORTUpsertArgs} args - Arguments to update or create a SUPPORT.
     * @example
     * // Update or create a SUPPORT
     * const sUPPORT = await prisma.sUPPORT.upsert({
     *   create: {
     *     // ... data to create a SUPPORT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SUPPORT we want to update
     *   }
     * })
    **/
    upsert<T extends SUPPORTUpsertArgs>(
      args: SelectSubset<T, SUPPORTUpsertArgs>
    ): Prisma__SUPPORTClient<SUPPORTGetPayload<T>>

    /**
     * Count the number of SUPPORTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUPPORTCountArgs} args - Arguments to filter SUPPORTS to count.
     * @example
     * // Count the number of SUPPORTS
     * const count = await prisma.sUPPORT.count({
     *   where: {
     *     // ... the filter for the SUPPORTS we want to count
     *   }
     * })
    **/
    count<T extends SUPPORTCountArgs>(
      args?: Subset<T, SUPPORTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SUPPORTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SUPPORT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUPPORTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SUPPORTAggregateArgs>(args: Subset<T, SUPPORTAggregateArgs>): Prisma.PrismaPromise<GetSUPPORTAggregateType<T>>

    /**
     * Group by SUPPORT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUPPORTGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SUPPORTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SUPPORTGroupByArgs['orderBy'] }
        : { orderBy?: SUPPORTGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SUPPORTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSUPPORTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SUPPORT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SUPPORTClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    STORE<T extends SUPPORT$STOREArgs= {}>(args?: Subset<T, SUPPORT$STOREArgs>): Prisma.PrismaPromise<Array<STOREGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SUPPORT base type for findUnique actions
   */
  export type SUPPORTFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SUPPORT
     */
    select?: SUPPORTSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORTInclude | null
    /**
     * Filter, which SUPPORT to fetch.
     */
    where: SUPPORTWhereUniqueInput
  }

  /**
   * SUPPORT findUnique
   */
  export interface SUPPORTFindUniqueArgs extends SUPPORTFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SUPPORT findUniqueOrThrow
   */
  export type SUPPORTFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SUPPORT
     */
    select?: SUPPORTSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORTInclude | null
    /**
     * Filter, which SUPPORT to fetch.
     */
    where: SUPPORTWhereUniqueInput
  }


  /**
   * SUPPORT base type for findFirst actions
   */
  export type SUPPORTFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SUPPORT
     */
    select?: SUPPORTSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORTInclude | null
    /**
     * Filter, which SUPPORT to fetch.
     */
    where?: SUPPORTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SUPPORTS to fetch.
     */
    orderBy?: Enumerable<SUPPORTOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SUPPORTS.
     */
    cursor?: SUPPORTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SUPPORTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SUPPORTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SUPPORTS.
     */
    distinct?: Enumerable<SUPPORTScalarFieldEnum>
  }

  /**
   * SUPPORT findFirst
   */
  export interface SUPPORTFindFirstArgs extends SUPPORTFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SUPPORT findFirstOrThrow
   */
  export type SUPPORTFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SUPPORT
     */
    select?: SUPPORTSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORTInclude | null
    /**
     * Filter, which SUPPORT to fetch.
     */
    where?: SUPPORTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SUPPORTS to fetch.
     */
    orderBy?: Enumerable<SUPPORTOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SUPPORTS.
     */
    cursor?: SUPPORTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SUPPORTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SUPPORTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SUPPORTS.
     */
    distinct?: Enumerable<SUPPORTScalarFieldEnum>
  }


  /**
   * SUPPORT findMany
   */
  export type SUPPORTFindManyArgs = {
    /**
     * Select specific fields to fetch from the SUPPORT
     */
    select?: SUPPORTSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORTInclude | null
    /**
     * Filter, which SUPPORTS to fetch.
     */
    where?: SUPPORTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SUPPORTS to fetch.
     */
    orderBy?: Enumerable<SUPPORTOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SUPPORTS.
     */
    cursor?: SUPPORTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SUPPORTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SUPPORTS.
     */
    skip?: number
    distinct?: Enumerable<SUPPORTScalarFieldEnum>
  }


  /**
   * SUPPORT create
   */
  export type SUPPORTCreateArgs = {
    /**
     * Select specific fields to fetch from the SUPPORT
     */
    select?: SUPPORTSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORTInclude | null
    /**
     * The data needed to create a SUPPORT.
     */
    data: XOR<SUPPORTCreateInput, SUPPORTUncheckedCreateInput>
  }


  /**
   * SUPPORT update
   */
  export type SUPPORTUpdateArgs = {
    /**
     * Select specific fields to fetch from the SUPPORT
     */
    select?: SUPPORTSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORTInclude | null
    /**
     * The data needed to update a SUPPORT.
     */
    data: XOR<SUPPORTUpdateInput, SUPPORTUncheckedUpdateInput>
    /**
     * Choose, which SUPPORT to update.
     */
    where: SUPPORTWhereUniqueInput
  }


  /**
   * SUPPORT updateMany
   */
  export type SUPPORTUpdateManyArgs = {
    /**
     * The data used to update SUPPORTS.
     */
    data: XOR<SUPPORTUpdateManyMutationInput, SUPPORTUncheckedUpdateManyInput>
    /**
     * Filter which SUPPORTS to update
     */
    where?: SUPPORTWhereInput
  }


  /**
   * SUPPORT upsert
   */
  export type SUPPORTUpsertArgs = {
    /**
     * Select specific fields to fetch from the SUPPORT
     */
    select?: SUPPORTSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORTInclude | null
    /**
     * The filter to search for the SUPPORT to update in case it exists.
     */
    where: SUPPORTWhereUniqueInput
    /**
     * In case the SUPPORT found by the `where` argument doesn't exist, create a new SUPPORT with this data.
     */
    create: XOR<SUPPORTCreateInput, SUPPORTUncheckedCreateInput>
    /**
     * In case the SUPPORT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SUPPORTUpdateInput, SUPPORTUncheckedUpdateInput>
  }


  /**
   * SUPPORT delete
   */
  export type SUPPORTDeleteArgs = {
    /**
     * Select specific fields to fetch from the SUPPORT
     */
    select?: SUPPORTSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORTInclude | null
    /**
     * Filter which SUPPORT to delete.
     */
    where: SUPPORTWhereUniqueInput
  }


  /**
   * SUPPORT deleteMany
   */
  export type SUPPORTDeleteManyArgs = {
    /**
     * Filter which SUPPORTS to delete
     */
    where?: SUPPORTWhereInput
  }


  /**
   * SUPPORT.STORE
   */
  export type SUPPORT$STOREArgs = {
    /**
     * Select specific fields to fetch from the STORE
     */
    select?: STORESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: STOREInclude | null
    where?: STOREWhereInput
    orderBy?: Enumerable<STOREOrderByWithRelationInput>
    cursor?: STOREWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<STOREScalarFieldEnum>
  }


  /**
   * SUPPORT without action
   */
  export type SUPPORTArgs = {
    /**
     * Select specific fields to fetch from the SUPPORT
     */
    select?: SUPPORTSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORTInclude | null
  }



  /**
   * Model SUPPORT_LEADER
   */


  export type AggregateSUPPORT_LEADER = {
    _count: SUPPORT_LEADERCountAggregateOutputType | null
    _avg: SUPPORT_LEADERAvgAggregateOutputType | null
    _sum: SUPPORT_LEADERSumAggregateOutputType | null
    _min: SUPPORT_LEADERMinAggregateOutputType | null
    _max: SUPPORT_LEADERMaxAggregateOutputType | null
  }

  export type SUPPORT_LEADERAvgAggregateOutputType = {
    ID: number | null
  }

  export type SUPPORT_LEADERSumAggregateOutputType = {
    ID: number | null
  }

  export type SUPPORT_LEADERMinAggregateOutputType = {
    ID: number | null
    NAME: string | null
  }

  export type SUPPORT_LEADERMaxAggregateOutputType = {
    ID: number | null
    NAME: string | null
  }

  export type SUPPORT_LEADERCountAggregateOutputType = {
    ID: number
    NAME: number
    _all: number
  }


  export type SUPPORT_LEADERAvgAggregateInputType = {
    ID?: true
  }

  export type SUPPORT_LEADERSumAggregateInputType = {
    ID?: true
  }

  export type SUPPORT_LEADERMinAggregateInputType = {
    ID?: true
    NAME?: true
  }

  export type SUPPORT_LEADERMaxAggregateInputType = {
    ID?: true
    NAME?: true
  }

  export type SUPPORT_LEADERCountAggregateInputType = {
    ID?: true
    NAME?: true
    _all?: true
  }

  export type SUPPORT_LEADERAggregateArgs = {
    /**
     * Filter which SUPPORT_LEADER to aggregate.
     */
    where?: SUPPORT_LEADERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SUPPORT_LEADERS to fetch.
     */
    orderBy?: Enumerable<SUPPORT_LEADEROrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SUPPORT_LEADERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SUPPORT_LEADERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SUPPORT_LEADERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SUPPORT_LEADERS
    **/
    _count?: true | SUPPORT_LEADERCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SUPPORT_LEADERAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SUPPORT_LEADERSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SUPPORT_LEADERMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SUPPORT_LEADERMaxAggregateInputType
  }

  export type GetSUPPORT_LEADERAggregateType<T extends SUPPORT_LEADERAggregateArgs> = {
        [P in keyof T & keyof AggregateSUPPORT_LEADER]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSUPPORT_LEADER[P]>
      : GetScalarType<T[P], AggregateSUPPORT_LEADER[P]>
  }




  export type SUPPORT_LEADERGroupByArgs = {
    where?: SUPPORT_LEADERWhereInput
    orderBy?: Enumerable<SUPPORT_LEADEROrderByWithAggregationInput>
    by: SUPPORT_LEADERScalarFieldEnum[]
    having?: SUPPORT_LEADERScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SUPPORT_LEADERCountAggregateInputType | true
    _avg?: SUPPORT_LEADERAvgAggregateInputType
    _sum?: SUPPORT_LEADERSumAggregateInputType
    _min?: SUPPORT_LEADERMinAggregateInputType
    _max?: SUPPORT_LEADERMaxAggregateInputType
  }


  export type SUPPORT_LEADERGroupByOutputType = {
    ID: number
    NAME: string
    _count: SUPPORT_LEADERCountAggregateOutputType | null
    _avg: SUPPORT_LEADERAvgAggregateOutputType | null
    _sum: SUPPORT_LEADERSumAggregateOutputType | null
    _min: SUPPORT_LEADERMinAggregateOutputType | null
    _max: SUPPORT_LEADERMaxAggregateOutputType | null
  }

  type GetSUPPORT_LEADERGroupByPayload<T extends SUPPORT_LEADERGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SUPPORT_LEADERGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SUPPORT_LEADERGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SUPPORT_LEADERGroupByOutputType[P]>
            : GetScalarType<T[P], SUPPORT_LEADERGroupByOutputType[P]>
        }
      >
    >


  export type SUPPORT_LEADERSelect = {
    ID?: boolean
    NAME?: boolean
    STORE?: boolean | SUPPORT_LEADER$STOREArgs
    _count?: boolean | SUPPORT_LEADERCountOutputTypeArgs
  }


  export type SUPPORT_LEADERInclude = {
    STORE?: boolean | SUPPORT_LEADER$STOREArgs
    _count?: boolean | SUPPORT_LEADERCountOutputTypeArgs
  }

  export type SUPPORT_LEADERGetPayload<S extends boolean | null | undefined | SUPPORT_LEADERArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SUPPORT_LEADER :
    S extends undefined ? never :
    S extends { include: any } & (SUPPORT_LEADERArgs | SUPPORT_LEADERFindManyArgs)
    ? SUPPORT_LEADER  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'STORE' ? Array < STOREGetPayload<S['include'][P]>>  :
        P extends '_count' ? SUPPORT_LEADERCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SUPPORT_LEADERArgs | SUPPORT_LEADERFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'STORE' ? Array < STOREGetPayload<S['select'][P]>>  :
        P extends '_count' ? SUPPORT_LEADERCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof SUPPORT_LEADER ? SUPPORT_LEADER[P] : never
  } 
      : SUPPORT_LEADER


  type SUPPORT_LEADERCountArgs = 
    Omit<SUPPORT_LEADERFindManyArgs, 'select' | 'include'> & {
      select?: SUPPORT_LEADERCountAggregateInputType | true
    }

  export interface SUPPORT_LEADERDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one SUPPORT_LEADER that matches the filter.
     * @param {SUPPORT_LEADERFindUniqueArgs} args - Arguments to find a SUPPORT_LEADER
     * @example
     * // Get one SUPPORT_LEADER
     * const sUPPORT_LEADER = await prisma.sUPPORT_LEADER.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SUPPORT_LEADERFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SUPPORT_LEADERFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SUPPORT_LEADER'> extends True ? Prisma__SUPPORT_LEADERClient<SUPPORT_LEADERGetPayload<T>> : Prisma__SUPPORT_LEADERClient<SUPPORT_LEADERGetPayload<T> | null, null>

    /**
     * Find one SUPPORT_LEADER that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SUPPORT_LEADERFindUniqueOrThrowArgs} args - Arguments to find a SUPPORT_LEADER
     * @example
     * // Get one SUPPORT_LEADER
     * const sUPPORT_LEADER = await prisma.sUPPORT_LEADER.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SUPPORT_LEADERFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SUPPORT_LEADERFindUniqueOrThrowArgs>
    ): Prisma__SUPPORT_LEADERClient<SUPPORT_LEADERGetPayload<T>>

    /**
     * Find the first SUPPORT_LEADER that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUPPORT_LEADERFindFirstArgs} args - Arguments to find a SUPPORT_LEADER
     * @example
     * // Get one SUPPORT_LEADER
     * const sUPPORT_LEADER = await prisma.sUPPORT_LEADER.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SUPPORT_LEADERFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SUPPORT_LEADERFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SUPPORT_LEADER'> extends True ? Prisma__SUPPORT_LEADERClient<SUPPORT_LEADERGetPayload<T>> : Prisma__SUPPORT_LEADERClient<SUPPORT_LEADERGetPayload<T> | null, null>

    /**
     * Find the first SUPPORT_LEADER that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUPPORT_LEADERFindFirstOrThrowArgs} args - Arguments to find a SUPPORT_LEADER
     * @example
     * // Get one SUPPORT_LEADER
     * const sUPPORT_LEADER = await prisma.sUPPORT_LEADER.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SUPPORT_LEADERFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SUPPORT_LEADERFindFirstOrThrowArgs>
    ): Prisma__SUPPORT_LEADERClient<SUPPORT_LEADERGetPayload<T>>

    /**
     * Find zero or more SUPPORT_LEADERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUPPORT_LEADERFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SUPPORT_LEADERS
     * const sUPPORT_LEADERS = await prisma.sUPPORT_LEADER.findMany()
     * 
     * // Get first 10 SUPPORT_LEADERS
     * const sUPPORT_LEADERS = await prisma.sUPPORT_LEADER.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const sUPPORT_LEADERWithIDOnly = await prisma.sUPPORT_LEADER.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends SUPPORT_LEADERFindManyArgs>(
      args?: SelectSubset<T, SUPPORT_LEADERFindManyArgs>
    ): Prisma.PrismaPromise<Array<SUPPORT_LEADERGetPayload<T>>>

    /**
     * Create a SUPPORT_LEADER.
     * @param {SUPPORT_LEADERCreateArgs} args - Arguments to create a SUPPORT_LEADER.
     * @example
     * // Create one SUPPORT_LEADER
     * const SUPPORT_LEADER = await prisma.sUPPORT_LEADER.create({
     *   data: {
     *     // ... data to create a SUPPORT_LEADER
     *   }
     * })
     * 
    **/
    create<T extends SUPPORT_LEADERCreateArgs>(
      args: SelectSubset<T, SUPPORT_LEADERCreateArgs>
    ): Prisma__SUPPORT_LEADERClient<SUPPORT_LEADERGetPayload<T>>

    /**
     * Delete a SUPPORT_LEADER.
     * @param {SUPPORT_LEADERDeleteArgs} args - Arguments to delete one SUPPORT_LEADER.
     * @example
     * // Delete one SUPPORT_LEADER
     * const SUPPORT_LEADER = await prisma.sUPPORT_LEADER.delete({
     *   where: {
     *     // ... filter to delete one SUPPORT_LEADER
     *   }
     * })
     * 
    **/
    delete<T extends SUPPORT_LEADERDeleteArgs>(
      args: SelectSubset<T, SUPPORT_LEADERDeleteArgs>
    ): Prisma__SUPPORT_LEADERClient<SUPPORT_LEADERGetPayload<T>>

    /**
     * Update one SUPPORT_LEADER.
     * @param {SUPPORT_LEADERUpdateArgs} args - Arguments to update one SUPPORT_LEADER.
     * @example
     * // Update one SUPPORT_LEADER
     * const sUPPORT_LEADER = await prisma.sUPPORT_LEADER.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SUPPORT_LEADERUpdateArgs>(
      args: SelectSubset<T, SUPPORT_LEADERUpdateArgs>
    ): Prisma__SUPPORT_LEADERClient<SUPPORT_LEADERGetPayload<T>>

    /**
     * Delete zero or more SUPPORT_LEADERS.
     * @param {SUPPORT_LEADERDeleteManyArgs} args - Arguments to filter SUPPORT_LEADERS to delete.
     * @example
     * // Delete a few SUPPORT_LEADERS
     * const { count } = await prisma.sUPPORT_LEADER.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SUPPORT_LEADERDeleteManyArgs>(
      args?: SelectSubset<T, SUPPORT_LEADERDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SUPPORT_LEADERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUPPORT_LEADERUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SUPPORT_LEADERS
     * const sUPPORT_LEADER = await prisma.sUPPORT_LEADER.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SUPPORT_LEADERUpdateManyArgs>(
      args: SelectSubset<T, SUPPORT_LEADERUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SUPPORT_LEADER.
     * @param {SUPPORT_LEADERUpsertArgs} args - Arguments to update or create a SUPPORT_LEADER.
     * @example
     * // Update or create a SUPPORT_LEADER
     * const sUPPORT_LEADER = await prisma.sUPPORT_LEADER.upsert({
     *   create: {
     *     // ... data to create a SUPPORT_LEADER
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SUPPORT_LEADER we want to update
     *   }
     * })
    **/
    upsert<T extends SUPPORT_LEADERUpsertArgs>(
      args: SelectSubset<T, SUPPORT_LEADERUpsertArgs>
    ): Prisma__SUPPORT_LEADERClient<SUPPORT_LEADERGetPayload<T>>

    /**
     * Count the number of SUPPORT_LEADERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUPPORT_LEADERCountArgs} args - Arguments to filter SUPPORT_LEADERS to count.
     * @example
     * // Count the number of SUPPORT_LEADERS
     * const count = await prisma.sUPPORT_LEADER.count({
     *   where: {
     *     // ... the filter for the SUPPORT_LEADERS we want to count
     *   }
     * })
    **/
    count<T extends SUPPORT_LEADERCountArgs>(
      args?: Subset<T, SUPPORT_LEADERCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SUPPORT_LEADERCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SUPPORT_LEADER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUPPORT_LEADERAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SUPPORT_LEADERAggregateArgs>(args: Subset<T, SUPPORT_LEADERAggregateArgs>): Prisma.PrismaPromise<GetSUPPORT_LEADERAggregateType<T>>

    /**
     * Group by SUPPORT_LEADER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SUPPORT_LEADERGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SUPPORT_LEADERGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SUPPORT_LEADERGroupByArgs['orderBy'] }
        : { orderBy?: SUPPORT_LEADERGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SUPPORT_LEADERGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSUPPORT_LEADERGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SUPPORT_LEADER.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SUPPORT_LEADERClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    STORE<T extends SUPPORT_LEADER$STOREArgs= {}>(args?: Subset<T, SUPPORT_LEADER$STOREArgs>): Prisma.PrismaPromise<Array<STOREGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SUPPORT_LEADER base type for findUnique actions
   */
  export type SUPPORT_LEADERFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SUPPORT_LEADER
     */
    select?: SUPPORT_LEADERSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORT_LEADERInclude | null
    /**
     * Filter, which SUPPORT_LEADER to fetch.
     */
    where: SUPPORT_LEADERWhereUniqueInput
  }

  /**
   * SUPPORT_LEADER findUnique
   */
  export interface SUPPORT_LEADERFindUniqueArgs extends SUPPORT_LEADERFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SUPPORT_LEADER findUniqueOrThrow
   */
  export type SUPPORT_LEADERFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SUPPORT_LEADER
     */
    select?: SUPPORT_LEADERSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORT_LEADERInclude | null
    /**
     * Filter, which SUPPORT_LEADER to fetch.
     */
    where: SUPPORT_LEADERWhereUniqueInput
  }


  /**
   * SUPPORT_LEADER base type for findFirst actions
   */
  export type SUPPORT_LEADERFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SUPPORT_LEADER
     */
    select?: SUPPORT_LEADERSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORT_LEADERInclude | null
    /**
     * Filter, which SUPPORT_LEADER to fetch.
     */
    where?: SUPPORT_LEADERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SUPPORT_LEADERS to fetch.
     */
    orderBy?: Enumerable<SUPPORT_LEADEROrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SUPPORT_LEADERS.
     */
    cursor?: SUPPORT_LEADERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SUPPORT_LEADERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SUPPORT_LEADERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SUPPORT_LEADERS.
     */
    distinct?: Enumerable<SUPPORT_LEADERScalarFieldEnum>
  }

  /**
   * SUPPORT_LEADER findFirst
   */
  export interface SUPPORT_LEADERFindFirstArgs extends SUPPORT_LEADERFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SUPPORT_LEADER findFirstOrThrow
   */
  export type SUPPORT_LEADERFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SUPPORT_LEADER
     */
    select?: SUPPORT_LEADERSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORT_LEADERInclude | null
    /**
     * Filter, which SUPPORT_LEADER to fetch.
     */
    where?: SUPPORT_LEADERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SUPPORT_LEADERS to fetch.
     */
    orderBy?: Enumerable<SUPPORT_LEADEROrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SUPPORT_LEADERS.
     */
    cursor?: SUPPORT_LEADERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SUPPORT_LEADERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SUPPORT_LEADERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SUPPORT_LEADERS.
     */
    distinct?: Enumerable<SUPPORT_LEADERScalarFieldEnum>
  }


  /**
   * SUPPORT_LEADER findMany
   */
  export type SUPPORT_LEADERFindManyArgs = {
    /**
     * Select specific fields to fetch from the SUPPORT_LEADER
     */
    select?: SUPPORT_LEADERSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORT_LEADERInclude | null
    /**
     * Filter, which SUPPORT_LEADERS to fetch.
     */
    where?: SUPPORT_LEADERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SUPPORT_LEADERS to fetch.
     */
    orderBy?: Enumerable<SUPPORT_LEADEROrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SUPPORT_LEADERS.
     */
    cursor?: SUPPORT_LEADERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SUPPORT_LEADERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SUPPORT_LEADERS.
     */
    skip?: number
    distinct?: Enumerable<SUPPORT_LEADERScalarFieldEnum>
  }


  /**
   * SUPPORT_LEADER create
   */
  export type SUPPORT_LEADERCreateArgs = {
    /**
     * Select specific fields to fetch from the SUPPORT_LEADER
     */
    select?: SUPPORT_LEADERSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORT_LEADERInclude | null
    /**
     * The data needed to create a SUPPORT_LEADER.
     */
    data: XOR<SUPPORT_LEADERCreateInput, SUPPORT_LEADERUncheckedCreateInput>
  }


  /**
   * SUPPORT_LEADER update
   */
  export type SUPPORT_LEADERUpdateArgs = {
    /**
     * Select specific fields to fetch from the SUPPORT_LEADER
     */
    select?: SUPPORT_LEADERSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORT_LEADERInclude | null
    /**
     * The data needed to update a SUPPORT_LEADER.
     */
    data: XOR<SUPPORT_LEADERUpdateInput, SUPPORT_LEADERUncheckedUpdateInput>
    /**
     * Choose, which SUPPORT_LEADER to update.
     */
    where: SUPPORT_LEADERWhereUniqueInput
  }


  /**
   * SUPPORT_LEADER updateMany
   */
  export type SUPPORT_LEADERUpdateManyArgs = {
    /**
     * The data used to update SUPPORT_LEADERS.
     */
    data: XOR<SUPPORT_LEADERUpdateManyMutationInput, SUPPORT_LEADERUncheckedUpdateManyInput>
    /**
     * Filter which SUPPORT_LEADERS to update
     */
    where?: SUPPORT_LEADERWhereInput
  }


  /**
   * SUPPORT_LEADER upsert
   */
  export type SUPPORT_LEADERUpsertArgs = {
    /**
     * Select specific fields to fetch from the SUPPORT_LEADER
     */
    select?: SUPPORT_LEADERSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORT_LEADERInclude | null
    /**
     * The filter to search for the SUPPORT_LEADER to update in case it exists.
     */
    where: SUPPORT_LEADERWhereUniqueInput
    /**
     * In case the SUPPORT_LEADER found by the `where` argument doesn't exist, create a new SUPPORT_LEADER with this data.
     */
    create: XOR<SUPPORT_LEADERCreateInput, SUPPORT_LEADERUncheckedCreateInput>
    /**
     * In case the SUPPORT_LEADER was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SUPPORT_LEADERUpdateInput, SUPPORT_LEADERUncheckedUpdateInput>
  }


  /**
   * SUPPORT_LEADER delete
   */
  export type SUPPORT_LEADERDeleteArgs = {
    /**
     * Select specific fields to fetch from the SUPPORT_LEADER
     */
    select?: SUPPORT_LEADERSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORT_LEADERInclude | null
    /**
     * Filter which SUPPORT_LEADER to delete.
     */
    where: SUPPORT_LEADERWhereUniqueInput
  }


  /**
   * SUPPORT_LEADER deleteMany
   */
  export type SUPPORT_LEADERDeleteManyArgs = {
    /**
     * Filter which SUPPORT_LEADERS to delete
     */
    where?: SUPPORT_LEADERWhereInput
  }


  /**
   * SUPPORT_LEADER.STORE
   */
  export type SUPPORT_LEADER$STOREArgs = {
    /**
     * Select specific fields to fetch from the STORE
     */
    select?: STORESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: STOREInclude | null
    where?: STOREWhereInput
    orderBy?: Enumerable<STOREOrderByWithRelationInput>
    cursor?: STOREWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<STOREScalarFieldEnum>
  }


  /**
   * SUPPORT_LEADER without action
   */
  export type SUPPORT_LEADERArgs = {
    /**
     * Select specific fields to fetch from the SUPPORT_LEADER
     */
    select?: SUPPORT_LEADERSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SUPPORT_LEADERInclude | null
  }



  /**
   * Model TYPE
   */


  export type AggregateTYPE = {
    _count: TYPECountAggregateOutputType | null
    _avg: TYPEAvgAggregateOutputType | null
    _sum: TYPESumAggregateOutputType | null
    _min: TYPEMinAggregateOutputType | null
    _max: TYPEMaxAggregateOutputType | null
  }

  export type TYPEAvgAggregateOutputType = {
    ID: number | null
  }

  export type TYPESumAggregateOutputType = {
    ID: number | null
  }

  export type TYPEMinAggregateOutputType = {
    ID: number | null
    NAME: string | null
  }

  export type TYPEMaxAggregateOutputType = {
    ID: number | null
    NAME: string | null
  }

  export type TYPECountAggregateOutputType = {
    ID: number
    NAME: number
    _all: number
  }


  export type TYPEAvgAggregateInputType = {
    ID?: true
  }

  export type TYPESumAggregateInputType = {
    ID?: true
  }

  export type TYPEMinAggregateInputType = {
    ID?: true
    NAME?: true
  }

  export type TYPEMaxAggregateInputType = {
    ID?: true
    NAME?: true
  }

  export type TYPECountAggregateInputType = {
    ID?: true
    NAME?: true
    _all?: true
  }

  export type TYPEAggregateArgs = {
    /**
     * Filter which TYPE to aggregate.
     */
    where?: TYPEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TYPES to fetch.
     */
    orderBy?: Enumerable<TYPEOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TYPEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TYPES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TYPES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TYPES
    **/
    _count?: true | TYPECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TYPEAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TYPESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TYPEMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TYPEMaxAggregateInputType
  }

  export type GetTYPEAggregateType<T extends TYPEAggregateArgs> = {
        [P in keyof T & keyof AggregateTYPE]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTYPE[P]>
      : GetScalarType<T[P], AggregateTYPE[P]>
  }




  export type TYPEGroupByArgs = {
    where?: TYPEWhereInput
    orderBy?: Enumerable<TYPEOrderByWithAggregationInput>
    by: TYPEScalarFieldEnum[]
    having?: TYPEScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TYPECountAggregateInputType | true
    _avg?: TYPEAvgAggregateInputType
    _sum?: TYPESumAggregateInputType
    _min?: TYPEMinAggregateInputType
    _max?: TYPEMaxAggregateInputType
  }


  export type TYPEGroupByOutputType = {
    ID: number
    NAME: string
    _count: TYPECountAggregateOutputType | null
    _avg: TYPEAvgAggregateOutputType | null
    _sum: TYPESumAggregateOutputType | null
    _min: TYPEMinAggregateOutputType | null
    _max: TYPEMaxAggregateOutputType | null
  }

  type GetTYPEGroupByPayload<T extends TYPEGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TYPEGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TYPEGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TYPEGroupByOutputType[P]>
            : GetScalarType<T[P], TYPEGroupByOutputType[P]>
        }
      >
    >


  export type TYPESelect = {
    ID?: boolean
    NAME?: boolean
    STORE?: boolean | TYPE$STOREArgs
    _count?: boolean | TYPECountOutputTypeArgs
  }


  export type TYPEInclude = {
    STORE?: boolean | TYPE$STOREArgs
    _count?: boolean | TYPECountOutputTypeArgs
  }

  export type TYPEGetPayload<S extends boolean | null | undefined | TYPEArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TYPE :
    S extends undefined ? never :
    S extends { include: any } & (TYPEArgs | TYPEFindManyArgs)
    ? TYPE  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'STORE' ? Array < STOREGetPayload<S['include'][P]>>  :
        P extends '_count' ? TYPECountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TYPEArgs | TYPEFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'STORE' ? Array < STOREGetPayload<S['select'][P]>>  :
        P extends '_count' ? TYPECountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TYPE ? TYPE[P] : never
  } 
      : TYPE


  type TYPECountArgs = 
    Omit<TYPEFindManyArgs, 'select' | 'include'> & {
      select?: TYPECountAggregateInputType | true
    }

  export interface TYPEDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TYPE that matches the filter.
     * @param {TYPEFindUniqueArgs} args - Arguments to find a TYPE
     * @example
     * // Get one TYPE
     * const tYPE = await prisma.tYPE.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TYPEFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TYPEFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TYPE'> extends True ? Prisma__TYPEClient<TYPEGetPayload<T>> : Prisma__TYPEClient<TYPEGetPayload<T> | null, null>

    /**
     * Find one TYPE that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TYPEFindUniqueOrThrowArgs} args - Arguments to find a TYPE
     * @example
     * // Get one TYPE
     * const tYPE = await prisma.tYPE.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TYPEFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TYPEFindUniqueOrThrowArgs>
    ): Prisma__TYPEClient<TYPEGetPayload<T>>

    /**
     * Find the first TYPE that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TYPEFindFirstArgs} args - Arguments to find a TYPE
     * @example
     * // Get one TYPE
     * const tYPE = await prisma.tYPE.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TYPEFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TYPEFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TYPE'> extends True ? Prisma__TYPEClient<TYPEGetPayload<T>> : Prisma__TYPEClient<TYPEGetPayload<T> | null, null>

    /**
     * Find the first TYPE that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TYPEFindFirstOrThrowArgs} args - Arguments to find a TYPE
     * @example
     * // Get one TYPE
     * const tYPE = await prisma.tYPE.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TYPEFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TYPEFindFirstOrThrowArgs>
    ): Prisma__TYPEClient<TYPEGetPayload<T>>

    /**
     * Find zero or more TYPES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TYPEFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TYPES
     * const tYPES = await prisma.tYPE.findMany()
     * 
     * // Get first 10 TYPES
     * const tYPES = await prisma.tYPE.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const tYPEWithIDOnly = await prisma.tYPE.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends TYPEFindManyArgs>(
      args?: SelectSubset<T, TYPEFindManyArgs>
    ): Prisma.PrismaPromise<Array<TYPEGetPayload<T>>>

    /**
     * Create a TYPE.
     * @param {TYPECreateArgs} args - Arguments to create a TYPE.
     * @example
     * // Create one TYPE
     * const TYPE = await prisma.tYPE.create({
     *   data: {
     *     // ... data to create a TYPE
     *   }
     * })
     * 
    **/
    create<T extends TYPECreateArgs>(
      args: SelectSubset<T, TYPECreateArgs>
    ): Prisma__TYPEClient<TYPEGetPayload<T>>

    /**
     * Delete a TYPE.
     * @param {TYPEDeleteArgs} args - Arguments to delete one TYPE.
     * @example
     * // Delete one TYPE
     * const TYPE = await prisma.tYPE.delete({
     *   where: {
     *     // ... filter to delete one TYPE
     *   }
     * })
     * 
    **/
    delete<T extends TYPEDeleteArgs>(
      args: SelectSubset<T, TYPEDeleteArgs>
    ): Prisma__TYPEClient<TYPEGetPayload<T>>

    /**
     * Update one TYPE.
     * @param {TYPEUpdateArgs} args - Arguments to update one TYPE.
     * @example
     * // Update one TYPE
     * const tYPE = await prisma.tYPE.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TYPEUpdateArgs>(
      args: SelectSubset<T, TYPEUpdateArgs>
    ): Prisma__TYPEClient<TYPEGetPayload<T>>

    /**
     * Delete zero or more TYPES.
     * @param {TYPEDeleteManyArgs} args - Arguments to filter TYPES to delete.
     * @example
     * // Delete a few TYPES
     * const { count } = await prisma.tYPE.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TYPEDeleteManyArgs>(
      args?: SelectSubset<T, TYPEDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TYPES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TYPEUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TYPES
     * const tYPE = await prisma.tYPE.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TYPEUpdateManyArgs>(
      args: SelectSubset<T, TYPEUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TYPE.
     * @param {TYPEUpsertArgs} args - Arguments to update or create a TYPE.
     * @example
     * // Update or create a TYPE
     * const tYPE = await prisma.tYPE.upsert({
     *   create: {
     *     // ... data to create a TYPE
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TYPE we want to update
     *   }
     * })
    **/
    upsert<T extends TYPEUpsertArgs>(
      args: SelectSubset<T, TYPEUpsertArgs>
    ): Prisma__TYPEClient<TYPEGetPayload<T>>

    /**
     * Count the number of TYPES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TYPECountArgs} args - Arguments to filter TYPES to count.
     * @example
     * // Count the number of TYPES
     * const count = await prisma.tYPE.count({
     *   where: {
     *     // ... the filter for the TYPES we want to count
     *   }
     * })
    **/
    count<T extends TYPECountArgs>(
      args?: Subset<T, TYPECountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TYPECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TYPE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TYPEAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TYPEAggregateArgs>(args: Subset<T, TYPEAggregateArgs>): Prisma.PrismaPromise<GetTYPEAggregateType<T>>

    /**
     * Group by TYPE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TYPEGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TYPEGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TYPEGroupByArgs['orderBy'] }
        : { orderBy?: TYPEGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TYPEGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTYPEGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TYPE.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TYPEClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    STORE<T extends TYPE$STOREArgs= {}>(args?: Subset<T, TYPE$STOREArgs>): Prisma.PrismaPromise<Array<STOREGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TYPE base type for findUnique actions
   */
  export type TYPEFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TYPE
     */
    select?: TYPESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TYPEInclude | null
    /**
     * Filter, which TYPE to fetch.
     */
    where: TYPEWhereUniqueInput
  }

  /**
   * TYPE findUnique
   */
  export interface TYPEFindUniqueArgs extends TYPEFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TYPE findUniqueOrThrow
   */
  export type TYPEFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TYPE
     */
    select?: TYPESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TYPEInclude | null
    /**
     * Filter, which TYPE to fetch.
     */
    where: TYPEWhereUniqueInput
  }


  /**
   * TYPE base type for findFirst actions
   */
  export type TYPEFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TYPE
     */
    select?: TYPESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TYPEInclude | null
    /**
     * Filter, which TYPE to fetch.
     */
    where?: TYPEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TYPES to fetch.
     */
    orderBy?: Enumerable<TYPEOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TYPES.
     */
    cursor?: TYPEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TYPES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TYPES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TYPES.
     */
    distinct?: Enumerable<TYPEScalarFieldEnum>
  }

  /**
   * TYPE findFirst
   */
  export interface TYPEFindFirstArgs extends TYPEFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TYPE findFirstOrThrow
   */
  export type TYPEFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TYPE
     */
    select?: TYPESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TYPEInclude | null
    /**
     * Filter, which TYPE to fetch.
     */
    where?: TYPEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TYPES to fetch.
     */
    orderBy?: Enumerable<TYPEOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TYPES.
     */
    cursor?: TYPEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TYPES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TYPES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TYPES.
     */
    distinct?: Enumerable<TYPEScalarFieldEnum>
  }


  /**
   * TYPE findMany
   */
  export type TYPEFindManyArgs = {
    /**
     * Select specific fields to fetch from the TYPE
     */
    select?: TYPESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TYPEInclude | null
    /**
     * Filter, which TYPES to fetch.
     */
    where?: TYPEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TYPES to fetch.
     */
    orderBy?: Enumerable<TYPEOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TYPES.
     */
    cursor?: TYPEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TYPES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TYPES.
     */
    skip?: number
    distinct?: Enumerable<TYPEScalarFieldEnum>
  }


  /**
   * TYPE create
   */
  export type TYPECreateArgs = {
    /**
     * Select specific fields to fetch from the TYPE
     */
    select?: TYPESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TYPEInclude | null
    /**
     * The data needed to create a TYPE.
     */
    data: XOR<TYPECreateInput, TYPEUncheckedCreateInput>
  }


  /**
   * TYPE update
   */
  export type TYPEUpdateArgs = {
    /**
     * Select specific fields to fetch from the TYPE
     */
    select?: TYPESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TYPEInclude | null
    /**
     * The data needed to update a TYPE.
     */
    data: XOR<TYPEUpdateInput, TYPEUncheckedUpdateInput>
    /**
     * Choose, which TYPE to update.
     */
    where: TYPEWhereUniqueInput
  }


  /**
   * TYPE updateMany
   */
  export type TYPEUpdateManyArgs = {
    /**
     * The data used to update TYPES.
     */
    data: XOR<TYPEUpdateManyMutationInput, TYPEUncheckedUpdateManyInput>
    /**
     * Filter which TYPES to update
     */
    where?: TYPEWhereInput
  }


  /**
   * TYPE upsert
   */
  export type TYPEUpsertArgs = {
    /**
     * Select specific fields to fetch from the TYPE
     */
    select?: TYPESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TYPEInclude | null
    /**
     * The filter to search for the TYPE to update in case it exists.
     */
    where: TYPEWhereUniqueInput
    /**
     * In case the TYPE found by the `where` argument doesn't exist, create a new TYPE with this data.
     */
    create: XOR<TYPECreateInput, TYPEUncheckedCreateInput>
    /**
     * In case the TYPE was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TYPEUpdateInput, TYPEUncheckedUpdateInput>
  }


  /**
   * TYPE delete
   */
  export type TYPEDeleteArgs = {
    /**
     * Select specific fields to fetch from the TYPE
     */
    select?: TYPESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TYPEInclude | null
    /**
     * Filter which TYPE to delete.
     */
    where: TYPEWhereUniqueInput
  }


  /**
   * TYPE deleteMany
   */
  export type TYPEDeleteManyArgs = {
    /**
     * Filter which TYPES to delete
     */
    where?: TYPEWhereInput
  }


  /**
   * TYPE.STORE
   */
  export type TYPE$STOREArgs = {
    /**
     * Select specific fields to fetch from the STORE
     */
    select?: STORESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: STOREInclude | null
    where?: STOREWhereInput
    orderBy?: Enumerable<STOREOrderByWithRelationInput>
    cursor?: STOREWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<STOREScalarFieldEnum>
  }


  /**
   * TYPE without action
   */
  export type TYPEArgs = {
    /**
     * Select specific fields to fetch from the TYPE
     */
    select?: TYPESelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TYPEInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CHANNELScalarFieldEnum: {
    ID: 'ID',
    NAME: 'NAME',
    CHANNEL_NUMBER: 'CHANNEL_NUMBER'
  };

  export type CHANNELScalarFieldEnum = (typeof CHANNELScalarFieldEnum)[keyof typeof CHANNELScalarFieldEnum]


  export const FLAGScalarFieldEnum: {
    ID: 'ID',
    NAME: 'NAME'
  };

  export type FLAGScalarFieldEnum = (typeof FLAGScalarFieldEnum)[keyof typeof FLAGScalarFieldEnum]


  export const REGIONScalarFieldEnum: {
    ID: 'ID',
    NAME: 'NAME'
  };

  export type REGIONScalarFieldEnum = (typeof REGIONScalarFieldEnum)[keyof typeof REGIONScalarFieldEnum]


  export const SQLITEADMIN_QUERIESScalarFieldEnum: {
    ID: 'ID',
    NAME: 'NAME',
    SQL: 'SQL'
  };

  export type SQLITEADMIN_QUERIESScalarFieldEnum = (typeof SQLITEADMIN_QUERIESScalarFieldEnum)[keyof typeof SQLITEADMIN_QUERIESScalarFieldEnum]


  export const STOREScalarFieldEnum: {
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
  };

  export type STOREScalarFieldEnum = (typeof STOREScalarFieldEnum)[keyof typeof STOREScalarFieldEnum]


  export const SUPPORTScalarFieldEnum: {
    ID: 'ID',
    NAME: 'NAME'
  };

  export type SUPPORTScalarFieldEnum = (typeof SUPPORTScalarFieldEnum)[keyof typeof SUPPORTScalarFieldEnum]


  export const SUPPORT_LEADERScalarFieldEnum: {
    ID: 'ID',
    NAME: 'NAME'
  };

  export type SUPPORT_LEADERScalarFieldEnum = (typeof SUPPORT_LEADERScalarFieldEnum)[keyof typeof SUPPORT_LEADERScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TYPEScalarFieldEnum: {
    ID: 'ID',
    NAME: 'NAME'
  };

  export type TYPEScalarFieldEnum = (typeof TYPEScalarFieldEnum)[keyof typeof TYPEScalarFieldEnum]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type CHANNELWhereInput = {
    AND?: Enumerable<CHANNELWhereInput>
    OR?: Enumerable<CHANNELWhereInput>
    NOT?: Enumerable<CHANNELWhereInput>
    ID?: IntFilter | number
    NAME?: StringFilter | string
    CHANNEL_NUMBER?: StringFilter | string
    STORE?: STOREListRelationFilter
  }

  export type CHANNELOrderByWithRelationInput = {
    ID?: SortOrder
    NAME?: SortOrder
    CHANNEL_NUMBER?: SortOrder
    STORE?: STOREOrderByRelationAggregateInput
  }

  export type CHANNELWhereUniqueInput = {
    ID?: number
  }

  export type CHANNELOrderByWithAggregationInput = {
    ID?: SortOrder
    NAME?: SortOrder
    CHANNEL_NUMBER?: SortOrder
    _count?: CHANNELCountOrderByAggregateInput
    _avg?: CHANNELAvgOrderByAggregateInput
    _max?: CHANNELMaxOrderByAggregateInput
    _min?: CHANNELMinOrderByAggregateInput
    _sum?: CHANNELSumOrderByAggregateInput
  }

  export type CHANNELScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CHANNELScalarWhereWithAggregatesInput>
    OR?: Enumerable<CHANNELScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CHANNELScalarWhereWithAggregatesInput>
    ID?: IntWithAggregatesFilter | number
    NAME?: StringWithAggregatesFilter | string
    CHANNEL_NUMBER?: StringWithAggregatesFilter | string
  }

  export type FLAGWhereInput = {
    AND?: Enumerable<FLAGWhereInput>
    OR?: Enumerable<FLAGWhereInput>
    NOT?: Enumerable<FLAGWhereInput>
    ID?: IntFilter | number
    NAME?: StringFilter | string
    STORE?: STOREListRelationFilter
  }

  export type FLAGOrderByWithRelationInput = {
    ID?: SortOrder
    NAME?: SortOrder
    STORE?: STOREOrderByRelationAggregateInput
  }

  export type FLAGWhereUniqueInput = {
    ID?: number
  }

  export type FLAGOrderByWithAggregationInput = {
    ID?: SortOrder
    NAME?: SortOrder
    _count?: FLAGCountOrderByAggregateInput
    _avg?: FLAGAvgOrderByAggregateInput
    _max?: FLAGMaxOrderByAggregateInput
    _min?: FLAGMinOrderByAggregateInput
    _sum?: FLAGSumOrderByAggregateInput
  }

  export type FLAGScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FLAGScalarWhereWithAggregatesInput>
    OR?: Enumerable<FLAGScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FLAGScalarWhereWithAggregatesInput>
    ID?: IntWithAggregatesFilter | number
    NAME?: StringWithAggregatesFilter | string
  }

  export type REGIONWhereInput = {
    AND?: Enumerable<REGIONWhereInput>
    OR?: Enumerable<REGIONWhereInput>
    NOT?: Enumerable<REGIONWhereInput>
    ID?: IntFilter | number
    NAME?: StringFilter | string
    STORE?: STOREListRelationFilter
  }

  export type REGIONOrderByWithRelationInput = {
    ID?: SortOrder
    NAME?: SortOrder
    STORE?: STOREOrderByRelationAggregateInput
  }

  export type REGIONWhereUniqueInput = {
    ID?: number
  }

  export type REGIONOrderByWithAggregationInput = {
    ID?: SortOrder
    NAME?: SortOrder
    _count?: REGIONCountOrderByAggregateInput
    _avg?: REGIONAvgOrderByAggregateInput
    _max?: REGIONMaxOrderByAggregateInput
    _min?: REGIONMinOrderByAggregateInput
    _sum?: REGIONSumOrderByAggregateInput
  }

  export type REGIONScalarWhereWithAggregatesInput = {
    AND?: Enumerable<REGIONScalarWhereWithAggregatesInput>
    OR?: Enumerable<REGIONScalarWhereWithAggregatesInput>
    NOT?: Enumerable<REGIONScalarWhereWithAggregatesInput>
    ID?: IntWithAggregatesFilter | number
    NAME?: StringWithAggregatesFilter | string
  }

  export type SQLITEADMIN_QUERIESWhereInput = {
    AND?: Enumerable<SQLITEADMIN_QUERIESWhereInput>
    OR?: Enumerable<SQLITEADMIN_QUERIESWhereInput>
    NOT?: Enumerable<SQLITEADMIN_QUERIESWhereInput>
    ID?: IntFilter | number
    NAME?: StringNullableFilter | string | null
    SQL?: StringNullableFilter | string | null
  }

  export type SQLITEADMIN_QUERIESOrderByWithRelationInput = {
    ID?: SortOrder
    NAME?: SortOrder
    SQL?: SortOrder
  }

  export type SQLITEADMIN_QUERIESWhereUniqueInput = {
    ID?: number
  }

  export type SQLITEADMIN_QUERIESOrderByWithAggregationInput = {
    ID?: SortOrder
    NAME?: SortOrder
    SQL?: SortOrder
    _count?: SQLITEADMIN_QUERIESCountOrderByAggregateInput
    _avg?: SQLITEADMIN_QUERIESAvgOrderByAggregateInput
    _max?: SQLITEADMIN_QUERIESMaxOrderByAggregateInput
    _min?: SQLITEADMIN_QUERIESMinOrderByAggregateInput
    _sum?: SQLITEADMIN_QUERIESSumOrderByAggregateInput
  }

  export type SQLITEADMIN_QUERIESScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SQLITEADMIN_QUERIESScalarWhereWithAggregatesInput>
    OR?: Enumerable<SQLITEADMIN_QUERIESScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SQLITEADMIN_QUERIESScalarWhereWithAggregatesInput>
    ID?: IntWithAggregatesFilter | number
    NAME?: StringNullableWithAggregatesFilter | string | null
    SQL?: StringNullableWithAggregatesFilter | string | null
  }

  export type STOREWhereInput = {
    AND?: Enumerable<STOREWhereInput>
    OR?: Enumerable<STOREWhereInput>
    NOT?: Enumerable<STOREWhereInput>
    STORE_KEY?: IntFilter | number
    STORE_NAME?: StringNullableFilter | string | null
    STORE_ID?: StringNullableFilter | string | null
    STORE_ADDRESS?: StringNullableFilter | string | null
    STORE_NEIG?: StringNullableFilter | string | null
    STORE_CITY?: StringNullableFilter | string | null
    STORE_STATE?: StringNullableFilter | string | null
    STORE_ZIP?: StringNullableFilter | string | null
    STORE_PHONE?: StringNullableFilter | string | null
    STORE_REGION?: IntFilter | number
    STORE_SUPPORT?: IntFilter | number
    STORE_LEADER?: IntFilter | number
    STORE_TYPE?: IntFilter | number
    STORE_CHANNEL?: IntFilter | number
    STORE_FLAG?: IntFilter | number
    FLAG?: XOR<FLAGRelationFilter, FLAGWhereInput>
    CHANNEL?: XOR<CHANNELRelationFilter, CHANNELWhereInput>
    TYPE?: XOR<TYPERelationFilter, TYPEWhereInput>
    SUPPORT_LEADER?: XOR<SUPPORT_LEADERRelationFilter, SUPPORT_LEADERWhereInput>
    SUPPORT?: XOR<SUPPORTRelationFilter, SUPPORTWhereInput>
    REGION?: XOR<REGIONRelationFilter, REGIONWhereInput>
  }

  export type STOREOrderByWithRelationInput = {
    STORE_KEY?: SortOrder
    STORE_NAME?: SortOrder
    STORE_ID?: SortOrder
    STORE_ADDRESS?: SortOrder
    STORE_NEIG?: SortOrder
    STORE_CITY?: SortOrder
    STORE_STATE?: SortOrder
    STORE_ZIP?: SortOrder
    STORE_PHONE?: SortOrder
    STORE_REGION?: SortOrder
    STORE_SUPPORT?: SortOrder
    STORE_LEADER?: SortOrder
    STORE_TYPE?: SortOrder
    STORE_CHANNEL?: SortOrder
    STORE_FLAG?: SortOrder
    FLAG?: FLAGOrderByWithRelationInput
    CHANNEL?: CHANNELOrderByWithRelationInput
    TYPE?: TYPEOrderByWithRelationInput
    SUPPORT_LEADER?: SUPPORT_LEADEROrderByWithRelationInput
    SUPPORT?: SUPPORTOrderByWithRelationInput
    REGION?: REGIONOrderByWithRelationInput
  }

  export type STOREWhereUniqueInput = {
    STORE_KEY?: number
  }

  export type STOREOrderByWithAggregationInput = {
    STORE_KEY?: SortOrder
    STORE_NAME?: SortOrder
    STORE_ID?: SortOrder
    STORE_ADDRESS?: SortOrder
    STORE_NEIG?: SortOrder
    STORE_CITY?: SortOrder
    STORE_STATE?: SortOrder
    STORE_ZIP?: SortOrder
    STORE_PHONE?: SortOrder
    STORE_REGION?: SortOrder
    STORE_SUPPORT?: SortOrder
    STORE_LEADER?: SortOrder
    STORE_TYPE?: SortOrder
    STORE_CHANNEL?: SortOrder
    STORE_FLAG?: SortOrder
    _count?: STORECountOrderByAggregateInput
    _avg?: STOREAvgOrderByAggregateInput
    _max?: STOREMaxOrderByAggregateInput
    _min?: STOREMinOrderByAggregateInput
    _sum?: STORESumOrderByAggregateInput
  }

  export type STOREScalarWhereWithAggregatesInput = {
    AND?: Enumerable<STOREScalarWhereWithAggregatesInput>
    OR?: Enumerable<STOREScalarWhereWithAggregatesInput>
    NOT?: Enumerable<STOREScalarWhereWithAggregatesInput>
    STORE_KEY?: IntWithAggregatesFilter | number
    STORE_NAME?: StringNullableWithAggregatesFilter | string | null
    STORE_ID?: StringNullableWithAggregatesFilter | string | null
    STORE_ADDRESS?: StringNullableWithAggregatesFilter | string | null
    STORE_NEIG?: StringNullableWithAggregatesFilter | string | null
    STORE_CITY?: StringNullableWithAggregatesFilter | string | null
    STORE_STATE?: StringNullableWithAggregatesFilter | string | null
    STORE_ZIP?: StringNullableWithAggregatesFilter | string | null
    STORE_PHONE?: StringNullableWithAggregatesFilter | string | null
    STORE_REGION?: IntWithAggregatesFilter | number
    STORE_SUPPORT?: IntWithAggregatesFilter | number
    STORE_LEADER?: IntWithAggregatesFilter | number
    STORE_TYPE?: IntWithAggregatesFilter | number
    STORE_CHANNEL?: IntWithAggregatesFilter | number
    STORE_FLAG?: IntWithAggregatesFilter | number
  }

  export type SUPPORTWhereInput = {
    AND?: Enumerable<SUPPORTWhereInput>
    OR?: Enumerable<SUPPORTWhereInput>
    NOT?: Enumerable<SUPPORTWhereInput>
    ID?: IntFilter | number
    NAME?: StringFilter | string
    STORE?: STOREListRelationFilter
  }

  export type SUPPORTOrderByWithRelationInput = {
    ID?: SortOrder
    NAME?: SortOrder
    STORE?: STOREOrderByRelationAggregateInput
  }

  export type SUPPORTWhereUniqueInput = {
    ID?: number
  }

  export type SUPPORTOrderByWithAggregationInput = {
    ID?: SortOrder
    NAME?: SortOrder
    _count?: SUPPORTCountOrderByAggregateInput
    _avg?: SUPPORTAvgOrderByAggregateInput
    _max?: SUPPORTMaxOrderByAggregateInput
    _min?: SUPPORTMinOrderByAggregateInput
    _sum?: SUPPORTSumOrderByAggregateInput
  }

  export type SUPPORTScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SUPPORTScalarWhereWithAggregatesInput>
    OR?: Enumerable<SUPPORTScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SUPPORTScalarWhereWithAggregatesInput>
    ID?: IntWithAggregatesFilter | number
    NAME?: StringWithAggregatesFilter | string
  }

  export type SUPPORT_LEADERWhereInput = {
    AND?: Enumerable<SUPPORT_LEADERWhereInput>
    OR?: Enumerable<SUPPORT_LEADERWhereInput>
    NOT?: Enumerable<SUPPORT_LEADERWhereInput>
    ID?: IntFilter | number
    NAME?: StringFilter | string
    STORE?: STOREListRelationFilter
  }

  export type SUPPORT_LEADEROrderByWithRelationInput = {
    ID?: SortOrder
    NAME?: SortOrder
    STORE?: STOREOrderByRelationAggregateInput
  }

  export type SUPPORT_LEADERWhereUniqueInput = {
    ID?: number
  }

  export type SUPPORT_LEADEROrderByWithAggregationInput = {
    ID?: SortOrder
    NAME?: SortOrder
    _count?: SUPPORT_LEADERCountOrderByAggregateInput
    _avg?: SUPPORT_LEADERAvgOrderByAggregateInput
    _max?: SUPPORT_LEADERMaxOrderByAggregateInput
    _min?: SUPPORT_LEADERMinOrderByAggregateInput
    _sum?: SUPPORT_LEADERSumOrderByAggregateInput
  }

  export type SUPPORT_LEADERScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SUPPORT_LEADERScalarWhereWithAggregatesInput>
    OR?: Enumerable<SUPPORT_LEADERScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SUPPORT_LEADERScalarWhereWithAggregatesInput>
    ID?: IntWithAggregatesFilter | number
    NAME?: StringWithAggregatesFilter | string
  }

  export type TYPEWhereInput = {
    AND?: Enumerable<TYPEWhereInput>
    OR?: Enumerable<TYPEWhereInput>
    NOT?: Enumerable<TYPEWhereInput>
    ID?: IntFilter | number
    NAME?: StringFilter | string
    STORE?: STOREListRelationFilter
  }

  export type TYPEOrderByWithRelationInput = {
    ID?: SortOrder
    NAME?: SortOrder
    STORE?: STOREOrderByRelationAggregateInput
  }

  export type TYPEWhereUniqueInput = {
    ID?: number
  }

  export type TYPEOrderByWithAggregationInput = {
    ID?: SortOrder
    NAME?: SortOrder
    _count?: TYPECountOrderByAggregateInput
    _avg?: TYPEAvgOrderByAggregateInput
    _max?: TYPEMaxOrderByAggregateInput
    _min?: TYPEMinOrderByAggregateInput
    _sum?: TYPESumOrderByAggregateInput
  }

  export type TYPEScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TYPEScalarWhereWithAggregatesInput>
    OR?: Enumerable<TYPEScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TYPEScalarWhereWithAggregatesInput>
    ID?: IntWithAggregatesFilter | number
    NAME?: StringWithAggregatesFilter | string
  }

  export type CHANNELCreateInput = {
    NAME: string
    CHANNEL_NUMBER: string
    STORE?: STORECreateNestedManyWithoutCHANNELInput
  }

  export type CHANNELUncheckedCreateInput = {
    ID?: number
    NAME: string
    CHANNEL_NUMBER: string
    STORE?: STOREUncheckedCreateNestedManyWithoutCHANNELInput
  }

  export type CHANNELUpdateInput = {
    NAME?: StringFieldUpdateOperationsInput | string
    CHANNEL_NUMBER?: StringFieldUpdateOperationsInput | string
    STORE?: STOREUpdateManyWithoutCHANNELNestedInput
  }

  export type CHANNELUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
    CHANNEL_NUMBER?: StringFieldUpdateOperationsInput | string
    STORE?: STOREUncheckedUpdateManyWithoutCHANNELNestedInput
  }

  export type CHANNELUpdateManyMutationInput = {
    NAME?: StringFieldUpdateOperationsInput | string
    CHANNEL_NUMBER?: StringFieldUpdateOperationsInput | string
  }

  export type CHANNELUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
    CHANNEL_NUMBER?: StringFieldUpdateOperationsInput | string
  }

  export type FLAGCreateInput = {
    NAME: string
    STORE?: STORECreateNestedManyWithoutFLAGInput
  }

  export type FLAGUncheckedCreateInput = {
    ID?: number
    NAME: string
    STORE?: STOREUncheckedCreateNestedManyWithoutFLAGInput
  }

  export type FLAGUpdateInput = {
    NAME?: StringFieldUpdateOperationsInput | string
    STORE?: STOREUpdateManyWithoutFLAGNestedInput
  }

  export type FLAGUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
    STORE?: STOREUncheckedUpdateManyWithoutFLAGNestedInput
  }

  export type FLAGUpdateManyMutationInput = {
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type FLAGUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type REGIONCreateInput = {
    NAME: string
    STORE?: STORECreateNestedManyWithoutREGIONInput
  }

  export type REGIONUncheckedCreateInput = {
    ID?: number
    NAME: string
    STORE?: STOREUncheckedCreateNestedManyWithoutREGIONInput
  }

  export type REGIONUpdateInput = {
    NAME?: StringFieldUpdateOperationsInput | string
    STORE?: STOREUpdateManyWithoutREGIONNestedInput
  }

  export type REGIONUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
    STORE?: STOREUncheckedUpdateManyWithoutREGIONNestedInput
  }

  export type REGIONUpdateManyMutationInput = {
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type REGIONUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type SQLITEADMIN_QUERIESCreateInput = {
    NAME?: string | null
    SQL?: string | null
  }

  export type SQLITEADMIN_QUERIESUncheckedCreateInput = {
    ID?: number
    NAME?: string | null
    SQL?: string | null
  }

  export type SQLITEADMIN_QUERIESUpdateInput = {
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    SQL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SQLITEADMIN_QUERIESUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    SQL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SQLITEADMIN_QUERIESUpdateManyMutationInput = {
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    SQL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SQLITEADMIN_QUERIESUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    SQL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type STORECreateInput = {
    STORE_NAME?: string | null
    STORE_ID?: string | null
    STORE_ADDRESS?: string | null
    STORE_NEIG?: string | null
    STORE_CITY?: string | null
    STORE_STATE?: string | null
    STORE_ZIP?: string | null
    STORE_PHONE?: string | null
    FLAG: FLAGCreateNestedOneWithoutSTOREInput
    CHANNEL: CHANNELCreateNestedOneWithoutSTOREInput
    TYPE: TYPECreateNestedOneWithoutSTOREInput
    SUPPORT_LEADER: SUPPORT_LEADERCreateNestedOneWithoutSTOREInput
    SUPPORT: SUPPORTCreateNestedOneWithoutSTOREInput
    REGION: REGIONCreateNestedOneWithoutSTOREInput
  }

  export type STOREUncheckedCreateInput = {
    STORE_KEY?: number
    STORE_NAME?: string | null
    STORE_ID?: string | null
    STORE_ADDRESS?: string | null
    STORE_NEIG?: string | null
    STORE_CITY?: string | null
    STORE_STATE?: string | null
    STORE_ZIP?: string | null
    STORE_PHONE?: string | null
    STORE_REGION: number
    STORE_SUPPORT: number
    STORE_LEADER: number
    STORE_TYPE: number
    STORE_CHANNEL: number
    STORE_FLAG: number
  }

  export type STOREUpdateInput = {
    STORE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_NEIG?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_CITY?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_STATE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ZIP?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    FLAG?: FLAGUpdateOneRequiredWithoutSTORENestedInput
    CHANNEL?: CHANNELUpdateOneRequiredWithoutSTORENestedInput
    TYPE?: TYPEUpdateOneRequiredWithoutSTORENestedInput
    SUPPORT_LEADER?: SUPPORT_LEADERUpdateOneRequiredWithoutSTORENestedInput
    SUPPORT?: SUPPORTUpdateOneRequiredWithoutSTORENestedInput
    REGION?: REGIONUpdateOneRequiredWithoutSTORENestedInput
  }

  export type STOREUncheckedUpdateInput = {
    STORE_KEY?: IntFieldUpdateOperationsInput | number
    STORE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_NEIG?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_CITY?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_STATE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ZIP?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_REGION?: IntFieldUpdateOperationsInput | number
    STORE_SUPPORT?: IntFieldUpdateOperationsInput | number
    STORE_LEADER?: IntFieldUpdateOperationsInput | number
    STORE_TYPE?: IntFieldUpdateOperationsInput | number
    STORE_CHANNEL?: IntFieldUpdateOperationsInput | number
    STORE_FLAG?: IntFieldUpdateOperationsInput | number
  }

  export type STOREUpdateManyMutationInput = {
    STORE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_NEIG?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_CITY?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_STATE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ZIP?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type STOREUncheckedUpdateManyInput = {
    STORE_KEY?: IntFieldUpdateOperationsInput | number
    STORE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_NEIG?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_CITY?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_STATE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ZIP?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_REGION?: IntFieldUpdateOperationsInput | number
    STORE_SUPPORT?: IntFieldUpdateOperationsInput | number
    STORE_LEADER?: IntFieldUpdateOperationsInput | number
    STORE_TYPE?: IntFieldUpdateOperationsInput | number
    STORE_CHANNEL?: IntFieldUpdateOperationsInput | number
    STORE_FLAG?: IntFieldUpdateOperationsInput | number
  }

  export type SUPPORTCreateInput = {
    NAME: string
    STORE?: STORECreateNestedManyWithoutSUPPORTInput
  }

  export type SUPPORTUncheckedCreateInput = {
    ID?: number
    NAME: string
    STORE?: STOREUncheckedCreateNestedManyWithoutSUPPORTInput
  }

  export type SUPPORTUpdateInput = {
    NAME?: StringFieldUpdateOperationsInput | string
    STORE?: STOREUpdateManyWithoutSUPPORTNestedInput
  }

  export type SUPPORTUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
    STORE?: STOREUncheckedUpdateManyWithoutSUPPORTNestedInput
  }

  export type SUPPORTUpdateManyMutationInput = {
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type SUPPORTUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type SUPPORT_LEADERCreateInput = {
    NAME: string
    STORE?: STORECreateNestedManyWithoutSUPPORT_LEADERInput
  }

  export type SUPPORT_LEADERUncheckedCreateInput = {
    ID?: number
    NAME: string
    STORE?: STOREUncheckedCreateNestedManyWithoutSUPPORT_LEADERInput
  }

  export type SUPPORT_LEADERUpdateInput = {
    NAME?: StringFieldUpdateOperationsInput | string
    STORE?: STOREUpdateManyWithoutSUPPORT_LEADERNestedInput
  }

  export type SUPPORT_LEADERUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
    STORE?: STOREUncheckedUpdateManyWithoutSUPPORT_LEADERNestedInput
  }

  export type SUPPORT_LEADERUpdateManyMutationInput = {
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type SUPPORT_LEADERUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type TYPECreateInput = {
    NAME: string
    STORE?: STORECreateNestedManyWithoutTYPEInput
  }

  export type TYPEUncheckedCreateInput = {
    ID?: number
    NAME: string
    STORE?: STOREUncheckedCreateNestedManyWithoutTYPEInput
  }

  export type TYPEUpdateInput = {
    NAME?: StringFieldUpdateOperationsInput | string
    STORE?: STOREUpdateManyWithoutTYPENestedInput
  }

  export type TYPEUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
    STORE?: STOREUncheckedUpdateManyWithoutTYPENestedInput
  }

  export type TYPEUpdateManyMutationInput = {
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type TYPEUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type STOREListRelationFilter = {
    every?: STOREWhereInput
    some?: STOREWhereInput
    none?: STOREWhereInput
  }

  export type STOREOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CHANNELCountOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
    CHANNEL_NUMBER?: SortOrder
  }

  export type CHANNELAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type CHANNELMaxOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
    CHANNEL_NUMBER?: SortOrder
  }

  export type CHANNELMinOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
    CHANNEL_NUMBER?: SortOrder
  }

  export type CHANNELSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type FLAGCountOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
  }

  export type FLAGAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type FLAGMaxOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
  }

  export type FLAGMinOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
  }

  export type FLAGSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type REGIONCountOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
  }

  export type REGIONAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type REGIONMaxOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
  }

  export type REGIONMinOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
  }

  export type REGIONSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type SQLITEADMIN_QUERIESCountOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
    SQL?: SortOrder
  }

  export type SQLITEADMIN_QUERIESAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type SQLITEADMIN_QUERIESMaxOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
    SQL?: SortOrder
  }

  export type SQLITEADMIN_QUERIESMinOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
    SQL?: SortOrder
  }

  export type SQLITEADMIN_QUERIESSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type FLAGRelationFilter = {
    is?: FLAGWhereInput
    isNot?: FLAGWhereInput
  }

  export type CHANNELRelationFilter = {
    is?: CHANNELWhereInput
    isNot?: CHANNELWhereInput
  }

  export type TYPERelationFilter = {
    is?: TYPEWhereInput
    isNot?: TYPEWhereInput
  }

  export type SUPPORT_LEADERRelationFilter = {
    is?: SUPPORT_LEADERWhereInput
    isNot?: SUPPORT_LEADERWhereInput
  }

  export type SUPPORTRelationFilter = {
    is?: SUPPORTWhereInput
    isNot?: SUPPORTWhereInput
  }

  export type REGIONRelationFilter = {
    is?: REGIONWhereInput
    isNot?: REGIONWhereInput
  }

  export type STORECountOrderByAggregateInput = {
    STORE_KEY?: SortOrder
    STORE_NAME?: SortOrder
    STORE_ID?: SortOrder
    STORE_ADDRESS?: SortOrder
    STORE_NEIG?: SortOrder
    STORE_CITY?: SortOrder
    STORE_STATE?: SortOrder
    STORE_ZIP?: SortOrder
    STORE_PHONE?: SortOrder
    STORE_REGION?: SortOrder
    STORE_SUPPORT?: SortOrder
    STORE_LEADER?: SortOrder
    STORE_TYPE?: SortOrder
    STORE_CHANNEL?: SortOrder
    STORE_FLAG?: SortOrder
  }

  export type STOREAvgOrderByAggregateInput = {
    STORE_KEY?: SortOrder
    STORE_REGION?: SortOrder
    STORE_SUPPORT?: SortOrder
    STORE_LEADER?: SortOrder
    STORE_TYPE?: SortOrder
    STORE_CHANNEL?: SortOrder
    STORE_FLAG?: SortOrder
  }

  export type STOREMaxOrderByAggregateInput = {
    STORE_KEY?: SortOrder
    STORE_NAME?: SortOrder
    STORE_ID?: SortOrder
    STORE_ADDRESS?: SortOrder
    STORE_NEIG?: SortOrder
    STORE_CITY?: SortOrder
    STORE_STATE?: SortOrder
    STORE_ZIP?: SortOrder
    STORE_PHONE?: SortOrder
    STORE_REGION?: SortOrder
    STORE_SUPPORT?: SortOrder
    STORE_LEADER?: SortOrder
    STORE_TYPE?: SortOrder
    STORE_CHANNEL?: SortOrder
    STORE_FLAG?: SortOrder
  }

  export type STOREMinOrderByAggregateInput = {
    STORE_KEY?: SortOrder
    STORE_NAME?: SortOrder
    STORE_ID?: SortOrder
    STORE_ADDRESS?: SortOrder
    STORE_NEIG?: SortOrder
    STORE_CITY?: SortOrder
    STORE_STATE?: SortOrder
    STORE_ZIP?: SortOrder
    STORE_PHONE?: SortOrder
    STORE_REGION?: SortOrder
    STORE_SUPPORT?: SortOrder
    STORE_LEADER?: SortOrder
    STORE_TYPE?: SortOrder
    STORE_CHANNEL?: SortOrder
    STORE_FLAG?: SortOrder
  }

  export type STORESumOrderByAggregateInput = {
    STORE_KEY?: SortOrder
    STORE_REGION?: SortOrder
    STORE_SUPPORT?: SortOrder
    STORE_LEADER?: SortOrder
    STORE_TYPE?: SortOrder
    STORE_CHANNEL?: SortOrder
    STORE_FLAG?: SortOrder
  }

  export type SUPPORTCountOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
  }

  export type SUPPORTAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type SUPPORTMaxOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
  }

  export type SUPPORTMinOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
  }

  export type SUPPORTSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type SUPPORT_LEADERCountOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
  }

  export type SUPPORT_LEADERAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type SUPPORT_LEADERMaxOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
  }

  export type SUPPORT_LEADERMinOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
  }

  export type SUPPORT_LEADERSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type TYPECountOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
  }

  export type TYPEAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type TYPEMaxOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
  }

  export type TYPEMinOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
  }

  export type TYPESumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type STORECreateNestedManyWithoutCHANNELInput = {
    create?: XOR<Enumerable<STORECreateWithoutCHANNELInput>, Enumerable<STOREUncheckedCreateWithoutCHANNELInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutCHANNELInput>
    connect?: Enumerable<STOREWhereUniqueInput>
  }

  export type STOREUncheckedCreateNestedManyWithoutCHANNELInput = {
    create?: XOR<Enumerable<STORECreateWithoutCHANNELInput>, Enumerable<STOREUncheckedCreateWithoutCHANNELInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutCHANNELInput>
    connect?: Enumerable<STOREWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type STOREUpdateManyWithoutCHANNELNestedInput = {
    create?: XOR<Enumerable<STORECreateWithoutCHANNELInput>, Enumerable<STOREUncheckedCreateWithoutCHANNELInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutCHANNELInput>
    upsert?: Enumerable<STOREUpsertWithWhereUniqueWithoutCHANNELInput>
    set?: Enumerable<STOREWhereUniqueInput>
    disconnect?: Enumerable<STOREWhereUniqueInput>
    delete?: Enumerable<STOREWhereUniqueInput>
    connect?: Enumerable<STOREWhereUniqueInput>
    update?: Enumerable<STOREUpdateWithWhereUniqueWithoutCHANNELInput>
    updateMany?: Enumerable<STOREUpdateManyWithWhereWithoutCHANNELInput>
    deleteMany?: Enumerable<STOREScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type STOREUncheckedUpdateManyWithoutCHANNELNestedInput = {
    create?: XOR<Enumerable<STORECreateWithoutCHANNELInput>, Enumerable<STOREUncheckedCreateWithoutCHANNELInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutCHANNELInput>
    upsert?: Enumerable<STOREUpsertWithWhereUniqueWithoutCHANNELInput>
    set?: Enumerable<STOREWhereUniqueInput>
    disconnect?: Enumerable<STOREWhereUniqueInput>
    delete?: Enumerable<STOREWhereUniqueInput>
    connect?: Enumerable<STOREWhereUniqueInput>
    update?: Enumerable<STOREUpdateWithWhereUniqueWithoutCHANNELInput>
    updateMany?: Enumerable<STOREUpdateManyWithWhereWithoutCHANNELInput>
    deleteMany?: Enumerable<STOREScalarWhereInput>
  }

  export type STORECreateNestedManyWithoutFLAGInput = {
    create?: XOR<Enumerable<STORECreateWithoutFLAGInput>, Enumerable<STOREUncheckedCreateWithoutFLAGInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutFLAGInput>
    connect?: Enumerable<STOREWhereUniqueInput>
  }

  export type STOREUncheckedCreateNestedManyWithoutFLAGInput = {
    create?: XOR<Enumerable<STORECreateWithoutFLAGInput>, Enumerable<STOREUncheckedCreateWithoutFLAGInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutFLAGInput>
    connect?: Enumerable<STOREWhereUniqueInput>
  }

  export type STOREUpdateManyWithoutFLAGNestedInput = {
    create?: XOR<Enumerable<STORECreateWithoutFLAGInput>, Enumerable<STOREUncheckedCreateWithoutFLAGInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutFLAGInput>
    upsert?: Enumerable<STOREUpsertWithWhereUniqueWithoutFLAGInput>
    set?: Enumerable<STOREWhereUniqueInput>
    disconnect?: Enumerable<STOREWhereUniqueInput>
    delete?: Enumerable<STOREWhereUniqueInput>
    connect?: Enumerable<STOREWhereUniqueInput>
    update?: Enumerable<STOREUpdateWithWhereUniqueWithoutFLAGInput>
    updateMany?: Enumerable<STOREUpdateManyWithWhereWithoutFLAGInput>
    deleteMany?: Enumerable<STOREScalarWhereInput>
  }

  export type STOREUncheckedUpdateManyWithoutFLAGNestedInput = {
    create?: XOR<Enumerable<STORECreateWithoutFLAGInput>, Enumerable<STOREUncheckedCreateWithoutFLAGInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutFLAGInput>
    upsert?: Enumerable<STOREUpsertWithWhereUniqueWithoutFLAGInput>
    set?: Enumerable<STOREWhereUniqueInput>
    disconnect?: Enumerable<STOREWhereUniqueInput>
    delete?: Enumerable<STOREWhereUniqueInput>
    connect?: Enumerable<STOREWhereUniqueInput>
    update?: Enumerable<STOREUpdateWithWhereUniqueWithoutFLAGInput>
    updateMany?: Enumerable<STOREUpdateManyWithWhereWithoutFLAGInput>
    deleteMany?: Enumerable<STOREScalarWhereInput>
  }

  export type STORECreateNestedManyWithoutREGIONInput = {
    create?: XOR<Enumerable<STORECreateWithoutREGIONInput>, Enumerable<STOREUncheckedCreateWithoutREGIONInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutREGIONInput>
    connect?: Enumerable<STOREWhereUniqueInput>
  }

  export type STOREUncheckedCreateNestedManyWithoutREGIONInput = {
    create?: XOR<Enumerable<STORECreateWithoutREGIONInput>, Enumerable<STOREUncheckedCreateWithoutREGIONInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutREGIONInput>
    connect?: Enumerable<STOREWhereUniqueInput>
  }

  export type STOREUpdateManyWithoutREGIONNestedInput = {
    create?: XOR<Enumerable<STORECreateWithoutREGIONInput>, Enumerable<STOREUncheckedCreateWithoutREGIONInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutREGIONInput>
    upsert?: Enumerable<STOREUpsertWithWhereUniqueWithoutREGIONInput>
    set?: Enumerable<STOREWhereUniqueInput>
    disconnect?: Enumerable<STOREWhereUniqueInput>
    delete?: Enumerable<STOREWhereUniqueInput>
    connect?: Enumerable<STOREWhereUniqueInput>
    update?: Enumerable<STOREUpdateWithWhereUniqueWithoutREGIONInput>
    updateMany?: Enumerable<STOREUpdateManyWithWhereWithoutREGIONInput>
    deleteMany?: Enumerable<STOREScalarWhereInput>
  }

  export type STOREUncheckedUpdateManyWithoutREGIONNestedInput = {
    create?: XOR<Enumerable<STORECreateWithoutREGIONInput>, Enumerable<STOREUncheckedCreateWithoutREGIONInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutREGIONInput>
    upsert?: Enumerable<STOREUpsertWithWhereUniqueWithoutREGIONInput>
    set?: Enumerable<STOREWhereUniqueInput>
    disconnect?: Enumerable<STOREWhereUniqueInput>
    delete?: Enumerable<STOREWhereUniqueInput>
    connect?: Enumerable<STOREWhereUniqueInput>
    update?: Enumerable<STOREUpdateWithWhereUniqueWithoutREGIONInput>
    updateMany?: Enumerable<STOREUpdateManyWithWhereWithoutREGIONInput>
    deleteMany?: Enumerable<STOREScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FLAGCreateNestedOneWithoutSTOREInput = {
    create?: XOR<FLAGCreateWithoutSTOREInput, FLAGUncheckedCreateWithoutSTOREInput>
    connectOrCreate?: FLAGCreateOrConnectWithoutSTOREInput
    connect?: FLAGWhereUniqueInput
  }

  export type CHANNELCreateNestedOneWithoutSTOREInput = {
    create?: XOR<CHANNELCreateWithoutSTOREInput, CHANNELUncheckedCreateWithoutSTOREInput>
    connectOrCreate?: CHANNELCreateOrConnectWithoutSTOREInput
    connect?: CHANNELWhereUniqueInput
  }

  export type TYPECreateNestedOneWithoutSTOREInput = {
    create?: XOR<TYPECreateWithoutSTOREInput, TYPEUncheckedCreateWithoutSTOREInput>
    connectOrCreate?: TYPECreateOrConnectWithoutSTOREInput
    connect?: TYPEWhereUniqueInput
  }

  export type SUPPORT_LEADERCreateNestedOneWithoutSTOREInput = {
    create?: XOR<SUPPORT_LEADERCreateWithoutSTOREInput, SUPPORT_LEADERUncheckedCreateWithoutSTOREInput>
    connectOrCreate?: SUPPORT_LEADERCreateOrConnectWithoutSTOREInput
    connect?: SUPPORT_LEADERWhereUniqueInput
  }

  export type SUPPORTCreateNestedOneWithoutSTOREInput = {
    create?: XOR<SUPPORTCreateWithoutSTOREInput, SUPPORTUncheckedCreateWithoutSTOREInput>
    connectOrCreate?: SUPPORTCreateOrConnectWithoutSTOREInput
    connect?: SUPPORTWhereUniqueInput
  }

  export type REGIONCreateNestedOneWithoutSTOREInput = {
    create?: XOR<REGIONCreateWithoutSTOREInput, REGIONUncheckedCreateWithoutSTOREInput>
    connectOrCreate?: REGIONCreateOrConnectWithoutSTOREInput
    connect?: REGIONWhereUniqueInput
  }

  export type FLAGUpdateOneRequiredWithoutSTORENestedInput = {
    create?: XOR<FLAGCreateWithoutSTOREInput, FLAGUncheckedCreateWithoutSTOREInput>
    connectOrCreate?: FLAGCreateOrConnectWithoutSTOREInput
    upsert?: FLAGUpsertWithoutSTOREInput
    connect?: FLAGWhereUniqueInput
    update?: XOR<FLAGUpdateWithoutSTOREInput, FLAGUncheckedUpdateWithoutSTOREInput>
  }

  export type CHANNELUpdateOneRequiredWithoutSTORENestedInput = {
    create?: XOR<CHANNELCreateWithoutSTOREInput, CHANNELUncheckedCreateWithoutSTOREInput>
    connectOrCreate?: CHANNELCreateOrConnectWithoutSTOREInput
    upsert?: CHANNELUpsertWithoutSTOREInput
    connect?: CHANNELWhereUniqueInput
    update?: XOR<CHANNELUpdateWithoutSTOREInput, CHANNELUncheckedUpdateWithoutSTOREInput>
  }

  export type TYPEUpdateOneRequiredWithoutSTORENestedInput = {
    create?: XOR<TYPECreateWithoutSTOREInput, TYPEUncheckedCreateWithoutSTOREInput>
    connectOrCreate?: TYPECreateOrConnectWithoutSTOREInput
    upsert?: TYPEUpsertWithoutSTOREInput
    connect?: TYPEWhereUniqueInput
    update?: XOR<TYPEUpdateWithoutSTOREInput, TYPEUncheckedUpdateWithoutSTOREInput>
  }

  export type SUPPORT_LEADERUpdateOneRequiredWithoutSTORENestedInput = {
    create?: XOR<SUPPORT_LEADERCreateWithoutSTOREInput, SUPPORT_LEADERUncheckedCreateWithoutSTOREInput>
    connectOrCreate?: SUPPORT_LEADERCreateOrConnectWithoutSTOREInput
    upsert?: SUPPORT_LEADERUpsertWithoutSTOREInput
    connect?: SUPPORT_LEADERWhereUniqueInput
    update?: XOR<SUPPORT_LEADERUpdateWithoutSTOREInput, SUPPORT_LEADERUncheckedUpdateWithoutSTOREInput>
  }

  export type SUPPORTUpdateOneRequiredWithoutSTORENestedInput = {
    create?: XOR<SUPPORTCreateWithoutSTOREInput, SUPPORTUncheckedCreateWithoutSTOREInput>
    connectOrCreate?: SUPPORTCreateOrConnectWithoutSTOREInput
    upsert?: SUPPORTUpsertWithoutSTOREInput
    connect?: SUPPORTWhereUniqueInput
    update?: XOR<SUPPORTUpdateWithoutSTOREInput, SUPPORTUncheckedUpdateWithoutSTOREInput>
  }

  export type REGIONUpdateOneRequiredWithoutSTORENestedInput = {
    create?: XOR<REGIONCreateWithoutSTOREInput, REGIONUncheckedCreateWithoutSTOREInput>
    connectOrCreate?: REGIONCreateOrConnectWithoutSTOREInput
    upsert?: REGIONUpsertWithoutSTOREInput
    connect?: REGIONWhereUniqueInput
    update?: XOR<REGIONUpdateWithoutSTOREInput, REGIONUncheckedUpdateWithoutSTOREInput>
  }

  export type STORECreateNestedManyWithoutSUPPORTInput = {
    create?: XOR<Enumerable<STORECreateWithoutSUPPORTInput>, Enumerable<STOREUncheckedCreateWithoutSUPPORTInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutSUPPORTInput>
    connect?: Enumerable<STOREWhereUniqueInput>
  }

  export type STOREUncheckedCreateNestedManyWithoutSUPPORTInput = {
    create?: XOR<Enumerable<STORECreateWithoutSUPPORTInput>, Enumerable<STOREUncheckedCreateWithoutSUPPORTInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutSUPPORTInput>
    connect?: Enumerable<STOREWhereUniqueInput>
  }

  export type STOREUpdateManyWithoutSUPPORTNestedInput = {
    create?: XOR<Enumerable<STORECreateWithoutSUPPORTInput>, Enumerable<STOREUncheckedCreateWithoutSUPPORTInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutSUPPORTInput>
    upsert?: Enumerable<STOREUpsertWithWhereUniqueWithoutSUPPORTInput>
    set?: Enumerable<STOREWhereUniqueInput>
    disconnect?: Enumerable<STOREWhereUniqueInput>
    delete?: Enumerable<STOREWhereUniqueInput>
    connect?: Enumerable<STOREWhereUniqueInput>
    update?: Enumerable<STOREUpdateWithWhereUniqueWithoutSUPPORTInput>
    updateMany?: Enumerable<STOREUpdateManyWithWhereWithoutSUPPORTInput>
    deleteMany?: Enumerable<STOREScalarWhereInput>
  }

  export type STOREUncheckedUpdateManyWithoutSUPPORTNestedInput = {
    create?: XOR<Enumerable<STORECreateWithoutSUPPORTInput>, Enumerable<STOREUncheckedCreateWithoutSUPPORTInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutSUPPORTInput>
    upsert?: Enumerable<STOREUpsertWithWhereUniqueWithoutSUPPORTInput>
    set?: Enumerable<STOREWhereUniqueInput>
    disconnect?: Enumerable<STOREWhereUniqueInput>
    delete?: Enumerable<STOREWhereUniqueInput>
    connect?: Enumerable<STOREWhereUniqueInput>
    update?: Enumerable<STOREUpdateWithWhereUniqueWithoutSUPPORTInput>
    updateMany?: Enumerable<STOREUpdateManyWithWhereWithoutSUPPORTInput>
    deleteMany?: Enumerable<STOREScalarWhereInput>
  }

  export type STORECreateNestedManyWithoutSUPPORT_LEADERInput = {
    create?: XOR<Enumerable<STORECreateWithoutSUPPORT_LEADERInput>, Enumerable<STOREUncheckedCreateWithoutSUPPORT_LEADERInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutSUPPORT_LEADERInput>
    connect?: Enumerable<STOREWhereUniqueInput>
  }

  export type STOREUncheckedCreateNestedManyWithoutSUPPORT_LEADERInput = {
    create?: XOR<Enumerable<STORECreateWithoutSUPPORT_LEADERInput>, Enumerable<STOREUncheckedCreateWithoutSUPPORT_LEADERInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutSUPPORT_LEADERInput>
    connect?: Enumerable<STOREWhereUniqueInput>
  }

  export type STOREUpdateManyWithoutSUPPORT_LEADERNestedInput = {
    create?: XOR<Enumerable<STORECreateWithoutSUPPORT_LEADERInput>, Enumerable<STOREUncheckedCreateWithoutSUPPORT_LEADERInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutSUPPORT_LEADERInput>
    upsert?: Enumerable<STOREUpsertWithWhereUniqueWithoutSUPPORT_LEADERInput>
    set?: Enumerable<STOREWhereUniqueInput>
    disconnect?: Enumerable<STOREWhereUniqueInput>
    delete?: Enumerable<STOREWhereUniqueInput>
    connect?: Enumerable<STOREWhereUniqueInput>
    update?: Enumerable<STOREUpdateWithWhereUniqueWithoutSUPPORT_LEADERInput>
    updateMany?: Enumerable<STOREUpdateManyWithWhereWithoutSUPPORT_LEADERInput>
    deleteMany?: Enumerable<STOREScalarWhereInput>
  }

  export type STOREUncheckedUpdateManyWithoutSUPPORT_LEADERNestedInput = {
    create?: XOR<Enumerable<STORECreateWithoutSUPPORT_LEADERInput>, Enumerable<STOREUncheckedCreateWithoutSUPPORT_LEADERInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutSUPPORT_LEADERInput>
    upsert?: Enumerable<STOREUpsertWithWhereUniqueWithoutSUPPORT_LEADERInput>
    set?: Enumerable<STOREWhereUniqueInput>
    disconnect?: Enumerable<STOREWhereUniqueInput>
    delete?: Enumerable<STOREWhereUniqueInput>
    connect?: Enumerable<STOREWhereUniqueInput>
    update?: Enumerable<STOREUpdateWithWhereUniqueWithoutSUPPORT_LEADERInput>
    updateMany?: Enumerable<STOREUpdateManyWithWhereWithoutSUPPORT_LEADERInput>
    deleteMany?: Enumerable<STOREScalarWhereInput>
  }

  export type STORECreateNestedManyWithoutTYPEInput = {
    create?: XOR<Enumerable<STORECreateWithoutTYPEInput>, Enumerable<STOREUncheckedCreateWithoutTYPEInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutTYPEInput>
    connect?: Enumerable<STOREWhereUniqueInput>
  }

  export type STOREUncheckedCreateNestedManyWithoutTYPEInput = {
    create?: XOR<Enumerable<STORECreateWithoutTYPEInput>, Enumerable<STOREUncheckedCreateWithoutTYPEInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutTYPEInput>
    connect?: Enumerable<STOREWhereUniqueInput>
  }

  export type STOREUpdateManyWithoutTYPENestedInput = {
    create?: XOR<Enumerable<STORECreateWithoutTYPEInput>, Enumerable<STOREUncheckedCreateWithoutTYPEInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutTYPEInput>
    upsert?: Enumerable<STOREUpsertWithWhereUniqueWithoutTYPEInput>
    set?: Enumerable<STOREWhereUniqueInput>
    disconnect?: Enumerable<STOREWhereUniqueInput>
    delete?: Enumerable<STOREWhereUniqueInput>
    connect?: Enumerable<STOREWhereUniqueInput>
    update?: Enumerable<STOREUpdateWithWhereUniqueWithoutTYPEInput>
    updateMany?: Enumerable<STOREUpdateManyWithWhereWithoutTYPEInput>
    deleteMany?: Enumerable<STOREScalarWhereInput>
  }

  export type STOREUncheckedUpdateManyWithoutTYPENestedInput = {
    create?: XOR<Enumerable<STORECreateWithoutTYPEInput>, Enumerable<STOREUncheckedCreateWithoutTYPEInput>>
    connectOrCreate?: Enumerable<STORECreateOrConnectWithoutTYPEInput>
    upsert?: Enumerable<STOREUpsertWithWhereUniqueWithoutTYPEInput>
    set?: Enumerable<STOREWhereUniqueInput>
    disconnect?: Enumerable<STOREWhereUniqueInput>
    delete?: Enumerable<STOREWhereUniqueInput>
    connect?: Enumerable<STOREWhereUniqueInput>
    update?: Enumerable<STOREUpdateWithWhereUniqueWithoutTYPEInput>
    updateMany?: Enumerable<STOREUpdateManyWithWhereWithoutTYPEInput>
    deleteMany?: Enumerable<STOREScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type STORECreateWithoutCHANNELInput = {
    STORE_NAME?: string | null
    STORE_ID?: string | null
    STORE_ADDRESS?: string | null
    STORE_NEIG?: string | null
    STORE_CITY?: string | null
    STORE_STATE?: string | null
    STORE_ZIP?: string | null
    STORE_PHONE?: string | null
    FLAG: FLAGCreateNestedOneWithoutSTOREInput
    TYPE: TYPECreateNestedOneWithoutSTOREInput
    SUPPORT_LEADER: SUPPORT_LEADERCreateNestedOneWithoutSTOREInput
    SUPPORT: SUPPORTCreateNestedOneWithoutSTOREInput
    REGION: REGIONCreateNestedOneWithoutSTOREInput
  }

  export type STOREUncheckedCreateWithoutCHANNELInput = {
    STORE_KEY?: number
    STORE_NAME?: string | null
    STORE_ID?: string | null
    STORE_ADDRESS?: string | null
    STORE_NEIG?: string | null
    STORE_CITY?: string | null
    STORE_STATE?: string | null
    STORE_ZIP?: string | null
    STORE_PHONE?: string | null
    STORE_REGION: number
    STORE_SUPPORT: number
    STORE_LEADER: number
    STORE_TYPE: number
    STORE_FLAG: number
  }

  export type STORECreateOrConnectWithoutCHANNELInput = {
    where: STOREWhereUniqueInput
    create: XOR<STORECreateWithoutCHANNELInput, STOREUncheckedCreateWithoutCHANNELInput>
  }

  export type STOREUpsertWithWhereUniqueWithoutCHANNELInput = {
    where: STOREWhereUniqueInput
    update: XOR<STOREUpdateWithoutCHANNELInput, STOREUncheckedUpdateWithoutCHANNELInput>
    create: XOR<STORECreateWithoutCHANNELInput, STOREUncheckedCreateWithoutCHANNELInput>
  }

  export type STOREUpdateWithWhereUniqueWithoutCHANNELInput = {
    where: STOREWhereUniqueInput
    data: XOR<STOREUpdateWithoutCHANNELInput, STOREUncheckedUpdateWithoutCHANNELInput>
  }

  export type STOREUpdateManyWithWhereWithoutCHANNELInput = {
    where: STOREScalarWhereInput
    data: XOR<STOREUpdateManyMutationInput, STOREUncheckedUpdateManyWithoutSTOREInput>
  }

  export type STOREScalarWhereInput = {
    AND?: Enumerable<STOREScalarWhereInput>
    OR?: Enumerable<STOREScalarWhereInput>
    NOT?: Enumerable<STOREScalarWhereInput>
    STORE_KEY?: IntFilter | number
    STORE_NAME?: StringNullableFilter | string | null
    STORE_ID?: StringNullableFilter | string | null
    STORE_ADDRESS?: StringNullableFilter | string | null
    STORE_NEIG?: StringNullableFilter | string | null
    STORE_CITY?: StringNullableFilter | string | null
    STORE_STATE?: StringNullableFilter | string | null
    STORE_ZIP?: StringNullableFilter | string | null
    STORE_PHONE?: StringNullableFilter | string | null
    STORE_REGION?: IntFilter | number
    STORE_SUPPORT?: IntFilter | number
    STORE_LEADER?: IntFilter | number
    STORE_TYPE?: IntFilter | number
    STORE_CHANNEL?: IntFilter | number
    STORE_FLAG?: IntFilter | number
  }

  export type STORECreateWithoutFLAGInput = {
    STORE_NAME?: string | null
    STORE_ID?: string | null
    STORE_ADDRESS?: string | null
    STORE_NEIG?: string | null
    STORE_CITY?: string | null
    STORE_STATE?: string | null
    STORE_ZIP?: string | null
    STORE_PHONE?: string | null
    CHANNEL: CHANNELCreateNestedOneWithoutSTOREInput
    TYPE: TYPECreateNestedOneWithoutSTOREInput
    SUPPORT_LEADER: SUPPORT_LEADERCreateNestedOneWithoutSTOREInput
    SUPPORT: SUPPORTCreateNestedOneWithoutSTOREInput
    REGION: REGIONCreateNestedOneWithoutSTOREInput
  }

  export type STOREUncheckedCreateWithoutFLAGInput = {
    STORE_KEY?: number
    STORE_NAME?: string | null
    STORE_ID?: string | null
    STORE_ADDRESS?: string | null
    STORE_NEIG?: string | null
    STORE_CITY?: string | null
    STORE_STATE?: string | null
    STORE_ZIP?: string | null
    STORE_PHONE?: string | null
    STORE_REGION: number
    STORE_SUPPORT: number
    STORE_LEADER: number
    STORE_TYPE: number
    STORE_CHANNEL: number
  }

  export type STORECreateOrConnectWithoutFLAGInput = {
    where: STOREWhereUniqueInput
    create: XOR<STORECreateWithoutFLAGInput, STOREUncheckedCreateWithoutFLAGInput>
  }

  export type STOREUpsertWithWhereUniqueWithoutFLAGInput = {
    where: STOREWhereUniqueInput
    update: XOR<STOREUpdateWithoutFLAGInput, STOREUncheckedUpdateWithoutFLAGInput>
    create: XOR<STORECreateWithoutFLAGInput, STOREUncheckedCreateWithoutFLAGInput>
  }

  export type STOREUpdateWithWhereUniqueWithoutFLAGInput = {
    where: STOREWhereUniqueInput
    data: XOR<STOREUpdateWithoutFLAGInput, STOREUncheckedUpdateWithoutFLAGInput>
  }

  export type STOREUpdateManyWithWhereWithoutFLAGInput = {
    where: STOREScalarWhereInput
    data: XOR<STOREUpdateManyMutationInput, STOREUncheckedUpdateManyWithoutSTOREInput>
  }

  export type STORECreateWithoutREGIONInput = {
    STORE_NAME?: string | null
    STORE_ID?: string | null
    STORE_ADDRESS?: string | null
    STORE_NEIG?: string | null
    STORE_CITY?: string | null
    STORE_STATE?: string | null
    STORE_ZIP?: string | null
    STORE_PHONE?: string | null
    FLAG: FLAGCreateNestedOneWithoutSTOREInput
    CHANNEL: CHANNELCreateNestedOneWithoutSTOREInput
    TYPE: TYPECreateNestedOneWithoutSTOREInput
    SUPPORT_LEADER: SUPPORT_LEADERCreateNestedOneWithoutSTOREInput
    SUPPORT: SUPPORTCreateNestedOneWithoutSTOREInput
  }

  export type STOREUncheckedCreateWithoutREGIONInput = {
    STORE_KEY?: number
    STORE_NAME?: string | null
    STORE_ID?: string | null
    STORE_ADDRESS?: string | null
    STORE_NEIG?: string | null
    STORE_CITY?: string | null
    STORE_STATE?: string | null
    STORE_ZIP?: string | null
    STORE_PHONE?: string | null
    STORE_SUPPORT: number
    STORE_LEADER: number
    STORE_TYPE: number
    STORE_CHANNEL: number
    STORE_FLAG: number
  }

  export type STORECreateOrConnectWithoutREGIONInput = {
    where: STOREWhereUniqueInput
    create: XOR<STORECreateWithoutREGIONInput, STOREUncheckedCreateWithoutREGIONInput>
  }

  export type STOREUpsertWithWhereUniqueWithoutREGIONInput = {
    where: STOREWhereUniqueInput
    update: XOR<STOREUpdateWithoutREGIONInput, STOREUncheckedUpdateWithoutREGIONInput>
    create: XOR<STORECreateWithoutREGIONInput, STOREUncheckedCreateWithoutREGIONInput>
  }

  export type STOREUpdateWithWhereUniqueWithoutREGIONInput = {
    where: STOREWhereUniqueInput
    data: XOR<STOREUpdateWithoutREGIONInput, STOREUncheckedUpdateWithoutREGIONInput>
  }

  export type STOREUpdateManyWithWhereWithoutREGIONInput = {
    where: STOREScalarWhereInput
    data: XOR<STOREUpdateManyMutationInput, STOREUncheckedUpdateManyWithoutSTOREInput>
  }

  export type FLAGCreateWithoutSTOREInput = {
    NAME: string
  }

  export type FLAGUncheckedCreateWithoutSTOREInput = {
    ID?: number
    NAME: string
  }

  export type FLAGCreateOrConnectWithoutSTOREInput = {
    where: FLAGWhereUniqueInput
    create: XOR<FLAGCreateWithoutSTOREInput, FLAGUncheckedCreateWithoutSTOREInput>
  }

  export type CHANNELCreateWithoutSTOREInput = {
    NAME: string
    CHANNEL_NUMBER: string
  }

  export type CHANNELUncheckedCreateWithoutSTOREInput = {
    ID?: number
    NAME: string
    CHANNEL_NUMBER: string
  }

  export type CHANNELCreateOrConnectWithoutSTOREInput = {
    where: CHANNELWhereUniqueInput
    create: XOR<CHANNELCreateWithoutSTOREInput, CHANNELUncheckedCreateWithoutSTOREInput>
  }

  export type TYPECreateWithoutSTOREInput = {
    NAME: string
  }

  export type TYPEUncheckedCreateWithoutSTOREInput = {
    ID?: number
    NAME: string
  }

  export type TYPECreateOrConnectWithoutSTOREInput = {
    where: TYPEWhereUniqueInput
    create: XOR<TYPECreateWithoutSTOREInput, TYPEUncheckedCreateWithoutSTOREInput>
  }

  export type SUPPORT_LEADERCreateWithoutSTOREInput = {
    NAME: string
  }

  export type SUPPORT_LEADERUncheckedCreateWithoutSTOREInput = {
    ID?: number
    NAME: string
  }

  export type SUPPORT_LEADERCreateOrConnectWithoutSTOREInput = {
    where: SUPPORT_LEADERWhereUniqueInput
    create: XOR<SUPPORT_LEADERCreateWithoutSTOREInput, SUPPORT_LEADERUncheckedCreateWithoutSTOREInput>
  }

  export type SUPPORTCreateWithoutSTOREInput = {
    NAME: string
  }

  export type SUPPORTUncheckedCreateWithoutSTOREInput = {
    ID?: number
    NAME: string
  }

  export type SUPPORTCreateOrConnectWithoutSTOREInput = {
    where: SUPPORTWhereUniqueInput
    create: XOR<SUPPORTCreateWithoutSTOREInput, SUPPORTUncheckedCreateWithoutSTOREInput>
  }

  export type REGIONCreateWithoutSTOREInput = {
    NAME: string
  }

  export type REGIONUncheckedCreateWithoutSTOREInput = {
    ID?: number
    NAME: string
  }

  export type REGIONCreateOrConnectWithoutSTOREInput = {
    where: REGIONWhereUniqueInput
    create: XOR<REGIONCreateWithoutSTOREInput, REGIONUncheckedCreateWithoutSTOREInput>
  }

  export type FLAGUpsertWithoutSTOREInput = {
    update: XOR<FLAGUpdateWithoutSTOREInput, FLAGUncheckedUpdateWithoutSTOREInput>
    create: XOR<FLAGCreateWithoutSTOREInput, FLAGUncheckedCreateWithoutSTOREInput>
  }

  export type FLAGUpdateWithoutSTOREInput = {
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type FLAGUncheckedUpdateWithoutSTOREInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type CHANNELUpsertWithoutSTOREInput = {
    update: XOR<CHANNELUpdateWithoutSTOREInput, CHANNELUncheckedUpdateWithoutSTOREInput>
    create: XOR<CHANNELCreateWithoutSTOREInput, CHANNELUncheckedCreateWithoutSTOREInput>
  }

  export type CHANNELUpdateWithoutSTOREInput = {
    NAME?: StringFieldUpdateOperationsInput | string
    CHANNEL_NUMBER?: StringFieldUpdateOperationsInput | string
  }

  export type CHANNELUncheckedUpdateWithoutSTOREInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
    CHANNEL_NUMBER?: StringFieldUpdateOperationsInput | string
  }

  export type TYPEUpsertWithoutSTOREInput = {
    update: XOR<TYPEUpdateWithoutSTOREInput, TYPEUncheckedUpdateWithoutSTOREInput>
    create: XOR<TYPECreateWithoutSTOREInput, TYPEUncheckedCreateWithoutSTOREInput>
  }

  export type TYPEUpdateWithoutSTOREInput = {
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type TYPEUncheckedUpdateWithoutSTOREInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type SUPPORT_LEADERUpsertWithoutSTOREInput = {
    update: XOR<SUPPORT_LEADERUpdateWithoutSTOREInput, SUPPORT_LEADERUncheckedUpdateWithoutSTOREInput>
    create: XOR<SUPPORT_LEADERCreateWithoutSTOREInput, SUPPORT_LEADERUncheckedCreateWithoutSTOREInput>
  }

  export type SUPPORT_LEADERUpdateWithoutSTOREInput = {
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type SUPPORT_LEADERUncheckedUpdateWithoutSTOREInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type SUPPORTUpsertWithoutSTOREInput = {
    update: XOR<SUPPORTUpdateWithoutSTOREInput, SUPPORTUncheckedUpdateWithoutSTOREInput>
    create: XOR<SUPPORTCreateWithoutSTOREInput, SUPPORTUncheckedCreateWithoutSTOREInput>
  }

  export type SUPPORTUpdateWithoutSTOREInput = {
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type SUPPORTUncheckedUpdateWithoutSTOREInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type REGIONUpsertWithoutSTOREInput = {
    update: XOR<REGIONUpdateWithoutSTOREInput, REGIONUncheckedUpdateWithoutSTOREInput>
    create: XOR<REGIONCreateWithoutSTOREInput, REGIONUncheckedCreateWithoutSTOREInput>
  }

  export type REGIONUpdateWithoutSTOREInput = {
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type REGIONUncheckedUpdateWithoutSTOREInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
  }

  export type STORECreateWithoutSUPPORTInput = {
    STORE_NAME?: string | null
    STORE_ID?: string | null
    STORE_ADDRESS?: string | null
    STORE_NEIG?: string | null
    STORE_CITY?: string | null
    STORE_STATE?: string | null
    STORE_ZIP?: string | null
    STORE_PHONE?: string | null
    FLAG: FLAGCreateNestedOneWithoutSTOREInput
    CHANNEL: CHANNELCreateNestedOneWithoutSTOREInput
    TYPE: TYPECreateNestedOneWithoutSTOREInput
    SUPPORT_LEADER: SUPPORT_LEADERCreateNestedOneWithoutSTOREInput
    REGION: REGIONCreateNestedOneWithoutSTOREInput
  }

  export type STOREUncheckedCreateWithoutSUPPORTInput = {
    STORE_KEY?: number
    STORE_NAME?: string | null
    STORE_ID?: string | null
    STORE_ADDRESS?: string | null
    STORE_NEIG?: string | null
    STORE_CITY?: string | null
    STORE_STATE?: string | null
    STORE_ZIP?: string | null
    STORE_PHONE?: string | null
    STORE_REGION: number
    STORE_LEADER: number
    STORE_TYPE: number
    STORE_CHANNEL: number
    STORE_FLAG: number
  }

  export type STORECreateOrConnectWithoutSUPPORTInput = {
    where: STOREWhereUniqueInput
    create: XOR<STORECreateWithoutSUPPORTInput, STOREUncheckedCreateWithoutSUPPORTInput>
  }

  export type STOREUpsertWithWhereUniqueWithoutSUPPORTInput = {
    where: STOREWhereUniqueInput
    update: XOR<STOREUpdateWithoutSUPPORTInput, STOREUncheckedUpdateWithoutSUPPORTInput>
    create: XOR<STORECreateWithoutSUPPORTInput, STOREUncheckedCreateWithoutSUPPORTInput>
  }

  export type STOREUpdateWithWhereUniqueWithoutSUPPORTInput = {
    where: STOREWhereUniqueInput
    data: XOR<STOREUpdateWithoutSUPPORTInput, STOREUncheckedUpdateWithoutSUPPORTInput>
  }

  export type STOREUpdateManyWithWhereWithoutSUPPORTInput = {
    where: STOREScalarWhereInput
    data: XOR<STOREUpdateManyMutationInput, STOREUncheckedUpdateManyWithoutSTOREInput>
  }

  export type STORECreateWithoutSUPPORT_LEADERInput = {
    STORE_NAME?: string | null
    STORE_ID?: string | null
    STORE_ADDRESS?: string | null
    STORE_NEIG?: string | null
    STORE_CITY?: string | null
    STORE_STATE?: string | null
    STORE_ZIP?: string | null
    STORE_PHONE?: string | null
    FLAG: FLAGCreateNestedOneWithoutSTOREInput
    CHANNEL: CHANNELCreateNestedOneWithoutSTOREInput
    TYPE: TYPECreateNestedOneWithoutSTOREInput
    SUPPORT: SUPPORTCreateNestedOneWithoutSTOREInput
    REGION: REGIONCreateNestedOneWithoutSTOREInput
  }

  export type STOREUncheckedCreateWithoutSUPPORT_LEADERInput = {
    STORE_KEY?: number
    STORE_NAME?: string | null
    STORE_ID?: string | null
    STORE_ADDRESS?: string | null
    STORE_NEIG?: string | null
    STORE_CITY?: string | null
    STORE_STATE?: string | null
    STORE_ZIP?: string | null
    STORE_PHONE?: string | null
    STORE_REGION: number
    STORE_SUPPORT: number
    STORE_TYPE: number
    STORE_CHANNEL: number
    STORE_FLAG: number
  }

  export type STORECreateOrConnectWithoutSUPPORT_LEADERInput = {
    where: STOREWhereUniqueInput
    create: XOR<STORECreateWithoutSUPPORT_LEADERInput, STOREUncheckedCreateWithoutSUPPORT_LEADERInput>
  }

  export type STOREUpsertWithWhereUniqueWithoutSUPPORT_LEADERInput = {
    where: STOREWhereUniqueInput
    update: XOR<STOREUpdateWithoutSUPPORT_LEADERInput, STOREUncheckedUpdateWithoutSUPPORT_LEADERInput>
    create: XOR<STORECreateWithoutSUPPORT_LEADERInput, STOREUncheckedCreateWithoutSUPPORT_LEADERInput>
  }

  export type STOREUpdateWithWhereUniqueWithoutSUPPORT_LEADERInput = {
    where: STOREWhereUniqueInput
    data: XOR<STOREUpdateWithoutSUPPORT_LEADERInput, STOREUncheckedUpdateWithoutSUPPORT_LEADERInput>
  }

  export type STOREUpdateManyWithWhereWithoutSUPPORT_LEADERInput = {
    where: STOREScalarWhereInput
    data: XOR<STOREUpdateManyMutationInput, STOREUncheckedUpdateManyWithoutSTOREInput>
  }

  export type STORECreateWithoutTYPEInput = {
    STORE_NAME?: string | null
    STORE_ID?: string | null
    STORE_ADDRESS?: string | null
    STORE_NEIG?: string | null
    STORE_CITY?: string | null
    STORE_STATE?: string | null
    STORE_ZIP?: string | null
    STORE_PHONE?: string | null
    FLAG: FLAGCreateNestedOneWithoutSTOREInput
    CHANNEL: CHANNELCreateNestedOneWithoutSTOREInput
    SUPPORT_LEADER: SUPPORT_LEADERCreateNestedOneWithoutSTOREInput
    SUPPORT: SUPPORTCreateNestedOneWithoutSTOREInput
    REGION: REGIONCreateNestedOneWithoutSTOREInput
  }

  export type STOREUncheckedCreateWithoutTYPEInput = {
    STORE_KEY?: number
    STORE_NAME?: string | null
    STORE_ID?: string | null
    STORE_ADDRESS?: string | null
    STORE_NEIG?: string | null
    STORE_CITY?: string | null
    STORE_STATE?: string | null
    STORE_ZIP?: string | null
    STORE_PHONE?: string | null
    STORE_REGION: number
    STORE_SUPPORT: number
    STORE_LEADER: number
    STORE_CHANNEL: number
    STORE_FLAG: number
  }

  export type STORECreateOrConnectWithoutTYPEInput = {
    where: STOREWhereUniqueInput
    create: XOR<STORECreateWithoutTYPEInput, STOREUncheckedCreateWithoutTYPEInput>
  }

  export type STOREUpsertWithWhereUniqueWithoutTYPEInput = {
    where: STOREWhereUniqueInput
    update: XOR<STOREUpdateWithoutTYPEInput, STOREUncheckedUpdateWithoutTYPEInput>
    create: XOR<STORECreateWithoutTYPEInput, STOREUncheckedCreateWithoutTYPEInput>
  }

  export type STOREUpdateWithWhereUniqueWithoutTYPEInput = {
    where: STOREWhereUniqueInput
    data: XOR<STOREUpdateWithoutTYPEInput, STOREUncheckedUpdateWithoutTYPEInput>
  }

  export type STOREUpdateManyWithWhereWithoutTYPEInput = {
    where: STOREScalarWhereInput
    data: XOR<STOREUpdateManyMutationInput, STOREUncheckedUpdateManyWithoutSTOREInput>
  }

  export type STOREUpdateWithoutCHANNELInput = {
    STORE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_NEIG?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_CITY?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_STATE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ZIP?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    FLAG?: FLAGUpdateOneRequiredWithoutSTORENestedInput
    TYPE?: TYPEUpdateOneRequiredWithoutSTORENestedInput
    SUPPORT_LEADER?: SUPPORT_LEADERUpdateOneRequiredWithoutSTORENestedInput
    SUPPORT?: SUPPORTUpdateOneRequiredWithoutSTORENestedInput
    REGION?: REGIONUpdateOneRequiredWithoutSTORENestedInput
  }

  export type STOREUncheckedUpdateWithoutCHANNELInput = {
    STORE_KEY?: IntFieldUpdateOperationsInput | number
    STORE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_NEIG?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_CITY?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_STATE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ZIP?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_REGION?: IntFieldUpdateOperationsInput | number
    STORE_SUPPORT?: IntFieldUpdateOperationsInput | number
    STORE_LEADER?: IntFieldUpdateOperationsInput | number
    STORE_TYPE?: IntFieldUpdateOperationsInput | number
    STORE_FLAG?: IntFieldUpdateOperationsInput | number
  }

  export type STOREUncheckedUpdateManyWithoutSTOREInput = {
    STORE_KEY?: IntFieldUpdateOperationsInput | number
    STORE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_NEIG?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_CITY?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_STATE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ZIP?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_REGION?: IntFieldUpdateOperationsInput | number
    STORE_SUPPORT?: IntFieldUpdateOperationsInput | number
    STORE_LEADER?: IntFieldUpdateOperationsInput | number
    STORE_TYPE?: IntFieldUpdateOperationsInput | number
    STORE_FLAG?: IntFieldUpdateOperationsInput | number
  }

  export type STOREUpdateWithoutFLAGInput = {
    STORE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_NEIG?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_CITY?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_STATE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ZIP?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    CHANNEL?: CHANNELUpdateOneRequiredWithoutSTORENestedInput
    TYPE?: TYPEUpdateOneRequiredWithoutSTORENestedInput
    SUPPORT_LEADER?: SUPPORT_LEADERUpdateOneRequiredWithoutSTORENestedInput
    SUPPORT?: SUPPORTUpdateOneRequiredWithoutSTORENestedInput
    REGION?: REGIONUpdateOneRequiredWithoutSTORENestedInput
  }

  export type STOREUncheckedUpdateWithoutFLAGInput = {
    STORE_KEY?: IntFieldUpdateOperationsInput | number
    STORE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_NEIG?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_CITY?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_STATE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ZIP?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_REGION?: IntFieldUpdateOperationsInput | number
    STORE_SUPPORT?: IntFieldUpdateOperationsInput | number
    STORE_LEADER?: IntFieldUpdateOperationsInput | number
    STORE_TYPE?: IntFieldUpdateOperationsInput | number
    STORE_CHANNEL?: IntFieldUpdateOperationsInput | number
  }

  export type STOREUpdateWithoutREGIONInput = {
    STORE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_NEIG?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_CITY?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_STATE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ZIP?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    FLAG?: FLAGUpdateOneRequiredWithoutSTORENestedInput
    CHANNEL?: CHANNELUpdateOneRequiredWithoutSTORENestedInput
    TYPE?: TYPEUpdateOneRequiredWithoutSTORENestedInput
    SUPPORT_LEADER?: SUPPORT_LEADERUpdateOneRequiredWithoutSTORENestedInput
    SUPPORT?: SUPPORTUpdateOneRequiredWithoutSTORENestedInput
  }

  export type STOREUncheckedUpdateWithoutREGIONInput = {
    STORE_KEY?: IntFieldUpdateOperationsInput | number
    STORE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_NEIG?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_CITY?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_STATE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ZIP?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_SUPPORT?: IntFieldUpdateOperationsInput | number
    STORE_LEADER?: IntFieldUpdateOperationsInput | number
    STORE_TYPE?: IntFieldUpdateOperationsInput | number
    STORE_CHANNEL?: IntFieldUpdateOperationsInput | number
    STORE_FLAG?: IntFieldUpdateOperationsInput | number
  }

  export type STOREUpdateWithoutSUPPORTInput = {
    STORE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_NEIG?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_CITY?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_STATE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ZIP?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    FLAG?: FLAGUpdateOneRequiredWithoutSTORENestedInput
    CHANNEL?: CHANNELUpdateOneRequiredWithoutSTORENestedInput
    TYPE?: TYPEUpdateOneRequiredWithoutSTORENestedInput
    SUPPORT_LEADER?: SUPPORT_LEADERUpdateOneRequiredWithoutSTORENestedInput
    REGION?: REGIONUpdateOneRequiredWithoutSTORENestedInput
  }

  export type STOREUncheckedUpdateWithoutSUPPORTInput = {
    STORE_KEY?: IntFieldUpdateOperationsInput | number
    STORE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_NEIG?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_CITY?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_STATE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ZIP?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_REGION?: IntFieldUpdateOperationsInput | number
    STORE_LEADER?: IntFieldUpdateOperationsInput | number
    STORE_TYPE?: IntFieldUpdateOperationsInput | number
    STORE_CHANNEL?: IntFieldUpdateOperationsInput | number
    STORE_FLAG?: IntFieldUpdateOperationsInput | number
  }

  export type STOREUpdateWithoutSUPPORT_LEADERInput = {
    STORE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_NEIG?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_CITY?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_STATE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ZIP?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    FLAG?: FLAGUpdateOneRequiredWithoutSTORENestedInput
    CHANNEL?: CHANNELUpdateOneRequiredWithoutSTORENestedInput
    TYPE?: TYPEUpdateOneRequiredWithoutSTORENestedInput
    SUPPORT?: SUPPORTUpdateOneRequiredWithoutSTORENestedInput
    REGION?: REGIONUpdateOneRequiredWithoutSTORENestedInput
  }

  export type STOREUncheckedUpdateWithoutSUPPORT_LEADERInput = {
    STORE_KEY?: IntFieldUpdateOperationsInput | number
    STORE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_NEIG?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_CITY?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_STATE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ZIP?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_REGION?: IntFieldUpdateOperationsInput | number
    STORE_SUPPORT?: IntFieldUpdateOperationsInput | number
    STORE_TYPE?: IntFieldUpdateOperationsInput | number
    STORE_CHANNEL?: IntFieldUpdateOperationsInput | number
    STORE_FLAG?: IntFieldUpdateOperationsInput | number
  }

  export type STOREUpdateWithoutTYPEInput = {
    STORE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_NEIG?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_CITY?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_STATE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ZIP?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    FLAG?: FLAGUpdateOneRequiredWithoutSTORENestedInput
    CHANNEL?: CHANNELUpdateOneRequiredWithoutSTORENestedInput
    SUPPORT_LEADER?: SUPPORT_LEADERUpdateOneRequiredWithoutSTORENestedInput
    SUPPORT?: SUPPORTUpdateOneRequiredWithoutSTORENestedInput
    REGION?: REGIONUpdateOneRequiredWithoutSTORENestedInput
  }

  export type STOREUncheckedUpdateWithoutTYPEInput = {
    STORE_KEY?: IntFieldUpdateOperationsInput | number
    STORE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_NEIG?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_CITY?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_STATE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_ZIP?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    STORE_REGION?: IntFieldUpdateOperationsInput | number
    STORE_SUPPORT?: IntFieldUpdateOperationsInput | number
    STORE_LEADER?: IntFieldUpdateOperationsInput | number
    STORE_CHANNEL?: IntFieldUpdateOperationsInput | number
    STORE_FLAG?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
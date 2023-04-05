
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
 * Model User
 * 
 */
export type User = {
  id: string
  username: string
  password: string
  name: string | null
  isAdmin: boolean
  permLevelID: number
  createdAt: Date
  updatedAt: Date
  token: string | null
}

/**
 * Model PermLevel
 * 
 */
export type PermLevel = {
  id: number
  level: number
  name: string
}

/**
 * Model Pages
 * 
 */
export type Pages = {
  id: number
  name: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.permLevel`: Exposes CRUD operations for the **PermLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PermLevels
    * const permLevels = await prisma.permLevel.findMany()
    * ```
    */
  get permLevel(): Prisma.PermLevelDelegate<GlobalReject>;

  /**
   * `prisma.pages`: Exposes CRUD operations for the **Pages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.pages.findMany()
    * ```
    */
  get pages(): Prisma.PagesDelegate<GlobalReject>;
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
    User: 'User',
    PermLevel: 'PermLevel',
    Pages: 'Pages'
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
   * Count Type PermLevelCountOutputType
   */


  export type PermLevelCountOutputType = {
    User: number
    Pages: number
  }

  export type PermLevelCountOutputTypeSelect = {
    User?: boolean
    Pages?: boolean
  }

  export type PermLevelCountOutputTypeGetPayload<S extends boolean | null | undefined | PermLevelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PermLevelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PermLevelCountOutputTypeArgs)
    ? PermLevelCountOutputType 
    : S extends { select: any } & (PermLevelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PermLevelCountOutputType ? PermLevelCountOutputType[P] : never
  } 
      : PermLevelCountOutputType




  // Custom InputTypes

  /**
   * PermLevelCountOutputType without action
   */
  export type PermLevelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PermLevelCountOutputType
     */
    select?: PermLevelCountOutputTypeSelect | null
  }



  /**
   * Count Type PagesCountOutputType
   */


  export type PagesCountOutputType = {
    PermLevel: number
  }

  export type PagesCountOutputTypeSelect = {
    PermLevel?: boolean
  }

  export type PagesCountOutputTypeGetPayload<S extends boolean | null | undefined | PagesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PagesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PagesCountOutputTypeArgs)
    ? PagesCountOutputType 
    : S extends { select: any } & (PagesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PagesCountOutputType ? PagesCountOutputType[P] : never
  } 
      : PagesCountOutputType




  // Custom InputTypes

  /**
   * PagesCountOutputType without action
   */
  export type PagesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PagesCountOutputType
     */
    select?: PagesCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    permLevelID: number | null
  }

  export type UserSumAggregateOutputType = {
    permLevelID: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    name: string | null
    isAdmin: boolean | null
    permLevelID: number | null
    createdAt: Date | null
    updatedAt: Date | null
    token: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    name: string | null
    isAdmin: boolean | null
    permLevelID: number | null
    createdAt: Date | null
    updatedAt: Date | null
    token: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    isAdmin: number
    permLevelID: number
    createdAt: number
    updatedAt: number
    token: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    permLevelID?: true
  }

  export type UserSumAggregateInputType = {
    permLevelID?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    isAdmin?: true
    permLevelID?: true
    createdAt?: true
    updatedAt?: true
    token?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    isAdmin?: true
    permLevelID?: true
    createdAt?: true
    updatedAt?: true
    token?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    isAdmin?: true
    permLevelID?: true
    createdAt?: true
    updatedAt?: true
    token?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    name: string | null
    isAdmin: boolean
    permLevelID: number
    createdAt: Date
    updatedAt: Date
    token: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    isAdmin?: boolean
    permLevelID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token?: boolean
    PermLevel?: boolean | PermLevelArgs
  }


  export type UserInclude = {
    PermLevel?: boolean | PermLevelArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'PermLevel' ? PermLevelGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'PermLevel' ? PermLevelGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    PermLevel<T extends PermLevelArgs= {}>(args?: Subset<T, PermLevelArgs>): Prisma__PermLevelClient<PermLevelGetPayload<T> | Null>;

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
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model PermLevel
   */


  export type AggregatePermLevel = {
    _count: PermLevelCountAggregateOutputType | null
    _avg: PermLevelAvgAggregateOutputType | null
    _sum: PermLevelSumAggregateOutputType | null
    _min: PermLevelMinAggregateOutputType | null
    _max: PermLevelMaxAggregateOutputType | null
  }

  export type PermLevelAvgAggregateOutputType = {
    id: number | null
    level: number | null
  }

  export type PermLevelSumAggregateOutputType = {
    id: number | null
    level: number | null
  }

  export type PermLevelMinAggregateOutputType = {
    id: number | null
    level: number | null
    name: string | null
  }

  export type PermLevelMaxAggregateOutputType = {
    id: number | null
    level: number | null
    name: string | null
  }

  export type PermLevelCountAggregateOutputType = {
    id: number
    level: number
    name: number
    _all: number
  }


  export type PermLevelAvgAggregateInputType = {
    id?: true
    level?: true
  }

  export type PermLevelSumAggregateInputType = {
    id?: true
    level?: true
  }

  export type PermLevelMinAggregateInputType = {
    id?: true
    level?: true
    name?: true
  }

  export type PermLevelMaxAggregateInputType = {
    id?: true
    level?: true
    name?: true
  }

  export type PermLevelCountAggregateInputType = {
    id?: true
    level?: true
    name?: true
    _all?: true
  }

  export type PermLevelAggregateArgs = {
    /**
     * Filter which PermLevel to aggregate.
     */
    where?: PermLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermLevels to fetch.
     */
    orderBy?: Enumerable<PermLevelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PermLevels
    **/
    _count?: true | PermLevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermLevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermLevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermLevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermLevelMaxAggregateInputType
  }

  export type GetPermLevelAggregateType<T extends PermLevelAggregateArgs> = {
        [P in keyof T & keyof AggregatePermLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermLevel[P]>
      : GetScalarType<T[P], AggregatePermLevel[P]>
  }




  export type PermLevelGroupByArgs = {
    where?: PermLevelWhereInput
    orderBy?: Enumerable<PermLevelOrderByWithAggregationInput>
    by: PermLevelScalarFieldEnum[]
    having?: PermLevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermLevelCountAggregateInputType | true
    _avg?: PermLevelAvgAggregateInputType
    _sum?: PermLevelSumAggregateInputType
    _min?: PermLevelMinAggregateInputType
    _max?: PermLevelMaxAggregateInputType
  }


  export type PermLevelGroupByOutputType = {
    id: number
    level: number
    name: string
    _count: PermLevelCountAggregateOutputType | null
    _avg: PermLevelAvgAggregateOutputType | null
    _sum: PermLevelSumAggregateOutputType | null
    _min: PermLevelMinAggregateOutputType | null
    _max: PermLevelMaxAggregateOutputType | null
  }

  type GetPermLevelGroupByPayload<T extends PermLevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PermLevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermLevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermLevelGroupByOutputType[P]>
            : GetScalarType<T[P], PermLevelGroupByOutputType[P]>
        }
      >
    >


  export type PermLevelSelect = {
    id?: boolean
    level?: boolean
    name?: boolean
    User?: boolean | PermLevel$UserArgs
    Pages?: boolean | PermLevel$PagesArgs
    _count?: boolean | PermLevelCountOutputTypeArgs
  }


  export type PermLevelInclude = {
    User?: boolean | PermLevel$UserArgs
    Pages?: boolean | PermLevel$PagesArgs
    _count?: boolean | PermLevelCountOutputTypeArgs
  }

  export type PermLevelGetPayload<S extends boolean | null | undefined | PermLevelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PermLevel :
    S extends undefined ? never :
    S extends { include: any } & (PermLevelArgs | PermLevelFindManyArgs)
    ? PermLevel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'User' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'Pages' ? Array < PagesGetPayload<S['include'][P]>>  :
        P extends '_count' ? PermLevelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PermLevelArgs | PermLevelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'User' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'Pages' ? Array < PagesGetPayload<S['select'][P]>>  :
        P extends '_count' ? PermLevelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof PermLevel ? PermLevel[P] : never
  } 
      : PermLevel


  type PermLevelCountArgs = 
    Omit<PermLevelFindManyArgs, 'select' | 'include'> & {
      select?: PermLevelCountAggregateInputType | true
    }

  export interface PermLevelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PermLevel that matches the filter.
     * @param {PermLevelFindUniqueArgs} args - Arguments to find a PermLevel
     * @example
     * // Get one PermLevel
     * const permLevel = await prisma.permLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PermLevelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PermLevelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PermLevel'> extends True ? Prisma__PermLevelClient<PermLevelGetPayload<T>> : Prisma__PermLevelClient<PermLevelGetPayload<T> | null, null>

    /**
     * Find one PermLevel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PermLevelFindUniqueOrThrowArgs} args - Arguments to find a PermLevel
     * @example
     * // Get one PermLevel
     * const permLevel = await prisma.permLevel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PermLevelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PermLevelFindUniqueOrThrowArgs>
    ): Prisma__PermLevelClient<PermLevelGetPayload<T>>

    /**
     * Find the first PermLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermLevelFindFirstArgs} args - Arguments to find a PermLevel
     * @example
     * // Get one PermLevel
     * const permLevel = await prisma.permLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PermLevelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PermLevelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PermLevel'> extends True ? Prisma__PermLevelClient<PermLevelGetPayload<T>> : Prisma__PermLevelClient<PermLevelGetPayload<T> | null, null>

    /**
     * Find the first PermLevel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermLevelFindFirstOrThrowArgs} args - Arguments to find a PermLevel
     * @example
     * // Get one PermLevel
     * const permLevel = await prisma.permLevel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PermLevelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PermLevelFindFirstOrThrowArgs>
    ): Prisma__PermLevelClient<PermLevelGetPayload<T>>

    /**
     * Find zero or more PermLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermLevelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PermLevels
     * const permLevels = await prisma.permLevel.findMany()
     * 
     * // Get first 10 PermLevels
     * const permLevels = await prisma.permLevel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permLevelWithIdOnly = await prisma.permLevel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PermLevelFindManyArgs>(
      args?: SelectSubset<T, PermLevelFindManyArgs>
    ): Prisma.PrismaPromise<Array<PermLevelGetPayload<T>>>

    /**
     * Create a PermLevel.
     * @param {PermLevelCreateArgs} args - Arguments to create a PermLevel.
     * @example
     * // Create one PermLevel
     * const PermLevel = await prisma.permLevel.create({
     *   data: {
     *     // ... data to create a PermLevel
     *   }
     * })
     * 
    **/
    create<T extends PermLevelCreateArgs>(
      args: SelectSubset<T, PermLevelCreateArgs>
    ): Prisma__PermLevelClient<PermLevelGetPayload<T>>

    /**
     * Delete a PermLevel.
     * @param {PermLevelDeleteArgs} args - Arguments to delete one PermLevel.
     * @example
     * // Delete one PermLevel
     * const PermLevel = await prisma.permLevel.delete({
     *   where: {
     *     // ... filter to delete one PermLevel
     *   }
     * })
     * 
    **/
    delete<T extends PermLevelDeleteArgs>(
      args: SelectSubset<T, PermLevelDeleteArgs>
    ): Prisma__PermLevelClient<PermLevelGetPayload<T>>

    /**
     * Update one PermLevel.
     * @param {PermLevelUpdateArgs} args - Arguments to update one PermLevel.
     * @example
     * // Update one PermLevel
     * const permLevel = await prisma.permLevel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PermLevelUpdateArgs>(
      args: SelectSubset<T, PermLevelUpdateArgs>
    ): Prisma__PermLevelClient<PermLevelGetPayload<T>>

    /**
     * Delete zero or more PermLevels.
     * @param {PermLevelDeleteManyArgs} args - Arguments to filter PermLevels to delete.
     * @example
     * // Delete a few PermLevels
     * const { count } = await prisma.permLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PermLevelDeleteManyArgs>(
      args?: SelectSubset<T, PermLevelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermLevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PermLevels
     * const permLevel = await prisma.permLevel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PermLevelUpdateManyArgs>(
      args: SelectSubset<T, PermLevelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PermLevel.
     * @param {PermLevelUpsertArgs} args - Arguments to update or create a PermLevel.
     * @example
     * // Update or create a PermLevel
     * const permLevel = await prisma.permLevel.upsert({
     *   create: {
     *     // ... data to create a PermLevel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PermLevel we want to update
     *   }
     * })
    **/
    upsert<T extends PermLevelUpsertArgs>(
      args: SelectSubset<T, PermLevelUpsertArgs>
    ): Prisma__PermLevelClient<PermLevelGetPayload<T>>

    /**
     * Count the number of PermLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermLevelCountArgs} args - Arguments to filter PermLevels to count.
     * @example
     * // Count the number of PermLevels
     * const count = await prisma.permLevel.count({
     *   where: {
     *     // ... the filter for the PermLevels we want to count
     *   }
     * })
    **/
    count<T extends PermLevelCountArgs>(
      args?: Subset<T, PermLevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermLevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PermLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermLevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermLevelAggregateArgs>(args: Subset<T, PermLevelAggregateArgs>): Prisma.PrismaPromise<GetPermLevelAggregateType<T>>

    /**
     * Group by PermLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermLevelGroupByArgs} args - Group by arguments.
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
      T extends PermLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermLevelGroupByArgs['orderBy'] }
        : { orderBy?: PermLevelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PermLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PermLevelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    User<T extends PermLevel$UserArgs= {}>(args?: Subset<T, PermLevel$UserArgs>): Prisma.PrismaPromise<Array<UserGetPayload<T>>| Null>;

    Pages<T extends PermLevel$PagesArgs= {}>(args?: Subset<T, PermLevel$PagesArgs>): Prisma.PrismaPromise<Array<PagesGetPayload<T>>| Null>;

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
   * PermLevel base type for findUnique actions
   */
  export type PermLevelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PermLevel
     */
    select?: PermLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermLevelInclude | null
    /**
     * Filter, which PermLevel to fetch.
     */
    where: PermLevelWhereUniqueInput
  }

  /**
   * PermLevel findUnique
   */
  export interface PermLevelFindUniqueArgs extends PermLevelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PermLevel findUniqueOrThrow
   */
  export type PermLevelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PermLevel
     */
    select?: PermLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermLevelInclude | null
    /**
     * Filter, which PermLevel to fetch.
     */
    where: PermLevelWhereUniqueInput
  }


  /**
   * PermLevel base type for findFirst actions
   */
  export type PermLevelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PermLevel
     */
    select?: PermLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermLevelInclude | null
    /**
     * Filter, which PermLevel to fetch.
     */
    where?: PermLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermLevels to fetch.
     */
    orderBy?: Enumerable<PermLevelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermLevels.
     */
    cursor?: PermLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermLevels.
     */
    distinct?: Enumerable<PermLevelScalarFieldEnum>
  }

  /**
   * PermLevel findFirst
   */
  export interface PermLevelFindFirstArgs extends PermLevelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PermLevel findFirstOrThrow
   */
  export type PermLevelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PermLevel
     */
    select?: PermLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermLevelInclude | null
    /**
     * Filter, which PermLevel to fetch.
     */
    where?: PermLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermLevels to fetch.
     */
    orderBy?: Enumerable<PermLevelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermLevels.
     */
    cursor?: PermLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermLevels.
     */
    distinct?: Enumerable<PermLevelScalarFieldEnum>
  }


  /**
   * PermLevel findMany
   */
  export type PermLevelFindManyArgs = {
    /**
     * Select specific fields to fetch from the PermLevel
     */
    select?: PermLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermLevelInclude | null
    /**
     * Filter, which PermLevels to fetch.
     */
    where?: PermLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermLevels to fetch.
     */
    orderBy?: Enumerable<PermLevelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PermLevels.
     */
    cursor?: PermLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermLevels.
     */
    skip?: number
    distinct?: Enumerable<PermLevelScalarFieldEnum>
  }


  /**
   * PermLevel create
   */
  export type PermLevelCreateArgs = {
    /**
     * Select specific fields to fetch from the PermLevel
     */
    select?: PermLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermLevelInclude | null
    /**
     * The data needed to create a PermLevel.
     */
    data: XOR<PermLevelCreateInput, PermLevelUncheckedCreateInput>
  }


  /**
   * PermLevel update
   */
  export type PermLevelUpdateArgs = {
    /**
     * Select specific fields to fetch from the PermLevel
     */
    select?: PermLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermLevelInclude | null
    /**
     * The data needed to update a PermLevel.
     */
    data: XOR<PermLevelUpdateInput, PermLevelUncheckedUpdateInput>
    /**
     * Choose, which PermLevel to update.
     */
    where: PermLevelWhereUniqueInput
  }


  /**
   * PermLevel updateMany
   */
  export type PermLevelUpdateManyArgs = {
    /**
     * The data used to update PermLevels.
     */
    data: XOR<PermLevelUpdateManyMutationInput, PermLevelUncheckedUpdateManyInput>
    /**
     * Filter which PermLevels to update
     */
    where?: PermLevelWhereInput
  }


  /**
   * PermLevel upsert
   */
  export type PermLevelUpsertArgs = {
    /**
     * Select specific fields to fetch from the PermLevel
     */
    select?: PermLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermLevelInclude | null
    /**
     * The filter to search for the PermLevel to update in case it exists.
     */
    where: PermLevelWhereUniqueInput
    /**
     * In case the PermLevel found by the `where` argument doesn't exist, create a new PermLevel with this data.
     */
    create: XOR<PermLevelCreateInput, PermLevelUncheckedCreateInput>
    /**
     * In case the PermLevel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermLevelUpdateInput, PermLevelUncheckedUpdateInput>
  }


  /**
   * PermLevel delete
   */
  export type PermLevelDeleteArgs = {
    /**
     * Select specific fields to fetch from the PermLevel
     */
    select?: PermLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermLevelInclude | null
    /**
     * Filter which PermLevel to delete.
     */
    where: PermLevelWhereUniqueInput
  }


  /**
   * PermLevel deleteMany
   */
  export type PermLevelDeleteManyArgs = {
    /**
     * Filter which PermLevels to delete
     */
    where?: PermLevelWhereInput
  }


  /**
   * PermLevel.User
   */
  export type PermLevel$UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * PermLevel.Pages
   */
  export type PermLevel$PagesArgs = {
    /**
     * Select specific fields to fetch from the Pages
     */
    select?: PagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagesInclude | null
    where?: PagesWhereInput
    orderBy?: Enumerable<PagesOrderByWithRelationInput>
    cursor?: PagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PagesScalarFieldEnum>
  }


  /**
   * PermLevel without action
   */
  export type PermLevelArgs = {
    /**
     * Select specific fields to fetch from the PermLevel
     */
    select?: PermLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermLevelInclude | null
  }



  /**
   * Model Pages
   */


  export type AggregatePages = {
    _count: PagesCountAggregateOutputType | null
    _avg: PagesAvgAggregateOutputType | null
    _sum: PagesSumAggregateOutputType | null
    _min: PagesMinAggregateOutputType | null
    _max: PagesMaxAggregateOutputType | null
  }

  export type PagesAvgAggregateOutputType = {
    id: number | null
  }

  export type PagesSumAggregateOutputType = {
    id: number | null
  }

  export type PagesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PagesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PagesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PagesAvgAggregateInputType = {
    id?: true
  }

  export type PagesSumAggregateInputType = {
    id?: true
  }

  export type PagesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PagesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PagesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PagesAggregateArgs = {
    /**
     * Filter which Pages to aggregate.
     */
    where?: PagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: Enumerable<PagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pages
    **/
    _count?: true | PagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagesMaxAggregateInputType
  }

  export type GetPagesAggregateType<T extends PagesAggregateArgs> = {
        [P in keyof T & keyof AggregatePages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePages[P]>
      : GetScalarType<T[P], AggregatePages[P]>
  }




  export type PagesGroupByArgs = {
    where?: PagesWhereInput
    orderBy?: Enumerable<PagesOrderByWithAggregationInput>
    by: PagesScalarFieldEnum[]
    having?: PagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagesCountAggregateInputType | true
    _avg?: PagesAvgAggregateInputType
    _sum?: PagesSumAggregateInputType
    _min?: PagesMinAggregateInputType
    _max?: PagesMaxAggregateInputType
  }


  export type PagesGroupByOutputType = {
    id: number
    name: string
    _count: PagesCountAggregateOutputType | null
    _avg: PagesAvgAggregateOutputType | null
    _sum: PagesSumAggregateOutputType | null
    _min: PagesMinAggregateOutputType | null
    _max: PagesMaxAggregateOutputType | null
  }

  type GetPagesGroupByPayload<T extends PagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagesGroupByOutputType[P]>
            : GetScalarType<T[P], PagesGroupByOutputType[P]>
        }
      >
    >


  export type PagesSelect = {
    id?: boolean
    name?: boolean
    PermLevel?: boolean | Pages$PermLevelArgs
    _count?: boolean | PagesCountOutputTypeArgs
  }


  export type PagesInclude = {
    PermLevel?: boolean | Pages$PermLevelArgs
    _count?: boolean | PagesCountOutputTypeArgs
  }

  export type PagesGetPayload<S extends boolean | null | undefined | PagesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Pages :
    S extends undefined ? never :
    S extends { include: any } & (PagesArgs | PagesFindManyArgs)
    ? Pages  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'PermLevel' ? Array < PermLevelGetPayload<S['include'][P]>>  :
        P extends '_count' ? PagesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PagesArgs | PagesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'PermLevel' ? Array < PermLevelGetPayload<S['select'][P]>>  :
        P extends '_count' ? PagesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Pages ? Pages[P] : never
  } 
      : Pages


  type PagesCountArgs = 
    Omit<PagesFindManyArgs, 'select' | 'include'> & {
      select?: PagesCountAggregateInputType | true
    }

  export interface PagesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Pages that matches the filter.
     * @param {PagesFindUniqueArgs} args - Arguments to find a Pages
     * @example
     * // Get one Pages
     * const pages = await prisma.pages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PagesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PagesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Pages'> extends True ? Prisma__PagesClient<PagesGetPayload<T>> : Prisma__PagesClient<PagesGetPayload<T> | null, null>

    /**
     * Find one Pages that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PagesFindUniqueOrThrowArgs} args - Arguments to find a Pages
     * @example
     * // Get one Pages
     * const pages = await prisma.pages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PagesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PagesFindUniqueOrThrowArgs>
    ): Prisma__PagesClient<PagesGetPayload<T>>

    /**
     * Find the first Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagesFindFirstArgs} args - Arguments to find a Pages
     * @example
     * // Get one Pages
     * const pages = await prisma.pages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PagesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PagesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Pages'> extends True ? Prisma__PagesClient<PagesGetPayload<T>> : Prisma__PagesClient<PagesGetPayload<T> | null, null>

    /**
     * Find the first Pages that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagesFindFirstOrThrowArgs} args - Arguments to find a Pages
     * @example
     * // Get one Pages
     * const pages = await prisma.pages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PagesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PagesFindFirstOrThrowArgs>
    ): Prisma__PagesClient<PagesGetPayload<T>>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.pages.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.pages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagesWithIdOnly = await prisma.pages.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PagesFindManyArgs>(
      args?: SelectSubset<T, PagesFindManyArgs>
    ): Prisma.PrismaPromise<Array<PagesGetPayload<T>>>

    /**
     * Create a Pages.
     * @param {PagesCreateArgs} args - Arguments to create a Pages.
     * @example
     * // Create one Pages
     * const Pages = await prisma.pages.create({
     *   data: {
     *     // ... data to create a Pages
     *   }
     * })
     * 
    **/
    create<T extends PagesCreateArgs>(
      args: SelectSubset<T, PagesCreateArgs>
    ): Prisma__PagesClient<PagesGetPayload<T>>

    /**
     * Delete a Pages.
     * @param {PagesDeleteArgs} args - Arguments to delete one Pages.
     * @example
     * // Delete one Pages
     * const Pages = await prisma.pages.delete({
     *   where: {
     *     // ... filter to delete one Pages
     *   }
     * })
     * 
    **/
    delete<T extends PagesDeleteArgs>(
      args: SelectSubset<T, PagesDeleteArgs>
    ): Prisma__PagesClient<PagesGetPayload<T>>

    /**
     * Update one Pages.
     * @param {PagesUpdateArgs} args - Arguments to update one Pages.
     * @example
     * // Update one Pages
     * const pages = await prisma.pages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PagesUpdateArgs>(
      args: SelectSubset<T, PagesUpdateArgs>
    ): Prisma__PagesClient<PagesGetPayload<T>>

    /**
     * Delete zero or more Pages.
     * @param {PagesDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.pages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PagesDeleteManyArgs>(
      args?: SelectSubset<T, PagesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const pages = await prisma.pages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PagesUpdateManyArgs>(
      args: SelectSubset<T, PagesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pages.
     * @param {PagesUpsertArgs} args - Arguments to update or create a Pages.
     * @example
     * // Update or create a Pages
     * const pages = await prisma.pages.upsert({
     *   create: {
     *     // ... data to create a Pages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pages we want to update
     *   }
     * })
    **/
    upsert<T extends PagesUpsertArgs>(
      args: SelectSubset<T, PagesUpsertArgs>
    ): Prisma__PagesClient<PagesGetPayload<T>>

    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagesCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.pages.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends PagesCountArgs>(
      args?: Subset<T, PagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagesAggregateArgs>(args: Subset<T, PagesAggregateArgs>): Prisma.PrismaPromise<GetPagesAggregateType<T>>

    /**
     * Group by Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagesGroupByArgs} args - Group by arguments.
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
      T extends PagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagesGroupByArgs['orderBy'] }
        : { orderBy?: PagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Pages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PagesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    PermLevel<T extends Pages$PermLevelArgs= {}>(args?: Subset<T, Pages$PermLevelArgs>): Prisma.PrismaPromise<Array<PermLevelGetPayload<T>>| Null>;

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
   * Pages base type for findUnique actions
   */
  export type PagesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Pages
     */
    select?: PagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagesInclude | null
    /**
     * Filter, which Pages to fetch.
     */
    where: PagesWhereUniqueInput
  }

  /**
   * Pages findUnique
   */
  export interface PagesFindUniqueArgs extends PagesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Pages findUniqueOrThrow
   */
  export type PagesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Pages
     */
    select?: PagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagesInclude | null
    /**
     * Filter, which Pages to fetch.
     */
    where: PagesWhereUniqueInput
  }


  /**
   * Pages base type for findFirst actions
   */
  export type PagesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Pages
     */
    select?: PagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagesInclude | null
    /**
     * Filter, which Pages to fetch.
     */
    where?: PagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: Enumerable<PagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: Enumerable<PagesScalarFieldEnum>
  }

  /**
   * Pages findFirst
   */
  export interface PagesFindFirstArgs extends PagesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Pages findFirstOrThrow
   */
  export type PagesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Pages
     */
    select?: PagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagesInclude | null
    /**
     * Filter, which Pages to fetch.
     */
    where?: PagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: Enumerable<PagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: Enumerable<PagesScalarFieldEnum>
  }


  /**
   * Pages findMany
   */
  export type PagesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Pages
     */
    select?: PagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagesInclude | null
    /**
     * Filter, which Pages to fetch.
     */
    where?: PagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: Enumerable<PagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pages.
     */
    cursor?: PagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    distinct?: Enumerable<PagesScalarFieldEnum>
  }


  /**
   * Pages create
   */
  export type PagesCreateArgs = {
    /**
     * Select specific fields to fetch from the Pages
     */
    select?: PagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagesInclude | null
    /**
     * The data needed to create a Pages.
     */
    data: XOR<PagesCreateInput, PagesUncheckedCreateInput>
  }


  /**
   * Pages update
   */
  export type PagesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Pages
     */
    select?: PagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagesInclude | null
    /**
     * The data needed to update a Pages.
     */
    data: XOR<PagesUpdateInput, PagesUncheckedUpdateInput>
    /**
     * Choose, which Pages to update.
     */
    where: PagesWhereUniqueInput
  }


  /**
   * Pages updateMany
   */
  export type PagesUpdateManyArgs = {
    /**
     * The data used to update Pages.
     */
    data: XOR<PagesUpdateManyMutationInput, PagesUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PagesWhereInput
  }


  /**
   * Pages upsert
   */
  export type PagesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Pages
     */
    select?: PagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagesInclude | null
    /**
     * The filter to search for the Pages to update in case it exists.
     */
    where: PagesWhereUniqueInput
    /**
     * In case the Pages found by the `where` argument doesn't exist, create a new Pages with this data.
     */
    create: XOR<PagesCreateInput, PagesUncheckedCreateInput>
    /**
     * In case the Pages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagesUpdateInput, PagesUncheckedUpdateInput>
  }


  /**
   * Pages delete
   */
  export type PagesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Pages
     */
    select?: PagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagesInclude | null
    /**
     * Filter which Pages to delete.
     */
    where: PagesWhereUniqueInput
  }


  /**
   * Pages deleteMany
   */
  export type PagesDeleteManyArgs = {
    /**
     * Filter which Pages to delete
     */
    where?: PagesWhereInput
  }


  /**
   * Pages.PermLevel
   */
  export type Pages$PermLevelArgs = {
    /**
     * Select specific fields to fetch from the PermLevel
     */
    select?: PermLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermLevelInclude | null
    where?: PermLevelWhereInput
    orderBy?: Enumerable<PermLevelOrderByWithRelationInput>
    cursor?: PermLevelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PermLevelScalarFieldEnum>
  }


  /**
   * Pages without action
   */
  export type PagesArgs = {
    /**
     * Select specific fields to fetch from the Pages
     */
    select?: PagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagesInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const PagesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PagesScalarFieldEnum = (typeof PagesScalarFieldEnum)[keyof typeof PagesScalarFieldEnum]


  export const PermLevelScalarFieldEnum: {
    id: 'id',
    level: 'level',
    name: 'name'
  };

  export type PermLevelScalarFieldEnum = (typeof PermLevelScalarFieldEnum)[keyof typeof PermLevelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name',
    isAdmin: 'isAdmin',
    permLevelID: 'permLevelID',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    token: 'token'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    username?: StringFilter | string
    password?: StringFilter | string
    name?: StringNullableFilter | string | null
    isAdmin?: BoolFilter | boolean
    permLevelID?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    token?: StringNullableFilter | string | null
    PermLevel?: XOR<PermLevelRelationFilter, PermLevelWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    isAdmin?: SortOrder
    permLevelID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
    PermLevel?: PermLevelOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    username?: string
    token?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    isAdmin?: SortOrder
    permLevelID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    isAdmin?: BoolWithAggregatesFilter | boolean
    permLevelID?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    token?: StringNullableWithAggregatesFilter | string | null
  }

  export type PermLevelWhereInput = {
    AND?: Enumerable<PermLevelWhereInput>
    OR?: Enumerable<PermLevelWhereInput>
    NOT?: Enumerable<PermLevelWhereInput>
    id?: IntFilter | number
    level?: IntFilter | number
    name?: StringFilter | string
    User?: UserListRelationFilter
    Pages?: PagesListRelationFilter
  }

  export type PermLevelOrderByWithRelationInput = {
    id?: SortOrder
    level?: SortOrder
    name?: SortOrder
    User?: UserOrderByRelationAggregateInput
    Pages?: PagesOrderByRelationAggregateInput
  }

  export type PermLevelWhereUniqueInput = {
    id?: number
    level?: number
    name?: string
  }

  export type PermLevelOrderByWithAggregationInput = {
    id?: SortOrder
    level?: SortOrder
    name?: SortOrder
    _count?: PermLevelCountOrderByAggregateInput
    _avg?: PermLevelAvgOrderByAggregateInput
    _max?: PermLevelMaxOrderByAggregateInput
    _min?: PermLevelMinOrderByAggregateInput
    _sum?: PermLevelSumOrderByAggregateInput
  }

  export type PermLevelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PermLevelScalarWhereWithAggregatesInput>
    OR?: Enumerable<PermLevelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PermLevelScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    level?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type PagesWhereInput = {
    AND?: Enumerable<PagesWhereInput>
    OR?: Enumerable<PagesWhereInput>
    NOT?: Enumerable<PagesWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    PermLevel?: PermLevelListRelationFilter
  }

  export type PagesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    PermLevel?: PermLevelOrderByRelationAggregateInput
  }

  export type PagesWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type PagesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: PagesCountOrderByAggregateInput
    _avg?: PagesAvgOrderByAggregateInput
    _max?: PagesMaxOrderByAggregateInput
    _min?: PagesMinOrderByAggregateInput
    _sum?: PagesSumOrderByAggregateInput
  }

  export type PagesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PagesScalarWhereWithAggregatesInput>
    OR?: Enumerable<PagesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PagesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: string | null
    PermLevel?: PermLevelCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    isAdmin?: boolean
    permLevelID?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: string | null
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    PermLevel?: PermLevelUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    permLevelID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    permLevelID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermLevelCreateInput = {
    level: number
    name: string
    User?: UserCreateNestedManyWithoutPermLevelInput
    Pages?: PagesCreateNestedManyWithoutPermLevelInput
  }

  export type PermLevelUncheckedCreateInput = {
    id?: number
    level: number
    name: string
    User?: UserUncheckedCreateNestedManyWithoutPermLevelInput
    Pages?: PagesUncheckedCreateNestedManyWithoutPermLevelInput
  }

  export type PermLevelUpdateInput = {
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutPermLevelNestedInput
    Pages?: PagesUpdateManyWithoutPermLevelNestedInput
  }

  export type PermLevelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutPermLevelNestedInput
    Pages?: PagesUncheckedUpdateManyWithoutPermLevelNestedInput
  }

  export type PermLevelUpdateManyMutationInput = {
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PermLevelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PagesCreateInput = {
    name: string
    PermLevel?: PermLevelCreateNestedManyWithoutPagesInput
  }

  export type PagesUncheckedCreateInput = {
    id?: number
    name: string
    PermLevel?: PermLevelUncheckedCreateNestedManyWithoutPagesInput
  }

  export type PagesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    PermLevel?: PermLevelUpdateManyWithoutPagesNestedInput
  }

  export type PagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    PermLevel?: PermLevelUncheckedUpdateManyWithoutPagesNestedInput
  }

  export type PagesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
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

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type PermLevelRelationFilter = {
    is?: PermLevelWhereInput
    isNot?: PermLevelWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    isAdmin?: SortOrder
    permLevelID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    permLevelID?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    isAdmin?: SortOrder
    permLevelID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    isAdmin?: SortOrder
    permLevelID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    permLevelID?: SortOrder
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

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PagesListRelationFilter = {
    every?: PagesWhereInput
    some?: PagesWhereInput
    none?: PagesWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermLevelCountOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    name?: SortOrder
  }

  export type PermLevelAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
  }

  export type PermLevelMaxOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    name?: SortOrder
  }

  export type PermLevelMinOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    name?: SortOrder
  }

  export type PermLevelSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
  }

  export type PermLevelListRelationFilter = {
    every?: PermLevelWhereInput
    some?: PermLevelWhereInput
    none?: PermLevelWhereInput
  }

  export type PermLevelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PagesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PagesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PagesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PagesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PagesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermLevelCreateNestedOneWithoutUserInput = {
    create?: XOR<PermLevelCreateWithoutUserInput, PermLevelUncheckedCreateWithoutUserInput>
    connectOrCreate?: PermLevelCreateOrConnectWithoutUserInput
    connect?: PermLevelWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PermLevelUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<PermLevelCreateWithoutUserInput, PermLevelUncheckedCreateWithoutUserInput>
    connectOrCreate?: PermLevelCreateOrConnectWithoutUserInput
    upsert?: PermLevelUpsertWithoutUserInput
    connect?: PermLevelWhereUniqueInput
    update?: XOR<PermLevelUpdateWithoutUserInput, PermLevelUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedManyWithoutPermLevelInput = {
    create?: XOR<Enumerable<UserCreateWithoutPermLevelInput>, Enumerable<UserUncheckedCreateWithoutPermLevelInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutPermLevelInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type PagesCreateNestedManyWithoutPermLevelInput = {
    create?: XOR<Enumerable<PagesCreateWithoutPermLevelInput>, Enumerable<PagesUncheckedCreateWithoutPermLevelInput>>
    connectOrCreate?: Enumerable<PagesCreateOrConnectWithoutPermLevelInput>
    connect?: Enumerable<PagesWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutPermLevelInput = {
    create?: XOR<Enumerable<UserCreateWithoutPermLevelInput>, Enumerable<UserUncheckedCreateWithoutPermLevelInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutPermLevelInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type PagesUncheckedCreateNestedManyWithoutPermLevelInput = {
    create?: XOR<Enumerable<PagesCreateWithoutPermLevelInput>, Enumerable<PagesUncheckedCreateWithoutPermLevelInput>>
    connectOrCreate?: Enumerable<PagesCreateOrConnectWithoutPermLevelInput>
    connect?: Enumerable<PagesWhereUniqueInput>
  }

  export type UserUpdateManyWithoutPermLevelNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutPermLevelInput>, Enumerable<UserUncheckedCreateWithoutPermLevelInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutPermLevelInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutPermLevelInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutPermLevelInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutPermLevelInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type PagesUpdateManyWithoutPermLevelNestedInput = {
    create?: XOR<Enumerable<PagesCreateWithoutPermLevelInput>, Enumerable<PagesUncheckedCreateWithoutPermLevelInput>>
    connectOrCreate?: Enumerable<PagesCreateOrConnectWithoutPermLevelInput>
    upsert?: Enumerable<PagesUpsertWithWhereUniqueWithoutPermLevelInput>
    set?: Enumerable<PagesWhereUniqueInput>
    disconnect?: Enumerable<PagesWhereUniqueInput>
    delete?: Enumerable<PagesWhereUniqueInput>
    connect?: Enumerable<PagesWhereUniqueInput>
    update?: Enumerable<PagesUpdateWithWhereUniqueWithoutPermLevelInput>
    updateMany?: Enumerable<PagesUpdateManyWithWhereWithoutPermLevelInput>
    deleteMany?: Enumerable<PagesScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutPermLevelNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutPermLevelInput>, Enumerable<UserUncheckedCreateWithoutPermLevelInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutPermLevelInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutPermLevelInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutPermLevelInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutPermLevelInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type PagesUncheckedUpdateManyWithoutPermLevelNestedInput = {
    create?: XOR<Enumerable<PagesCreateWithoutPermLevelInput>, Enumerable<PagesUncheckedCreateWithoutPermLevelInput>>
    connectOrCreate?: Enumerable<PagesCreateOrConnectWithoutPermLevelInput>
    upsert?: Enumerable<PagesUpsertWithWhereUniqueWithoutPermLevelInput>
    set?: Enumerable<PagesWhereUniqueInput>
    disconnect?: Enumerable<PagesWhereUniqueInput>
    delete?: Enumerable<PagesWhereUniqueInput>
    connect?: Enumerable<PagesWhereUniqueInput>
    update?: Enumerable<PagesUpdateWithWhereUniqueWithoutPermLevelInput>
    updateMany?: Enumerable<PagesUpdateManyWithWhereWithoutPermLevelInput>
    deleteMany?: Enumerable<PagesScalarWhereInput>
  }

  export type PermLevelCreateNestedManyWithoutPagesInput = {
    create?: XOR<Enumerable<PermLevelCreateWithoutPagesInput>, Enumerable<PermLevelUncheckedCreateWithoutPagesInput>>
    connectOrCreate?: Enumerable<PermLevelCreateOrConnectWithoutPagesInput>
    connect?: Enumerable<PermLevelWhereUniqueInput>
  }

  export type PermLevelUncheckedCreateNestedManyWithoutPagesInput = {
    create?: XOR<Enumerable<PermLevelCreateWithoutPagesInput>, Enumerable<PermLevelUncheckedCreateWithoutPagesInput>>
    connectOrCreate?: Enumerable<PermLevelCreateOrConnectWithoutPagesInput>
    connect?: Enumerable<PermLevelWhereUniqueInput>
  }

  export type PermLevelUpdateManyWithoutPagesNestedInput = {
    create?: XOR<Enumerable<PermLevelCreateWithoutPagesInput>, Enumerable<PermLevelUncheckedCreateWithoutPagesInput>>
    connectOrCreate?: Enumerable<PermLevelCreateOrConnectWithoutPagesInput>
    upsert?: Enumerable<PermLevelUpsertWithWhereUniqueWithoutPagesInput>
    set?: Enumerable<PermLevelWhereUniqueInput>
    disconnect?: Enumerable<PermLevelWhereUniqueInput>
    delete?: Enumerable<PermLevelWhereUniqueInput>
    connect?: Enumerable<PermLevelWhereUniqueInput>
    update?: Enumerable<PermLevelUpdateWithWhereUniqueWithoutPagesInput>
    updateMany?: Enumerable<PermLevelUpdateManyWithWhereWithoutPagesInput>
    deleteMany?: Enumerable<PermLevelScalarWhereInput>
  }

  export type PermLevelUncheckedUpdateManyWithoutPagesNestedInput = {
    create?: XOR<Enumerable<PermLevelCreateWithoutPagesInput>, Enumerable<PermLevelUncheckedCreateWithoutPagesInput>>
    connectOrCreate?: Enumerable<PermLevelCreateOrConnectWithoutPagesInput>
    upsert?: Enumerable<PermLevelUpsertWithWhereUniqueWithoutPagesInput>
    set?: Enumerable<PermLevelWhereUniqueInput>
    disconnect?: Enumerable<PermLevelWhereUniqueInput>
    delete?: Enumerable<PermLevelWhereUniqueInput>
    connect?: Enumerable<PermLevelWhereUniqueInput>
    update?: Enumerable<PermLevelUpdateWithWhereUniqueWithoutPagesInput>
    updateMany?: Enumerable<PermLevelUpdateManyWithWhereWithoutPagesInput>
    deleteMany?: Enumerable<PermLevelScalarWhereInput>
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

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
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

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
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

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type PermLevelCreateWithoutUserInput = {
    level: number
    name: string
    Pages?: PagesCreateNestedManyWithoutPermLevelInput
  }

  export type PermLevelUncheckedCreateWithoutUserInput = {
    id?: number
    level: number
    name: string
    Pages?: PagesUncheckedCreateNestedManyWithoutPermLevelInput
  }

  export type PermLevelCreateOrConnectWithoutUserInput = {
    where: PermLevelWhereUniqueInput
    create: XOR<PermLevelCreateWithoutUserInput, PermLevelUncheckedCreateWithoutUserInput>
  }

  export type PermLevelUpsertWithoutUserInput = {
    update: XOR<PermLevelUpdateWithoutUserInput, PermLevelUncheckedUpdateWithoutUserInput>
    create: XOR<PermLevelCreateWithoutUserInput, PermLevelUncheckedCreateWithoutUserInput>
  }

  export type PermLevelUpdateWithoutUserInput = {
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Pages?: PagesUpdateManyWithoutPermLevelNestedInput
  }

  export type PermLevelUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Pages?: PagesUncheckedUpdateManyWithoutPermLevelNestedInput
  }

  export type UserCreateWithoutPermLevelInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: string | null
  }

  export type UserUncheckedCreateWithoutPermLevelInput = {
    id?: string
    username: string
    password: string
    name?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: string | null
  }

  export type UserCreateOrConnectWithoutPermLevelInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPermLevelInput, UserUncheckedCreateWithoutPermLevelInput>
  }

  export type PagesCreateWithoutPermLevelInput = {
    name: string
  }

  export type PagesUncheckedCreateWithoutPermLevelInput = {
    id?: number
    name: string
  }

  export type PagesCreateOrConnectWithoutPermLevelInput = {
    where: PagesWhereUniqueInput
    create: XOR<PagesCreateWithoutPermLevelInput, PagesUncheckedCreateWithoutPermLevelInput>
  }

  export type UserUpsertWithWhereUniqueWithoutPermLevelInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPermLevelInput, UserUncheckedUpdateWithoutPermLevelInput>
    create: XOR<UserCreateWithoutPermLevelInput, UserUncheckedCreateWithoutPermLevelInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPermLevelInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPermLevelInput, UserUncheckedUpdateWithoutPermLevelInput>
  }

  export type UserUpdateManyWithWhereWithoutPermLevelInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    username?: StringFilter | string
    password?: StringFilter | string
    name?: StringNullableFilter | string | null
    isAdmin?: BoolFilter | boolean
    permLevelID?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    token?: StringNullableFilter | string | null
  }

  export type PagesUpsertWithWhereUniqueWithoutPermLevelInput = {
    where: PagesWhereUniqueInput
    update: XOR<PagesUpdateWithoutPermLevelInput, PagesUncheckedUpdateWithoutPermLevelInput>
    create: XOR<PagesCreateWithoutPermLevelInput, PagesUncheckedCreateWithoutPermLevelInput>
  }

  export type PagesUpdateWithWhereUniqueWithoutPermLevelInput = {
    where: PagesWhereUniqueInput
    data: XOR<PagesUpdateWithoutPermLevelInput, PagesUncheckedUpdateWithoutPermLevelInput>
  }

  export type PagesUpdateManyWithWhereWithoutPermLevelInput = {
    where: PagesScalarWhereInput
    data: XOR<PagesUpdateManyMutationInput, PagesUncheckedUpdateManyWithoutPagesInput>
  }

  export type PagesScalarWhereInput = {
    AND?: Enumerable<PagesScalarWhereInput>
    OR?: Enumerable<PagesScalarWhereInput>
    NOT?: Enumerable<PagesScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
  }

  export type PermLevelCreateWithoutPagesInput = {
    level: number
    name: string
    User?: UserCreateNestedManyWithoutPermLevelInput
  }

  export type PermLevelUncheckedCreateWithoutPagesInput = {
    id?: number
    level: number
    name: string
    User?: UserUncheckedCreateNestedManyWithoutPermLevelInput
  }

  export type PermLevelCreateOrConnectWithoutPagesInput = {
    where: PermLevelWhereUniqueInput
    create: XOR<PermLevelCreateWithoutPagesInput, PermLevelUncheckedCreateWithoutPagesInput>
  }

  export type PermLevelUpsertWithWhereUniqueWithoutPagesInput = {
    where: PermLevelWhereUniqueInput
    update: XOR<PermLevelUpdateWithoutPagesInput, PermLevelUncheckedUpdateWithoutPagesInput>
    create: XOR<PermLevelCreateWithoutPagesInput, PermLevelUncheckedCreateWithoutPagesInput>
  }

  export type PermLevelUpdateWithWhereUniqueWithoutPagesInput = {
    where: PermLevelWhereUniqueInput
    data: XOR<PermLevelUpdateWithoutPagesInput, PermLevelUncheckedUpdateWithoutPagesInput>
  }

  export type PermLevelUpdateManyWithWhereWithoutPagesInput = {
    where: PermLevelScalarWhereInput
    data: XOR<PermLevelUpdateManyMutationInput, PermLevelUncheckedUpdateManyWithoutPermLevelInput>
  }

  export type PermLevelScalarWhereInput = {
    AND?: Enumerable<PermLevelScalarWhereInput>
    OR?: Enumerable<PermLevelScalarWhereInput>
    NOT?: Enumerable<PermLevelScalarWhereInput>
    id?: IntFilter | number
    level?: IntFilter | number
    name?: StringFilter | string
  }

  export type UserUpdateWithoutPermLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutPermLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagesUpdateWithoutPermLevelInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PagesUncheckedUpdateWithoutPermLevelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PagesUncheckedUpdateManyWithoutPagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PermLevelUpdateWithoutPagesInput = {
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutPermLevelNestedInput
  }

  export type PermLevelUncheckedUpdateWithoutPagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutPermLevelNestedInput
  }

  export type PermLevelUncheckedUpdateManyWithoutPermLevelInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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

/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskLog
 * 
 */
export type TaskLog = $Result.DefaultSelection<Prisma.$TaskLogPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model DebugSession
 * 
 */
export type DebugSession = $Result.DefaultSelection<Prisma.$DebugSessionPayload>
/**
 * Model DebugProject
 * 
 */
export type DebugProject = $Result.DefaultSelection<Prisma.$DebugProjectPayload>
/**
 * Model ScriptHistory
 * 
 */
export type ScriptHistory = $Result.DefaultSelection<Prisma.$ScriptHistoryPayload>
/**
 * Model DebugTask
 * 
 */
export type DebugTask = $Result.DefaultSelection<Prisma.$DebugTaskPayload>
/**
 * Model Request
 * 
 */
export type Request = $Result.DefaultSelection<Prisma.$RequestPayload>
/**
 * Model Response
 * 
 */
export type Response = $Result.DefaultSelection<Prisma.$ResponsePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProjectStatus: {
  ACTIVE: 'ACTIVE',
  ARCHIVED: 'ARCHIVED',
  COMPLETED: 'COMPLETED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const TaskStatus: {
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  PAUSED: 'PAUSED',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const Priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const LogLevel: {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
  CRITICAL: 'CRITICAL'
};

export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel]


export const DebugType: {
  DEBUGGER: 'DEBUGGER',
  INSPECTOR: 'INSPECTOR',
  PROFILER: 'PROFILER'
};

export type DebugType = (typeof DebugType)[keyof typeof DebugType]


export const DebugStatus: {
  RUNNING: 'RUNNING',
  PAUSED: 'PAUSED',
  STOPPED: 'STOPPED'
};

export type DebugStatus = (typeof DebugStatus)[keyof typeof DebugStatus]

}

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type LogLevel = $Enums.LogLevel

export const LogLevel: typeof $Enums.LogLevel

export type DebugType = $Enums.DebugType

export const DebugType: typeof $Enums.DebugType

export type DebugStatus = $Enums.DebugStatus

export const DebugStatus: typeof $Enums.DebugStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskLog`: Exposes CRUD operations for the **TaskLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskLogs
    * const taskLogs = await prisma.taskLog.findMany()
    * ```
    */
  get taskLog(): Prisma.TaskLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.debugSession`: Exposes CRUD operations for the **DebugSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DebugSessions
    * const debugSessions = await prisma.debugSession.findMany()
    * ```
    */
  get debugSession(): Prisma.DebugSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.debugProject`: Exposes CRUD operations for the **DebugProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DebugProjects
    * const debugProjects = await prisma.debugProject.findMany()
    * ```
    */
  get debugProject(): Prisma.DebugProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scriptHistory`: Exposes CRUD operations for the **ScriptHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScriptHistories
    * const scriptHistories = await prisma.scriptHistory.findMany()
    * ```
    */
  get scriptHistory(): Prisma.ScriptHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.debugTask`: Exposes CRUD operations for the **DebugTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DebugTasks
    * const debugTasks = await prisma.debugTask.findMany()
    * ```
    */
  get debugTask(): Prisma.DebugTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.response`: Exposes CRUD operations for the **Response** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Responses
    * const responses = await prisma.response.findMany()
    * ```
    */
  get response(): Prisma.ResponseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Project: 'Project',
    Task: 'Task',
    TaskLog: 'TaskLog',
    Schedule: 'Schedule',
    DebugSession: 'DebugSession',
    DebugProject: 'DebugProject',
    ScriptHistory: 'ScriptHistory',
    DebugTask: 'DebugTask',
    Request: 'Request',
    Response: 'Response'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "project" | "task" | "taskLog" | "schedule" | "debugSession" | "debugProject" | "scriptHistory" | "debugTask" | "request" | "response"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskLog: {
        payload: Prisma.$TaskLogPayload<ExtArgs>
        fields: Prisma.TaskLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          findFirst: {
            args: Prisma.TaskLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          findMany: {
            args: Prisma.TaskLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>[]
          }
          create: {
            args: Prisma.TaskLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          createMany: {
            args: Prisma.TaskLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>[]
          }
          delete: {
            args: Prisma.TaskLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          update: {
            args: Prisma.TaskLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          deleteMany: {
            args: Prisma.TaskLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>[]
          }
          upsert: {
            args: Prisma.TaskLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          aggregate: {
            args: Prisma.TaskLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskLog>
          }
          groupBy: {
            args: Prisma.TaskLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskLogCountArgs<ExtArgs>
            result: $Utils.Optional<TaskLogCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      DebugSession: {
        payload: Prisma.$DebugSessionPayload<ExtArgs>
        fields: Prisma.DebugSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DebugSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DebugSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugSessionPayload>
          }
          findFirst: {
            args: Prisma.DebugSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DebugSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugSessionPayload>
          }
          findMany: {
            args: Prisma.DebugSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugSessionPayload>[]
          }
          create: {
            args: Prisma.DebugSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugSessionPayload>
          }
          createMany: {
            args: Prisma.DebugSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DebugSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugSessionPayload>[]
          }
          delete: {
            args: Prisma.DebugSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugSessionPayload>
          }
          update: {
            args: Prisma.DebugSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugSessionPayload>
          }
          deleteMany: {
            args: Prisma.DebugSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DebugSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DebugSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugSessionPayload>[]
          }
          upsert: {
            args: Prisma.DebugSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugSessionPayload>
          }
          aggregate: {
            args: Prisma.DebugSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDebugSession>
          }
          groupBy: {
            args: Prisma.DebugSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DebugSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DebugSessionCountArgs<ExtArgs>
            result: $Utils.Optional<DebugSessionCountAggregateOutputType> | number
          }
        }
      }
      DebugProject: {
        payload: Prisma.$DebugProjectPayload<ExtArgs>
        fields: Prisma.DebugProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DebugProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DebugProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugProjectPayload>
          }
          findFirst: {
            args: Prisma.DebugProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DebugProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugProjectPayload>
          }
          findMany: {
            args: Prisma.DebugProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugProjectPayload>[]
          }
          create: {
            args: Prisma.DebugProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugProjectPayload>
          }
          createMany: {
            args: Prisma.DebugProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DebugProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugProjectPayload>[]
          }
          delete: {
            args: Prisma.DebugProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugProjectPayload>
          }
          update: {
            args: Prisma.DebugProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugProjectPayload>
          }
          deleteMany: {
            args: Prisma.DebugProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DebugProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DebugProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugProjectPayload>[]
          }
          upsert: {
            args: Prisma.DebugProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugProjectPayload>
          }
          aggregate: {
            args: Prisma.DebugProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDebugProject>
          }
          groupBy: {
            args: Prisma.DebugProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<DebugProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.DebugProjectCountArgs<ExtArgs>
            result: $Utils.Optional<DebugProjectCountAggregateOutputType> | number
          }
        }
      }
      ScriptHistory: {
        payload: Prisma.$ScriptHistoryPayload<ExtArgs>
        fields: Prisma.ScriptHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScriptHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScriptHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptHistoryPayload>
          }
          findFirst: {
            args: Prisma.ScriptHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScriptHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptHistoryPayload>
          }
          findMany: {
            args: Prisma.ScriptHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptHistoryPayload>[]
          }
          create: {
            args: Prisma.ScriptHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptHistoryPayload>
          }
          createMany: {
            args: Prisma.ScriptHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScriptHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptHistoryPayload>[]
          }
          delete: {
            args: Prisma.ScriptHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptHistoryPayload>
          }
          update: {
            args: Prisma.ScriptHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ScriptHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScriptHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScriptHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ScriptHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptHistoryPayload>
          }
          aggregate: {
            args: Prisma.ScriptHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScriptHistory>
          }
          groupBy: {
            args: Prisma.ScriptHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScriptHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScriptHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ScriptHistoryCountAggregateOutputType> | number
          }
        }
      }
      DebugTask: {
        payload: Prisma.$DebugTaskPayload<ExtArgs>
        fields: Prisma.DebugTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DebugTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DebugTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugTaskPayload>
          }
          findFirst: {
            args: Prisma.DebugTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DebugTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugTaskPayload>
          }
          findMany: {
            args: Prisma.DebugTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugTaskPayload>[]
          }
          create: {
            args: Prisma.DebugTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugTaskPayload>
          }
          createMany: {
            args: Prisma.DebugTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DebugTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugTaskPayload>[]
          }
          delete: {
            args: Prisma.DebugTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugTaskPayload>
          }
          update: {
            args: Prisma.DebugTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugTaskPayload>
          }
          deleteMany: {
            args: Prisma.DebugTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DebugTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DebugTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugTaskPayload>[]
          }
          upsert: {
            args: Prisma.DebugTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebugTaskPayload>
          }
          aggregate: {
            args: Prisma.DebugTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDebugTask>
          }
          groupBy: {
            args: Prisma.DebugTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<DebugTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.DebugTaskCountArgs<ExtArgs>
            result: $Utils.Optional<DebugTaskCountAggregateOutputType> | number
          }
        }
      }
      Request: {
        payload: Prisma.$RequestPayload<ExtArgs>
        fields: Prisma.RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findFirst: {
            args: Prisma.RequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findMany: {
            args: Prisma.RequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          create: {
            args: Prisma.RequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          createMany: {
            args: Prisma.RequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          delete: {
            args: Prisma.RequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          update: {
            args: Prisma.RequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          deleteMany: {
            args: Prisma.RequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          upsert: {
            args: Prisma.RequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.RequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCountArgs<ExtArgs>
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
      Response: {
        payload: Prisma.$ResponsePayload<ExtArgs>
        fields: Prisma.ResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          findFirst: {
            args: Prisma.ResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          findMany: {
            args: Prisma.ResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>[]
          }
          create: {
            args: Prisma.ResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          createMany: {
            args: Prisma.ResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>[]
          }
          delete: {
            args: Prisma.ResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          update: {
            args: Prisma.ResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          deleteMany: {
            args: Prisma.ResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>[]
          }
          upsert: {
            args: Prisma.ResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          aggregate: {
            args: Prisma.ResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResponse>
          }
          groupBy: {
            args: Prisma.ResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResponseCountArgs<ExtArgs>
            result: $Utils.Optional<ResponseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    project?: ProjectOmit
    task?: TaskOmit
    taskLog?: TaskLogOmit
    schedule?: ScheduleOmit
    debugSession?: DebugSessionOmit
    debugProject?: DebugProjectOmit
    scriptHistory?: ScriptHistoryOmit
    debugTask?: DebugTaskOmit
    request?: RequestOmit
    response?: ResponseOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    tasks: number
    schedules: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs
    schedules?: boolean | ProjectCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    children: number
    logs: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | TaskCountOutputTypeCountChildrenArgs
    logs?: boolean | TaskCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskLogWhereInput
  }


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    tasks: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ScheduleCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type DebugSessionCountOutputType
   */

  export type DebugSessionCountOutputType = {
    requests: number
    responses: number
    debugTasks: number
  }

  export type DebugSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | DebugSessionCountOutputTypeCountRequestsArgs
    responses?: boolean | DebugSessionCountOutputTypeCountResponsesArgs
    debugTasks?: boolean | DebugSessionCountOutputTypeCountDebugTasksArgs
  }

  // Custom InputTypes
  /**
   * DebugSessionCountOutputType without action
   */
  export type DebugSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugSessionCountOutputType
     */
    select?: DebugSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DebugSessionCountOutputType without action
   */
  export type DebugSessionCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * DebugSessionCountOutputType without action
   */
  export type DebugSessionCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponseWhereInput
  }

  /**
   * DebugSessionCountOutputType without action
   */
  export type DebugSessionCountOutputTypeCountDebugTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebugTaskWhereInput
  }


  /**
   * Count Type DebugProjectCountOutputType
   */

  export type DebugProjectCountOutputType = {
    sessions: number
    history: number
  }

  export type DebugProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | DebugProjectCountOutputTypeCountSessionsArgs
    history?: boolean | DebugProjectCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * DebugProjectCountOutputType without action
   */
  export type DebugProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugProjectCountOutputType
     */
    select?: DebugProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DebugProjectCountOutputType without action
   */
  export type DebugProjectCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebugSessionWhereInput
  }

  /**
   * DebugProjectCountOutputType without action
   */
  export type DebugProjectCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScriptHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.ProjectStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.ProjectStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    settings: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    settings?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: $Enums.ProjectStatus
    createdAt: Date
    updatedAt: Date
    settings: JsonValue | null
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    settings?: boolean
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    schedules?: boolean | Project$schedulesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    settings?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    settings?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    settings?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "createdAt" | "updatedAt" | "settings", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    schedules?: boolean | Project$schedulesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      status: $Enums.ProjectStatus
      createdAt: Date
      updatedAt: Date
      settings: Prisma.JsonValue | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Project$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Project$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly settings: FieldRef<"Project", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.tasks
   */
  export type Project$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Project.schedules
   */
  export type Project$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    progress: number | null
  }

  export type TaskSumAggregateOutputType = {
    progress: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.Priority | null
    progress: number | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
    parentId: string | null
    scheduleId: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.Priority | null
    progress: number | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
    parentId: string | null
    scheduleId: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    priority: number
    progress: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    projectId: number
    parentId: number
    scheduleId: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    progress?: true
  }

  export type TaskSumAggregateInputType = {
    progress?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    priority?: true
    progress?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    parentId?: true
    scheduleId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    priority?: true
    progress?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    parentId?: true
    scheduleId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    priority?: true
    progress?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    parentId?: true
    scheduleId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: $Enums.TaskStatus
    priority: $Enums.Priority
    progress: number
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    projectId: string
    parentId: string | null
    scheduleId: string | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    progress?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    parentId?: boolean
    scheduleId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    parent?: boolean | Task$parentArgs<ExtArgs>
    children?: boolean | Task$childrenArgs<ExtArgs>
    logs?: boolean | Task$logsArgs<ExtArgs>
    schedule?: boolean | Task$scheduleArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    progress?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    parentId?: boolean
    scheduleId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    parent?: boolean | Task$parentArgs<ExtArgs>
    schedule?: boolean | Task$scheduleArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    progress?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    parentId?: boolean
    scheduleId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    parent?: boolean | Task$parentArgs<ExtArgs>
    schedule?: boolean | Task$scheduleArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    progress?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    parentId?: boolean
    scheduleId?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "priority" | "progress" | "startedAt" | "completedAt" | "createdAt" | "updatedAt" | "projectId" | "parentId" | "scheduleId", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    parent?: boolean | Task$parentArgs<ExtArgs>
    children?: boolean | Task$childrenArgs<ExtArgs>
    logs?: boolean | Task$logsArgs<ExtArgs>
    schedule?: boolean | Task$scheduleArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    parent?: boolean | Task$parentArgs<ExtArgs>
    schedule?: boolean | Task$scheduleArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    parent?: boolean | Task$parentArgs<ExtArgs>
    schedule?: boolean | Task$scheduleArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      parent: Prisma.$TaskPayload<ExtArgs> | null
      children: Prisma.$TaskPayload<ExtArgs>[]
      logs: Prisma.$TaskLogPayload<ExtArgs>[]
      schedule: Prisma.$SchedulePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      status: $Enums.TaskStatus
      priority: $Enums.Priority
      progress: number
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
      projectId: string
      parentId: string | null
      scheduleId: string | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Task$parentArgs<ExtArgs> = {}>(args?: Subset<T, Task$parentArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Task$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Task$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends Task$logsArgs<ExtArgs> = {}>(args?: Subset<T, Task$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedule<T extends Task$scheduleArgs<ExtArgs> = {}>(args?: Subset<T, Task$scheduleArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly name: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly priority: FieldRef<"Task", 'Priority'>
    readonly progress: FieldRef<"Task", 'Float'>
    readonly startedAt: FieldRef<"Task", 'DateTime'>
    readonly completedAt: FieldRef<"Task", 'DateTime'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
    readonly projectId: FieldRef<"Task", 'String'>
    readonly parentId: FieldRef<"Task", 'String'>
    readonly scheduleId: FieldRef<"Task", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.parent
   */
  export type Task$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
  }

  /**
   * Task.children
   */
  export type Task$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task.logs
   */
  export type Task$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    where?: TaskLogWhereInput
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    cursor?: TaskLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * Task.schedule
   */
  export type Task$scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskLog
   */

  export type AggregateTaskLog = {
    _count: TaskLogCountAggregateOutputType | null
    _min: TaskLogMinAggregateOutputType | null
    _max: TaskLogMaxAggregateOutputType | null
  }

  export type TaskLogMinAggregateOutputType = {
    id: string | null
    message: string | null
    level: $Enums.LogLevel | null
    createdAt: Date | null
    taskId: string | null
  }

  export type TaskLogMaxAggregateOutputType = {
    id: string | null
    message: string | null
    level: $Enums.LogLevel | null
    createdAt: Date | null
    taskId: string | null
  }

  export type TaskLogCountAggregateOutputType = {
    id: number
    message: number
    level: number
    createdAt: number
    taskId: number
    _all: number
  }


  export type TaskLogMinAggregateInputType = {
    id?: true
    message?: true
    level?: true
    createdAt?: true
    taskId?: true
  }

  export type TaskLogMaxAggregateInputType = {
    id?: true
    message?: true
    level?: true
    createdAt?: true
    taskId?: true
  }

  export type TaskLogCountAggregateInputType = {
    id?: true
    message?: true
    level?: true
    createdAt?: true
    taskId?: true
    _all?: true
  }

  export type TaskLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskLog to aggregate.
     */
    where?: TaskLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLogs to fetch.
     */
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskLogs
    **/
    _count?: true | TaskLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskLogMaxAggregateInputType
  }

  export type GetTaskLogAggregateType<T extends TaskLogAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskLog[P]>
      : GetScalarType<T[P], AggregateTaskLog[P]>
  }




  export type TaskLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskLogWhereInput
    orderBy?: TaskLogOrderByWithAggregationInput | TaskLogOrderByWithAggregationInput[]
    by: TaskLogScalarFieldEnum[] | TaskLogScalarFieldEnum
    having?: TaskLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskLogCountAggregateInputType | true
    _min?: TaskLogMinAggregateInputType
    _max?: TaskLogMaxAggregateInputType
  }

  export type TaskLogGroupByOutputType = {
    id: string
    message: string
    level: $Enums.LogLevel
    createdAt: Date
    taskId: string
    _count: TaskLogCountAggregateOutputType | null
    _min: TaskLogMinAggregateOutputType | null
    _max: TaskLogMaxAggregateOutputType | null
  }

  type GetTaskLogGroupByPayload<T extends TaskLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskLogGroupByOutputType[P]>
            : GetScalarType<T[P], TaskLogGroupByOutputType[P]>
        }
      >
    >


  export type TaskLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    level?: boolean
    createdAt?: boolean
    taskId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLog"]>

  export type TaskLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    level?: boolean
    createdAt?: boolean
    taskId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLog"]>

  export type TaskLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    level?: boolean
    createdAt?: boolean
    taskId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLog"]>

  export type TaskLogSelectScalar = {
    id?: boolean
    message?: boolean
    level?: boolean
    createdAt?: boolean
    taskId?: boolean
  }

  export type TaskLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "level" | "createdAt" | "taskId", ExtArgs["result"]["taskLog"]>
  export type TaskLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $TaskLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskLog"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      level: $Enums.LogLevel
      createdAt: Date
      taskId: string
    }, ExtArgs["result"]["taskLog"]>
    composites: {}
  }

  type TaskLogGetPayload<S extends boolean | null | undefined | TaskLogDefaultArgs> = $Result.GetResult<Prisma.$TaskLogPayload, S>

  type TaskLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskLogCountAggregateInputType | true
    }

  export interface TaskLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskLog'], meta: { name: 'TaskLog' } }
    /**
     * Find zero or one TaskLog that matches the filter.
     * @param {TaskLogFindUniqueArgs} args - Arguments to find a TaskLog
     * @example
     * // Get one TaskLog
     * const taskLog = await prisma.taskLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskLogFindUniqueArgs>(args: SelectSubset<T, TaskLogFindUniqueArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskLogFindUniqueOrThrowArgs} args - Arguments to find a TaskLog
     * @example
     * // Get one TaskLog
     * const taskLog = await prisma.taskLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskLogFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogFindFirstArgs} args - Arguments to find a TaskLog
     * @example
     * // Get one TaskLog
     * const taskLog = await prisma.taskLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskLogFindFirstArgs>(args?: SelectSubset<T, TaskLogFindFirstArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogFindFirstOrThrowArgs} args - Arguments to find a TaskLog
     * @example
     * // Get one TaskLog
     * const taskLog = await prisma.taskLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskLogFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskLogs
     * const taskLogs = await prisma.taskLog.findMany()
     * 
     * // Get first 10 TaskLogs
     * const taskLogs = await prisma.taskLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskLogWithIdOnly = await prisma.taskLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskLogFindManyArgs>(args?: SelectSubset<T, TaskLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskLog.
     * @param {TaskLogCreateArgs} args - Arguments to create a TaskLog.
     * @example
     * // Create one TaskLog
     * const TaskLog = await prisma.taskLog.create({
     *   data: {
     *     // ... data to create a TaskLog
     *   }
     * })
     * 
     */
    create<T extends TaskLogCreateArgs>(args: SelectSubset<T, TaskLogCreateArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskLogs.
     * @param {TaskLogCreateManyArgs} args - Arguments to create many TaskLogs.
     * @example
     * // Create many TaskLogs
     * const taskLog = await prisma.taskLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskLogCreateManyArgs>(args?: SelectSubset<T, TaskLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskLogs and returns the data saved in the database.
     * @param {TaskLogCreateManyAndReturnArgs} args - Arguments to create many TaskLogs.
     * @example
     * // Create many TaskLogs
     * const taskLog = await prisma.taskLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskLogs and only return the `id`
     * const taskLogWithIdOnly = await prisma.taskLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskLogCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskLog.
     * @param {TaskLogDeleteArgs} args - Arguments to delete one TaskLog.
     * @example
     * // Delete one TaskLog
     * const TaskLog = await prisma.taskLog.delete({
     *   where: {
     *     // ... filter to delete one TaskLog
     *   }
     * })
     * 
     */
    delete<T extends TaskLogDeleteArgs>(args: SelectSubset<T, TaskLogDeleteArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskLog.
     * @param {TaskLogUpdateArgs} args - Arguments to update one TaskLog.
     * @example
     * // Update one TaskLog
     * const taskLog = await prisma.taskLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskLogUpdateArgs>(args: SelectSubset<T, TaskLogUpdateArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskLogs.
     * @param {TaskLogDeleteManyArgs} args - Arguments to filter TaskLogs to delete.
     * @example
     * // Delete a few TaskLogs
     * const { count } = await prisma.taskLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskLogDeleteManyArgs>(args?: SelectSubset<T, TaskLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskLogs
     * const taskLog = await prisma.taskLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskLogUpdateManyArgs>(args: SelectSubset<T, TaskLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskLogs and returns the data updated in the database.
     * @param {TaskLogUpdateManyAndReturnArgs} args - Arguments to update many TaskLogs.
     * @example
     * // Update many TaskLogs
     * const taskLog = await prisma.taskLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskLogs and only return the `id`
     * const taskLogWithIdOnly = await prisma.taskLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskLogUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskLog.
     * @param {TaskLogUpsertArgs} args - Arguments to update or create a TaskLog.
     * @example
     * // Update or create a TaskLog
     * const taskLog = await prisma.taskLog.upsert({
     *   create: {
     *     // ... data to create a TaskLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskLog we want to update
     *   }
     * })
     */
    upsert<T extends TaskLogUpsertArgs>(args: SelectSubset<T, TaskLogUpsertArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogCountArgs} args - Arguments to filter TaskLogs to count.
     * @example
     * // Count the number of TaskLogs
     * const count = await prisma.taskLog.count({
     *   where: {
     *     // ... the filter for the TaskLogs we want to count
     *   }
     * })
    **/
    count<T extends TaskLogCountArgs>(
      args?: Subset<T, TaskLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskLogAggregateArgs>(args: Subset<T, TaskLogAggregateArgs>): Prisma.PrismaPromise<GetTaskLogAggregateType<T>>

    /**
     * Group by TaskLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogGroupByArgs} args - Group by arguments.
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
      T extends TaskLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskLogGroupByArgs['orderBy'] }
        : { orderBy?: TaskLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TaskLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskLog model
   */
  readonly fields: TaskLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskLog model
   */
  interface TaskLogFieldRefs {
    readonly id: FieldRef<"TaskLog", 'String'>
    readonly message: FieldRef<"TaskLog", 'String'>
    readonly level: FieldRef<"TaskLog", 'LogLevel'>
    readonly createdAt: FieldRef<"TaskLog", 'DateTime'>
    readonly taskId: FieldRef<"TaskLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TaskLog findUnique
   */
  export type TaskLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLog to fetch.
     */
    where: TaskLogWhereUniqueInput
  }

  /**
   * TaskLog findUniqueOrThrow
   */
  export type TaskLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLog to fetch.
     */
    where: TaskLogWhereUniqueInput
  }

  /**
   * TaskLog findFirst
   */
  export type TaskLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLog to fetch.
     */
    where?: TaskLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLogs to fetch.
     */
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskLogs.
     */
    cursor?: TaskLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskLogs.
     */
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * TaskLog findFirstOrThrow
   */
  export type TaskLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLog to fetch.
     */
    where?: TaskLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLogs to fetch.
     */
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskLogs.
     */
    cursor?: TaskLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskLogs.
     */
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * TaskLog findMany
   */
  export type TaskLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLogs to fetch.
     */
    where?: TaskLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLogs to fetch.
     */
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskLogs.
     */
    cursor?: TaskLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLogs.
     */
    skip?: number
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * TaskLog create
   */
  export type TaskLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskLog.
     */
    data: XOR<TaskLogCreateInput, TaskLogUncheckedCreateInput>
  }

  /**
   * TaskLog createMany
   */
  export type TaskLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskLogs.
     */
    data: TaskLogCreateManyInput | TaskLogCreateManyInput[]
  }

  /**
   * TaskLog createManyAndReturn
   */
  export type TaskLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * The data used to create many TaskLogs.
     */
    data: TaskLogCreateManyInput | TaskLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskLog update
   */
  export type TaskLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskLog.
     */
    data: XOR<TaskLogUpdateInput, TaskLogUncheckedUpdateInput>
    /**
     * Choose, which TaskLog to update.
     */
    where: TaskLogWhereUniqueInput
  }

  /**
   * TaskLog updateMany
   */
  export type TaskLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskLogs.
     */
    data: XOR<TaskLogUpdateManyMutationInput, TaskLogUncheckedUpdateManyInput>
    /**
     * Filter which TaskLogs to update
     */
    where?: TaskLogWhereInput
    /**
     * Limit how many TaskLogs to update.
     */
    limit?: number
  }

  /**
   * TaskLog updateManyAndReturn
   */
  export type TaskLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * The data used to update TaskLogs.
     */
    data: XOR<TaskLogUpdateManyMutationInput, TaskLogUncheckedUpdateManyInput>
    /**
     * Filter which TaskLogs to update
     */
    where?: TaskLogWhereInput
    /**
     * Limit how many TaskLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskLog upsert
   */
  export type TaskLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskLog to update in case it exists.
     */
    where: TaskLogWhereUniqueInput
    /**
     * In case the TaskLog found by the `where` argument doesn't exist, create a new TaskLog with this data.
     */
    create: XOR<TaskLogCreateInput, TaskLogUncheckedCreateInput>
    /**
     * In case the TaskLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskLogUpdateInput, TaskLogUncheckedUpdateInput>
  }

  /**
   * TaskLog delete
   */
  export type TaskLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter which TaskLog to delete.
     */
    where: TaskLogWhereUniqueInput
  }

  /**
   * TaskLog deleteMany
   */
  export type TaskLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskLogs to delete
     */
    where?: TaskLogWhereInput
    /**
     * Limit how many TaskLogs to delete.
     */
    limit?: number
  }

  /**
   * TaskLog without action
   */
  export type TaskLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    cron: string | null
    active: boolean | null
    nextRun: Date | null
    lastRun: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    cron: string | null
    active: boolean | null
    nextRun: Date | null
    lastRun: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    cron: number
    active: number
    nextRun: number
    lastRun: number
    createdAt: number
    updatedAt: number
    projectId: number
    _all: number
  }


  export type ScheduleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cron?: true
    active?: true
    nextRun?: true
    lastRun?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cron?: true
    active?: true
    nextRun?: true
    lastRun?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cron?: true
    active?: true
    nextRun?: true
    lastRun?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    cron: string | null
    active: boolean
    nextRun: Date | null
    lastRun: Date | null
    createdAt: Date
    updatedAt: Date
    projectId: string
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cron?: boolean
    active?: boolean
    nextRun?: boolean
    lastRun?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tasks?: boolean | Schedule$tasksArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cron?: boolean
    active?: boolean
    nextRun?: boolean
    lastRun?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cron?: boolean
    active?: boolean
    nextRun?: boolean
    lastRun?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    cron?: boolean
    active?: boolean
    nextRun?: boolean
    lastRun?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "cron" | "active" | "nextRun" | "lastRun" | "createdAt" | "updatedAt" | "projectId", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tasks?: boolean | Schedule$tasksArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      cron: string | null
      active: boolean
      nextRun: Date | null
      lastRun: Date | null
      createdAt: Date
      updatedAt: Date
      projectId: string
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Schedule$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly name: FieldRef<"Schedule", 'String'>
    readonly description: FieldRef<"Schedule", 'String'>
    readonly cron: FieldRef<"Schedule", 'String'>
    readonly active: FieldRef<"Schedule", 'Boolean'>
    readonly nextRun: FieldRef<"Schedule", 'DateTime'>
    readonly lastRun: FieldRef<"Schedule", 'DateTime'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
    readonly updatedAt: FieldRef<"Schedule", 'DateTime'>
    readonly projectId: FieldRef<"Schedule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule.tasks
   */
  export type Schedule$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model DebugSession
   */

  export type AggregateDebugSession = {
    _count: DebugSessionCountAggregateOutputType | null
    _min: DebugSessionMinAggregateOutputType | null
    _max: DebugSessionMaxAggregateOutputType | null
  }

  export type DebugSessionMinAggregateOutputType = {
    id: string | null
    type: $Enums.DebugType | null
    status: $Enums.DebugStatus | null
    startedAt: Date | null
    endedAt: Date | null
    projectId: string | null
  }

  export type DebugSessionMaxAggregateOutputType = {
    id: string | null
    type: $Enums.DebugType | null
    status: $Enums.DebugStatus | null
    startedAt: Date | null
    endedAt: Date | null
    projectId: string | null
  }

  export type DebugSessionCountAggregateOutputType = {
    id: number
    type: number
    status: number
    startedAt: number
    endedAt: number
    data: number
    projectId: number
    _all: number
  }


  export type DebugSessionMinAggregateInputType = {
    id?: true
    type?: true
    status?: true
    startedAt?: true
    endedAt?: true
    projectId?: true
  }

  export type DebugSessionMaxAggregateInputType = {
    id?: true
    type?: true
    status?: true
    startedAt?: true
    endedAt?: true
    projectId?: true
  }

  export type DebugSessionCountAggregateInputType = {
    id?: true
    type?: true
    status?: true
    startedAt?: true
    endedAt?: true
    data?: true
    projectId?: true
    _all?: true
  }

  export type DebugSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DebugSession to aggregate.
     */
    where?: DebugSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebugSessions to fetch.
     */
    orderBy?: DebugSessionOrderByWithRelationInput | DebugSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DebugSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebugSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebugSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DebugSessions
    **/
    _count?: true | DebugSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DebugSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DebugSessionMaxAggregateInputType
  }

  export type GetDebugSessionAggregateType<T extends DebugSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateDebugSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDebugSession[P]>
      : GetScalarType<T[P], AggregateDebugSession[P]>
  }




  export type DebugSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebugSessionWhereInput
    orderBy?: DebugSessionOrderByWithAggregationInput | DebugSessionOrderByWithAggregationInput[]
    by: DebugSessionScalarFieldEnum[] | DebugSessionScalarFieldEnum
    having?: DebugSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DebugSessionCountAggregateInputType | true
    _min?: DebugSessionMinAggregateInputType
    _max?: DebugSessionMaxAggregateInputType
  }

  export type DebugSessionGroupByOutputType = {
    id: string
    type: $Enums.DebugType
    status: $Enums.DebugStatus
    startedAt: Date
    endedAt: Date | null
    data: JsonValue | null
    projectId: string | null
    _count: DebugSessionCountAggregateOutputType | null
    _min: DebugSessionMinAggregateOutputType | null
    _max: DebugSessionMaxAggregateOutputType | null
  }

  type GetDebugSessionGroupByPayload<T extends DebugSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DebugSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DebugSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DebugSessionGroupByOutputType[P]>
            : GetScalarType<T[P], DebugSessionGroupByOutputType[P]>
        }
      >
    >


  export type DebugSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
    data?: boolean
    projectId?: boolean
    requests?: boolean | DebugSession$requestsArgs<ExtArgs>
    responses?: boolean | DebugSession$responsesArgs<ExtArgs>
    project?: boolean | DebugSession$projectArgs<ExtArgs>
    debugTasks?: boolean | DebugSession$debugTasksArgs<ExtArgs>
    _count?: boolean | DebugSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debugSession"]>

  export type DebugSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
    data?: boolean
    projectId?: boolean
    project?: boolean | DebugSession$projectArgs<ExtArgs>
  }, ExtArgs["result"]["debugSession"]>

  export type DebugSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
    data?: boolean
    projectId?: boolean
    project?: boolean | DebugSession$projectArgs<ExtArgs>
  }, ExtArgs["result"]["debugSession"]>

  export type DebugSessionSelectScalar = {
    id?: boolean
    type?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
    data?: boolean
    projectId?: boolean
  }

  export type DebugSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "status" | "startedAt" | "endedAt" | "data" | "projectId", ExtArgs["result"]["debugSession"]>
  export type DebugSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | DebugSession$requestsArgs<ExtArgs>
    responses?: boolean | DebugSession$responsesArgs<ExtArgs>
    project?: boolean | DebugSession$projectArgs<ExtArgs>
    debugTasks?: boolean | DebugSession$debugTasksArgs<ExtArgs>
    _count?: boolean | DebugSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DebugSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | DebugSession$projectArgs<ExtArgs>
  }
  export type DebugSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | DebugSession$projectArgs<ExtArgs>
  }

  export type $DebugSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DebugSession"
    objects: {
      requests: Prisma.$RequestPayload<ExtArgs>[]
      responses: Prisma.$ResponsePayload<ExtArgs>[]
      project: Prisma.$DebugProjectPayload<ExtArgs> | null
      debugTasks: Prisma.$DebugTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.DebugType
      status: $Enums.DebugStatus
      startedAt: Date
      endedAt: Date | null
      data: Prisma.JsonValue | null
      projectId: string | null
    }, ExtArgs["result"]["debugSession"]>
    composites: {}
  }

  type DebugSessionGetPayload<S extends boolean | null | undefined | DebugSessionDefaultArgs> = $Result.GetResult<Prisma.$DebugSessionPayload, S>

  type DebugSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DebugSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DebugSessionCountAggregateInputType | true
    }

  export interface DebugSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DebugSession'], meta: { name: 'DebugSession' } }
    /**
     * Find zero or one DebugSession that matches the filter.
     * @param {DebugSessionFindUniqueArgs} args - Arguments to find a DebugSession
     * @example
     * // Get one DebugSession
     * const debugSession = await prisma.debugSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DebugSessionFindUniqueArgs>(args: SelectSubset<T, DebugSessionFindUniqueArgs<ExtArgs>>): Prisma__DebugSessionClient<$Result.GetResult<Prisma.$DebugSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DebugSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DebugSessionFindUniqueOrThrowArgs} args - Arguments to find a DebugSession
     * @example
     * // Get one DebugSession
     * const debugSession = await prisma.debugSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DebugSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, DebugSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DebugSessionClient<$Result.GetResult<Prisma.$DebugSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DebugSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugSessionFindFirstArgs} args - Arguments to find a DebugSession
     * @example
     * // Get one DebugSession
     * const debugSession = await prisma.debugSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DebugSessionFindFirstArgs>(args?: SelectSubset<T, DebugSessionFindFirstArgs<ExtArgs>>): Prisma__DebugSessionClient<$Result.GetResult<Prisma.$DebugSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DebugSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugSessionFindFirstOrThrowArgs} args - Arguments to find a DebugSession
     * @example
     * // Get one DebugSession
     * const debugSession = await prisma.debugSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DebugSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, DebugSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DebugSessionClient<$Result.GetResult<Prisma.$DebugSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DebugSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DebugSessions
     * const debugSessions = await prisma.debugSession.findMany()
     * 
     * // Get first 10 DebugSessions
     * const debugSessions = await prisma.debugSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const debugSessionWithIdOnly = await prisma.debugSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DebugSessionFindManyArgs>(args?: SelectSubset<T, DebugSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebugSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DebugSession.
     * @param {DebugSessionCreateArgs} args - Arguments to create a DebugSession.
     * @example
     * // Create one DebugSession
     * const DebugSession = await prisma.debugSession.create({
     *   data: {
     *     // ... data to create a DebugSession
     *   }
     * })
     * 
     */
    create<T extends DebugSessionCreateArgs>(args: SelectSubset<T, DebugSessionCreateArgs<ExtArgs>>): Prisma__DebugSessionClient<$Result.GetResult<Prisma.$DebugSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DebugSessions.
     * @param {DebugSessionCreateManyArgs} args - Arguments to create many DebugSessions.
     * @example
     * // Create many DebugSessions
     * const debugSession = await prisma.debugSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DebugSessionCreateManyArgs>(args?: SelectSubset<T, DebugSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DebugSessions and returns the data saved in the database.
     * @param {DebugSessionCreateManyAndReturnArgs} args - Arguments to create many DebugSessions.
     * @example
     * // Create many DebugSessions
     * const debugSession = await prisma.debugSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DebugSessions and only return the `id`
     * const debugSessionWithIdOnly = await prisma.debugSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DebugSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, DebugSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebugSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DebugSession.
     * @param {DebugSessionDeleteArgs} args - Arguments to delete one DebugSession.
     * @example
     * // Delete one DebugSession
     * const DebugSession = await prisma.debugSession.delete({
     *   where: {
     *     // ... filter to delete one DebugSession
     *   }
     * })
     * 
     */
    delete<T extends DebugSessionDeleteArgs>(args: SelectSubset<T, DebugSessionDeleteArgs<ExtArgs>>): Prisma__DebugSessionClient<$Result.GetResult<Prisma.$DebugSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DebugSession.
     * @param {DebugSessionUpdateArgs} args - Arguments to update one DebugSession.
     * @example
     * // Update one DebugSession
     * const debugSession = await prisma.debugSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DebugSessionUpdateArgs>(args: SelectSubset<T, DebugSessionUpdateArgs<ExtArgs>>): Prisma__DebugSessionClient<$Result.GetResult<Prisma.$DebugSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DebugSessions.
     * @param {DebugSessionDeleteManyArgs} args - Arguments to filter DebugSessions to delete.
     * @example
     * // Delete a few DebugSessions
     * const { count } = await prisma.debugSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DebugSessionDeleteManyArgs>(args?: SelectSubset<T, DebugSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DebugSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DebugSessions
     * const debugSession = await prisma.debugSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DebugSessionUpdateManyArgs>(args: SelectSubset<T, DebugSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DebugSessions and returns the data updated in the database.
     * @param {DebugSessionUpdateManyAndReturnArgs} args - Arguments to update many DebugSessions.
     * @example
     * // Update many DebugSessions
     * const debugSession = await prisma.debugSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DebugSessions and only return the `id`
     * const debugSessionWithIdOnly = await prisma.debugSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DebugSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, DebugSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebugSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DebugSession.
     * @param {DebugSessionUpsertArgs} args - Arguments to update or create a DebugSession.
     * @example
     * // Update or create a DebugSession
     * const debugSession = await prisma.debugSession.upsert({
     *   create: {
     *     // ... data to create a DebugSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DebugSession we want to update
     *   }
     * })
     */
    upsert<T extends DebugSessionUpsertArgs>(args: SelectSubset<T, DebugSessionUpsertArgs<ExtArgs>>): Prisma__DebugSessionClient<$Result.GetResult<Prisma.$DebugSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DebugSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugSessionCountArgs} args - Arguments to filter DebugSessions to count.
     * @example
     * // Count the number of DebugSessions
     * const count = await prisma.debugSession.count({
     *   where: {
     *     // ... the filter for the DebugSessions we want to count
     *   }
     * })
    **/
    count<T extends DebugSessionCountArgs>(
      args?: Subset<T, DebugSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DebugSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DebugSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DebugSessionAggregateArgs>(args: Subset<T, DebugSessionAggregateArgs>): Prisma.PrismaPromise<GetDebugSessionAggregateType<T>>

    /**
     * Group by DebugSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugSessionGroupByArgs} args - Group by arguments.
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
      T extends DebugSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DebugSessionGroupByArgs['orderBy'] }
        : { orderBy?: DebugSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DebugSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDebugSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DebugSession model
   */
  readonly fields: DebugSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DebugSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DebugSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requests<T extends DebugSession$requestsArgs<ExtArgs> = {}>(args?: Subset<T, DebugSession$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responses<T extends DebugSession$responsesArgs<ExtArgs> = {}>(args?: Subset<T, DebugSession$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project<T extends DebugSession$projectArgs<ExtArgs> = {}>(args?: Subset<T, DebugSession$projectArgs<ExtArgs>>): Prisma__DebugProjectClient<$Result.GetResult<Prisma.$DebugProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    debugTasks<T extends DebugSession$debugTasksArgs<ExtArgs> = {}>(args?: Subset<T, DebugSession$debugTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebugTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DebugSession model
   */
  interface DebugSessionFieldRefs {
    readonly id: FieldRef<"DebugSession", 'String'>
    readonly type: FieldRef<"DebugSession", 'DebugType'>
    readonly status: FieldRef<"DebugSession", 'DebugStatus'>
    readonly startedAt: FieldRef<"DebugSession", 'DateTime'>
    readonly endedAt: FieldRef<"DebugSession", 'DateTime'>
    readonly data: FieldRef<"DebugSession", 'Json'>
    readonly projectId: FieldRef<"DebugSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DebugSession findUnique
   */
  export type DebugSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugSession
     */
    select?: DebugSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugSession
     */
    omit?: DebugSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugSessionInclude<ExtArgs> | null
    /**
     * Filter, which DebugSession to fetch.
     */
    where: DebugSessionWhereUniqueInput
  }

  /**
   * DebugSession findUniqueOrThrow
   */
  export type DebugSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugSession
     */
    select?: DebugSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugSession
     */
    omit?: DebugSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugSessionInclude<ExtArgs> | null
    /**
     * Filter, which DebugSession to fetch.
     */
    where: DebugSessionWhereUniqueInput
  }

  /**
   * DebugSession findFirst
   */
  export type DebugSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugSession
     */
    select?: DebugSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugSession
     */
    omit?: DebugSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugSessionInclude<ExtArgs> | null
    /**
     * Filter, which DebugSession to fetch.
     */
    where?: DebugSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebugSessions to fetch.
     */
    orderBy?: DebugSessionOrderByWithRelationInput | DebugSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DebugSessions.
     */
    cursor?: DebugSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebugSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebugSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DebugSessions.
     */
    distinct?: DebugSessionScalarFieldEnum | DebugSessionScalarFieldEnum[]
  }

  /**
   * DebugSession findFirstOrThrow
   */
  export type DebugSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugSession
     */
    select?: DebugSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugSession
     */
    omit?: DebugSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugSessionInclude<ExtArgs> | null
    /**
     * Filter, which DebugSession to fetch.
     */
    where?: DebugSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebugSessions to fetch.
     */
    orderBy?: DebugSessionOrderByWithRelationInput | DebugSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DebugSessions.
     */
    cursor?: DebugSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebugSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebugSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DebugSessions.
     */
    distinct?: DebugSessionScalarFieldEnum | DebugSessionScalarFieldEnum[]
  }

  /**
   * DebugSession findMany
   */
  export type DebugSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugSession
     */
    select?: DebugSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugSession
     */
    omit?: DebugSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugSessionInclude<ExtArgs> | null
    /**
     * Filter, which DebugSessions to fetch.
     */
    where?: DebugSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebugSessions to fetch.
     */
    orderBy?: DebugSessionOrderByWithRelationInput | DebugSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DebugSessions.
     */
    cursor?: DebugSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebugSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebugSessions.
     */
    skip?: number
    distinct?: DebugSessionScalarFieldEnum | DebugSessionScalarFieldEnum[]
  }

  /**
   * DebugSession create
   */
  export type DebugSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugSession
     */
    select?: DebugSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugSession
     */
    omit?: DebugSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a DebugSession.
     */
    data: XOR<DebugSessionCreateInput, DebugSessionUncheckedCreateInput>
  }

  /**
   * DebugSession createMany
   */
  export type DebugSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DebugSessions.
     */
    data: DebugSessionCreateManyInput | DebugSessionCreateManyInput[]
  }

  /**
   * DebugSession createManyAndReturn
   */
  export type DebugSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugSession
     */
    select?: DebugSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DebugSession
     */
    omit?: DebugSessionOmit<ExtArgs> | null
    /**
     * The data used to create many DebugSessions.
     */
    data: DebugSessionCreateManyInput | DebugSessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DebugSession update
   */
  export type DebugSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugSession
     */
    select?: DebugSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugSession
     */
    omit?: DebugSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a DebugSession.
     */
    data: XOR<DebugSessionUpdateInput, DebugSessionUncheckedUpdateInput>
    /**
     * Choose, which DebugSession to update.
     */
    where: DebugSessionWhereUniqueInput
  }

  /**
   * DebugSession updateMany
   */
  export type DebugSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DebugSessions.
     */
    data: XOR<DebugSessionUpdateManyMutationInput, DebugSessionUncheckedUpdateManyInput>
    /**
     * Filter which DebugSessions to update
     */
    where?: DebugSessionWhereInput
    /**
     * Limit how many DebugSessions to update.
     */
    limit?: number
  }

  /**
   * DebugSession updateManyAndReturn
   */
  export type DebugSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugSession
     */
    select?: DebugSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DebugSession
     */
    omit?: DebugSessionOmit<ExtArgs> | null
    /**
     * The data used to update DebugSessions.
     */
    data: XOR<DebugSessionUpdateManyMutationInput, DebugSessionUncheckedUpdateManyInput>
    /**
     * Filter which DebugSessions to update
     */
    where?: DebugSessionWhereInput
    /**
     * Limit how many DebugSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DebugSession upsert
   */
  export type DebugSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugSession
     */
    select?: DebugSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugSession
     */
    omit?: DebugSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the DebugSession to update in case it exists.
     */
    where: DebugSessionWhereUniqueInput
    /**
     * In case the DebugSession found by the `where` argument doesn't exist, create a new DebugSession with this data.
     */
    create: XOR<DebugSessionCreateInput, DebugSessionUncheckedCreateInput>
    /**
     * In case the DebugSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DebugSessionUpdateInput, DebugSessionUncheckedUpdateInput>
  }

  /**
   * DebugSession delete
   */
  export type DebugSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugSession
     */
    select?: DebugSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugSession
     */
    omit?: DebugSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugSessionInclude<ExtArgs> | null
    /**
     * Filter which DebugSession to delete.
     */
    where: DebugSessionWhereUniqueInput
  }

  /**
   * DebugSession deleteMany
   */
  export type DebugSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DebugSessions to delete
     */
    where?: DebugSessionWhereInput
    /**
     * Limit how many DebugSessions to delete.
     */
    limit?: number
  }

  /**
   * DebugSession.requests
   */
  export type DebugSession$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * DebugSession.responses
   */
  export type DebugSession$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    where?: ResponseWhereInput
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    cursor?: ResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * DebugSession.project
   */
  export type DebugSession$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugProject
     */
    select?: DebugProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugProject
     */
    omit?: DebugProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugProjectInclude<ExtArgs> | null
    where?: DebugProjectWhereInput
  }

  /**
   * DebugSession.debugTasks
   */
  export type DebugSession$debugTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugTask
     */
    select?: DebugTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugTask
     */
    omit?: DebugTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugTaskInclude<ExtArgs> | null
    where?: DebugTaskWhereInput
    orderBy?: DebugTaskOrderByWithRelationInput | DebugTaskOrderByWithRelationInput[]
    cursor?: DebugTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DebugTaskScalarFieldEnum | DebugTaskScalarFieldEnum[]
  }

  /**
   * DebugSession without action
   */
  export type DebugSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugSession
     */
    select?: DebugSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugSession
     */
    omit?: DebugSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugSessionInclude<ExtArgs> | null
  }


  /**
   * Model DebugProject
   */

  export type AggregateDebugProject = {
    _count: DebugProjectCountAggregateOutputType | null
    _min: DebugProjectMinAggregateOutputType | null
    _max: DebugProjectMaxAggregateOutputType | null
  }

  export type DebugProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    script: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DebugProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    script: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DebugProjectCountAggregateOutputType = {
    id: number
    name: number
    script: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DebugProjectMinAggregateInputType = {
    id?: true
    name?: true
    script?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DebugProjectMaxAggregateInputType = {
    id?: true
    name?: true
    script?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DebugProjectCountAggregateInputType = {
    id?: true
    name?: true
    script?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DebugProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DebugProject to aggregate.
     */
    where?: DebugProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebugProjects to fetch.
     */
    orderBy?: DebugProjectOrderByWithRelationInput | DebugProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DebugProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebugProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebugProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DebugProjects
    **/
    _count?: true | DebugProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DebugProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DebugProjectMaxAggregateInputType
  }

  export type GetDebugProjectAggregateType<T extends DebugProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateDebugProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDebugProject[P]>
      : GetScalarType<T[P], AggregateDebugProject[P]>
  }




  export type DebugProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebugProjectWhereInput
    orderBy?: DebugProjectOrderByWithAggregationInput | DebugProjectOrderByWithAggregationInput[]
    by: DebugProjectScalarFieldEnum[] | DebugProjectScalarFieldEnum
    having?: DebugProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DebugProjectCountAggregateInputType | true
    _min?: DebugProjectMinAggregateInputType
    _max?: DebugProjectMaxAggregateInputType
  }

  export type DebugProjectGroupByOutputType = {
    id: string
    name: string
    script: string
    createdAt: Date
    updatedAt: Date
    _count: DebugProjectCountAggregateOutputType | null
    _min: DebugProjectMinAggregateOutputType | null
    _max: DebugProjectMaxAggregateOutputType | null
  }

  type GetDebugProjectGroupByPayload<T extends DebugProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DebugProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DebugProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DebugProjectGroupByOutputType[P]>
            : GetScalarType<T[P], DebugProjectGroupByOutputType[P]>
        }
      >
    >


  export type DebugProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    script?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | DebugProject$sessionsArgs<ExtArgs>
    history?: boolean | DebugProject$historyArgs<ExtArgs>
    _count?: boolean | DebugProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debugProject"]>

  export type DebugProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    script?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["debugProject"]>

  export type DebugProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    script?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["debugProject"]>

  export type DebugProjectSelectScalar = {
    id?: boolean
    name?: boolean
    script?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DebugProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "script" | "createdAt" | "updatedAt", ExtArgs["result"]["debugProject"]>
  export type DebugProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | DebugProject$sessionsArgs<ExtArgs>
    history?: boolean | DebugProject$historyArgs<ExtArgs>
    _count?: boolean | DebugProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DebugProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DebugProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DebugProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DebugProject"
    objects: {
      sessions: Prisma.$DebugSessionPayload<ExtArgs>[]
      history: Prisma.$ScriptHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      script: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["debugProject"]>
    composites: {}
  }

  type DebugProjectGetPayload<S extends boolean | null | undefined | DebugProjectDefaultArgs> = $Result.GetResult<Prisma.$DebugProjectPayload, S>

  type DebugProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DebugProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DebugProjectCountAggregateInputType | true
    }

  export interface DebugProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DebugProject'], meta: { name: 'DebugProject' } }
    /**
     * Find zero or one DebugProject that matches the filter.
     * @param {DebugProjectFindUniqueArgs} args - Arguments to find a DebugProject
     * @example
     * // Get one DebugProject
     * const debugProject = await prisma.debugProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DebugProjectFindUniqueArgs>(args: SelectSubset<T, DebugProjectFindUniqueArgs<ExtArgs>>): Prisma__DebugProjectClient<$Result.GetResult<Prisma.$DebugProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DebugProject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DebugProjectFindUniqueOrThrowArgs} args - Arguments to find a DebugProject
     * @example
     * // Get one DebugProject
     * const debugProject = await prisma.debugProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DebugProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, DebugProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DebugProjectClient<$Result.GetResult<Prisma.$DebugProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DebugProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugProjectFindFirstArgs} args - Arguments to find a DebugProject
     * @example
     * // Get one DebugProject
     * const debugProject = await prisma.debugProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DebugProjectFindFirstArgs>(args?: SelectSubset<T, DebugProjectFindFirstArgs<ExtArgs>>): Prisma__DebugProjectClient<$Result.GetResult<Prisma.$DebugProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DebugProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugProjectFindFirstOrThrowArgs} args - Arguments to find a DebugProject
     * @example
     * // Get one DebugProject
     * const debugProject = await prisma.debugProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DebugProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, DebugProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__DebugProjectClient<$Result.GetResult<Prisma.$DebugProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DebugProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DebugProjects
     * const debugProjects = await prisma.debugProject.findMany()
     * 
     * // Get first 10 DebugProjects
     * const debugProjects = await prisma.debugProject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const debugProjectWithIdOnly = await prisma.debugProject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DebugProjectFindManyArgs>(args?: SelectSubset<T, DebugProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebugProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DebugProject.
     * @param {DebugProjectCreateArgs} args - Arguments to create a DebugProject.
     * @example
     * // Create one DebugProject
     * const DebugProject = await prisma.debugProject.create({
     *   data: {
     *     // ... data to create a DebugProject
     *   }
     * })
     * 
     */
    create<T extends DebugProjectCreateArgs>(args: SelectSubset<T, DebugProjectCreateArgs<ExtArgs>>): Prisma__DebugProjectClient<$Result.GetResult<Prisma.$DebugProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DebugProjects.
     * @param {DebugProjectCreateManyArgs} args - Arguments to create many DebugProjects.
     * @example
     * // Create many DebugProjects
     * const debugProject = await prisma.debugProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DebugProjectCreateManyArgs>(args?: SelectSubset<T, DebugProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DebugProjects and returns the data saved in the database.
     * @param {DebugProjectCreateManyAndReturnArgs} args - Arguments to create many DebugProjects.
     * @example
     * // Create many DebugProjects
     * const debugProject = await prisma.debugProject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DebugProjects and only return the `id`
     * const debugProjectWithIdOnly = await prisma.debugProject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DebugProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, DebugProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebugProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DebugProject.
     * @param {DebugProjectDeleteArgs} args - Arguments to delete one DebugProject.
     * @example
     * // Delete one DebugProject
     * const DebugProject = await prisma.debugProject.delete({
     *   where: {
     *     // ... filter to delete one DebugProject
     *   }
     * })
     * 
     */
    delete<T extends DebugProjectDeleteArgs>(args: SelectSubset<T, DebugProjectDeleteArgs<ExtArgs>>): Prisma__DebugProjectClient<$Result.GetResult<Prisma.$DebugProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DebugProject.
     * @param {DebugProjectUpdateArgs} args - Arguments to update one DebugProject.
     * @example
     * // Update one DebugProject
     * const debugProject = await prisma.debugProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DebugProjectUpdateArgs>(args: SelectSubset<T, DebugProjectUpdateArgs<ExtArgs>>): Prisma__DebugProjectClient<$Result.GetResult<Prisma.$DebugProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DebugProjects.
     * @param {DebugProjectDeleteManyArgs} args - Arguments to filter DebugProjects to delete.
     * @example
     * // Delete a few DebugProjects
     * const { count } = await prisma.debugProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DebugProjectDeleteManyArgs>(args?: SelectSubset<T, DebugProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DebugProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DebugProjects
     * const debugProject = await prisma.debugProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DebugProjectUpdateManyArgs>(args: SelectSubset<T, DebugProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DebugProjects and returns the data updated in the database.
     * @param {DebugProjectUpdateManyAndReturnArgs} args - Arguments to update many DebugProjects.
     * @example
     * // Update many DebugProjects
     * const debugProject = await prisma.debugProject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DebugProjects and only return the `id`
     * const debugProjectWithIdOnly = await prisma.debugProject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DebugProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, DebugProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebugProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DebugProject.
     * @param {DebugProjectUpsertArgs} args - Arguments to update or create a DebugProject.
     * @example
     * // Update or create a DebugProject
     * const debugProject = await prisma.debugProject.upsert({
     *   create: {
     *     // ... data to create a DebugProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DebugProject we want to update
     *   }
     * })
     */
    upsert<T extends DebugProjectUpsertArgs>(args: SelectSubset<T, DebugProjectUpsertArgs<ExtArgs>>): Prisma__DebugProjectClient<$Result.GetResult<Prisma.$DebugProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DebugProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugProjectCountArgs} args - Arguments to filter DebugProjects to count.
     * @example
     * // Count the number of DebugProjects
     * const count = await prisma.debugProject.count({
     *   where: {
     *     // ... the filter for the DebugProjects we want to count
     *   }
     * })
    **/
    count<T extends DebugProjectCountArgs>(
      args?: Subset<T, DebugProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DebugProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DebugProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DebugProjectAggregateArgs>(args: Subset<T, DebugProjectAggregateArgs>): Prisma.PrismaPromise<GetDebugProjectAggregateType<T>>

    /**
     * Group by DebugProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugProjectGroupByArgs} args - Group by arguments.
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
      T extends DebugProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DebugProjectGroupByArgs['orderBy'] }
        : { orderBy?: DebugProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DebugProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDebugProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DebugProject model
   */
  readonly fields: DebugProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DebugProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DebugProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends DebugProject$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, DebugProject$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebugSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends DebugProject$historyArgs<ExtArgs> = {}>(args?: Subset<T, DebugProject$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DebugProject model
   */
  interface DebugProjectFieldRefs {
    readonly id: FieldRef<"DebugProject", 'String'>
    readonly name: FieldRef<"DebugProject", 'String'>
    readonly script: FieldRef<"DebugProject", 'String'>
    readonly createdAt: FieldRef<"DebugProject", 'DateTime'>
    readonly updatedAt: FieldRef<"DebugProject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DebugProject findUnique
   */
  export type DebugProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugProject
     */
    select?: DebugProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugProject
     */
    omit?: DebugProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugProjectInclude<ExtArgs> | null
    /**
     * Filter, which DebugProject to fetch.
     */
    where: DebugProjectWhereUniqueInput
  }

  /**
   * DebugProject findUniqueOrThrow
   */
  export type DebugProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugProject
     */
    select?: DebugProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugProject
     */
    omit?: DebugProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugProjectInclude<ExtArgs> | null
    /**
     * Filter, which DebugProject to fetch.
     */
    where: DebugProjectWhereUniqueInput
  }

  /**
   * DebugProject findFirst
   */
  export type DebugProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugProject
     */
    select?: DebugProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugProject
     */
    omit?: DebugProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugProjectInclude<ExtArgs> | null
    /**
     * Filter, which DebugProject to fetch.
     */
    where?: DebugProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebugProjects to fetch.
     */
    orderBy?: DebugProjectOrderByWithRelationInput | DebugProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DebugProjects.
     */
    cursor?: DebugProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebugProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebugProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DebugProjects.
     */
    distinct?: DebugProjectScalarFieldEnum | DebugProjectScalarFieldEnum[]
  }

  /**
   * DebugProject findFirstOrThrow
   */
  export type DebugProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugProject
     */
    select?: DebugProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugProject
     */
    omit?: DebugProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugProjectInclude<ExtArgs> | null
    /**
     * Filter, which DebugProject to fetch.
     */
    where?: DebugProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebugProjects to fetch.
     */
    orderBy?: DebugProjectOrderByWithRelationInput | DebugProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DebugProjects.
     */
    cursor?: DebugProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebugProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebugProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DebugProjects.
     */
    distinct?: DebugProjectScalarFieldEnum | DebugProjectScalarFieldEnum[]
  }

  /**
   * DebugProject findMany
   */
  export type DebugProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugProject
     */
    select?: DebugProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugProject
     */
    omit?: DebugProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugProjectInclude<ExtArgs> | null
    /**
     * Filter, which DebugProjects to fetch.
     */
    where?: DebugProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebugProjects to fetch.
     */
    orderBy?: DebugProjectOrderByWithRelationInput | DebugProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DebugProjects.
     */
    cursor?: DebugProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebugProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebugProjects.
     */
    skip?: number
    distinct?: DebugProjectScalarFieldEnum | DebugProjectScalarFieldEnum[]
  }

  /**
   * DebugProject create
   */
  export type DebugProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugProject
     */
    select?: DebugProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugProject
     */
    omit?: DebugProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a DebugProject.
     */
    data: XOR<DebugProjectCreateInput, DebugProjectUncheckedCreateInput>
  }

  /**
   * DebugProject createMany
   */
  export type DebugProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DebugProjects.
     */
    data: DebugProjectCreateManyInput | DebugProjectCreateManyInput[]
  }

  /**
   * DebugProject createManyAndReturn
   */
  export type DebugProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugProject
     */
    select?: DebugProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DebugProject
     */
    omit?: DebugProjectOmit<ExtArgs> | null
    /**
     * The data used to create many DebugProjects.
     */
    data: DebugProjectCreateManyInput | DebugProjectCreateManyInput[]
  }

  /**
   * DebugProject update
   */
  export type DebugProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugProject
     */
    select?: DebugProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugProject
     */
    omit?: DebugProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a DebugProject.
     */
    data: XOR<DebugProjectUpdateInput, DebugProjectUncheckedUpdateInput>
    /**
     * Choose, which DebugProject to update.
     */
    where: DebugProjectWhereUniqueInput
  }

  /**
   * DebugProject updateMany
   */
  export type DebugProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DebugProjects.
     */
    data: XOR<DebugProjectUpdateManyMutationInput, DebugProjectUncheckedUpdateManyInput>
    /**
     * Filter which DebugProjects to update
     */
    where?: DebugProjectWhereInput
    /**
     * Limit how many DebugProjects to update.
     */
    limit?: number
  }

  /**
   * DebugProject updateManyAndReturn
   */
  export type DebugProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugProject
     */
    select?: DebugProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DebugProject
     */
    omit?: DebugProjectOmit<ExtArgs> | null
    /**
     * The data used to update DebugProjects.
     */
    data: XOR<DebugProjectUpdateManyMutationInput, DebugProjectUncheckedUpdateManyInput>
    /**
     * Filter which DebugProjects to update
     */
    where?: DebugProjectWhereInput
    /**
     * Limit how many DebugProjects to update.
     */
    limit?: number
  }

  /**
   * DebugProject upsert
   */
  export type DebugProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugProject
     */
    select?: DebugProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugProject
     */
    omit?: DebugProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the DebugProject to update in case it exists.
     */
    where: DebugProjectWhereUniqueInput
    /**
     * In case the DebugProject found by the `where` argument doesn't exist, create a new DebugProject with this data.
     */
    create: XOR<DebugProjectCreateInput, DebugProjectUncheckedCreateInput>
    /**
     * In case the DebugProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DebugProjectUpdateInput, DebugProjectUncheckedUpdateInput>
  }

  /**
   * DebugProject delete
   */
  export type DebugProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugProject
     */
    select?: DebugProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugProject
     */
    omit?: DebugProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugProjectInclude<ExtArgs> | null
    /**
     * Filter which DebugProject to delete.
     */
    where: DebugProjectWhereUniqueInput
  }

  /**
   * DebugProject deleteMany
   */
  export type DebugProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DebugProjects to delete
     */
    where?: DebugProjectWhereInput
    /**
     * Limit how many DebugProjects to delete.
     */
    limit?: number
  }

  /**
   * DebugProject.sessions
   */
  export type DebugProject$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugSession
     */
    select?: DebugSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugSession
     */
    omit?: DebugSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugSessionInclude<ExtArgs> | null
    where?: DebugSessionWhereInput
    orderBy?: DebugSessionOrderByWithRelationInput | DebugSessionOrderByWithRelationInput[]
    cursor?: DebugSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DebugSessionScalarFieldEnum | DebugSessionScalarFieldEnum[]
  }

  /**
   * DebugProject.history
   */
  export type DebugProject$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptHistory
     */
    select?: ScriptHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptHistory
     */
    omit?: ScriptHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptHistoryInclude<ExtArgs> | null
    where?: ScriptHistoryWhereInput
    orderBy?: ScriptHistoryOrderByWithRelationInput | ScriptHistoryOrderByWithRelationInput[]
    cursor?: ScriptHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScriptHistoryScalarFieldEnum | ScriptHistoryScalarFieldEnum[]
  }

  /**
   * DebugProject without action
   */
  export type DebugProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugProject
     */
    select?: DebugProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugProject
     */
    omit?: DebugProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugProjectInclude<ExtArgs> | null
  }


  /**
   * Model ScriptHistory
   */

  export type AggregateScriptHistory = {
    _count: ScriptHistoryCountAggregateOutputType | null
    _min: ScriptHistoryMinAggregateOutputType | null
    _max: ScriptHistoryMaxAggregateOutputType | null
  }

  export type ScriptHistoryMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    projectId: string | null
  }

  export type ScriptHistoryMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    projectId: string | null
  }

  export type ScriptHistoryCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    projectId: number
    _all: number
  }


  export type ScriptHistoryMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    projectId?: true
  }

  export type ScriptHistoryMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    projectId?: true
  }

  export type ScriptHistoryCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    projectId?: true
    _all?: true
  }

  export type ScriptHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScriptHistory to aggregate.
     */
    where?: ScriptHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScriptHistories to fetch.
     */
    orderBy?: ScriptHistoryOrderByWithRelationInput | ScriptHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScriptHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScriptHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScriptHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScriptHistories
    **/
    _count?: true | ScriptHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScriptHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScriptHistoryMaxAggregateInputType
  }

  export type GetScriptHistoryAggregateType<T extends ScriptHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateScriptHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScriptHistory[P]>
      : GetScalarType<T[P], AggregateScriptHistory[P]>
  }




  export type ScriptHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScriptHistoryWhereInput
    orderBy?: ScriptHistoryOrderByWithAggregationInput | ScriptHistoryOrderByWithAggregationInput[]
    by: ScriptHistoryScalarFieldEnum[] | ScriptHistoryScalarFieldEnum
    having?: ScriptHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScriptHistoryCountAggregateInputType | true
    _min?: ScriptHistoryMinAggregateInputType
    _max?: ScriptHistoryMaxAggregateInputType
  }

  export type ScriptHistoryGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    projectId: string
    _count: ScriptHistoryCountAggregateOutputType | null
    _min: ScriptHistoryMinAggregateOutputType | null
    _max: ScriptHistoryMaxAggregateOutputType | null
  }

  type GetScriptHistoryGroupByPayload<T extends ScriptHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScriptHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScriptHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScriptHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ScriptHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ScriptHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | DebugProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scriptHistory"]>

  export type ScriptHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | DebugProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scriptHistory"]>

  export type ScriptHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | DebugProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scriptHistory"]>

  export type ScriptHistorySelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    projectId?: boolean
  }

  export type ScriptHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "projectId", ExtArgs["result"]["scriptHistory"]>
  export type ScriptHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | DebugProjectDefaultArgs<ExtArgs>
  }
  export type ScriptHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | DebugProjectDefaultArgs<ExtArgs>
  }
  export type ScriptHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | DebugProjectDefaultArgs<ExtArgs>
  }

  export type $ScriptHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScriptHistory"
    objects: {
      project: Prisma.$DebugProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      projectId: string
    }, ExtArgs["result"]["scriptHistory"]>
    composites: {}
  }

  type ScriptHistoryGetPayload<S extends boolean | null | undefined | ScriptHistoryDefaultArgs> = $Result.GetResult<Prisma.$ScriptHistoryPayload, S>

  type ScriptHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScriptHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScriptHistoryCountAggregateInputType | true
    }

  export interface ScriptHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScriptHistory'], meta: { name: 'ScriptHistory' } }
    /**
     * Find zero or one ScriptHistory that matches the filter.
     * @param {ScriptHistoryFindUniqueArgs} args - Arguments to find a ScriptHistory
     * @example
     * // Get one ScriptHistory
     * const scriptHistory = await prisma.scriptHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScriptHistoryFindUniqueArgs>(args: SelectSubset<T, ScriptHistoryFindUniqueArgs<ExtArgs>>): Prisma__ScriptHistoryClient<$Result.GetResult<Prisma.$ScriptHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScriptHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScriptHistoryFindUniqueOrThrowArgs} args - Arguments to find a ScriptHistory
     * @example
     * // Get one ScriptHistory
     * const scriptHistory = await prisma.scriptHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScriptHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ScriptHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScriptHistoryClient<$Result.GetResult<Prisma.$ScriptHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScriptHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptHistoryFindFirstArgs} args - Arguments to find a ScriptHistory
     * @example
     * // Get one ScriptHistory
     * const scriptHistory = await prisma.scriptHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScriptHistoryFindFirstArgs>(args?: SelectSubset<T, ScriptHistoryFindFirstArgs<ExtArgs>>): Prisma__ScriptHistoryClient<$Result.GetResult<Prisma.$ScriptHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScriptHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptHistoryFindFirstOrThrowArgs} args - Arguments to find a ScriptHistory
     * @example
     * // Get one ScriptHistory
     * const scriptHistory = await prisma.scriptHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScriptHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ScriptHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScriptHistoryClient<$Result.GetResult<Prisma.$ScriptHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScriptHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScriptHistories
     * const scriptHistories = await prisma.scriptHistory.findMany()
     * 
     * // Get first 10 ScriptHistories
     * const scriptHistories = await prisma.scriptHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scriptHistoryWithIdOnly = await prisma.scriptHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScriptHistoryFindManyArgs>(args?: SelectSubset<T, ScriptHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScriptHistory.
     * @param {ScriptHistoryCreateArgs} args - Arguments to create a ScriptHistory.
     * @example
     * // Create one ScriptHistory
     * const ScriptHistory = await prisma.scriptHistory.create({
     *   data: {
     *     // ... data to create a ScriptHistory
     *   }
     * })
     * 
     */
    create<T extends ScriptHistoryCreateArgs>(args: SelectSubset<T, ScriptHistoryCreateArgs<ExtArgs>>): Prisma__ScriptHistoryClient<$Result.GetResult<Prisma.$ScriptHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScriptHistories.
     * @param {ScriptHistoryCreateManyArgs} args - Arguments to create many ScriptHistories.
     * @example
     * // Create many ScriptHistories
     * const scriptHistory = await prisma.scriptHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScriptHistoryCreateManyArgs>(args?: SelectSubset<T, ScriptHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScriptHistories and returns the data saved in the database.
     * @param {ScriptHistoryCreateManyAndReturnArgs} args - Arguments to create many ScriptHistories.
     * @example
     * // Create many ScriptHistories
     * const scriptHistory = await prisma.scriptHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScriptHistories and only return the `id`
     * const scriptHistoryWithIdOnly = await prisma.scriptHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScriptHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ScriptHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScriptHistory.
     * @param {ScriptHistoryDeleteArgs} args - Arguments to delete one ScriptHistory.
     * @example
     * // Delete one ScriptHistory
     * const ScriptHistory = await prisma.scriptHistory.delete({
     *   where: {
     *     // ... filter to delete one ScriptHistory
     *   }
     * })
     * 
     */
    delete<T extends ScriptHistoryDeleteArgs>(args: SelectSubset<T, ScriptHistoryDeleteArgs<ExtArgs>>): Prisma__ScriptHistoryClient<$Result.GetResult<Prisma.$ScriptHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScriptHistory.
     * @param {ScriptHistoryUpdateArgs} args - Arguments to update one ScriptHistory.
     * @example
     * // Update one ScriptHistory
     * const scriptHistory = await prisma.scriptHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScriptHistoryUpdateArgs>(args: SelectSubset<T, ScriptHistoryUpdateArgs<ExtArgs>>): Prisma__ScriptHistoryClient<$Result.GetResult<Prisma.$ScriptHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScriptHistories.
     * @param {ScriptHistoryDeleteManyArgs} args - Arguments to filter ScriptHistories to delete.
     * @example
     * // Delete a few ScriptHistories
     * const { count } = await prisma.scriptHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScriptHistoryDeleteManyArgs>(args?: SelectSubset<T, ScriptHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScriptHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScriptHistories
     * const scriptHistory = await prisma.scriptHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScriptHistoryUpdateManyArgs>(args: SelectSubset<T, ScriptHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScriptHistories and returns the data updated in the database.
     * @param {ScriptHistoryUpdateManyAndReturnArgs} args - Arguments to update many ScriptHistories.
     * @example
     * // Update many ScriptHistories
     * const scriptHistory = await prisma.scriptHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScriptHistories and only return the `id`
     * const scriptHistoryWithIdOnly = await prisma.scriptHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScriptHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ScriptHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScriptHistory.
     * @param {ScriptHistoryUpsertArgs} args - Arguments to update or create a ScriptHistory.
     * @example
     * // Update or create a ScriptHistory
     * const scriptHistory = await prisma.scriptHistory.upsert({
     *   create: {
     *     // ... data to create a ScriptHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScriptHistory we want to update
     *   }
     * })
     */
    upsert<T extends ScriptHistoryUpsertArgs>(args: SelectSubset<T, ScriptHistoryUpsertArgs<ExtArgs>>): Prisma__ScriptHistoryClient<$Result.GetResult<Prisma.$ScriptHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScriptHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptHistoryCountArgs} args - Arguments to filter ScriptHistories to count.
     * @example
     * // Count the number of ScriptHistories
     * const count = await prisma.scriptHistory.count({
     *   where: {
     *     // ... the filter for the ScriptHistories we want to count
     *   }
     * })
    **/
    count<T extends ScriptHistoryCountArgs>(
      args?: Subset<T, ScriptHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScriptHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScriptHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScriptHistoryAggregateArgs>(args: Subset<T, ScriptHistoryAggregateArgs>): Prisma.PrismaPromise<GetScriptHistoryAggregateType<T>>

    /**
     * Group by ScriptHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptHistoryGroupByArgs} args - Group by arguments.
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
      T extends ScriptHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScriptHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ScriptHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ScriptHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScriptHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScriptHistory model
   */
  readonly fields: ScriptHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScriptHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScriptHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends DebugProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DebugProjectDefaultArgs<ExtArgs>>): Prisma__DebugProjectClient<$Result.GetResult<Prisma.$DebugProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScriptHistory model
   */
  interface ScriptHistoryFieldRefs {
    readonly id: FieldRef<"ScriptHistory", 'String'>
    readonly content: FieldRef<"ScriptHistory", 'String'>
    readonly createdAt: FieldRef<"ScriptHistory", 'DateTime'>
    readonly projectId: FieldRef<"ScriptHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScriptHistory findUnique
   */
  export type ScriptHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptHistory
     */
    select?: ScriptHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptHistory
     */
    omit?: ScriptHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ScriptHistory to fetch.
     */
    where: ScriptHistoryWhereUniqueInput
  }

  /**
   * ScriptHistory findUniqueOrThrow
   */
  export type ScriptHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptHistory
     */
    select?: ScriptHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptHistory
     */
    omit?: ScriptHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ScriptHistory to fetch.
     */
    where: ScriptHistoryWhereUniqueInput
  }

  /**
   * ScriptHistory findFirst
   */
  export type ScriptHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptHistory
     */
    select?: ScriptHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptHistory
     */
    omit?: ScriptHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ScriptHistory to fetch.
     */
    where?: ScriptHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScriptHistories to fetch.
     */
    orderBy?: ScriptHistoryOrderByWithRelationInput | ScriptHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScriptHistories.
     */
    cursor?: ScriptHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScriptHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScriptHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScriptHistories.
     */
    distinct?: ScriptHistoryScalarFieldEnum | ScriptHistoryScalarFieldEnum[]
  }

  /**
   * ScriptHistory findFirstOrThrow
   */
  export type ScriptHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptHistory
     */
    select?: ScriptHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptHistory
     */
    omit?: ScriptHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ScriptHistory to fetch.
     */
    where?: ScriptHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScriptHistories to fetch.
     */
    orderBy?: ScriptHistoryOrderByWithRelationInput | ScriptHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScriptHistories.
     */
    cursor?: ScriptHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScriptHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScriptHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScriptHistories.
     */
    distinct?: ScriptHistoryScalarFieldEnum | ScriptHistoryScalarFieldEnum[]
  }

  /**
   * ScriptHistory findMany
   */
  export type ScriptHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptHistory
     */
    select?: ScriptHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptHistory
     */
    omit?: ScriptHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ScriptHistories to fetch.
     */
    where?: ScriptHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScriptHistories to fetch.
     */
    orderBy?: ScriptHistoryOrderByWithRelationInput | ScriptHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScriptHistories.
     */
    cursor?: ScriptHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScriptHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScriptHistories.
     */
    skip?: number
    distinct?: ScriptHistoryScalarFieldEnum | ScriptHistoryScalarFieldEnum[]
  }

  /**
   * ScriptHistory create
   */
  export type ScriptHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptHistory
     */
    select?: ScriptHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptHistory
     */
    omit?: ScriptHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ScriptHistory.
     */
    data: XOR<ScriptHistoryCreateInput, ScriptHistoryUncheckedCreateInput>
  }

  /**
   * ScriptHistory createMany
   */
  export type ScriptHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScriptHistories.
     */
    data: ScriptHistoryCreateManyInput | ScriptHistoryCreateManyInput[]
  }

  /**
   * ScriptHistory createManyAndReturn
   */
  export type ScriptHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptHistory
     */
    select?: ScriptHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptHistory
     */
    omit?: ScriptHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ScriptHistories.
     */
    data: ScriptHistoryCreateManyInput | ScriptHistoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScriptHistory update
   */
  export type ScriptHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptHistory
     */
    select?: ScriptHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptHistory
     */
    omit?: ScriptHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ScriptHistory.
     */
    data: XOR<ScriptHistoryUpdateInput, ScriptHistoryUncheckedUpdateInput>
    /**
     * Choose, which ScriptHistory to update.
     */
    where: ScriptHistoryWhereUniqueInput
  }

  /**
   * ScriptHistory updateMany
   */
  export type ScriptHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScriptHistories.
     */
    data: XOR<ScriptHistoryUpdateManyMutationInput, ScriptHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ScriptHistories to update
     */
    where?: ScriptHistoryWhereInput
    /**
     * Limit how many ScriptHistories to update.
     */
    limit?: number
  }

  /**
   * ScriptHistory updateManyAndReturn
   */
  export type ScriptHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptHistory
     */
    select?: ScriptHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptHistory
     */
    omit?: ScriptHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ScriptHistories.
     */
    data: XOR<ScriptHistoryUpdateManyMutationInput, ScriptHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ScriptHistories to update
     */
    where?: ScriptHistoryWhereInput
    /**
     * Limit how many ScriptHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScriptHistory upsert
   */
  export type ScriptHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptHistory
     */
    select?: ScriptHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptHistory
     */
    omit?: ScriptHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ScriptHistory to update in case it exists.
     */
    where: ScriptHistoryWhereUniqueInput
    /**
     * In case the ScriptHistory found by the `where` argument doesn't exist, create a new ScriptHistory with this data.
     */
    create: XOR<ScriptHistoryCreateInput, ScriptHistoryUncheckedCreateInput>
    /**
     * In case the ScriptHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScriptHistoryUpdateInput, ScriptHistoryUncheckedUpdateInput>
  }

  /**
   * ScriptHistory delete
   */
  export type ScriptHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptHistory
     */
    select?: ScriptHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptHistory
     */
    omit?: ScriptHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptHistoryInclude<ExtArgs> | null
    /**
     * Filter which ScriptHistory to delete.
     */
    where: ScriptHistoryWhereUniqueInput
  }

  /**
   * ScriptHistory deleteMany
   */
  export type ScriptHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScriptHistories to delete
     */
    where?: ScriptHistoryWhereInput
    /**
     * Limit how many ScriptHistories to delete.
     */
    limit?: number
  }

  /**
   * ScriptHistory without action
   */
  export type ScriptHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptHistory
     */
    select?: ScriptHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptHistory
     */
    omit?: ScriptHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptHistoryInclude<ExtArgs> | null
  }


  /**
   * Model DebugTask
   */

  export type AggregateDebugTask = {
    _count: DebugTaskCountAggregateOutputType | null
    _min: DebugTaskMinAggregateOutputType | null
    _max: DebugTaskMaxAggregateOutputType | null
  }

  export type DebugTaskMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    project: string | null
    url: string | null
    sessionId: string | null
  }

  export type DebugTaskMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    project: string | null
    url: string | null
    sessionId: string | null
  }

  export type DebugTaskCountAggregateOutputType = {
    id: number
    taskId: number
    project: number
    url: number
    process: number
    sessionId: number
    _all: number
  }


  export type DebugTaskMinAggregateInputType = {
    id?: true
    taskId?: true
    project?: true
    url?: true
    sessionId?: true
  }

  export type DebugTaskMaxAggregateInputType = {
    id?: true
    taskId?: true
    project?: true
    url?: true
    sessionId?: true
  }

  export type DebugTaskCountAggregateInputType = {
    id?: true
    taskId?: true
    project?: true
    url?: true
    process?: true
    sessionId?: true
    _all?: true
  }

  export type DebugTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DebugTask to aggregate.
     */
    where?: DebugTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebugTasks to fetch.
     */
    orderBy?: DebugTaskOrderByWithRelationInput | DebugTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DebugTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebugTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebugTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DebugTasks
    **/
    _count?: true | DebugTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DebugTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DebugTaskMaxAggregateInputType
  }

  export type GetDebugTaskAggregateType<T extends DebugTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateDebugTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDebugTask[P]>
      : GetScalarType<T[P], AggregateDebugTask[P]>
  }




  export type DebugTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebugTaskWhereInput
    orderBy?: DebugTaskOrderByWithAggregationInput | DebugTaskOrderByWithAggregationInput[]
    by: DebugTaskScalarFieldEnum[] | DebugTaskScalarFieldEnum
    having?: DebugTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DebugTaskCountAggregateInputType | true
    _min?: DebugTaskMinAggregateInputType
    _max?: DebugTaskMaxAggregateInputType
  }

  export type DebugTaskGroupByOutputType = {
    id: string
    taskId: string
    project: string
    url: string
    process: JsonValue
    sessionId: string
    _count: DebugTaskCountAggregateOutputType | null
    _min: DebugTaskMinAggregateOutputType | null
    _max: DebugTaskMaxAggregateOutputType | null
  }

  type GetDebugTaskGroupByPayload<T extends DebugTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DebugTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DebugTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DebugTaskGroupByOutputType[P]>
            : GetScalarType<T[P], DebugTaskGroupByOutputType[P]>
        }
      >
    >


  export type DebugTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    project?: boolean
    url?: boolean
    process?: boolean
    sessionId?: boolean
    session?: boolean | DebugSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debugTask"]>

  export type DebugTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    project?: boolean
    url?: boolean
    process?: boolean
    sessionId?: boolean
    session?: boolean | DebugSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debugTask"]>

  export type DebugTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    project?: boolean
    url?: boolean
    process?: boolean
    sessionId?: boolean
    session?: boolean | DebugSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debugTask"]>

  export type DebugTaskSelectScalar = {
    id?: boolean
    taskId?: boolean
    project?: boolean
    url?: boolean
    process?: boolean
    sessionId?: boolean
  }

  export type DebugTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "project" | "url" | "process" | "sessionId", ExtArgs["result"]["debugTask"]>
  export type DebugTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | DebugSessionDefaultArgs<ExtArgs>
  }
  export type DebugTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | DebugSessionDefaultArgs<ExtArgs>
  }
  export type DebugTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | DebugSessionDefaultArgs<ExtArgs>
  }

  export type $DebugTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DebugTask"
    objects: {
      session: Prisma.$DebugSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      project: string
      url: string
      process: Prisma.JsonValue
      sessionId: string
    }, ExtArgs["result"]["debugTask"]>
    composites: {}
  }

  type DebugTaskGetPayload<S extends boolean | null | undefined | DebugTaskDefaultArgs> = $Result.GetResult<Prisma.$DebugTaskPayload, S>

  type DebugTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DebugTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DebugTaskCountAggregateInputType | true
    }

  export interface DebugTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DebugTask'], meta: { name: 'DebugTask' } }
    /**
     * Find zero or one DebugTask that matches the filter.
     * @param {DebugTaskFindUniqueArgs} args - Arguments to find a DebugTask
     * @example
     * // Get one DebugTask
     * const debugTask = await prisma.debugTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DebugTaskFindUniqueArgs>(args: SelectSubset<T, DebugTaskFindUniqueArgs<ExtArgs>>): Prisma__DebugTaskClient<$Result.GetResult<Prisma.$DebugTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DebugTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DebugTaskFindUniqueOrThrowArgs} args - Arguments to find a DebugTask
     * @example
     * // Get one DebugTask
     * const debugTask = await prisma.debugTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DebugTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, DebugTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DebugTaskClient<$Result.GetResult<Prisma.$DebugTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DebugTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugTaskFindFirstArgs} args - Arguments to find a DebugTask
     * @example
     * // Get one DebugTask
     * const debugTask = await prisma.debugTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DebugTaskFindFirstArgs>(args?: SelectSubset<T, DebugTaskFindFirstArgs<ExtArgs>>): Prisma__DebugTaskClient<$Result.GetResult<Prisma.$DebugTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DebugTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugTaskFindFirstOrThrowArgs} args - Arguments to find a DebugTask
     * @example
     * // Get one DebugTask
     * const debugTask = await prisma.debugTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DebugTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, DebugTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__DebugTaskClient<$Result.GetResult<Prisma.$DebugTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DebugTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DebugTasks
     * const debugTasks = await prisma.debugTask.findMany()
     * 
     * // Get first 10 DebugTasks
     * const debugTasks = await prisma.debugTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const debugTaskWithIdOnly = await prisma.debugTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DebugTaskFindManyArgs>(args?: SelectSubset<T, DebugTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebugTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DebugTask.
     * @param {DebugTaskCreateArgs} args - Arguments to create a DebugTask.
     * @example
     * // Create one DebugTask
     * const DebugTask = await prisma.debugTask.create({
     *   data: {
     *     // ... data to create a DebugTask
     *   }
     * })
     * 
     */
    create<T extends DebugTaskCreateArgs>(args: SelectSubset<T, DebugTaskCreateArgs<ExtArgs>>): Prisma__DebugTaskClient<$Result.GetResult<Prisma.$DebugTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DebugTasks.
     * @param {DebugTaskCreateManyArgs} args - Arguments to create many DebugTasks.
     * @example
     * // Create many DebugTasks
     * const debugTask = await prisma.debugTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DebugTaskCreateManyArgs>(args?: SelectSubset<T, DebugTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DebugTasks and returns the data saved in the database.
     * @param {DebugTaskCreateManyAndReturnArgs} args - Arguments to create many DebugTasks.
     * @example
     * // Create many DebugTasks
     * const debugTask = await prisma.debugTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DebugTasks and only return the `id`
     * const debugTaskWithIdOnly = await prisma.debugTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DebugTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, DebugTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebugTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DebugTask.
     * @param {DebugTaskDeleteArgs} args - Arguments to delete one DebugTask.
     * @example
     * // Delete one DebugTask
     * const DebugTask = await prisma.debugTask.delete({
     *   where: {
     *     // ... filter to delete one DebugTask
     *   }
     * })
     * 
     */
    delete<T extends DebugTaskDeleteArgs>(args: SelectSubset<T, DebugTaskDeleteArgs<ExtArgs>>): Prisma__DebugTaskClient<$Result.GetResult<Prisma.$DebugTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DebugTask.
     * @param {DebugTaskUpdateArgs} args - Arguments to update one DebugTask.
     * @example
     * // Update one DebugTask
     * const debugTask = await prisma.debugTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DebugTaskUpdateArgs>(args: SelectSubset<T, DebugTaskUpdateArgs<ExtArgs>>): Prisma__DebugTaskClient<$Result.GetResult<Prisma.$DebugTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DebugTasks.
     * @param {DebugTaskDeleteManyArgs} args - Arguments to filter DebugTasks to delete.
     * @example
     * // Delete a few DebugTasks
     * const { count } = await prisma.debugTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DebugTaskDeleteManyArgs>(args?: SelectSubset<T, DebugTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DebugTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DebugTasks
     * const debugTask = await prisma.debugTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DebugTaskUpdateManyArgs>(args: SelectSubset<T, DebugTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DebugTasks and returns the data updated in the database.
     * @param {DebugTaskUpdateManyAndReturnArgs} args - Arguments to update many DebugTasks.
     * @example
     * // Update many DebugTasks
     * const debugTask = await prisma.debugTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DebugTasks and only return the `id`
     * const debugTaskWithIdOnly = await prisma.debugTask.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DebugTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, DebugTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebugTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DebugTask.
     * @param {DebugTaskUpsertArgs} args - Arguments to update or create a DebugTask.
     * @example
     * // Update or create a DebugTask
     * const debugTask = await prisma.debugTask.upsert({
     *   create: {
     *     // ... data to create a DebugTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DebugTask we want to update
     *   }
     * })
     */
    upsert<T extends DebugTaskUpsertArgs>(args: SelectSubset<T, DebugTaskUpsertArgs<ExtArgs>>): Prisma__DebugTaskClient<$Result.GetResult<Prisma.$DebugTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DebugTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugTaskCountArgs} args - Arguments to filter DebugTasks to count.
     * @example
     * // Count the number of DebugTasks
     * const count = await prisma.debugTask.count({
     *   where: {
     *     // ... the filter for the DebugTasks we want to count
     *   }
     * })
    **/
    count<T extends DebugTaskCountArgs>(
      args?: Subset<T, DebugTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DebugTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DebugTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DebugTaskAggregateArgs>(args: Subset<T, DebugTaskAggregateArgs>): Prisma.PrismaPromise<GetDebugTaskAggregateType<T>>

    /**
     * Group by DebugTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebugTaskGroupByArgs} args - Group by arguments.
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
      T extends DebugTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DebugTaskGroupByArgs['orderBy'] }
        : { orderBy?: DebugTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DebugTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDebugTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DebugTask model
   */
  readonly fields: DebugTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DebugTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DebugTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends DebugSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DebugSessionDefaultArgs<ExtArgs>>): Prisma__DebugSessionClient<$Result.GetResult<Prisma.$DebugSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DebugTask model
   */
  interface DebugTaskFieldRefs {
    readonly id: FieldRef<"DebugTask", 'String'>
    readonly taskId: FieldRef<"DebugTask", 'String'>
    readonly project: FieldRef<"DebugTask", 'String'>
    readonly url: FieldRef<"DebugTask", 'String'>
    readonly process: FieldRef<"DebugTask", 'Json'>
    readonly sessionId: FieldRef<"DebugTask", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DebugTask findUnique
   */
  export type DebugTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugTask
     */
    select?: DebugTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugTask
     */
    omit?: DebugTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugTaskInclude<ExtArgs> | null
    /**
     * Filter, which DebugTask to fetch.
     */
    where: DebugTaskWhereUniqueInput
  }

  /**
   * DebugTask findUniqueOrThrow
   */
  export type DebugTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugTask
     */
    select?: DebugTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugTask
     */
    omit?: DebugTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugTaskInclude<ExtArgs> | null
    /**
     * Filter, which DebugTask to fetch.
     */
    where: DebugTaskWhereUniqueInput
  }

  /**
   * DebugTask findFirst
   */
  export type DebugTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugTask
     */
    select?: DebugTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugTask
     */
    omit?: DebugTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugTaskInclude<ExtArgs> | null
    /**
     * Filter, which DebugTask to fetch.
     */
    where?: DebugTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebugTasks to fetch.
     */
    orderBy?: DebugTaskOrderByWithRelationInput | DebugTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DebugTasks.
     */
    cursor?: DebugTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebugTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebugTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DebugTasks.
     */
    distinct?: DebugTaskScalarFieldEnum | DebugTaskScalarFieldEnum[]
  }

  /**
   * DebugTask findFirstOrThrow
   */
  export type DebugTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugTask
     */
    select?: DebugTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugTask
     */
    omit?: DebugTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugTaskInclude<ExtArgs> | null
    /**
     * Filter, which DebugTask to fetch.
     */
    where?: DebugTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebugTasks to fetch.
     */
    orderBy?: DebugTaskOrderByWithRelationInput | DebugTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DebugTasks.
     */
    cursor?: DebugTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebugTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebugTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DebugTasks.
     */
    distinct?: DebugTaskScalarFieldEnum | DebugTaskScalarFieldEnum[]
  }

  /**
   * DebugTask findMany
   */
  export type DebugTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugTask
     */
    select?: DebugTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugTask
     */
    omit?: DebugTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugTaskInclude<ExtArgs> | null
    /**
     * Filter, which DebugTasks to fetch.
     */
    where?: DebugTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebugTasks to fetch.
     */
    orderBy?: DebugTaskOrderByWithRelationInput | DebugTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DebugTasks.
     */
    cursor?: DebugTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebugTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebugTasks.
     */
    skip?: number
    distinct?: DebugTaskScalarFieldEnum | DebugTaskScalarFieldEnum[]
  }

  /**
   * DebugTask create
   */
  export type DebugTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugTask
     */
    select?: DebugTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugTask
     */
    omit?: DebugTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a DebugTask.
     */
    data: XOR<DebugTaskCreateInput, DebugTaskUncheckedCreateInput>
  }

  /**
   * DebugTask createMany
   */
  export type DebugTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DebugTasks.
     */
    data: DebugTaskCreateManyInput | DebugTaskCreateManyInput[]
  }

  /**
   * DebugTask createManyAndReturn
   */
  export type DebugTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugTask
     */
    select?: DebugTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DebugTask
     */
    omit?: DebugTaskOmit<ExtArgs> | null
    /**
     * The data used to create many DebugTasks.
     */
    data: DebugTaskCreateManyInput | DebugTaskCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DebugTask update
   */
  export type DebugTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugTask
     */
    select?: DebugTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugTask
     */
    omit?: DebugTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a DebugTask.
     */
    data: XOR<DebugTaskUpdateInput, DebugTaskUncheckedUpdateInput>
    /**
     * Choose, which DebugTask to update.
     */
    where: DebugTaskWhereUniqueInput
  }

  /**
   * DebugTask updateMany
   */
  export type DebugTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DebugTasks.
     */
    data: XOR<DebugTaskUpdateManyMutationInput, DebugTaskUncheckedUpdateManyInput>
    /**
     * Filter which DebugTasks to update
     */
    where?: DebugTaskWhereInput
    /**
     * Limit how many DebugTasks to update.
     */
    limit?: number
  }

  /**
   * DebugTask updateManyAndReturn
   */
  export type DebugTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugTask
     */
    select?: DebugTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DebugTask
     */
    omit?: DebugTaskOmit<ExtArgs> | null
    /**
     * The data used to update DebugTasks.
     */
    data: XOR<DebugTaskUpdateManyMutationInput, DebugTaskUncheckedUpdateManyInput>
    /**
     * Filter which DebugTasks to update
     */
    where?: DebugTaskWhereInput
    /**
     * Limit how many DebugTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DebugTask upsert
   */
  export type DebugTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugTask
     */
    select?: DebugTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugTask
     */
    omit?: DebugTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the DebugTask to update in case it exists.
     */
    where: DebugTaskWhereUniqueInput
    /**
     * In case the DebugTask found by the `where` argument doesn't exist, create a new DebugTask with this data.
     */
    create: XOR<DebugTaskCreateInput, DebugTaskUncheckedCreateInput>
    /**
     * In case the DebugTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DebugTaskUpdateInput, DebugTaskUncheckedUpdateInput>
  }

  /**
   * DebugTask delete
   */
  export type DebugTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugTask
     */
    select?: DebugTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugTask
     */
    omit?: DebugTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugTaskInclude<ExtArgs> | null
    /**
     * Filter which DebugTask to delete.
     */
    where: DebugTaskWhereUniqueInput
  }

  /**
   * DebugTask deleteMany
   */
  export type DebugTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DebugTasks to delete
     */
    where?: DebugTaskWhereInput
    /**
     * Limit how many DebugTasks to delete.
     */
    limit?: number
  }

  /**
   * DebugTask without action
   */
  export type DebugTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebugTask
     */
    select?: DebugTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebugTask
     */
    omit?: DebugTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebugTaskInclude<ExtArgs> | null
  }


  /**
   * Model Request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestMinAggregateOutputType = {
    id: string | null
    url: string | null
    method: string | null
    body: string | null
    timestamp: Date | null
    debugSessionId: string | null
  }

  export type RequestMaxAggregateOutputType = {
    id: string | null
    url: string | null
    method: string | null
    body: string | null
    timestamp: Date | null
    debugSessionId: string | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    url: number
    method: number
    headers: number
    body: number
    timestamp: number
    debugSessionId: number
    _all: number
  }


  export type RequestMinAggregateInputType = {
    id?: true
    url?: true
    method?: true
    body?: true
    timestamp?: true
    debugSessionId?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    url?: true
    method?: true
    body?: true
    timestamp?: true
    debugSessionId?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    url?: true
    method?: true
    headers?: true
    body?: true
    timestamp?: true
    debugSessionId?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithAggregationInput | RequestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    id: string
    url: string
    method: string
    headers: JsonValue | null
    body: string | null
    timestamp: Date
    debugSessionId: string
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    method?: boolean
    headers?: boolean
    body?: boolean
    timestamp?: boolean
    debugSessionId?: boolean
    debugSession?: boolean | DebugSessionDefaultArgs<ExtArgs>
    response?: boolean | Request$responseArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    method?: boolean
    headers?: boolean
    body?: boolean
    timestamp?: boolean
    debugSessionId?: boolean
    debugSession?: boolean | DebugSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    method?: boolean
    headers?: boolean
    body?: boolean
    timestamp?: boolean
    debugSessionId?: boolean
    debugSession?: boolean | DebugSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectScalar = {
    id?: boolean
    url?: boolean
    method?: boolean
    headers?: boolean
    body?: boolean
    timestamp?: boolean
    debugSessionId?: boolean
  }

  export type RequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "method" | "headers" | "body" | "timestamp" | "debugSessionId", ExtArgs["result"]["request"]>
  export type RequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    debugSession?: boolean | DebugSessionDefaultArgs<ExtArgs>
    response?: boolean | Request$responseArgs<ExtArgs>
  }
  export type RequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    debugSession?: boolean | DebugSessionDefaultArgs<ExtArgs>
  }
  export type RequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    debugSession?: boolean | DebugSessionDefaultArgs<ExtArgs>
  }

  export type $RequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Request"
    objects: {
      debugSession: Prisma.$DebugSessionPayload<ExtArgs>
      response: Prisma.$ResponsePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      method: string
      headers: Prisma.JsonValue | null
      body: string | null
      timestamp: Date
      debugSessionId: string
    }, ExtArgs["result"]["request"]>
    composites: {}
  }

  type RequestGetPayload<S extends boolean | null | undefined | RequestDefaultArgs> = $Result.GetResult<Prisma.$RequestPayload, S>

  type RequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Request'], meta: { name: 'Request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestFindUniqueArgs>(args: SelectSubset<T, RequestFindUniqueArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestFindFirstArgs>(args?: SelectSubset<T, RequestFindFirstArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestFindManyArgs>(args?: SelectSubset<T, RequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
     */
    create<T extends RequestCreateArgs>(args: SelectSubset<T, RequestCreateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requests.
     * @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestCreateManyArgs>(args?: SelectSubset<T, RequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requests and returns the data saved in the database.
     * @param {RequestCreateManyAndReturnArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
     */
    delete<T extends RequestDeleteArgs>(args: SelectSubset<T, RequestDeleteArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestUpdateArgs>(args: SelectSubset<T, RequestUpdateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestDeleteManyArgs>(args?: SelectSubset<T, RequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestUpdateManyArgs>(args: SelectSubset<T, RequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests and returns the data updated in the database.
     * @param {RequestUpdateManyAndReturnArgs} args - Arguments to update many Requests.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
     */
    upsert<T extends RequestUpsertArgs>(args: SelectSubset<T, RequestUpsertArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
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
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Request model
   */
  readonly fields: RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    debugSession<T extends DebugSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DebugSessionDefaultArgs<ExtArgs>>): Prisma__DebugSessionClient<$Result.GetResult<Prisma.$DebugSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    response<T extends Request$responseArgs<ExtArgs> = {}>(args?: Subset<T, Request$responseArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Request model
   */
  interface RequestFieldRefs {
    readonly id: FieldRef<"Request", 'String'>
    readonly url: FieldRef<"Request", 'String'>
    readonly method: FieldRef<"Request", 'String'>
    readonly headers: FieldRef<"Request", 'Json'>
    readonly body: FieldRef<"Request", 'String'>
    readonly timestamp: FieldRef<"Request", 'DateTime'>
    readonly debugSessionId: FieldRef<"Request", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Request findUnique
   */
  export type RequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findFirst
   */
  export type RequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findMany
   */
  export type RequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request create
   */
  export type RequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }

  /**
   * Request createMany
   */
  export type RequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
  }

  /**
   * Request createManyAndReturn
   */
  export type RequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request update
   */
  export type RequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
  }

  /**
   * Request updateManyAndReturn
   */
  export type RequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request upsert
   */
  export type RequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }

  /**
   * Request delete
   */
  export type RequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to delete.
     */
    limit?: number
  }

  /**
   * Request.response
   */
  export type Request$responseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    where?: ResponseWhereInput
  }

  /**
   * Request without action
   */
  export type RequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
  }


  /**
   * Model Response
   */

  export type AggregateResponse = {
    _count: ResponseCountAggregateOutputType | null
    _avg: ResponseAvgAggregateOutputType | null
    _sum: ResponseSumAggregateOutputType | null
    _min: ResponseMinAggregateOutputType | null
    _max: ResponseMaxAggregateOutputType | null
  }

  export type ResponseAvgAggregateOutputType = {
    statusCode: number | null
  }

  export type ResponseSumAggregateOutputType = {
    statusCode: number | null
  }

  export type ResponseMinAggregateOutputType = {
    id: string | null
    statusCode: number | null
    body: string | null
    timestamp: Date | null
    requestId: string | null
    debugSessionId: string | null
  }

  export type ResponseMaxAggregateOutputType = {
    id: string | null
    statusCode: number | null
    body: string | null
    timestamp: Date | null
    requestId: string | null
    debugSessionId: string | null
  }

  export type ResponseCountAggregateOutputType = {
    id: number
    statusCode: number
    headers: number
    body: number
    timestamp: number
    requestId: number
    debugSessionId: number
    _all: number
  }


  export type ResponseAvgAggregateInputType = {
    statusCode?: true
  }

  export type ResponseSumAggregateInputType = {
    statusCode?: true
  }

  export type ResponseMinAggregateInputType = {
    id?: true
    statusCode?: true
    body?: true
    timestamp?: true
    requestId?: true
    debugSessionId?: true
  }

  export type ResponseMaxAggregateInputType = {
    id?: true
    statusCode?: true
    body?: true
    timestamp?: true
    requestId?: true
    debugSessionId?: true
  }

  export type ResponseCountAggregateInputType = {
    id?: true
    statusCode?: true
    headers?: true
    body?: true
    timestamp?: true
    requestId?: true
    debugSessionId?: true
    _all?: true
  }

  export type ResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Response to aggregate.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Responses
    **/
    _count?: true | ResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResponseMaxAggregateInputType
  }

  export type GetResponseAggregateType<T extends ResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResponse[P]>
      : GetScalarType<T[P], AggregateResponse[P]>
  }




  export type ResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponseWhereInput
    orderBy?: ResponseOrderByWithAggregationInput | ResponseOrderByWithAggregationInput[]
    by: ResponseScalarFieldEnum[] | ResponseScalarFieldEnum
    having?: ResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResponseCountAggregateInputType | true
    _avg?: ResponseAvgAggregateInputType
    _sum?: ResponseSumAggregateInputType
    _min?: ResponseMinAggregateInputType
    _max?: ResponseMaxAggregateInputType
  }

  export type ResponseGroupByOutputType = {
    id: string
    statusCode: number
    headers: JsonValue | null
    body: string | null
    timestamp: Date
    requestId: string
    debugSessionId: string
    _count: ResponseCountAggregateOutputType | null
    _avg: ResponseAvgAggregateOutputType | null
    _sum: ResponseSumAggregateOutputType | null
    _min: ResponseMinAggregateOutputType | null
    _max: ResponseMaxAggregateOutputType | null
  }

  type GetResponseGroupByPayload<T extends ResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResponseGroupByOutputType[P]>
            : GetScalarType<T[P], ResponseGroupByOutputType[P]>
        }
      >
    >


  export type ResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statusCode?: boolean
    headers?: boolean
    body?: boolean
    timestamp?: boolean
    requestId?: boolean
    debugSessionId?: boolean
    request?: boolean | RequestDefaultArgs<ExtArgs>
    debugSession?: boolean | DebugSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["response"]>

  export type ResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statusCode?: boolean
    headers?: boolean
    body?: boolean
    timestamp?: boolean
    requestId?: boolean
    debugSessionId?: boolean
    request?: boolean | RequestDefaultArgs<ExtArgs>
    debugSession?: boolean | DebugSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["response"]>

  export type ResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statusCode?: boolean
    headers?: boolean
    body?: boolean
    timestamp?: boolean
    requestId?: boolean
    debugSessionId?: boolean
    request?: boolean | RequestDefaultArgs<ExtArgs>
    debugSession?: boolean | DebugSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["response"]>

  export type ResponseSelectScalar = {
    id?: boolean
    statusCode?: boolean
    headers?: boolean
    body?: boolean
    timestamp?: boolean
    requestId?: boolean
    debugSessionId?: boolean
  }

  export type ResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "statusCode" | "headers" | "body" | "timestamp" | "requestId" | "debugSessionId", ExtArgs["result"]["response"]>
  export type ResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestDefaultArgs<ExtArgs>
    debugSession?: boolean | DebugSessionDefaultArgs<ExtArgs>
  }
  export type ResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestDefaultArgs<ExtArgs>
    debugSession?: boolean | DebugSessionDefaultArgs<ExtArgs>
  }
  export type ResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestDefaultArgs<ExtArgs>
    debugSession?: boolean | DebugSessionDefaultArgs<ExtArgs>
  }

  export type $ResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Response"
    objects: {
      request: Prisma.$RequestPayload<ExtArgs>
      debugSession: Prisma.$DebugSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      statusCode: number
      headers: Prisma.JsonValue | null
      body: string | null
      timestamp: Date
      requestId: string
      debugSessionId: string
    }, ExtArgs["result"]["response"]>
    composites: {}
  }

  type ResponseGetPayload<S extends boolean | null | undefined | ResponseDefaultArgs> = $Result.GetResult<Prisma.$ResponsePayload, S>

  type ResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResponseCountAggregateInputType | true
    }

  export interface ResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Response'], meta: { name: 'Response' } }
    /**
     * Find zero or one Response that matches the filter.
     * @param {ResponseFindUniqueArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResponseFindUniqueArgs>(args: SelectSubset<T, ResponseFindUniqueArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Response that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResponseFindUniqueOrThrowArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, ResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Response that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindFirstArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResponseFindFirstArgs>(args?: SelectSubset<T, ResponseFindFirstArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Response that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindFirstOrThrowArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, ResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Responses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Responses
     * const responses = await prisma.response.findMany()
     * 
     * // Get first 10 Responses
     * const responses = await prisma.response.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const responseWithIdOnly = await prisma.response.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResponseFindManyArgs>(args?: SelectSubset<T, ResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Response.
     * @param {ResponseCreateArgs} args - Arguments to create a Response.
     * @example
     * // Create one Response
     * const Response = await prisma.response.create({
     *   data: {
     *     // ... data to create a Response
     *   }
     * })
     * 
     */
    create<T extends ResponseCreateArgs>(args: SelectSubset<T, ResponseCreateArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Responses.
     * @param {ResponseCreateManyArgs} args - Arguments to create many Responses.
     * @example
     * // Create many Responses
     * const response = await prisma.response.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResponseCreateManyArgs>(args?: SelectSubset<T, ResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Responses and returns the data saved in the database.
     * @param {ResponseCreateManyAndReturnArgs} args - Arguments to create many Responses.
     * @example
     * // Create many Responses
     * const response = await prisma.response.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Responses and only return the `id`
     * const responseWithIdOnly = await prisma.response.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, ResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Response.
     * @param {ResponseDeleteArgs} args - Arguments to delete one Response.
     * @example
     * // Delete one Response
     * const Response = await prisma.response.delete({
     *   where: {
     *     // ... filter to delete one Response
     *   }
     * })
     * 
     */
    delete<T extends ResponseDeleteArgs>(args: SelectSubset<T, ResponseDeleteArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Response.
     * @param {ResponseUpdateArgs} args - Arguments to update one Response.
     * @example
     * // Update one Response
     * const response = await prisma.response.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResponseUpdateArgs>(args: SelectSubset<T, ResponseUpdateArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Responses.
     * @param {ResponseDeleteManyArgs} args - Arguments to filter Responses to delete.
     * @example
     * // Delete a few Responses
     * const { count } = await prisma.response.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResponseDeleteManyArgs>(args?: SelectSubset<T, ResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Responses
     * const response = await prisma.response.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResponseUpdateManyArgs>(args: SelectSubset<T, ResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responses and returns the data updated in the database.
     * @param {ResponseUpdateManyAndReturnArgs} args - Arguments to update many Responses.
     * @example
     * // Update many Responses
     * const response = await prisma.response.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Responses and only return the `id`
     * const responseWithIdOnly = await prisma.response.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, ResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Response.
     * @param {ResponseUpsertArgs} args - Arguments to update or create a Response.
     * @example
     * // Update or create a Response
     * const response = await prisma.response.upsert({
     *   create: {
     *     // ... data to create a Response
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Response we want to update
     *   }
     * })
     */
    upsert<T extends ResponseUpsertArgs>(args: SelectSubset<T, ResponseUpsertArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseCountArgs} args - Arguments to filter Responses to count.
     * @example
     * // Count the number of Responses
     * const count = await prisma.response.count({
     *   where: {
     *     // ... the filter for the Responses we want to count
     *   }
     * })
    **/
    count<T extends ResponseCountArgs>(
      args?: Subset<T, ResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResponseAggregateArgs>(args: Subset<T, ResponseAggregateArgs>): Prisma.PrismaPromise<GetResponseAggregateType<T>>

    /**
     * Group by Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseGroupByArgs} args - Group by arguments.
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
      T extends ResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResponseGroupByArgs['orderBy'] }
        : { orderBy?: ResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Response model
   */
  readonly fields: ResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Response.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends RequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RequestDefaultArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    debugSession<T extends DebugSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DebugSessionDefaultArgs<ExtArgs>>): Prisma__DebugSessionClient<$Result.GetResult<Prisma.$DebugSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Response model
   */
  interface ResponseFieldRefs {
    readonly id: FieldRef<"Response", 'String'>
    readonly statusCode: FieldRef<"Response", 'Int'>
    readonly headers: FieldRef<"Response", 'Json'>
    readonly body: FieldRef<"Response", 'String'>
    readonly timestamp: FieldRef<"Response", 'DateTime'>
    readonly requestId: FieldRef<"Response", 'String'>
    readonly debugSessionId: FieldRef<"Response", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Response findUnique
   */
  export type ResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response findUniqueOrThrow
   */
  export type ResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response findFirst
   */
  export type ResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responses.
     */
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Response findFirstOrThrow
   */
  export type ResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responses.
     */
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Response findMany
   */
  export type ResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Responses to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Response create
   */
  export type ResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a Response.
     */
    data: XOR<ResponseCreateInput, ResponseUncheckedCreateInput>
  }

  /**
   * Response createMany
   */
  export type ResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Responses.
     */
    data: ResponseCreateManyInput | ResponseCreateManyInput[]
  }

  /**
   * Response createManyAndReturn
   */
  export type ResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * The data used to create many Responses.
     */
    data: ResponseCreateManyInput | ResponseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Response update
   */
  export type ResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a Response.
     */
    data: XOR<ResponseUpdateInput, ResponseUncheckedUpdateInput>
    /**
     * Choose, which Response to update.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response updateMany
   */
  export type ResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Responses.
     */
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyInput>
    /**
     * Filter which Responses to update
     */
    where?: ResponseWhereInput
    /**
     * Limit how many Responses to update.
     */
    limit?: number
  }

  /**
   * Response updateManyAndReturn
   */
  export type ResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * The data used to update Responses.
     */
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyInput>
    /**
     * Filter which Responses to update
     */
    where?: ResponseWhereInput
    /**
     * Limit how many Responses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Response upsert
   */
  export type ResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the Response to update in case it exists.
     */
    where: ResponseWhereUniqueInput
    /**
     * In case the Response found by the `where` argument doesn't exist, create a new Response with this data.
     */
    create: XOR<ResponseCreateInput, ResponseUncheckedCreateInput>
    /**
     * In case the Response was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResponseUpdateInput, ResponseUncheckedUpdateInput>
  }

  /**
   * Response delete
   */
  export type ResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter which Response to delete.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response deleteMany
   */
  export type ResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Responses to delete
     */
    where?: ResponseWhereInput
    /**
     * Limit how many Responses to delete.
     */
    limit?: number
  }

  /**
   * Response without action
   */
  export type ResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    settings: 'settings'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    priority: 'priority',
    progress: 'progress',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId',
    parentId: 'parentId',
    scheduleId: 'scheduleId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskLogScalarFieldEnum: {
    id: 'id',
    message: 'message',
    level: 'level',
    createdAt: 'createdAt',
    taskId: 'taskId'
  };

  export type TaskLogScalarFieldEnum = (typeof TaskLogScalarFieldEnum)[keyof typeof TaskLogScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    cron: 'cron',
    active: 'active',
    nextRun: 'nextRun',
    lastRun: 'lastRun',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const DebugSessionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    status: 'status',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    data: 'data',
    projectId: 'projectId'
  };

  export type DebugSessionScalarFieldEnum = (typeof DebugSessionScalarFieldEnum)[keyof typeof DebugSessionScalarFieldEnum]


  export const DebugProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    script: 'script',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DebugProjectScalarFieldEnum = (typeof DebugProjectScalarFieldEnum)[keyof typeof DebugProjectScalarFieldEnum]


  export const ScriptHistoryScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    projectId: 'projectId'
  };

  export type ScriptHistoryScalarFieldEnum = (typeof ScriptHistoryScalarFieldEnum)[keyof typeof ScriptHistoryScalarFieldEnum]


  export const DebugTaskScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    project: 'project',
    url: 'url',
    process: 'process',
    sessionId: 'sessionId'
  };

  export type DebugTaskScalarFieldEnum = (typeof DebugTaskScalarFieldEnum)[keyof typeof DebugTaskScalarFieldEnum]


  export const RequestScalarFieldEnum: {
    id: 'id',
    url: 'url',
    method: 'method',
    headers: 'headers',
    body: 'body',
    timestamp: 'timestamp',
    debugSessionId: 'debugSessionId'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const ResponseScalarFieldEnum: {
    id: 'id',
    statusCode: 'statusCode',
    headers: 'headers',
    body: 'body',
    timestamp: 'timestamp',
    requestId: 'requestId',
    debugSessionId: 'debugSessionId'
  };

  export type ResponseScalarFieldEnum = (typeof ResponseScalarFieldEnum)[keyof typeof ResponseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'LogLevel'
   */
  export type EnumLogLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogLevel'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DebugType'
   */
  export type EnumDebugTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DebugType'>
    


  /**
   * Reference to a field of type 'DebugStatus'
   */
  export type EnumDebugStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DebugStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    settings?: JsonNullableFilter<"Project">
    tasks?: TaskListRelationFilter
    schedules?: ScheduleListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    settings?: SortOrderInput | SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    schedules?: ScheduleOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    settings?: JsonNullableFilter<"Project">
    tasks?: TaskListRelationFilter
    schedules?: ScheduleListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    settings?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    settings?: JsonNullableWithAggregatesFilter<"Project">
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    name?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    progress?: FloatFilter<"Task"> | number
    startedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    projectId?: StringFilter<"Task"> | string
    parentId?: StringNullableFilter<"Task"> | string | null
    scheduleId?: StringNullableFilter<"Task"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    parent?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
    children?: TaskListRelationFilter
    logs?: TaskLogListRelationFilter
    schedule?: XOR<ScheduleNullableScalarRelationFilter, ScheduleWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    progress?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    scheduleId?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
    parent?: TaskOrderByWithRelationInput
    children?: TaskOrderByRelationAggregateInput
    logs?: TaskLogOrderByRelationAggregateInput
    schedule?: ScheduleOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    name?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    progress?: FloatFilter<"Task"> | number
    startedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    projectId?: StringFilter<"Task"> | string
    parentId?: StringNullableFilter<"Task"> | string | null
    scheduleId?: StringNullableFilter<"Task"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    parent?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
    children?: TaskListRelationFilter
    logs?: TaskLogListRelationFilter
    schedule?: XOR<ScheduleNullableScalarRelationFilter, ScheduleWhereInput> | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    progress?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    scheduleId?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    name?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityWithAggregatesFilter<"Task"> | $Enums.Priority
    progress?: FloatWithAggregatesFilter<"Task"> | number
    startedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    projectId?: StringWithAggregatesFilter<"Task"> | string
    parentId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    scheduleId?: StringNullableWithAggregatesFilter<"Task"> | string | null
  }

  export type TaskLogWhereInput = {
    AND?: TaskLogWhereInput | TaskLogWhereInput[]
    OR?: TaskLogWhereInput[]
    NOT?: TaskLogWhereInput | TaskLogWhereInput[]
    id?: StringFilter<"TaskLog"> | string
    message?: StringFilter<"TaskLog"> | string
    level?: EnumLogLevelFilter<"TaskLog"> | $Enums.LogLevel
    createdAt?: DateTimeFilter<"TaskLog"> | Date | string
    taskId?: StringFilter<"TaskLog"> | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type TaskLogOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    taskId?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type TaskLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskLogWhereInput | TaskLogWhereInput[]
    OR?: TaskLogWhereInput[]
    NOT?: TaskLogWhereInput | TaskLogWhereInput[]
    message?: StringFilter<"TaskLog"> | string
    level?: EnumLogLevelFilter<"TaskLog"> | $Enums.LogLevel
    createdAt?: DateTimeFilter<"TaskLog"> | Date | string
    taskId?: StringFilter<"TaskLog"> | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type TaskLogOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    taskId?: SortOrder
    _count?: TaskLogCountOrderByAggregateInput
    _max?: TaskLogMaxOrderByAggregateInput
    _min?: TaskLogMinOrderByAggregateInput
  }

  export type TaskLogScalarWhereWithAggregatesInput = {
    AND?: TaskLogScalarWhereWithAggregatesInput | TaskLogScalarWhereWithAggregatesInput[]
    OR?: TaskLogScalarWhereWithAggregatesInput[]
    NOT?: TaskLogScalarWhereWithAggregatesInput | TaskLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskLog"> | string
    message?: StringWithAggregatesFilter<"TaskLog"> | string
    level?: EnumLogLevelWithAggregatesFilter<"TaskLog"> | $Enums.LogLevel
    createdAt?: DateTimeWithAggregatesFilter<"TaskLog"> | Date | string
    taskId?: StringWithAggregatesFilter<"TaskLog"> | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: StringFilter<"Schedule"> | string
    name?: StringFilter<"Schedule"> | string
    description?: StringNullableFilter<"Schedule"> | string | null
    cron?: StringNullableFilter<"Schedule"> | string | null
    active?: BoolFilter<"Schedule"> | boolean
    nextRun?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    lastRun?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    projectId?: StringFilter<"Schedule"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    cron?: SortOrderInput | SortOrder
    active?: SortOrder
    nextRun?: SortOrderInput | SortOrder
    lastRun?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    name?: StringFilter<"Schedule"> | string
    description?: StringNullableFilter<"Schedule"> | string | null
    cron?: StringNullableFilter<"Schedule"> | string | null
    active?: BoolFilter<"Schedule"> | boolean
    nextRun?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    lastRun?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    projectId?: StringFilter<"Schedule"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    tasks?: TaskListRelationFilter
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    cron?: SortOrderInput | SortOrder
    active?: SortOrder
    nextRun?: SortOrderInput | SortOrder
    lastRun?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Schedule"> | string
    name?: StringWithAggregatesFilter<"Schedule"> | string
    description?: StringNullableWithAggregatesFilter<"Schedule"> | string | null
    cron?: StringNullableWithAggregatesFilter<"Schedule"> | string | null
    active?: BoolWithAggregatesFilter<"Schedule"> | boolean
    nextRun?: DateTimeNullableWithAggregatesFilter<"Schedule"> | Date | string | null
    lastRun?: DateTimeNullableWithAggregatesFilter<"Schedule"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    projectId?: StringWithAggregatesFilter<"Schedule"> | string
  }

  export type DebugSessionWhereInput = {
    AND?: DebugSessionWhereInput | DebugSessionWhereInput[]
    OR?: DebugSessionWhereInput[]
    NOT?: DebugSessionWhereInput | DebugSessionWhereInput[]
    id?: StringFilter<"DebugSession"> | string
    type?: EnumDebugTypeFilter<"DebugSession"> | $Enums.DebugType
    status?: EnumDebugStatusFilter<"DebugSession"> | $Enums.DebugStatus
    startedAt?: DateTimeFilter<"DebugSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"DebugSession"> | Date | string | null
    data?: JsonNullableFilter<"DebugSession">
    projectId?: StringNullableFilter<"DebugSession"> | string | null
    requests?: RequestListRelationFilter
    responses?: ResponseListRelationFilter
    project?: XOR<DebugProjectNullableScalarRelationFilter, DebugProjectWhereInput> | null
    debugTasks?: DebugTaskListRelationFilter
  }

  export type DebugSessionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    requests?: RequestOrderByRelationAggregateInput
    responses?: ResponseOrderByRelationAggregateInput
    project?: DebugProjectOrderByWithRelationInput
    debugTasks?: DebugTaskOrderByRelationAggregateInput
  }

  export type DebugSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DebugSessionWhereInput | DebugSessionWhereInput[]
    OR?: DebugSessionWhereInput[]
    NOT?: DebugSessionWhereInput | DebugSessionWhereInput[]
    type?: EnumDebugTypeFilter<"DebugSession"> | $Enums.DebugType
    status?: EnumDebugStatusFilter<"DebugSession"> | $Enums.DebugStatus
    startedAt?: DateTimeFilter<"DebugSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"DebugSession"> | Date | string | null
    data?: JsonNullableFilter<"DebugSession">
    projectId?: StringNullableFilter<"DebugSession"> | string | null
    requests?: RequestListRelationFilter
    responses?: ResponseListRelationFilter
    project?: XOR<DebugProjectNullableScalarRelationFilter, DebugProjectWhereInput> | null
    debugTasks?: DebugTaskListRelationFilter
  }, "id">

  export type DebugSessionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    _count?: DebugSessionCountOrderByAggregateInput
    _max?: DebugSessionMaxOrderByAggregateInput
    _min?: DebugSessionMinOrderByAggregateInput
  }

  export type DebugSessionScalarWhereWithAggregatesInput = {
    AND?: DebugSessionScalarWhereWithAggregatesInput | DebugSessionScalarWhereWithAggregatesInput[]
    OR?: DebugSessionScalarWhereWithAggregatesInput[]
    NOT?: DebugSessionScalarWhereWithAggregatesInput | DebugSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DebugSession"> | string
    type?: EnumDebugTypeWithAggregatesFilter<"DebugSession"> | $Enums.DebugType
    status?: EnumDebugStatusWithAggregatesFilter<"DebugSession"> | $Enums.DebugStatus
    startedAt?: DateTimeWithAggregatesFilter<"DebugSession"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"DebugSession"> | Date | string | null
    data?: JsonNullableWithAggregatesFilter<"DebugSession">
    projectId?: StringNullableWithAggregatesFilter<"DebugSession"> | string | null
  }

  export type DebugProjectWhereInput = {
    AND?: DebugProjectWhereInput | DebugProjectWhereInput[]
    OR?: DebugProjectWhereInput[]
    NOT?: DebugProjectWhereInput | DebugProjectWhereInput[]
    id?: StringFilter<"DebugProject"> | string
    name?: StringFilter<"DebugProject"> | string
    script?: StringFilter<"DebugProject"> | string
    createdAt?: DateTimeFilter<"DebugProject"> | Date | string
    updatedAt?: DateTimeFilter<"DebugProject"> | Date | string
    sessions?: DebugSessionListRelationFilter
    history?: ScriptHistoryListRelationFilter
  }

  export type DebugProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    script?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: DebugSessionOrderByRelationAggregateInput
    history?: ScriptHistoryOrderByRelationAggregateInput
  }

  export type DebugProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DebugProjectWhereInput | DebugProjectWhereInput[]
    OR?: DebugProjectWhereInput[]
    NOT?: DebugProjectWhereInput | DebugProjectWhereInput[]
    script?: StringFilter<"DebugProject"> | string
    createdAt?: DateTimeFilter<"DebugProject"> | Date | string
    updatedAt?: DateTimeFilter<"DebugProject"> | Date | string
    sessions?: DebugSessionListRelationFilter
    history?: ScriptHistoryListRelationFilter
  }, "id" | "name">

  export type DebugProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    script?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DebugProjectCountOrderByAggregateInput
    _max?: DebugProjectMaxOrderByAggregateInput
    _min?: DebugProjectMinOrderByAggregateInput
  }

  export type DebugProjectScalarWhereWithAggregatesInput = {
    AND?: DebugProjectScalarWhereWithAggregatesInput | DebugProjectScalarWhereWithAggregatesInput[]
    OR?: DebugProjectScalarWhereWithAggregatesInput[]
    NOT?: DebugProjectScalarWhereWithAggregatesInput | DebugProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DebugProject"> | string
    name?: StringWithAggregatesFilter<"DebugProject"> | string
    script?: StringWithAggregatesFilter<"DebugProject"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DebugProject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DebugProject"> | Date | string
  }

  export type ScriptHistoryWhereInput = {
    AND?: ScriptHistoryWhereInput | ScriptHistoryWhereInput[]
    OR?: ScriptHistoryWhereInput[]
    NOT?: ScriptHistoryWhereInput | ScriptHistoryWhereInput[]
    id?: StringFilter<"ScriptHistory"> | string
    content?: StringFilter<"ScriptHistory"> | string
    createdAt?: DateTimeFilter<"ScriptHistory"> | Date | string
    projectId?: StringFilter<"ScriptHistory"> | string
    project?: XOR<DebugProjectScalarRelationFilter, DebugProjectWhereInput>
  }

  export type ScriptHistoryOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    project?: DebugProjectOrderByWithRelationInput
  }

  export type ScriptHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScriptHistoryWhereInput | ScriptHistoryWhereInput[]
    OR?: ScriptHistoryWhereInput[]
    NOT?: ScriptHistoryWhereInput | ScriptHistoryWhereInput[]
    content?: StringFilter<"ScriptHistory"> | string
    createdAt?: DateTimeFilter<"ScriptHistory"> | Date | string
    projectId?: StringFilter<"ScriptHistory"> | string
    project?: XOR<DebugProjectScalarRelationFilter, DebugProjectWhereInput>
  }, "id">

  export type ScriptHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    _count?: ScriptHistoryCountOrderByAggregateInput
    _max?: ScriptHistoryMaxOrderByAggregateInput
    _min?: ScriptHistoryMinOrderByAggregateInput
  }

  export type ScriptHistoryScalarWhereWithAggregatesInput = {
    AND?: ScriptHistoryScalarWhereWithAggregatesInput | ScriptHistoryScalarWhereWithAggregatesInput[]
    OR?: ScriptHistoryScalarWhereWithAggregatesInput[]
    NOT?: ScriptHistoryScalarWhereWithAggregatesInput | ScriptHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScriptHistory"> | string
    content?: StringWithAggregatesFilter<"ScriptHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ScriptHistory"> | Date | string
    projectId?: StringWithAggregatesFilter<"ScriptHistory"> | string
  }

  export type DebugTaskWhereInput = {
    AND?: DebugTaskWhereInput | DebugTaskWhereInput[]
    OR?: DebugTaskWhereInput[]
    NOT?: DebugTaskWhereInput | DebugTaskWhereInput[]
    id?: StringFilter<"DebugTask"> | string
    taskId?: StringFilter<"DebugTask"> | string
    project?: StringFilter<"DebugTask"> | string
    url?: StringFilter<"DebugTask"> | string
    process?: JsonFilter<"DebugTask">
    sessionId?: StringFilter<"DebugTask"> | string
    session?: XOR<DebugSessionScalarRelationFilter, DebugSessionWhereInput>
  }

  export type DebugTaskOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    project?: SortOrder
    url?: SortOrder
    process?: SortOrder
    sessionId?: SortOrder
    session?: DebugSessionOrderByWithRelationInput
  }

  export type DebugTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DebugTaskWhereInput | DebugTaskWhereInput[]
    OR?: DebugTaskWhereInput[]
    NOT?: DebugTaskWhereInput | DebugTaskWhereInput[]
    taskId?: StringFilter<"DebugTask"> | string
    project?: StringFilter<"DebugTask"> | string
    url?: StringFilter<"DebugTask"> | string
    process?: JsonFilter<"DebugTask">
    sessionId?: StringFilter<"DebugTask"> | string
    session?: XOR<DebugSessionScalarRelationFilter, DebugSessionWhereInput>
  }, "id">

  export type DebugTaskOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    project?: SortOrder
    url?: SortOrder
    process?: SortOrder
    sessionId?: SortOrder
    _count?: DebugTaskCountOrderByAggregateInput
    _max?: DebugTaskMaxOrderByAggregateInput
    _min?: DebugTaskMinOrderByAggregateInput
  }

  export type DebugTaskScalarWhereWithAggregatesInput = {
    AND?: DebugTaskScalarWhereWithAggregatesInput | DebugTaskScalarWhereWithAggregatesInput[]
    OR?: DebugTaskScalarWhereWithAggregatesInput[]
    NOT?: DebugTaskScalarWhereWithAggregatesInput | DebugTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DebugTask"> | string
    taskId?: StringWithAggregatesFilter<"DebugTask"> | string
    project?: StringWithAggregatesFilter<"DebugTask"> | string
    url?: StringWithAggregatesFilter<"DebugTask"> | string
    process?: JsonWithAggregatesFilter<"DebugTask">
    sessionId?: StringWithAggregatesFilter<"DebugTask"> | string
  }

  export type RequestWhereInput = {
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    id?: StringFilter<"Request"> | string
    url?: StringFilter<"Request"> | string
    method?: StringFilter<"Request"> | string
    headers?: JsonNullableFilter<"Request">
    body?: StringNullableFilter<"Request"> | string | null
    timestamp?: DateTimeFilter<"Request"> | Date | string
    debugSessionId?: StringFilter<"Request"> | string
    debugSession?: XOR<DebugSessionScalarRelationFilter, DebugSessionWhereInput>
    response?: XOR<ResponseNullableScalarRelationFilter, ResponseWhereInput> | null
  }

  export type RequestOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    method?: SortOrder
    headers?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    debugSessionId?: SortOrder
    debugSession?: DebugSessionOrderByWithRelationInput
    response?: ResponseOrderByWithRelationInput
  }

  export type RequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    url?: StringFilter<"Request"> | string
    method?: StringFilter<"Request"> | string
    headers?: JsonNullableFilter<"Request">
    body?: StringNullableFilter<"Request"> | string | null
    timestamp?: DateTimeFilter<"Request"> | Date | string
    debugSessionId?: StringFilter<"Request"> | string
    debugSession?: XOR<DebugSessionScalarRelationFilter, DebugSessionWhereInput>
    response?: XOR<ResponseNullableScalarRelationFilter, ResponseWhereInput> | null
  }, "id">

  export type RequestOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    method?: SortOrder
    headers?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    debugSessionId?: SortOrder
    _count?: RequestCountOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    OR?: RequestScalarWhereWithAggregatesInput[]
    NOT?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Request"> | string
    url?: StringWithAggregatesFilter<"Request"> | string
    method?: StringWithAggregatesFilter<"Request"> | string
    headers?: JsonNullableWithAggregatesFilter<"Request">
    body?: StringNullableWithAggregatesFilter<"Request"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    debugSessionId?: StringWithAggregatesFilter<"Request"> | string
  }

  export type ResponseWhereInput = {
    AND?: ResponseWhereInput | ResponseWhereInput[]
    OR?: ResponseWhereInput[]
    NOT?: ResponseWhereInput | ResponseWhereInput[]
    id?: StringFilter<"Response"> | string
    statusCode?: IntFilter<"Response"> | number
    headers?: JsonNullableFilter<"Response">
    body?: StringNullableFilter<"Response"> | string | null
    timestamp?: DateTimeFilter<"Response"> | Date | string
    requestId?: StringFilter<"Response"> | string
    debugSessionId?: StringFilter<"Response"> | string
    request?: XOR<RequestScalarRelationFilter, RequestWhereInput>
    debugSession?: XOR<DebugSessionScalarRelationFilter, DebugSessionWhereInput>
  }

  export type ResponseOrderByWithRelationInput = {
    id?: SortOrder
    statusCode?: SortOrder
    headers?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    requestId?: SortOrder
    debugSessionId?: SortOrder
    request?: RequestOrderByWithRelationInput
    debugSession?: DebugSessionOrderByWithRelationInput
  }

  export type ResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requestId?: string
    AND?: ResponseWhereInput | ResponseWhereInput[]
    OR?: ResponseWhereInput[]
    NOT?: ResponseWhereInput | ResponseWhereInput[]
    statusCode?: IntFilter<"Response"> | number
    headers?: JsonNullableFilter<"Response">
    body?: StringNullableFilter<"Response"> | string | null
    timestamp?: DateTimeFilter<"Response"> | Date | string
    debugSessionId?: StringFilter<"Response"> | string
    request?: XOR<RequestScalarRelationFilter, RequestWhereInput>
    debugSession?: XOR<DebugSessionScalarRelationFilter, DebugSessionWhereInput>
  }, "id" | "requestId">

  export type ResponseOrderByWithAggregationInput = {
    id?: SortOrder
    statusCode?: SortOrder
    headers?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    requestId?: SortOrder
    debugSessionId?: SortOrder
    _count?: ResponseCountOrderByAggregateInput
    _avg?: ResponseAvgOrderByAggregateInput
    _max?: ResponseMaxOrderByAggregateInput
    _min?: ResponseMinOrderByAggregateInput
    _sum?: ResponseSumOrderByAggregateInput
  }

  export type ResponseScalarWhereWithAggregatesInput = {
    AND?: ResponseScalarWhereWithAggregatesInput | ResponseScalarWhereWithAggregatesInput[]
    OR?: ResponseScalarWhereWithAggregatesInput[]
    NOT?: ResponseScalarWhereWithAggregatesInput | ResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Response"> | string
    statusCode?: IntWithAggregatesFilter<"Response"> | number
    headers?: JsonNullableWithAggregatesFilter<"Response">
    body?: StringNullableWithAggregatesFilter<"Response"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"Response"> | Date | string
    requestId?: StringWithAggregatesFilter<"Response"> | string
    debugSessionId?: StringWithAggregatesFilter<"Response"> | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    tasks?: TaskCreateNestedManyWithoutProjectInput
    schedules?: ScheduleCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    schedules?: ScheduleUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TaskCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTasksInput
    parent?: TaskCreateNestedOneWithoutChildrenInput
    children?: TaskCreateNestedManyWithoutParentInput
    logs?: TaskLogCreateNestedManyWithoutTaskInput
    schedule?: ScheduleCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    parentId?: string | null
    scheduleId?: string | null
    children?: TaskUncheckedCreateNestedManyWithoutParentInput
    logs?: TaskLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    parent?: TaskUpdateOneWithoutChildrenNestedInput
    children?: TaskUpdateManyWithoutParentNestedInput
    logs?: TaskLogUpdateManyWithoutTaskNestedInput
    schedule?: ScheduleUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: TaskUncheckedUpdateManyWithoutParentNestedInput
    logs?: TaskLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    parentId?: string | null
    scheduleId?: string | null
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskLogCreateInput = {
    id?: string
    message: string
    level?: $Enums.LogLevel
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutLogsInput
  }

  export type TaskLogUncheckedCreateInput = {
    id?: string
    message: string
    level?: $Enums.LogLevel
    createdAt?: Date | string
    taskId: string
  }

  export type TaskLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutLogsNestedInput
  }

  export type TaskLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskLogCreateManyInput = {
    id?: string
    message: string
    level?: $Enums.LogLevel
    createdAt?: Date | string
    taskId: string
  }

  export type TaskLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleCreateInput = {
    id?: string
    name: string
    description?: string | null
    cron?: string | null
    active?: boolean
    nextRun?: Date | string | null
    lastRun?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutSchedulesInput
    tasks?: TaskCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    cron?: string | null
    active?: boolean
    nextRun?: Date | string | null
    lastRun?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    tasks?: TaskUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cron?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    nextRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSchedulesNestedInput
    tasks?: TaskUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cron?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    nextRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    cron?: string | null
    active?: boolean
    nextRun?: Date | string | null
    lastRun?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cron?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    nextRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cron?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    nextRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type DebugSessionCreateInput = {
    id?: string
    type: $Enums.DebugType
    status?: $Enums.DebugStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    requests?: RequestCreateNestedManyWithoutDebugSessionInput
    responses?: ResponseCreateNestedManyWithoutDebugSessionInput
    project?: DebugProjectCreateNestedOneWithoutSessionsInput
    debugTasks?: DebugTaskCreateNestedManyWithoutSessionInput
  }

  export type DebugSessionUncheckedCreateInput = {
    id?: string
    type: $Enums.DebugType
    status?: $Enums.DebugStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    projectId?: string | null
    requests?: RequestUncheckedCreateNestedManyWithoutDebugSessionInput
    responses?: ResponseUncheckedCreateNestedManyWithoutDebugSessionInput
    debugTasks?: DebugTaskUncheckedCreateNestedManyWithoutSessionInput
  }

  export type DebugSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDebugTypeFieldUpdateOperationsInput | $Enums.DebugType
    status?: EnumDebugStatusFieldUpdateOperationsInput | $Enums.DebugStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    requests?: RequestUpdateManyWithoutDebugSessionNestedInput
    responses?: ResponseUpdateManyWithoutDebugSessionNestedInput
    project?: DebugProjectUpdateOneWithoutSessionsNestedInput
    debugTasks?: DebugTaskUpdateManyWithoutSessionNestedInput
  }

  export type DebugSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDebugTypeFieldUpdateOperationsInput | $Enums.DebugType
    status?: EnumDebugStatusFieldUpdateOperationsInput | $Enums.DebugStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: RequestUncheckedUpdateManyWithoutDebugSessionNestedInput
    responses?: ResponseUncheckedUpdateManyWithoutDebugSessionNestedInput
    debugTasks?: DebugTaskUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type DebugSessionCreateManyInput = {
    id?: string
    type: $Enums.DebugType
    status?: $Enums.DebugStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    projectId?: string | null
  }

  export type DebugSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDebugTypeFieldUpdateOperationsInput | $Enums.DebugType
    status?: EnumDebugStatusFieldUpdateOperationsInput | $Enums.DebugStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DebugSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDebugTypeFieldUpdateOperationsInput | $Enums.DebugType
    status?: EnumDebugStatusFieldUpdateOperationsInput | $Enums.DebugStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DebugProjectCreateInput = {
    id?: string
    name: string
    script?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: DebugSessionCreateNestedManyWithoutProjectInput
    history?: ScriptHistoryCreateNestedManyWithoutProjectInput
  }

  export type DebugProjectUncheckedCreateInput = {
    id?: string
    name: string
    script?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: DebugSessionUncheckedCreateNestedManyWithoutProjectInput
    history?: ScriptHistoryUncheckedCreateNestedManyWithoutProjectInput
  }

  export type DebugProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    script?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: DebugSessionUpdateManyWithoutProjectNestedInput
    history?: ScriptHistoryUpdateManyWithoutProjectNestedInput
  }

  export type DebugProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    script?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: DebugSessionUncheckedUpdateManyWithoutProjectNestedInput
    history?: ScriptHistoryUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type DebugProjectCreateManyInput = {
    id?: string
    name: string
    script?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebugProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    script?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebugProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    script?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScriptHistoryCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    project: DebugProjectCreateNestedOneWithoutHistoryInput
  }

  export type ScriptHistoryUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    projectId: string
  }

  export type ScriptHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: DebugProjectUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type ScriptHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ScriptHistoryCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    projectId: string
  }

  export type ScriptHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScriptHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type DebugTaskCreateInput = {
    id?: string
    taskId: string
    project: string
    url: string
    process: JsonNullValueInput | InputJsonValue
    session: DebugSessionCreateNestedOneWithoutDebugTasksInput
  }

  export type DebugTaskUncheckedCreateInput = {
    id?: string
    taskId: string
    project: string
    url: string
    process: JsonNullValueInput | InputJsonValue
    sessionId: string
  }

  export type DebugTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    process?: JsonNullValueInput | InputJsonValue
    session?: DebugSessionUpdateOneRequiredWithoutDebugTasksNestedInput
  }

  export type DebugTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    process?: JsonNullValueInput | InputJsonValue
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type DebugTaskCreateManyInput = {
    id?: string
    taskId: string
    project: string
    url: string
    process: JsonNullValueInput | InputJsonValue
    sessionId: string
  }

  export type DebugTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    process?: JsonNullValueInput | InputJsonValue
  }

  export type DebugTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    process?: JsonNullValueInput | InputJsonValue
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestCreateInput = {
    id?: string
    url: string
    method: string
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    timestamp?: Date | string
    debugSession: DebugSessionCreateNestedOneWithoutRequestsInput
    response?: ResponseCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateInput = {
    id?: string
    url: string
    method: string
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    timestamp?: Date | string
    debugSessionId: string
    response?: ResponseUncheckedCreateNestedOneWithoutRequestInput
  }

  export type RequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    debugSession?: DebugSessionUpdateOneRequiredWithoutRequestsNestedInput
    response?: ResponseUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    debugSessionId?: StringFieldUpdateOperationsInput | string
    response?: ResponseUncheckedUpdateOneWithoutRequestNestedInput
  }

  export type RequestCreateManyInput = {
    id?: string
    url: string
    method: string
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    timestamp?: Date | string
    debugSessionId: string
  }

  export type RequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    debugSessionId?: StringFieldUpdateOperationsInput | string
  }

  export type ResponseCreateInput = {
    id?: string
    statusCode: number
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    timestamp?: Date | string
    request: RequestCreateNestedOneWithoutResponseInput
    debugSession: DebugSessionCreateNestedOneWithoutResponsesInput
  }

  export type ResponseUncheckedCreateInput = {
    id?: string
    statusCode: number
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    timestamp?: Date | string
    requestId: string
    debugSessionId: string
  }

  export type ResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: RequestUpdateOneRequiredWithoutResponseNestedInput
    debugSession?: DebugSessionUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: StringFieldUpdateOperationsInput | string
    debugSessionId?: StringFieldUpdateOperationsInput | string
  }

  export type ResponseCreateManyInput = {
    id?: string
    statusCode: number
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    timestamp?: Date | string
    requestId: string
    debugSessionId: string
  }

  export type ResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: StringFieldUpdateOperationsInput | string
    debugSessionId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    settings?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[]
    notIn?: $Enums.Priority[]
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type TaskNullableScalarRelationFilter = {
    is?: TaskWhereInput | null
    isNot?: TaskWhereInput | null
  }

  export type TaskLogListRelationFilter = {
    every?: TaskLogWhereInput
    some?: TaskLogWhereInput
    none?: TaskLogWhereInput
  }

  export type ScheduleNullableScalarRelationFilter = {
    is?: ScheduleWhereInput | null
    isNot?: ScheduleWhereInput | null
  }

  export type TaskLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    progress?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    parentId?: SortOrder
    scheduleId?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    progress?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    parentId?: SortOrder
    scheduleId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    progress?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    parentId?: SortOrder
    scheduleId?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[]
    notIn?: $Enums.Priority[]
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumLogLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.LogLevel | EnumLogLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LogLevel[]
    notIn?: $Enums.LogLevel[]
    not?: NestedEnumLogLevelFilter<$PrismaModel> | $Enums.LogLevel
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskLogCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    taskId?: SortOrder
  }

  export type TaskLogMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    taskId?: SortOrder
  }

  export type TaskLogMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    taskId?: SortOrder
  }

  export type EnumLogLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogLevel | EnumLogLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LogLevel[]
    notIn?: $Enums.LogLevel[]
    not?: NestedEnumLogLevelWithAggregatesFilter<$PrismaModel> | $Enums.LogLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogLevelFilter<$PrismaModel>
    _max?: NestedEnumLogLevelFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cron?: SortOrder
    active?: SortOrder
    nextRun?: SortOrder
    lastRun?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cron?: SortOrder
    active?: SortOrder
    nextRun?: SortOrder
    lastRun?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cron?: SortOrder
    active?: SortOrder
    nextRun?: SortOrder
    lastRun?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDebugTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DebugType | EnumDebugTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DebugType[]
    notIn?: $Enums.DebugType[]
    not?: NestedEnumDebugTypeFilter<$PrismaModel> | $Enums.DebugType
  }

  export type EnumDebugStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DebugStatus | EnumDebugStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DebugStatus[]
    notIn?: $Enums.DebugStatus[]
    not?: NestedEnumDebugStatusFilter<$PrismaModel> | $Enums.DebugStatus
  }

  export type RequestListRelationFilter = {
    every?: RequestWhereInput
    some?: RequestWhereInput
    none?: RequestWhereInput
  }

  export type ResponseListRelationFilter = {
    every?: ResponseWhereInput
    some?: ResponseWhereInput
    none?: ResponseWhereInput
  }

  export type DebugProjectNullableScalarRelationFilter = {
    is?: DebugProjectWhereInput | null
    isNot?: DebugProjectWhereInput | null
  }

  export type DebugTaskListRelationFilter = {
    every?: DebugTaskWhereInput
    some?: DebugTaskWhereInput
    none?: DebugTaskWhereInput
  }

  export type RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DebugTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DebugSessionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    data?: SortOrder
    projectId?: SortOrder
  }

  export type DebugSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    projectId?: SortOrder
  }

  export type DebugSessionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    projectId?: SortOrder
  }

  export type EnumDebugTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DebugType | EnumDebugTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DebugType[]
    notIn?: $Enums.DebugType[]
    not?: NestedEnumDebugTypeWithAggregatesFilter<$PrismaModel> | $Enums.DebugType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDebugTypeFilter<$PrismaModel>
    _max?: NestedEnumDebugTypeFilter<$PrismaModel>
  }

  export type EnumDebugStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DebugStatus | EnumDebugStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DebugStatus[]
    notIn?: $Enums.DebugStatus[]
    not?: NestedEnumDebugStatusWithAggregatesFilter<$PrismaModel> | $Enums.DebugStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDebugStatusFilter<$PrismaModel>
    _max?: NestedEnumDebugStatusFilter<$PrismaModel>
  }

  export type DebugSessionListRelationFilter = {
    every?: DebugSessionWhereInput
    some?: DebugSessionWhereInput
    none?: DebugSessionWhereInput
  }

  export type ScriptHistoryListRelationFilter = {
    every?: ScriptHistoryWhereInput
    some?: ScriptHistoryWhereInput
    none?: ScriptHistoryWhereInput
  }

  export type DebugSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScriptHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DebugProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    script?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebugProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    script?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebugProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    script?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebugProjectScalarRelationFilter = {
    is?: DebugProjectWhereInput
    isNot?: DebugProjectWhereInput
  }

  export type ScriptHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type ScriptHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type ScriptHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DebugSessionScalarRelationFilter = {
    is?: DebugSessionWhereInput
    isNot?: DebugSessionWhereInput
  }

  export type DebugTaskCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    project?: SortOrder
    url?: SortOrder
    process?: SortOrder
    sessionId?: SortOrder
  }

  export type DebugTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    project?: SortOrder
    url?: SortOrder
    sessionId?: SortOrder
  }

  export type DebugTaskMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    project?: SortOrder
    url?: SortOrder
    sessionId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ResponseNullableScalarRelationFilter = {
    is?: ResponseWhereInput | null
    isNot?: ResponseWhereInput | null
  }

  export type RequestCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    method?: SortOrder
    headers?: SortOrder
    body?: SortOrder
    timestamp?: SortOrder
    debugSessionId?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    method?: SortOrder
    body?: SortOrder
    timestamp?: SortOrder
    debugSessionId?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    method?: SortOrder
    body?: SortOrder
    timestamp?: SortOrder
    debugSessionId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RequestScalarRelationFilter = {
    is?: RequestWhereInput
    isNot?: RequestWhereInput
  }

  export type ResponseCountOrderByAggregateInput = {
    id?: SortOrder
    statusCode?: SortOrder
    headers?: SortOrder
    body?: SortOrder
    timestamp?: SortOrder
    requestId?: SortOrder
    debugSessionId?: SortOrder
  }

  export type ResponseAvgOrderByAggregateInput = {
    statusCode?: SortOrder
  }

  export type ResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    statusCode?: SortOrder
    body?: SortOrder
    timestamp?: SortOrder
    requestId?: SortOrder
    debugSessionId?: SortOrder
  }

  export type ResponseMinOrderByAggregateInput = {
    id?: SortOrder
    statusCode?: SortOrder
    body?: SortOrder
    timestamp?: SortOrder
    requestId?: SortOrder
    debugSessionId?: SortOrder
  }

  export type ResponseSumOrderByAggregateInput = {
    statusCode?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutProjectInput = {
    create?: XOR<ScheduleCreateWithoutProjectInput, ScheduleUncheckedCreateWithoutProjectInput> | ScheduleCreateWithoutProjectInput[] | ScheduleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutProjectInput | ScheduleCreateOrConnectWithoutProjectInput[]
    createMany?: ScheduleCreateManyProjectInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ScheduleCreateWithoutProjectInput, ScheduleUncheckedCreateWithoutProjectInput> | ScheduleCreateWithoutProjectInput[] | ScheduleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutProjectInput | ScheduleCreateOrConnectWithoutProjectInput[]
    createMany?: ScheduleCreateManyProjectInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ScheduleCreateWithoutProjectInput, ScheduleUncheckedCreateWithoutProjectInput> | ScheduleCreateWithoutProjectInput[] | ScheduleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutProjectInput | ScheduleCreateOrConnectWithoutProjectInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutProjectInput | ScheduleUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ScheduleCreateManyProjectInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutProjectInput | ScheduleUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutProjectInput | ScheduleUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ScheduleCreateWithoutProjectInput, ScheduleUncheckedCreateWithoutProjectInput> | ScheduleCreateWithoutProjectInput[] | ScheduleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutProjectInput | ScheduleCreateOrConnectWithoutProjectInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutProjectInput | ScheduleUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ScheduleCreateManyProjectInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutProjectInput | ScheduleUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutProjectInput | ScheduleUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutChildrenInput = {
    create?: XOR<TaskCreateWithoutChildrenInput, TaskUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TaskCreateOrConnectWithoutChildrenInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutParentInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskLogCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput> | TaskLogCreateWithoutTaskInput[] | TaskLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutTaskInput | TaskLogCreateOrConnectWithoutTaskInput[]
    createMany?: TaskLogCreateManyTaskInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type ScheduleCreateNestedOneWithoutTasksInput = {
    create?: XOR<ScheduleCreateWithoutTasksInput, ScheduleUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutTasksInput
    connect?: ScheduleWhereUniqueInput
  }

  export type TaskUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskLogUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput> | TaskLogCreateWithoutTaskInput[] | TaskLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutTaskInput | TaskLogCreateOrConnectWithoutTaskInput[]
    createMany?: TaskLogCreateManyTaskInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProjectUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTasksInput, ProjectUpdateWithoutTasksInput>, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type TaskUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<TaskCreateWithoutChildrenInput, TaskUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TaskCreateOrConnectWithoutChildrenInput
    upsert?: TaskUpsertWithoutChildrenInput
    disconnect?: TaskWhereInput | boolean
    delete?: TaskWhereInput | boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutChildrenInput, TaskUpdateWithoutChildrenInput>, TaskUncheckedUpdateWithoutChildrenInput>
  }

  export type TaskUpdateManyWithoutParentNestedInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutParentInput | TaskUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutParentInput | TaskUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutParentInput | TaskUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskLogUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput> | TaskLogCreateWithoutTaskInput[] | TaskLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutTaskInput | TaskLogCreateOrConnectWithoutTaskInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutTaskInput | TaskLogUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskLogCreateManyTaskInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutTaskInput | TaskLogUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutTaskInput | TaskLogUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type ScheduleUpdateOneWithoutTasksNestedInput = {
    create?: XOR<ScheduleCreateWithoutTasksInput, ScheduleUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutTasksInput
    upsert?: ScheduleUpsertWithoutTasksInput
    disconnect?: ScheduleWhereInput | boolean
    delete?: ScheduleWhereInput | boolean
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutTasksInput, ScheduleUpdateWithoutTasksInput>, ScheduleUncheckedUpdateWithoutTasksInput>
  }

  export type TaskUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutParentInput | TaskUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutParentInput | TaskUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutParentInput | TaskUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskLogUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput> | TaskLogCreateWithoutTaskInput[] | TaskLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutTaskInput | TaskLogCreateOrConnectWithoutTaskInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutTaskInput | TaskLogUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskLogCreateManyTaskInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutTaskInput | TaskLogUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutTaskInput | TaskLogUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutLogsInput = {
    create?: XOR<TaskCreateWithoutLogsInput, TaskUncheckedCreateWithoutLogsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutLogsInput
    connect?: TaskWhereUniqueInput
  }

  export type EnumLogLevelFieldUpdateOperationsInput = {
    set?: $Enums.LogLevel
  }

  export type TaskUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<TaskCreateWithoutLogsInput, TaskUncheckedCreateWithoutLogsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutLogsInput
    upsert?: TaskUpsertWithoutLogsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutLogsInput, TaskUpdateWithoutLogsInput>, TaskUncheckedUpdateWithoutLogsInput>
  }

  export type ProjectCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<ProjectCreateWithoutSchedulesInput, ProjectUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSchedulesInput
    connect?: ProjectWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutScheduleInput = {
    create?: XOR<TaskCreateWithoutScheduleInput, TaskUncheckedCreateWithoutScheduleInput> | TaskCreateWithoutScheduleInput[] | TaskUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutScheduleInput | TaskCreateOrConnectWithoutScheduleInput[]
    createMany?: TaskCreateManyScheduleInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<TaskCreateWithoutScheduleInput, TaskUncheckedCreateWithoutScheduleInput> | TaskCreateWithoutScheduleInput[] | TaskUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutScheduleInput | TaskCreateOrConnectWithoutScheduleInput[]
    createMany?: TaskCreateManyScheduleInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjectUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<ProjectCreateWithoutSchedulesInput, ProjectUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSchedulesInput
    upsert?: ProjectUpsertWithoutSchedulesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSchedulesInput, ProjectUpdateWithoutSchedulesInput>, ProjectUncheckedUpdateWithoutSchedulesInput>
  }

  export type TaskUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<TaskCreateWithoutScheduleInput, TaskUncheckedCreateWithoutScheduleInput> | TaskCreateWithoutScheduleInput[] | TaskUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutScheduleInput | TaskCreateOrConnectWithoutScheduleInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutScheduleInput | TaskUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: TaskCreateManyScheduleInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutScheduleInput | TaskUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutScheduleInput | TaskUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<TaskCreateWithoutScheduleInput, TaskUncheckedCreateWithoutScheduleInput> | TaskCreateWithoutScheduleInput[] | TaskUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutScheduleInput | TaskCreateOrConnectWithoutScheduleInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutScheduleInput | TaskUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: TaskCreateManyScheduleInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutScheduleInput | TaskUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutScheduleInput | TaskUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type RequestCreateNestedManyWithoutDebugSessionInput = {
    create?: XOR<RequestCreateWithoutDebugSessionInput, RequestUncheckedCreateWithoutDebugSessionInput> | RequestCreateWithoutDebugSessionInput[] | RequestUncheckedCreateWithoutDebugSessionInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutDebugSessionInput | RequestCreateOrConnectWithoutDebugSessionInput[]
    createMany?: RequestCreateManyDebugSessionInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type ResponseCreateNestedManyWithoutDebugSessionInput = {
    create?: XOR<ResponseCreateWithoutDebugSessionInput, ResponseUncheckedCreateWithoutDebugSessionInput> | ResponseCreateWithoutDebugSessionInput[] | ResponseUncheckedCreateWithoutDebugSessionInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutDebugSessionInput | ResponseCreateOrConnectWithoutDebugSessionInput[]
    createMany?: ResponseCreateManyDebugSessionInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type DebugProjectCreateNestedOneWithoutSessionsInput = {
    create?: XOR<DebugProjectCreateWithoutSessionsInput, DebugProjectUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: DebugProjectCreateOrConnectWithoutSessionsInput
    connect?: DebugProjectWhereUniqueInput
  }

  export type DebugTaskCreateNestedManyWithoutSessionInput = {
    create?: XOR<DebugTaskCreateWithoutSessionInput, DebugTaskUncheckedCreateWithoutSessionInput> | DebugTaskCreateWithoutSessionInput[] | DebugTaskUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DebugTaskCreateOrConnectWithoutSessionInput | DebugTaskCreateOrConnectWithoutSessionInput[]
    createMany?: DebugTaskCreateManySessionInputEnvelope
    connect?: DebugTaskWhereUniqueInput | DebugTaskWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutDebugSessionInput = {
    create?: XOR<RequestCreateWithoutDebugSessionInput, RequestUncheckedCreateWithoutDebugSessionInput> | RequestCreateWithoutDebugSessionInput[] | RequestUncheckedCreateWithoutDebugSessionInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutDebugSessionInput | RequestCreateOrConnectWithoutDebugSessionInput[]
    createMany?: RequestCreateManyDebugSessionInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type ResponseUncheckedCreateNestedManyWithoutDebugSessionInput = {
    create?: XOR<ResponseCreateWithoutDebugSessionInput, ResponseUncheckedCreateWithoutDebugSessionInput> | ResponseCreateWithoutDebugSessionInput[] | ResponseUncheckedCreateWithoutDebugSessionInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutDebugSessionInput | ResponseCreateOrConnectWithoutDebugSessionInput[]
    createMany?: ResponseCreateManyDebugSessionInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type DebugTaskUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<DebugTaskCreateWithoutSessionInput, DebugTaskUncheckedCreateWithoutSessionInput> | DebugTaskCreateWithoutSessionInput[] | DebugTaskUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DebugTaskCreateOrConnectWithoutSessionInput | DebugTaskCreateOrConnectWithoutSessionInput[]
    createMany?: DebugTaskCreateManySessionInputEnvelope
    connect?: DebugTaskWhereUniqueInput | DebugTaskWhereUniqueInput[]
  }

  export type EnumDebugTypeFieldUpdateOperationsInput = {
    set?: $Enums.DebugType
  }

  export type EnumDebugStatusFieldUpdateOperationsInput = {
    set?: $Enums.DebugStatus
  }

  export type RequestUpdateManyWithoutDebugSessionNestedInput = {
    create?: XOR<RequestCreateWithoutDebugSessionInput, RequestUncheckedCreateWithoutDebugSessionInput> | RequestCreateWithoutDebugSessionInput[] | RequestUncheckedCreateWithoutDebugSessionInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutDebugSessionInput | RequestCreateOrConnectWithoutDebugSessionInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutDebugSessionInput | RequestUpsertWithWhereUniqueWithoutDebugSessionInput[]
    createMany?: RequestCreateManyDebugSessionInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutDebugSessionInput | RequestUpdateWithWhereUniqueWithoutDebugSessionInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutDebugSessionInput | RequestUpdateManyWithWhereWithoutDebugSessionInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type ResponseUpdateManyWithoutDebugSessionNestedInput = {
    create?: XOR<ResponseCreateWithoutDebugSessionInput, ResponseUncheckedCreateWithoutDebugSessionInput> | ResponseCreateWithoutDebugSessionInput[] | ResponseUncheckedCreateWithoutDebugSessionInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutDebugSessionInput | ResponseCreateOrConnectWithoutDebugSessionInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutDebugSessionInput | ResponseUpsertWithWhereUniqueWithoutDebugSessionInput[]
    createMany?: ResponseCreateManyDebugSessionInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutDebugSessionInput | ResponseUpdateWithWhereUniqueWithoutDebugSessionInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutDebugSessionInput | ResponseUpdateManyWithWhereWithoutDebugSessionInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type DebugProjectUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<DebugProjectCreateWithoutSessionsInput, DebugProjectUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: DebugProjectCreateOrConnectWithoutSessionsInput
    upsert?: DebugProjectUpsertWithoutSessionsInput
    disconnect?: DebugProjectWhereInput | boolean
    delete?: DebugProjectWhereInput | boolean
    connect?: DebugProjectWhereUniqueInput
    update?: XOR<XOR<DebugProjectUpdateToOneWithWhereWithoutSessionsInput, DebugProjectUpdateWithoutSessionsInput>, DebugProjectUncheckedUpdateWithoutSessionsInput>
  }

  export type DebugTaskUpdateManyWithoutSessionNestedInput = {
    create?: XOR<DebugTaskCreateWithoutSessionInput, DebugTaskUncheckedCreateWithoutSessionInput> | DebugTaskCreateWithoutSessionInput[] | DebugTaskUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DebugTaskCreateOrConnectWithoutSessionInput | DebugTaskCreateOrConnectWithoutSessionInput[]
    upsert?: DebugTaskUpsertWithWhereUniqueWithoutSessionInput | DebugTaskUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: DebugTaskCreateManySessionInputEnvelope
    set?: DebugTaskWhereUniqueInput | DebugTaskWhereUniqueInput[]
    disconnect?: DebugTaskWhereUniqueInput | DebugTaskWhereUniqueInput[]
    delete?: DebugTaskWhereUniqueInput | DebugTaskWhereUniqueInput[]
    connect?: DebugTaskWhereUniqueInput | DebugTaskWhereUniqueInput[]
    update?: DebugTaskUpdateWithWhereUniqueWithoutSessionInput | DebugTaskUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: DebugTaskUpdateManyWithWhereWithoutSessionInput | DebugTaskUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: DebugTaskScalarWhereInput | DebugTaskScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutDebugSessionNestedInput = {
    create?: XOR<RequestCreateWithoutDebugSessionInput, RequestUncheckedCreateWithoutDebugSessionInput> | RequestCreateWithoutDebugSessionInput[] | RequestUncheckedCreateWithoutDebugSessionInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutDebugSessionInput | RequestCreateOrConnectWithoutDebugSessionInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutDebugSessionInput | RequestUpsertWithWhereUniqueWithoutDebugSessionInput[]
    createMany?: RequestCreateManyDebugSessionInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutDebugSessionInput | RequestUpdateWithWhereUniqueWithoutDebugSessionInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutDebugSessionInput | RequestUpdateManyWithWhereWithoutDebugSessionInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type ResponseUncheckedUpdateManyWithoutDebugSessionNestedInput = {
    create?: XOR<ResponseCreateWithoutDebugSessionInput, ResponseUncheckedCreateWithoutDebugSessionInput> | ResponseCreateWithoutDebugSessionInput[] | ResponseUncheckedCreateWithoutDebugSessionInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutDebugSessionInput | ResponseCreateOrConnectWithoutDebugSessionInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutDebugSessionInput | ResponseUpsertWithWhereUniqueWithoutDebugSessionInput[]
    createMany?: ResponseCreateManyDebugSessionInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutDebugSessionInput | ResponseUpdateWithWhereUniqueWithoutDebugSessionInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutDebugSessionInput | ResponseUpdateManyWithWhereWithoutDebugSessionInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type DebugTaskUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<DebugTaskCreateWithoutSessionInput, DebugTaskUncheckedCreateWithoutSessionInput> | DebugTaskCreateWithoutSessionInput[] | DebugTaskUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DebugTaskCreateOrConnectWithoutSessionInput | DebugTaskCreateOrConnectWithoutSessionInput[]
    upsert?: DebugTaskUpsertWithWhereUniqueWithoutSessionInput | DebugTaskUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: DebugTaskCreateManySessionInputEnvelope
    set?: DebugTaskWhereUniqueInput | DebugTaskWhereUniqueInput[]
    disconnect?: DebugTaskWhereUniqueInput | DebugTaskWhereUniqueInput[]
    delete?: DebugTaskWhereUniqueInput | DebugTaskWhereUniqueInput[]
    connect?: DebugTaskWhereUniqueInput | DebugTaskWhereUniqueInput[]
    update?: DebugTaskUpdateWithWhereUniqueWithoutSessionInput | DebugTaskUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: DebugTaskUpdateManyWithWhereWithoutSessionInput | DebugTaskUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: DebugTaskScalarWhereInput | DebugTaskScalarWhereInput[]
  }

  export type DebugSessionCreateNestedManyWithoutProjectInput = {
    create?: XOR<DebugSessionCreateWithoutProjectInput, DebugSessionUncheckedCreateWithoutProjectInput> | DebugSessionCreateWithoutProjectInput[] | DebugSessionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DebugSessionCreateOrConnectWithoutProjectInput | DebugSessionCreateOrConnectWithoutProjectInput[]
    createMany?: DebugSessionCreateManyProjectInputEnvelope
    connect?: DebugSessionWhereUniqueInput | DebugSessionWhereUniqueInput[]
  }

  export type ScriptHistoryCreateNestedManyWithoutProjectInput = {
    create?: XOR<ScriptHistoryCreateWithoutProjectInput, ScriptHistoryUncheckedCreateWithoutProjectInput> | ScriptHistoryCreateWithoutProjectInput[] | ScriptHistoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ScriptHistoryCreateOrConnectWithoutProjectInput | ScriptHistoryCreateOrConnectWithoutProjectInput[]
    createMany?: ScriptHistoryCreateManyProjectInputEnvelope
    connect?: ScriptHistoryWhereUniqueInput | ScriptHistoryWhereUniqueInput[]
  }

  export type DebugSessionUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<DebugSessionCreateWithoutProjectInput, DebugSessionUncheckedCreateWithoutProjectInput> | DebugSessionCreateWithoutProjectInput[] | DebugSessionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DebugSessionCreateOrConnectWithoutProjectInput | DebugSessionCreateOrConnectWithoutProjectInput[]
    createMany?: DebugSessionCreateManyProjectInputEnvelope
    connect?: DebugSessionWhereUniqueInput | DebugSessionWhereUniqueInput[]
  }

  export type ScriptHistoryUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ScriptHistoryCreateWithoutProjectInput, ScriptHistoryUncheckedCreateWithoutProjectInput> | ScriptHistoryCreateWithoutProjectInput[] | ScriptHistoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ScriptHistoryCreateOrConnectWithoutProjectInput | ScriptHistoryCreateOrConnectWithoutProjectInput[]
    createMany?: ScriptHistoryCreateManyProjectInputEnvelope
    connect?: ScriptHistoryWhereUniqueInput | ScriptHistoryWhereUniqueInput[]
  }

  export type DebugSessionUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DebugSessionCreateWithoutProjectInput, DebugSessionUncheckedCreateWithoutProjectInput> | DebugSessionCreateWithoutProjectInput[] | DebugSessionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DebugSessionCreateOrConnectWithoutProjectInput | DebugSessionCreateOrConnectWithoutProjectInput[]
    upsert?: DebugSessionUpsertWithWhereUniqueWithoutProjectInput | DebugSessionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DebugSessionCreateManyProjectInputEnvelope
    set?: DebugSessionWhereUniqueInput | DebugSessionWhereUniqueInput[]
    disconnect?: DebugSessionWhereUniqueInput | DebugSessionWhereUniqueInput[]
    delete?: DebugSessionWhereUniqueInput | DebugSessionWhereUniqueInput[]
    connect?: DebugSessionWhereUniqueInput | DebugSessionWhereUniqueInput[]
    update?: DebugSessionUpdateWithWhereUniqueWithoutProjectInput | DebugSessionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DebugSessionUpdateManyWithWhereWithoutProjectInput | DebugSessionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DebugSessionScalarWhereInput | DebugSessionScalarWhereInput[]
  }

  export type ScriptHistoryUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ScriptHistoryCreateWithoutProjectInput, ScriptHistoryUncheckedCreateWithoutProjectInput> | ScriptHistoryCreateWithoutProjectInput[] | ScriptHistoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ScriptHistoryCreateOrConnectWithoutProjectInput | ScriptHistoryCreateOrConnectWithoutProjectInput[]
    upsert?: ScriptHistoryUpsertWithWhereUniqueWithoutProjectInput | ScriptHistoryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ScriptHistoryCreateManyProjectInputEnvelope
    set?: ScriptHistoryWhereUniqueInput | ScriptHistoryWhereUniqueInput[]
    disconnect?: ScriptHistoryWhereUniqueInput | ScriptHistoryWhereUniqueInput[]
    delete?: ScriptHistoryWhereUniqueInput | ScriptHistoryWhereUniqueInput[]
    connect?: ScriptHistoryWhereUniqueInput | ScriptHistoryWhereUniqueInput[]
    update?: ScriptHistoryUpdateWithWhereUniqueWithoutProjectInput | ScriptHistoryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ScriptHistoryUpdateManyWithWhereWithoutProjectInput | ScriptHistoryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ScriptHistoryScalarWhereInput | ScriptHistoryScalarWhereInput[]
  }

  export type DebugSessionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DebugSessionCreateWithoutProjectInput, DebugSessionUncheckedCreateWithoutProjectInput> | DebugSessionCreateWithoutProjectInput[] | DebugSessionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DebugSessionCreateOrConnectWithoutProjectInput | DebugSessionCreateOrConnectWithoutProjectInput[]
    upsert?: DebugSessionUpsertWithWhereUniqueWithoutProjectInput | DebugSessionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DebugSessionCreateManyProjectInputEnvelope
    set?: DebugSessionWhereUniqueInput | DebugSessionWhereUniqueInput[]
    disconnect?: DebugSessionWhereUniqueInput | DebugSessionWhereUniqueInput[]
    delete?: DebugSessionWhereUniqueInput | DebugSessionWhereUniqueInput[]
    connect?: DebugSessionWhereUniqueInput | DebugSessionWhereUniqueInput[]
    update?: DebugSessionUpdateWithWhereUniqueWithoutProjectInput | DebugSessionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DebugSessionUpdateManyWithWhereWithoutProjectInput | DebugSessionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DebugSessionScalarWhereInput | DebugSessionScalarWhereInput[]
  }

  export type ScriptHistoryUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ScriptHistoryCreateWithoutProjectInput, ScriptHistoryUncheckedCreateWithoutProjectInput> | ScriptHistoryCreateWithoutProjectInput[] | ScriptHistoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ScriptHistoryCreateOrConnectWithoutProjectInput | ScriptHistoryCreateOrConnectWithoutProjectInput[]
    upsert?: ScriptHistoryUpsertWithWhereUniqueWithoutProjectInput | ScriptHistoryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ScriptHistoryCreateManyProjectInputEnvelope
    set?: ScriptHistoryWhereUniqueInput | ScriptHistoryWhereUniqueInput[]
    disconnect?: ScriptHistoryWhereUniqueInput | ScriptHistoryWhereUniqueInput[]
    delete?: ScriptHistoryWhereUniqueInput | ScriptHistoryWhereUniqueInput[]
    connect?: ScriptHistoryWhereUniqueInput | ScriptHistoryWhereUniqueInput[]
    update?: ScriptHistoryUpdateWithWhereUniqueWithoutProjectInput | ScriptHistoryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ScriptHistoryUpdateManyWithWhereWithoutProjectInput | ScriptHistoryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ScriptHistoryScalarWhereInput | ScriptHistoryScalarWhereInput[]
  }

  export type DebugProjectCreateNestedOneWithoutHistoryInput = {
    create?: XOR<DebugProjectCreateWithoutHistoryInput, DebugProjectUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: DebugProjectCreateOrConnectWithoutHistoryInput
    connect?: DebugProjectWhereUniqueInput
  }

  export type DebugProjectUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<DebugProjectCreateWithoutHistoryInput, DebugProjectUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: DebugProjectCreateOrConnectWithoutHistoryInput
    upsert?: DebugProjectUpsertWithoutHistoryInput
    connect?: DebugProjectWhereUniqueInput
    update?: XOR<XOR<DebugProjectUpdateToOneWithWhereWithoutHistoryInput, DebugProjectUpdateWithoutHistoryInput>, DebugProjectUncheckedUpdateWithoutHistoryInput>
  }

  export type DebugSessionCreateNestedOneWithoutDebugTasksInput = {
    create?: XOR<DebugSessionCreateWithoutDebugTasksInput, DebugSessionUncheckedCreateWithoutDebugTasksInput>
    connectOrCreate?: DebugSessionCreateOrConnectWithoutDebugTasksInput
    connect?: DebugSessionWhereUniqueInput
  }

  export type DebugSessionUpdateOneRequiredWithoutDebugTasksNestedInput = {
    create?: XOR<DebugSessionCreateWithoutDebugTasksInput, DebugSessionUncheckedCreateWithoutDebugTasksInput>
    connectOrCreate?: DebugSessionCreateOrConnectWithoutDebugTasksInput
    upsert?: DebugSessionUpsertWithoutDebugTasksInput
    connect?: DebugSessionWhereUniqueInput
    update?: XOR<XOR<DebugSessionUpdateToOneWithWhereWithoutDebugTasksInput, DebugSessionUpdateWithoutDebugTasksInput>, DebugSessionUncheckedUpdateWithoutDebugTasksInput>
  }

  export type DebugSessionCreateNestedOneWithoutRequestsInput = {
    create?: XOR<DebugSessionCreateWithoutRequestsInput, DebugSessionUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: DebugSessionCreateOrConnectWithoutRequestsInput
    connect?: DebugSessionWhereUniqueInput
  }

  export type ResponseCreateNestedOneWithoutRequestInput = {
    create?: XOR<ResponseCreateWithoutRequestInput, ResponseUncheckedCreateWithoutRequestInput>
    connectOrCreate?: ResponseCreateOrConnectWithoutRequestInput
    connect?: ResponseWhereUniqueInput
  }

  export type ResponseUncheckedCreateNestedOneWithoutRequestInput = {
    create?: XOR<ResponseCreateWithoutRequestInput, ResponseUncheckedCreateWithoutRequestInput>
    connectOrCreate?: ResponseCreateOrConnectWithoutRequestInput
    connect?: ResponseWhereUniqueInput
  }

  export type DebugSessionUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<DebugSessionCreateWithoutRequestsInput, DebugSessionUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: DebugSessionCreateOrConnectWithoutRequestsInput
    upsert?: DebugSessionUpsertWithoutRequestsInput
    connect?: DebugSessionWhereUniqueInput
    update?: XOR<XOR<DebugSessionUpdateToOneWithWhereWithoutRequestsInput, DebugSessionUpdateWithoutRequestsInput>, DebugSessionUncheckedUpdateWithoutRequestsInput>
  }

  export type ResponseUpdateOneWithoutRequestNestedInput = {
    create?: XOR<ResponseCreateWithoutRequestInput, ResponseUncheckedCreateWithoutRequestInput>
    connectOrCreate?: ResponseCreateOrConnectWithoutRequestInput
    upsert?: ResponseUpsertWithoutRequestInput
    disconnect?: ResponseWhereInput | boolean
    delete?: ResponseWhereInput | boolean
    connect?: ResponseWhereUniqueInput
    update?: XOR<XOR<ResponseUpdateToOneWithWhereWithoutRequestInput, ResponseUpdateWithoutRequestInput>, ResponseUncheckedUpdateWithoutRequestInput>
  }

  export type ResponseUncheckedUpdateOneWithoutRequestNestedInput = {
    create?: XOR<ResponseCreateWithoutRequestInput, ResponseUncheckedCreateWithoutRequestInput>
    connectOrCreate?: ResponseCreateOrConnectWithoutRequestInput
    upsert?: ResponseUpsertWithoutRequestInput
    disconnect?: ResponseWhereInput | boolean
    delete?: ResponseWhereInput | boolean
    connect?: ResponseWhereUniqueInput
    update?: XOR<XOR<ResponseUpdateToOneWithWhereWithoutRequestInput, ResponseUpdateWithoutRequestInput>, ResponseUncheckedUpdateWithoutRequestInput>
  }

  export type RequestCreateNestedOneWithoutResponseInput = {
    create?: XOR<RequestCreateWithoutResponseInput, RequestUncheckedCreateWithoutResponseInput>
    connectOrCreate?: RequestCreateOrConnectWithoutResponseInput
    connect?: RequestWhereUniqueInput
  }

  export type DebugSessionCreateNestedOneWithoutResponsesInput = {
    create?: XOR<DebugSessionCreateWithoutResponsesInput, DebugSessionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: DebugSessionCreateOrConnectWithoutResponsesInput
    connect?: DebugSessionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RequestUpdateOneRequiredWithoutResponseNestedInput = {
    create?: XOR<RequestCreateWithoutResponseInput, RequestUncheckedCreateWithoutResponseInput>
    connectOrCreate?: RequestCreateOrConnectWithoutResponseInput
    upsert?: RequestUpsertWithoutResponseInput
    connect?: RequestWhereUniqueInput
    update?: XOR<XOR<RequestUpdateToOneWithWhereWithoutResponseInput, RequestUpdateWithoutResponseInput>, RequestUncheckedUpdateWithoutResponseInput>
  }

  export type DebugSessionUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<DebugSessionCreateWithoutResponsesInput, DebugSessionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: DebugSessionCreateOrConnectWithoutResponsesInput
    upsert?: DebugSessionUpsertWithoutResponsesInput
    connect?: DebugSessionWhereUniqueInput
    update?: XOR<XOR<DebugSessionUpdateToOneWithWhereWithoutResponsesInput, DebugSessionUpdateWithoutResponsesInput>, DebugSessionUncheckedUpdateWithoutResponsesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[]
    notIn?: $Enums.Priority[]
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[]
    notIn?: $Enums.Priority[]
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumLogLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.LogLevel | EnumLogLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LogLevel[]
    notIn?: $Enums.LogLevel[]
    not?: NestedEnumLogLevelFilter<$PrismaModel> | $Enums.LogLevel
  }

  export type NestedEnumLogLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogLevel | EnumLogLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LogLevel[]
    notIn?: $Enums.LogLevel[]
    not?: NestedEnumLogLevelWithAggregatesFilter<$PrismaModel> | $Enums.LogLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogLevelFilter<$PrismaModel>
    _max?: NestedEnumLogLevelFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDebugTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DebugType | EnumDebugTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DebugType[]
    notIn?: $Enums.DebugType[]
    not?: NestedEnumDebugTypeFilter<$PrismaModel> | $Enums.DebugType
  }

  export type NestedEnumDebugStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DebugStatus | EnumDebugStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DebugStatus[]
    notIn?: $Enums.DebugStatus[]
    not?: NestedEnumDebugStatusFilter<$PrismaModel> | $Enums.DebugStatus
  }

  export type NestedEnumDebugTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DebugType | EnumDebugTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DebugType[]
    notIn?: $Enums.DebugType[]
    not?: NestedEnumDebugTypeWithAggregatesFilter<$PrismaModel> | $Enums.DebugType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDebugTypeFilter<$PrismaModel>
    _max?: NestedEnumDebugTypeFilter<$PrismaModel>
  }

  export type NestedEnumDebugStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DebugStatus | EnumDebugStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DebugStatus[]
    notIn?: $Enums.DebugStatus[]
    not?: NestedEnumDebugStatusWithAggregatesFilter<$PrismaModel> | $Enums.DebugStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDebugStatusFilter<$PrismaModel>
    _max?: NestedEnumDebugStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TaskCreateWithoutProjectInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: TaskCreateNestedOneWithoutChildrenInput
    children?: TaskCreateNestedManyWithoutParentInput
    logs?: TaskLogCreateNestedManyWithoutTaskInput
    schedule?: ScheduleCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    scheduleId?: string | null
    children?: TaskUncheckedCreateNestedManyWithoutParentInput
    logs?: TaskLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskCreateManyProjectInputEnvelope = {
    data: TaskCreateManyProjectInput | TaskCreateManyProjectInput[]
  }

  export type ScheduleCreateWithoutProjectInput = {
    id?: string
    name: string
    description?: string | null
    cron?: string | null
    active?: boolean
    nextRun?: Date | string | null
    lastRun?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    description?: string | null
    cron?: string | null
    active?: boolean
    nextRun?: Date | string | null
    lastRun?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutProjectInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutProjectInput, ScheduleUncheckedCreateWithoutProjectInput>
  }

  export type ScheduleCreateManyProjectInputEnvelope = {
    data: ScheduleCreateManyProjectInput | ScheduleCreateManyProjectInput[]
  }

  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
  }

  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutProjectInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    name?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    progress?: FloatFilter<"Task"> | number
    startedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    projectId?: StringFilter<"Task"> | string
    parentId?: StringNullableFilter<"Task"> | string | null
    scheduleId?: StringNullableFilter<"Task"> | string | null
  }

  export type ScheduleUpsertWithWhereUniqueWithoutProjectInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutProjectInput, ScheduleUncheckedUpdateWithoutProjectInput>
    create: XOR<ScheduleCreateWithoutProjectInput, ScheduleUncheckedCreateWithoutProjectInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutProjectInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutProjectInput, ScheduleUncheckedUpdateWithoutProjectInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutProjectInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutProjectInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: StringFilter<"Schedule"> | string
    name?: StringFilter<"Schedule"> | string
    description?: StringNullableFilter<"Schedule"> | string | null
    cron?: StringNullableFilter<"Schedule"> | string | null
    active?: BoolFilter<"Schedule"> | boolean
    nextRun?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    lastRun?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    projectId?: StringFilter<"Schedule"> | string
  }

  export type ProjectCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    schedules?: ScheduleCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    schedules?: ScheduleUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type TaskCreateWithoutChildrenInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTasksInput
    parent?: TaskCreateNestedOneWithoutChildrenInput
    logs?: TaskLogCreateNestedManyWithoutTaskInput
    schedule?: ScheduleCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    parentId?: string | null
    scheduleId?: string | null
    logs?: TaskLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutChildrenInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutChildrenInput, TaskUncheckedCreateWithoutChildrenInput>
  }

  export type TaskCreateWithoutParentInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTasksInput
    children?: TaskCreateNestedManyWithoutParentInput
    logs?: TaskLogCreateNestedManyWithoutTaskInput
    schedule?: ScheduleCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    scheduleId?: string | null
    children?: TaskUncheckedCreateNestedManyWithoutParentInput
    logs?: TaskLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutParentInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput>
  }

  export type TaskCreateManyParentInputEnvelope = {
    data: TaskCreateManyParentInput | TaskCreateManyParentInput[]
  }

  export type TaskLogCreateWithoutTaskInput = {
    id?: string
    message: string
    level?: $Enums.LogLevel
    createdAt?: Date | string
  }

  export type TaskLogUncheckedCreateWithoutTaskInput = {
    id?: string
    message: string
    level?: $Enums.LogLevel
    createdAt?: Date | string
  }

  export type TaskLogCreateOrConnectWithoutTaskInput = {
    where: TaskLogWhereUniqueInput
    create: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput>
  }

  export type TaskLogCreateManyTaskInputEnvelope = {
    data: TaskLogCreateManyTaskInput | TaskLogCreateManyTaskInput[]
  }

  export type ScheduleCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    cron?: string | null
    active?: boolean
    nextRun?: Date | string | null
    lastRun?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    cron?: string | null
    active?: boolean
    nextRun?: Date | string | null
    lastRun?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type ScheduleCreateOrConnectWithoutTasksInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutTasksInput, ScheduleUncheckedCreateWithoutTasksInput>
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    schedules?: ScheduleUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    schedules?: ScheduleUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type TaskUpsertWithoutChildrenInput = {
    update: XOR<TaskUpdateWithoutChildrenInput, TaskUncheckedUpdateWithoutChildrenInput>
    create: XOR<TaskCreateWithoutChildrenInput, TaskUncheckedCreateWithoutChildrenInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutChildrenInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutChildrenInput, TaskUncheckedUpdateWithoutChildrenInput>
  }

  export type TaskUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    parent?: TaskUpdateOneWithoutChildrenNestedInput
    logs?: TaskLogUpdateManyWithoutTaskNestedInput
    schedule?: ScheduleUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleId?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: TaskLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutParentInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutParentInput, TaskUncheckedUpdateWithoutParentInput>
    create: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutParentInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutParentInput, TaskUncheckedUpdateWithoutParentInput>
  }

  export type TaskUpdateManyWithWhereWithoutParentInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutParentInput>
  }

  export type TaskLogUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskLogWhereUniqueInput
    update: XOR<TaskLogUpdateWithoutTaskInput, TaskLogUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput>
  }

  export type TaskLogUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskLogWhereUniqueInput
    data: XOR<TaskLogUpdateWithoutTaskInput, TaskLogUncheckedUpdateWithoutTaskInput>
  }

  export type TaskLogUpdateManyWithWhereWithoutTaskInput = {
    where: TaskLogScalarWhereInput
    data: XOR<TaskLogUpdateManyMutationInput, TaskLogUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskLogScalarWhereInput = {
    AND?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
    OR?: TaskLogScalarWhereInput[]
    NOT?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
    id?: StringFilter<"TaskLog"> | string
    message?: StringFilter<"TaskLog"> | string
    level?: EnumLogLevelFilter<"TaskLog"> | $Enums.LogLevel
    createdAt?: DateTimeFilter<"TaskLog"> | Date | string
    taskId?: StringFilter<"TaskLog"> | string
  }

  export type ScheduleUpsertWithoutTasksInput = {
    update: XOR<ScheduleUpdateWithoutTasksInput, ScheduleUncheckedUpdateWithoutTasksInput>
    create: XOR<ScheduleCreateWithoutTasksInput, ScheduleUncheckedCreateWithoutTasksInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutTasksInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutTasksInput, ScheduleUncheckedUpdateWithoutTasksInput>
  }

  export type ScheduleUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cron?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    nextRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cron?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    nextRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateWithoutLogsInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTasksInput
    parent?: TaskCreateNestedOneWithoutChildrenInput
    children?: TaskCreateNestedManyWithoutParentInput
    schedule?: ScheduleCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutLogsInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    parentId?: string | null
    scheduleId?: string | null
    children?: TaskUncheckedCreateNestedManyWithoutParentInput
  }

  export type TaskCreateOrConnectWithoutLogsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutLogsInput, TaskUncheckedCreateWithoutLogsInput>
  }

  export type TaskUpsertWithoutLogsInput = {
    update: XOR<TaskUpdateWithoutLogsInput, TaskUncheckedUpdateWithoutLogsInput>
    create: XOR<TaskCreateWithoutLogsInput, TaskUncheckedCreateWithoutLogsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutLogsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutLogsInput, TaskUncheckedUpdateWithoutLogsInput>
  }

  export type TaskUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    parent?: TaskUpdateOneWithoutChildrenNestedInput
    children?: TaskUpdateManyWithoutParentNestedInput
    schedule?: ScheduleUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: TaskUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ProjectCreateWithoutSchedulesInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSchedulesInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSchedulesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSchedulesInput, ProjectUncheckedCreateWithoutSchedulesInput>
  }

  export type TaskCreateWithoutScheduleInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTasksInput
    parent?: TaskCreateNestedOneWithoutChildrenInput
    children?: TaskCreateNestedManyWithoutParentInput
    logs?: TaskLogCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutScheduleInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    parentId?: string | null
    children?: TaskUncheckedCreateNestedManyWithoutParentInput
    logs?: TaskLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutScheduleInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutScheduleInput, TaskUncheckedCreateWithoutScheduleInput>
  }

  export type TaskCreateManyScheduleInputEnvelope = {
    data: TaskCreateManyScheduleInput | TaskCreateManyScheduleInput[]
  }

  export type ProjectUpsertWithoutSchedulesInput = {
    update: XOR<ProjectUpdateWithoutSchedulesInput, ProjectUncheckedUpdateWithoutSchedulesInput>
    create: XOR<ProjectCreateWithoutSchedulesInput, ProjectUncheckedCreateWithoutSchedulesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSchedulesInput, ProjectUncheckedUpdateWithoutSchedulesInput>
  }

  export type ProjectUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: NullableJsonNullValueInput | InputJsonValue
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutScheduleInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutScheduleInput, TaskUncheckedUpdateWithoutScheduleInput>
    create: XOR<TaskCreateWithoutScheduleInput, TaskUncheckedCreateWithoutScheduleInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutScheduleInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutScheduleInput, TaskUncheckedUpdateWithoutScheduleInput>
  }

  export type TaskUpdateManyWithWhereWithoutScheduleInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutScheduleInput>
  }

  export type RequestCreateWithoutDebugSessionInput = {
    id?: string
    url: string
    method: string
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    timestamp?: Date | string
    response?: ResponseCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutDebugSessionInput = {
    id?: string
    url: string
    method: string
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    timestamp?: Date | string
    response?: ResponseUncheckedCreateNestedOneWithoutRequestInput
  }

  export type RequestCreateOrConnectWithoutDebugSessionInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutDebugSessionInput, RequestUncheckedCreateWithoutDebugSessionInput>
  }

  export type RequestCreateManyDebugSessionInputEnvelope = {
    data: RequestCreateManyDebugSessionInput | RequestCreateManyDebugSessionInput[]
  }

  export type ResponseCreateWithoutDebugSessionInput = {
    id?: string
    statusCode: number
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    timestamp?: Date | string
    request: RequestCreateNestedOneWithoutResponseInput
  }

  export type ResponseUncheckedCreateWithoutDebugSessionInput = {
    id?: string
    statusCode: number
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    timestamp?: Date | string
    requestId: string
  }

  export type ResponseCreateOrConnectWithoutDebugSessionInput = {
    where: ResponseWhereUniqueInput
    create: XOR<ResponseCreateWithoutDebugSessionInput, ResponseUncheckedCreateWithoutDebugSessionInput>
  }

  export type ResponseCreateManyDebugSessionInputEnvelope = {
    data: ResponseCreateManyDebugSessionInput | ResponseCreateManyDebugSessionInput[]
  }

  export type DebugProjectCreateWithoutSessionsInput = {
    id?: string
    name: string
    script?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: ScriptHistoryCreateNestedManyWithoutProjectInput
  }

  export type DebugProjectUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    script?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: ScriptHistoryUncheckedCreateNestedManyWithoutProjectInput
  }

  export type DebugProjectCreateOrConnectWithoutSessionsInput = {
    where: DebugProjectWhereUniqueInput
    create: XOR<DebugProjectCreateWithoutSessionsInput, DebugProjectUncheckedCreateWithoutSessionsInput>
  }

  export type DebugTaskCreateWithoutSessionInput = {
    id?: string
    taskId: string
    project: string
    url: string
    process: JsonNullValueInput | InputJsonValue
  }

  export type DebugTaskUncheckedCreateWithoutSessionInput = {
    id?: string
    taskId: string
    project: string
    url: string
    process: JsonNullValueInput | InputJsonValue
  }

  export type DebugTaskCreateOrConnectWithoutSessionInput = {
    where: DebugTaskWhereUniqueInput
    create: XOR<DebugTaskCreateWithoutSessionInput, DebugTaskUncheckedCreateWithoutSessionInput>
  }

  export type DebugTaskCreateManySessionInputEnvelope = {
    data: DebugTaskCreateManySessionInput | DebugTaskCreateManySessionInput[]
  }

  export type RequestUpsertWithWhereUniqueWithoutDebugSessionInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutDebugSessionInput, RequestUncheckedUpdateWithoutDebugSessionInput>
    create: XOR<RequestCreateWithoutDebugSessionInput, RequestUncheckedCreateWithoutDebugSessionInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutDebugSessionInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutDebugSessionInput, RequestUncheckedUpdateWithoutDebugSessionInput>
  }

  export type RequestUpdateManyWithWhereWithoutDebugSessionInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutDebugSessionInput>
  }

  export type RequestScalarWhereInput = {
    AND?: RequestScalarWhereInput | RequestScalarWhereInput[]
    OR?: RequestScalarWhereInput[]
    NOT?: RequestScalarWhereInput | RequestScalarWhereInput[]
    id?: StringFilter<"Request"> | string
    url?: StringFilter<"Request"> | string
    method?: StringFilter<"Request"> | string
    headers?: JsonNullableFilter<"Request">
    body?: StringNullableFilter<"Request"> | string | null
    timestamp?: DateTimeFilter<"Request"> | Date | string
    debugSessionId?: StringFilter<"Request"> | string
  }

  export type ResponseUpsertWithWhereUniqueWithoutDebugSessionInput = {
    where: ResponseWhereUniqueInput
    update: XOR<ResponseUpdateWithoutDebugSessionInput, ResponseUncheckedUpdateWithoutDebugSessionInput>
    create: XOR<ResponseCreateWithoutDebugSessionInput, ResponseUncheckedCreateWithoutDebugSessionInput>
  }

  export type ResponseUpdateWithWhereUniqueWithoutDebugSessionInput = {
    where: ResponseWhereUniqueInput
    data: XOR<ResponseUpdateWithoutDebugSessionInput, ResponseUncheckedUpdateWithoutDebugSessionInput>
  }

  export type ResponseUpdateManyWithWhereWithoutDebugSessionInput = {
    where: ResponseScalarWhereInput
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyWithoutDebugSessionInput>
  }

  export type ResponseScalarWhereInput = {
    AND?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
    OR?: ResponseScalarWhereInput[]
    NOT?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
    id?: StringFilter<"Response"> | string
    statusCode?: IntFilter<"Response"> | number
    headers?: JsonNullableFilter<"Response">
    body?: StringNullableFilter<"Response"> | string | null
    timestamp?: DateTimeFilter<"Response"> | Date | string
    requestId?: StringFilter<"Response"> | string
    debugSessionId?: StringFilter<"Response"> | string
  }

  export type DebugProjectUpsertWithoutSessionsInput = {
    update: XOR<DebugProjectUpdateWithoutSessionsInput, DebugProjectUncheckedUpdateWithoutSessionsInput>
    create: XOR<DebugProjectCreateWithoutSessionsInput, DebugProjectUncheckedCreateWithoutSessionsInput>
    where?: DebugProjectWhereInput
  }

  export type DebugProjectUpdateToOneWithWhereWithoutSessionsInput = {
    where?: DebugProjectWhereInput
    data: XOR<DebugProjectUpdateWithoutSessionsInput, DebugProjectUncheckedUpdateWithoutSessionsInput>
  }

  export type DebugProjectUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    script?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: ScriptHistoryUpdateManyWithoutProjectNestedInput
  }

  export type DebugProjectUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    script?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: ScriptHistoryUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type DebugTaskUpsertWithWhereUniqueWithoutSessionInput = {
    where: DebugTaskWhereUniqueInput
    update: XOR<DebugTaskUpdateWithoutSessionInput, DebugTaskUncheckedUpdateWithoutSessionInput>
    create: XOR<DebugTaskCreateWithoutSessionInput, DebugTaskUncheckedCreateWithoutSessionInput>
  }

  export type DebugTaskUpdateWithWhereUniqueWithoutSessionInput = {
    where: DebugTaskWhereUniqueInput
    data: XOR<DebugTaskUpdateWithoutSessionInput, DebugTaskUncheckedUpdateWithoutSessionInput>
  }

  export type DebugTaskUpdateManyWithWhereWithoutSessionInput = {
    where: DebugTaskScalarWhereInput
    data: XOR<DebugTaskUpdateManyMutationInput, DebugTaskUncheckedUpdateManyWithoutSessionInput>
  }

  export type DebugTaskScalarWhereInput = {
    AND?: DebugTaskScalarWhereInput | DebugTaskScalarWhereInput[]
    OR?: DebugTaskScalarWhereInput[]
    NOT?: DebugTaskScalarWhereInput | DebugTaskScalarWhereInput[]
    id?: StringFilter<"DebugTask"> | string
    taskId?: StringFilter<"DebugTask"> | string
    project?: StringFilter<"DebugTask"> | string
    url?: StringFilter<"DebugTask"> | string
    process?: JsonFilter<"DebugTask">
    sessionId?: StringFilter<"DebugTask"> | string
  }

  export type DebugSessionCreateWithoutProjectInput = {
    id?: string
    type: $Enums.DebugType
    status?: $Enums.DebugStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    requests?: RequestCreateNestedManyWithoutDebugSessionInput
    responses?: ResponseCreateNestedManyWithoutDebugSessionInput
    debugTasks?: DebugTaskCreateNestedManyWithoutSessionInput
  }

  export type DebugSessionUncheckedCreateWithoutProjectInput = {
    id?: string
    type: $Enums.DebugType
    status?: $Enums.DebugStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    requests?: RequestUncheckedCreateNestedManyWithoutDebugSessionInput
    responses?: ResponseUncheckedCreateNestedManyWithoutDebugSessionInput
    debugTasks?: DebugTaskUncheckedCreateNestedManyWithoutSessionInput
  }

  export type DebugSessionCreateOrConnectWithoutProjectInput = {
    where: DebugSessionWhereUniqueInput
    create: XOR<DebugSessionCreateWithoutProjectInput, DebugSessionUncheckedCreateWithoutProjectInput>
  }

  export type DebugSessionCreateManyProjectInputEnvelope = {
    data: DebugSessionCreateManyProjectInput | DebugSessionCreateManyProjectInput[]
  }

  export type ScriptHistoryCreateWithoutProjectInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type ScriptHistoryUncheckedCreateWithoutProjectInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type ScriptHistoryCreateOrConnectWithoutProjectInput = {
    where: ScriptHistoryWhereUniqueInput
    create: XOR<ScriptHistoryCreateWithoutProjectInput, ScriptHistoryUncheckedCreateWithoutProjectInput>
  }

  export type ScriptHistoryCreateManyProjectInputEnvelope = {
    data: ScriptHistoryCreateManyProjectInput | ScriptHistoryCreateManyProjectInput[]
  }

  export type DebugSessionUpsertWithWhereUniqueWithoutProjectInput = {
    where: DebugSessionWhereUniqueInput
    update: XOR<DebugSessionUpdateWithoutProjectInput, DebugSessionUncheckedUpdateWithoutProjectInput>
    create: XOR<DebugSessionCreateWithoutProjectInput, DebugSessionUncheckedCreateWithoutProjectInput>
  }

  export type DebugSessionUpdateWithWhereUniqueWithoutProjectInput = {
    where: DebugSessionWhereUniqueInput
    data: XOR<DebugSessionUpdateWithoutProjectInput, DebugSessionUncheckedUpdateWithoutProjectInput>
  }

  export type DebugSessionUpdateManyWithWhereWithoutProjectInput = {
    where: DebugSessionScalarWhereInput
    data: XOR<DebugSessionUpdateManyMutationInput, DebugSessionUncheckedUpdateManyWithoutProjectInput>
  }

  export type DebugSessionScalarWhereInput = {
    AND?: DebugSessionScalarWhereInput | DebugSessionScalarWhereInput[]
    OR?: DebugSessionScalarWhereInput[]
    NOT?: DebugSessionScalarWhereInput | DebugSessionScalarWhereInput[]
    id?: StringFilter<"DebugSession"> | string
    type?: EnumDebugTypeFilter<"DebugSession"> | $Enums.DebugType
    status?: EnumDebugStatusFilter<"DebugSession"> | $Enums.DebugStatus
    startedAt?: DateTimeFilter<"DebugSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"DebugSession"> | Date | string | null
    data?: JsonNullableFilter<"DebugSession">
    projectId?: StringNullableFilter<"DebugSession"> | string | null
  }

  export type ScriptHistoryUpsertWithWhereUniqueWithoutProjectInput = {
    where: ScriptHistoryWhereUniqueInput
    update: XOR<ScriptHistoryUpdateWithoutProjectInput, ScriptHistoryUncheckedUpdateWithoutProjectInput>
    create: XOR<ScriptHistoryCreateWithoutProjectInput, ScriptHistoryUncheckedCreateWithoutProjectInput>
  }

  export type ScriptHistoryUpdateWithWhereUniqueWithoutProjectInput = {
    where: ScriptHistoryWhereUniqueInput
    data: XOR<ScriptHistoryUpdateWithoutProjectInput, ScriptHistoryUncheckedUpdateWithoutProjectInput>
  }

  export type ScriptHistoryUpdateManyWithWhereWithoutProjectInput = {
    where: ScriptHistoryScalarWhereInput
    data: XOR<ScriptHistoryUpdateManyMutationInput, ScriptHistoryUncheckedUpdateManyWithoutProjectInput>
  }

  export type ScriptHistoryScalarWhereInput = {
    AND?: ScriptHistoryScalarWhereInput | ScriptHistoryScalarWhereInput[]
    OR?: ScriptHistoryScalarWhereInput[]
    NOT?: ScriptHistoryScalarWhereInput | ScriptHistoryScalarWhereInput[]
    id?: StringFilter<"ScriptHistory"> | string
    content?: StringFilter<"ScriptHistory"> | string
    createdAt?: DateTimeFilter<"ScriptHistory"> | Date | string
    projectId?: StringFilter<"ScriptHistory"> | string
  }

  export type DebugProjectCreateWithoutHistoryInput = {
    id?: string
    name: string
    script?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: DebugSessionCreateNestedManyWithoutProjectInput
  }

  export type DebugProjectUncheckedCreateWithoutHistoryInput = {
    id?: string
    name: string
    script?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: DebugSessionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type DebugProjectCreateOrConnectWithoutHistoryInput = {
    where: DebugProjectWhereUniqueInput
    create: XOR<DebugProjectCreateWithoutHistoryInput, DebugProjectUncheckedCreateWithoutHistoryInput>
  }

  export type DebugProjectUpsertWithoutHistoryInput = {
    update: XOR<DebugProjectUpdateWithoutHistoryInput, DebugProjectUncheckedUpdateWithoutHistoryInput>
    create: XOR<DebugProjectCreateWithoutHistoryInput, DebugProjectUncheckedCreateWithoutHistoryInput>
    where?: DebugProjectWhereInput
  }

  export type DebugProjectUpdateToOneWithWhereWithoutHistoryInput = {
    where?: DebugProjectWhereInput
    data: XOR<DebugProjectUpdateWithoutHistoryInput, DebugProjectUncheckedUpdateWithoutHistoryInput>
  }

  export type DebugProjectUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    script?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: DebugSessionUpdateManyWithoutProjectNestedInput
  }

  export type DebugProjectUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    script?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: DebugSessionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type DebugSessionCreateWithoutDebugTasksInput = {
    id?: string
    type: $Enums.DebugType
    status?: $Enums.DebugStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    requests?: RequestCreateNestedManyWithoutDebugSessionInput
    responses?: ResponseCreateNestedManyWithoutDebugSessionInput
    project?: DebugProjectCreateNestedOneWithoutSessionsInput
  }

  export type DebugSessionUncheckedCreateWithoutDebugTasksInput = {
    id?: string
    type: $Enums.DebugType
    status?: $Enums.DebugStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    projectId?: string | null
    requests?: RequestUncheckedCreateNestedManyWithoutDebugSessionInput
    responses?: ResponseUncheckedCreateNestedManyWithoutDebugSessionInput
  }

  export type DebugSessionCreateOrConnectWithoutDebugTasksInput = {
    where: DebugSessionWhereUniqueInput
    create: XOR<DebugSessionCreateWithoutDebugTasksInput, DebugSessionUncheckedCreateWithoutDebugTasksInput>
  }

  export type DebugSessionUpsertWithoutDebugTasksInput = {
    update: XOR<DebugSessionUpdateWithoutDebugTasksInput, DebugSessionUncheckedUpdateWithoutDebugTasksInput>
    create: XOR<DebugSessionCreateWithoutDebugTasksInput, DebugSessionUncheckedCreateWithoutDebugTasksInput>
    where?: DebugSessionWhereInput
  }

  export type DebugSessionUpdateToOneWithWhereWithoutDebugTasksInput = {
    where?: DebugSessionWhereInput
    data: XOR<DebugSessionUpdateWithoutDebugTasksInput, DebugSessionUncheckedUpdateWithoutDebugTasksInput>
  }

  export type DebugSessionUpdateWithoutDebugTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDebugTypeFieldUpdateOperationsInput | $Enums.DebugType
    status?: EnumDebugStatusFieldUpdateOperationsInput | $Enums.DebugStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    requests?: RequestUpdateManyWithoutDebugSessionNestedInput
    responses?: ResponseUpdateManyWithoutDebugSessionNestedInput
    project?: DebugProjectUpdateOneWithoutSessionsNestedInput
  }

  export type DebugSessionUncheckedUpdateWithoutDebugTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDebugTypeFieldUpdateOperationsInput | $Enums.DebugType
    status?: EnumDebugStatusFieldUpdateOperationsInput | $Enums.DebugStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: RequestUncheckedUpdateManyWithoutDebugSessionNestedInput
    responses?: ResponseUncheckedUpdateManyWithoutDebugSessionNestedInput
  }

  export type DebugSessionCreateWithoutRequestsInput = {
    id?: string
    type: $Enums.DebugType
    status?: $Enums.DebugStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    responses?: ResponseCreateNestedManyWithoutDebugSessionInput
    project?: DebugProjectCreateNestedOneWithoutSessionsInput
    debugTasks?: DebugTaskCreateNestedManyWithoutSessionInput
  }

  export type DebugSessionUncheckedCreateWithoutRequestsInput = {
    id?: string
    type: $Enums.DebugType
    status?: $Enums.DebugStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    projectId?: string | null
    responses?: ResponseUncheckedCreateNestedManyWithoutDebugSessionInput
    debugTasks?: DebugTaskUncheckedCreateNestedManyWithoutSessionInput
  }

  export type DebugSessionCreateOrConnectWithoutRequestsInput = {
    where: DebugSessionWhereUniqueInput
    create: XOR<DebugSessionCreateWithoutRequestsInput, DebugSessionUncheckedCreateWithoutRequestsInput>
  }

  export type ResponseCreateWithoutRequestInput = {
    id?: string
    statusCode: number
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    timestamp?: Date | string
    debugSession: DebugSessionCreateNestedOneWithoutResponsesInput
  }

  export type ResponseUncheckedCreateWithoutRequestInput = {
    id?: string
    statusCode: number
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    timestamp?: Date | string
    debugSessionId: string
  }

  export type ResponseCreateOrConnectWithoutRequestInput = {
    where: ResponseWhereUniqueInput
    create: XOR<ResponseCreateWithoutRequestInput, ResponseUncheckedCreateWithoutRequestInput>
  }

  export type DebugSessionUpsertWithoutRequestsInput = {
    update: XOR<DebugSessionUpdateWithoutRequestsInput, DebugSessionUncheckedUpdateWithoutRequestsInput>
    create: XOR<DebugSessionCreateWithoutRequestsInput, DebugSessionUncheckedCreateWithoutRequestsInput>
    where?: DebugSessionWhereInput
  }

  export type DebugSessionUpdateToOneWithWhereWithoutRequestsInput = {
    where?: DebugSessionWhereInput
    data: XOR<DebugSessionUpdateWithoutRequestsInput, DebugSessionUncheckedUpdateWithoutRequestsInput>
  }

  export type DebugSessionUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDebugTypeFieldUpdateOperationsInput | $Enums.DebugType
    status?: EnumDebugStatusFieldUpdateOperationsInput | $Enums.DebugStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    responses?: ResponseUpdateManyWithoutDebugSessionNestedInput
    project?: DebugProjectUpdateOneWithoutSessionsNestedInput
    debugTasks?: DebugTaskUpdateManyWithoutSessionNestedInput
  }

  export type DebugSessionUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDebugTypeFieldUpdateOperationsInput | $Enums.DebugType
    status?: EnumDebugStatusFieldUpdateOperationsInput | $Enums.DebugStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    responses?: ResponseUncheckedUpdateManyWithoutDebugSessionNestedInput
    debugTasks?: DebugTaskUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ResponseUpsertWithoutRequestInput = {
    update: XOR<ResponseUpdateWithoutRequestInput, ResponseUncheckedUpdateWithoutRequestInput>
    create: XOR<ResponseCreateWithoutRequestInput, ResponseUncheckedCreateWithoutRequestInput>
    where?: ResponseWhereInput
  }

  export type ResponseUpdateToOneWithWhereWithoutRequestInput = {
    where?: ResponseWhereInput
    data: XOR<ResponseUpdateWithoutRequestInput, ResponseUncheckedUpdateWithoutRequestInput>
  }

  export type ResponseUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    debugSession?: DebugSessionUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ResponseUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    debugSessionId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestCreateWithoutResponseInput = {
    id?: string
    url: string
    method: string
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    timestamp?: Date | string
    debugSession: DebugSessionCreateNestedOneWithoutRequestsInput
  }

  export type RequestUncheckedCreateWithoutResponseInput = {
    id?: string
    url: string
    method: string
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    timestamp?: Date | string
    debugSessionId: string
  }

  export type RequestCreateOrConnectWithoutResponseInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutResponseInput, RequestUncheckedCreateWithoutResponseInput>
  }

  export type DebugSessionCreateWithoutResponsesInput = {
    id?: string
    type: $Enums.DebugType
    status?: $Enums.DebugStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    requests?: RequestCreateNestedManyWithoutDebugSessionInput
    project?: DebugProjectCreateNestedOneWithoutSessionsInput
    debugTasks?: DebugTaskCreateNestedManyWithoutSessionInput
  }

  export type DebugSessionUncheckedCreateWithoutResponsesInput = {
    id?: string
    type: $Enums.DebugType
    status?: $Enums.DebugStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    projectId?: string | null
    requests?: RequestUncheckedCreateNestedManyWithoutDebugSessionInput
    debugTasks?: DebugTaskUncheckedCreateNestedManyWithoutSessionInput
  }

  export type DebugSessionCreateOrConnectWithoutResponsesInput = {
    where: DebugSessionWhereUniqueInput
    create: XOR<DebugSessionCreateWithoutResponsesInput, DebugSessionUncheckedCreateWithoutResponsesInput>
  }

  export type RequestUpsertWithoutResponseInput = {
    update: XOR<RequestUpdateWithoutResponseInput, RequestUncheckedUpdateWithoutResponseInput>
    create: XOR<RequestCreateWithoutResponseInput, RequestUncheckedCreateWithoutResponseInput>
    where?: RequestWhereInput
  }

  export type RequestUpdateToOneWithWhereWithoutResponseInput = {
    where?: RequestWhereInput
    data: XOR<RequestUpdateWithoutResponseInput, RequestUncheckedUpdateWithoutResponseInput>
  }

  export type RequestUpdateWithoutResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    debugSession?: DebugSessionUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type RequestUncheckedUpdateWithoutResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    debugSessionId?: StringFieldUpdateOperationsInput | string
  }

  export type DebugSessionUpsertWithoutResponsesInput = {
    update: XOR<DebugSessionUpdateWithoutResponsesInput, DebugSessionUncheckedUpdateWithoutResponsesInput>
    create: XOR<DebugSessionCreateWithoutResponsesInput, DebugSessionUncheckedCreateWithoutResponsesInput>
    where?: DebugSessionWhereInput
  }

  export type DebugSessionUpdateToOneWithWhereWithoutResponsesInput = {
    where?: DebugSessionWhereInput
    data: XOR<DebugSessionUpdateWithoutResponsesInput, DebugSessionUncheckedUpdateWithoutResponsesInput>
  }

  export type DebugSessionUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDebugTypeFieldUpdateOperationsInput | $Enums.DebugType
    status?: EnumDebugStatusFieldUpdateOperationsInput | $Enums.DebugStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    requests?: RequestUpdateManyWithoutDebugSessionNestedInput
    project?: DebugProjectUpdateOneWithoutSessionsNestedInput
    debugTasks?: DebugTaskUpdateManyWithoutSessionNestedInput
  }

  export type DebugSessionUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDebugTypeFieldUpdateOperationsInput | $Enums.DebugType
    status?: EnumDebugStatusFieldUpdateOperationsInput | $Enums.DebugStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: RequestUncheckedUpdateManyWithoutDebugSessionNestedInput
    debugTasks?: DebugTaskUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type TaskCreateManyProjectInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    scheduleId?: string | null
  }

  export type ScheduleCreateManyProjectInput = {
    id?: string
    name: string
    description?: string | null
    cron?: string | null
    active?: boolean
    nextRun?: Date | string | null
    lastRun?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: TaskUpdateOneWithoutChildrenNestedInput
    children?: TaskUpdateManyWithoutParentNestedInput
    logs?: TaskLogUpdateManyWithoutTaskNestedInput
    schedule?: ScheduleUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: TaskUncheckedUpdateManyWithoutParentNestedInput
    logs?: TaskLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduleUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cron?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    nextRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cron?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    nextRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cron?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    nextRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRun?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyParentInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    scheduleId?: string | null
  }

  export type TaskLogCreateManyTaskInput = {
    id?: string
    message: string
    level?: $Enums.LogLevel
    createdAt?: Date | string
  }

  export type TaskUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    children?: TaskUpdateManyWithoutParentNestedInput
    logs?: TaskLogUpdateManyWithoutTaskNestedInput
    schedule?: ScheduleUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    scheduleId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: TaskUncheckedUpdateManyWithoutParentNestedInput
    logs?: TaskLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    scheduleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskLogUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskLogUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskLogUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyScheduleInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    parentId?: string | null
  }

  export type TaskUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    parent?: TaskUpdateOneWithoutChildrenNestedInput
    children?: TaskUpdateManyWithoutParentNestedInput
    logs?: TaskLogUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: TaskUncheckedUpdateManyWithoutParentNestedInput
    logs?: TaskLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestCreateManyDebugSessionInput = {
    id?: string
    url: string
    method: string
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    timestamp?: Date | string
  }

  export type ResponseCreateManyDebugSessionInput = {
    id?: string
    statusCode: number
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    timestamp?: Date | string
    requestId: string
  }

  export type DebugTaskCreateManySessionInput = {
    id?: string
    taskId: string
    project: string
    url: string
    process: JsonNullValueInput | InputJsonValue
  }

  export type RequestUpdateWithoutDebugSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    response?: ResponseUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutDebugSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    response?: ResponseUncheckedUpdateOneWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateManyWithoutDebugSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseUpdateWithoutDebugSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: RequestUpdateOneRequiredWithoutResponseNestedInput
  }

  export type ResponseUncheckedUpdateWithoutDebugSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type ResponseUncheckedUpdateManyWithoutDebugSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    headers?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type DebugTaskUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    process?: JsonNullValueInput | InputJsonValue
  }

  export type DebugTaskUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    process?: JsonNullValueInput | InputJsonValue
  }

  export type DebugTaskUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    process?: JsonNullValueInput | InputJsonValue
  }

  export type DebugSessionCreateManyProjectInput = {
    id?: string
    type: $Enums.DebugType
    status?: $Enums.DebugStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ScriptHistoryCreateManyProjectInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type DebugSessionUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDebugTypeFieldUpdateOperationsInput | $Enums.DebugType
    status?: EnumDebugStatusFieldUpdateOperationsInput | $Enums.DebugStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    requests?: RequestUpdateManyWithoutDebugSessionNestedInput
    responses?: ResponseUpdateManyWithoutDebugSessionNestedInput
    debugTasks?: DebugTaskUpdateManyWithoutSessionNestedInput
  }

  export type DebugSessionUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDebugTypeFieldUpdateOperationsInput | $Enums.DebugType
    status?: EnumDebugStatusFieldUpdateOperationsInput | $Enums.DebugStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    requests?: RequestUncheckedUpdateManyWithoutDebugSessionNestedInput
    responses?: ResponseUncheckedUpdateManyWithoutDebugSessionNestedInput
    debugTasks?: DebugTaskUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type DebugSessionUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDebugTypeFieldUpdateOperationsInput | $Enums.DebugType
    status?: EnumDebugStatusFieldUpdateOperationsInput | $Enums.DebugStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ScriptHistoryUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScriptHistoryUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScriptHistoryUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
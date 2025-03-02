import * as _typed_curry from '@typed/curry';

declare const prettify_json: (raw: string | object) => string;
declare const log_level: readonly ["FATAL", "ERROR", "WARN", "INFO", "DEBUG", "TRACE"];
type LogLevel = (typeof log_level)[number];
declare const logger: _typed_curry.Curry4<"FATAL" | "ERROR" | "WARN" | "INFO" | "DEBUG" | "TRACE", string, "FATAL" | "ERROR" | "WARN" | "INFO" | "DEBUG" | "TRACE", any[], void>;

export { type LogLevel, logger, prettify_json };

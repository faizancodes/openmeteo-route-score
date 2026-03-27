/**
 * Configuration options for OpenmeteoRouteScore.
 */
export interface OpenmeteoRouteScoreOptions {
  /**
   * Enable verbose logging for debugging.
   * @default false
   */
  verbose?: boolean;

  /**
   * Configuration for: Pluggable scoring weights for wind, precipitation, AQI, temperature, and UV
   */
  feature1?: Record<string, unknown>;

  /**
   * Configuration for: Polyline/waypoint support with per-segment forecast sampling
   */
  feature2?: Record<string, unknown>;

  /**
   * Configuration for: Explainable score report (component contributions + human-readable rationale)
   */
  feature3?: Record<string, unknown>;

  /**
   * Configuration for: Built-in caching and rate-limit friendly batching for forecast calls
   */
  feature4?: Record<string, unknown>;
}

/**
 * Result returned by OpenmeteoRouteScore operations.
 */
export interface OpenmeteoRouteScoreResult<T = unknown> {
  /** Whether the operation succeeded. */
  success: boolean;
  /** The result data, if successful. */
  data?: T;
  /** Error message, if the operation failed. */
  error?: string;
}

import { describe, it, expect } from "vitest";
import { OpenmeteoRouteScore } from "../src";

describe("OpenmeteoRouteScore", () => {
  it("should create an instance with default options", () => {
    const instance = new OpenmeteoRouteScore();
    expect(instance).toBeDefined();
  });

  it("should accept custom options", () => {
    const instance = new OpenmeteoRouteScore({ verbose: true });
    expect(instance).toBeDefined();
  });

  it("should run successfully", async () => {
    const instance = new OpenmeteoRouteScore();
    const result = await instance.run();
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });
});

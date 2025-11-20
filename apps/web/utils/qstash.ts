import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";
import { env } from "@/env";

/**
 * Conditionally applies QStash signature verification only if credentials are configured
 * @param handler - The request handler function
 * @returns The handler wrapped with QStash verification if credentials exist, otherwise the original handler
 */
export function withQStashVerification<T extends (...args: any[]) => any>(
  handler: T,
): T {
  const useQStash =
    env.QSTASH_CURRENT_SIGNING_KEY && env.QSTASH_NEXT_SIGNING_KEY;
  return (useQStash ? verifySignatureAppRouter(handler) : handler) as T;
}

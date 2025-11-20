import { withError } from "@/utils/middleware";
import { handleBatchRequest } from "@/app/api/user/categorize/senders/batch/handle-batch";
import { withQStashVerification } from "@/utils/qstash";

export const maxDuration = 300;

export const POST = withError(withQStashVerification(handleBatchRequest));

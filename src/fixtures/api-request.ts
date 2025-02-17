import type { MailHogFixtures, MailHogTestFixtures } from "@/types/fixtures";
import type { APIResponse } from "@playwright/test";

const mhApiRequest: MailHogTestFixtures["mhApiRequest"] = async (
  { mhApiUrl, mhApiAuthorizationHeader, request },
  use,
) => {
  const makeRequest: MailHogFixtures["mhApiRequest"] = async (
    method,
    path,
    options,
  ) => {
    return (await request[method](`${mhApiUrl}${path}`, {
      ...options,
      headers: {
        ...(mhApiAuthorizationHeader && {
          Authorization: mhApiAuthorizationHeader,
        }),
        ...options?.headers,
      },
    })) as APIResponse;
  };

  await use(makeRequest);
};

export { mhApiRequest };

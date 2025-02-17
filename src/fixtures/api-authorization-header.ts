import type { MailHogTestFixtures } from "@/types/fixtures";

const mhApiAuthorizationHeader = (
  credentials?: string,
): MailHogTestFixtures["mhApiAuthorizationHeader"] => {
  return async ({}, use) => {
    if (!credentials) {
      return await use(undefined);
    }

    const key = btoa(encodeURIComponent(credentials));

    await use(`Basic ${key}`);
  };
};

export { mhApiAuthorizationHeader };

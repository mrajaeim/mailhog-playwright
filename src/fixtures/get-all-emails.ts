import type { Messages, PaginationQuery } from "../types/mailhog";
import type { MailHogTestFixtures } from "../types/fixtures";

const mhGetAllEmails: MailHogTestFixtures["mhGetAllEmails"] = async (
  { mhApiUrl, request },
  use
) => {
  const getAllEmails = async (query?: PaginationQuery) => {
    const response = await request.get(`${mhApiUrl}/v2/messages`, {
      params: query,
    });

    const messages = (await response.json()) as Messages;

    return messages;
  };

  await use(getAllEmails);
};

export { mhGetAllEmails };

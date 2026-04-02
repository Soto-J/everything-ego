import { google } from "googleapis";

import { baseProcedure } from "@/lib/trpc/init";

import env from "@/env";

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC =
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

export const getManyScheduleProcedure = baseProcedure.query(async () => {
  // const auth = new google.auth.OAuth2(
  //   env.GOOGLE_CLIENT_ID,
  //   env.GOOGLE_CLIENT_SECRET,
  //   env.NEXT_APP_URL,
  // );

  // auth.setCredentials();

  // const calendarClient = google.calendar({
  //   version: "v3",
  //   auth,
  // });

  // const result = await calendarClient.events.list({
  //   calendarId: "primary",
  //   timeMin: new Date().toISOString(),
  //   maxResults: 10,
  //   singleEvents: true,
  //   orderBy: "startTime",
  // });

  // const events = result.data?.items;

  // if (!events || events.length === 0) {
  //   console.log("No upcoming found.");
  // }

  // console.log({ events });
  return {};
});

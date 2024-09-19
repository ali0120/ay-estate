export enum AllRoutes {
  COMPOSE = "/dashboard/messages/compose",
  INBOX = "/dashboard/messages",
  MY_REQUESTS = "/dashboard/messages/sent",
  MY_DRAFT = "/dashboard/messages/draft",
  CONNECTION_VIEW_LIST = "/dashboard/connection",
  CONNECTION_VIEW_REQUESTS = "/dashboard/connection/requests",
  USERS_VIEW_LIST = "/dashboard/users",
  GROUPS_VIEW_LIST = "/dashboard/users/groups",
}

export const routePermissions: Record<AllRoutes, string> = {
  [AllRoutes.COMPOSE]: "message_compose",
  [AllRoutes.INBOX]: "message_view_inbox",
  [AllRoutes.MY_REQUESTS]: "message_view_sent",
  [AllRoutes.MY_DRAFT]: "message_view_drafts",
  [AllRoutes.CONNECTION_VIEW_LIST]: "connections_view_list",
  [AllRoutes.CONNECTION_VIEW_REQUESTS]:
    " connections_view_requests connections_send_request connections_approve_requests",
  [AllRoutes.USERS_VIEW_LIST]: "users_view_list",
  [AllRoutes.GROUPS_VIEW_LIST]: "users_view_list",
};

// Routes that are always available for any user
export const alwaysAvailableRoutes: Set<string> = new Set([
  AllRoutes.INBOX,
  AllRoutes.MY_REQUESTS,
  AllRoutes.MY_DRAFT,
  "/not-found",
]);

// Authentication Error Codes
export enum AuthErrorCodes {
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
  EMAIL_ALREADY_EXISTS = "EMAIL_ALREADY_EXISTS",
  INVALID_EMAIL_FORMAT = "INVALID_EMAIL_FORMAT",
  WEAK_PASSWORD = "WEAK_PASSWORD",
  MISSING_FIELDS = "MISSING_FIELDS",
  INVALID_TOKEN = "INVALID_TOKEN",
  TOKEN_REQUIRED = "TOKEN_REQUIRED",
  TOKEN_EXPIRED = "TOKEN_EXPIRED",
  USER_NOT_FOUND = "USER_NOT_FOUND"
}

// Group Error Codes
export enum GroupErrorCodes {
  GROUP_NOT_FOUND = "GROUP_NOT_FOUND",
  GROUP_CREATION_FAILED = "GROUP_CREATION_FAILED",
  GROUP_FETCH_FAILED = "GROUP_FETCH_FAILED",
  INVALID_GROUP_DATA = "INVALID_GROUP_DATA",
  ALREADY_A_MEMBER = "ALREADY_A_MEMBER",
  NOT_GROUP_OWNER = "NOT_GROUP_OWNER",
  UNAUTHORIZED_ACCESS = "UNAUTHORIZED_ACCESS"
}

// Join Request Error Codes
export enum JoinRequestErrorCodes {
  REQUEST_NOT_FOUND = "REQUEST_NOT_FOUND",
  REQUEST_CREATION_FAILED = "REQUEST_CREATION_FAILED",
  REQUEST_FETCH_FAILED = "REQUEST_FETCH_FAILED",
  DUPLICATE_REQUEST = "DUPLICATE_REQUEST",
  ALREADY_A_MEMBER = "ALREADY_A_MEMBER",
  NOT_GROUP_OWNER = "NOT_GROUP_OWNER",
  REQUEST_APPROVAL_FAILED = "REQUEST_APPROVAL_FAILED",
  REQUEST_REJECTION_FAILED = "REQUEST_REJECTION_FAILED"
}

// Message Error Codes
export enum MessageErrorCodes {
  MESSAGE_CREATION_FAILED = "MESSAGE_CREATION_FAILED",
  MESSAGE_FETCH_FAILED = "MESSAGE_FETCH_FAILED",
  INVALID_MESSAGE_DATA = "INVALID_MESSAGE_DATA",
  GROUP_NOT_FOUND = "GROUP_NOT_FOUND"
}

// Server Error Codes
export enum ServerErrorCodes {
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  DATABASE_ERROR = "DATABASE_ERROR",
  CONFIGURATION_ERROR = "CONFIGURATION_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR"
}

// HTTP Status Code Mappings
export const ERROR_STATUS_CODES = {
  // Auth Errors
  [AuthErrorCodes.INVALID_CREDENTIALS]: 401,
  [AuthErrorCodes.EMAIL_ALREADY_EXISTS]: 409,
  [AuthErrorCodes.INVALID_EMAIL_FORMAT]: 400,
  [AuthErrorCodes.WEAK_PASSWORD]: 400,
  [AuthErrorCodes.MISSING_FIELDS]: 400,
  [AuthErrorCodes.INVALID_TOKEN]: 401,
  [AuthErrorCodes.TOKEN_REQUIRED]: 401,
  [AuthErrorCodes.TOKEN_EXPIRED]: 401,
  [AuthErrorCodes.USER_NOT_FOUND]: 404,

  // Group Errors
  [GroupErrorCodes.GROUP_NOT_FOUND]: 404,
  [GroupErrorCodes.GROUP_CREATION_FAILED]: 400,
  [GroupErrorCodes.GROUP_FETCH_FAILED]: 500,
  [GroupErrorCodes.INVALID_GROUP_DATA]: 400,
  [GroupErrorCodes.ALREADY_A_MEMBER]: 400,
  [GroupErrorCodes.NOT_GROUP_OWNER]: 403,
  [GroupErrorCodes.UNAUTHORIZED_ACCESS]: 403,

  // Join Request Errors
  [JoinRequestErrorCodes.REQUEST_NOT_FOUND]: 404,
  [JoinRequestErrorCodes.REQUEST_CREATION_FAILED]: 400,
  [JoinRequestErrorCodes.REQUEST_FETCH_FAILED]: 500,
  [JoinRequestErrorCodes.DUPLICATE_REQUEST]: 400,
  [JoinRequestErrorCodes.REQUEST_APPROVAL_FAILED]: 500,
  [JoinRequestErrorCodes.REQUEST_REJECTION_FAILED]: 500,

  // Message Errors
  [MessageErrorCodes.MESSAGE_CREATION_FAILED]: 400,
  [MessageErrorCodes.MESSAGE_FETCH_FAILED]: 500,
  [MessageErrorCodes.INVALID_MESSAGE_DATA]: 400,

  // Server Errors
  [ServerErrorCodes.INTERNAL_SERVER_ERROR]: 500,
  [ServerErrorCodes.DATABASE_ERROR]: 500,
  [ServerErrorCodes.CONFIGURATION_ERROR]: 500,
  [ServerErrorCodes.VALIDATION_ERROR]: 400
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  // Auth Errors
  [AuthErrorCodes.INVALID_CREDENTIALS]: "Invalid email or password",
  [AuthErrorCodes.EMAIL_ALREADY_EXISTS]: "Email already in use",
  [AuthErrorCodes.INVALID_EMAIL_FORMAT]: "Invalid email format",
  [AuthErrorCodes.WEAK_PASSWORD]: "Password is not strong enough",
  [AuthErrorCodes.MISSING_FIELDS]: "All fields are required",
  [AuthErrorCodes.INVALID_TOKEN]: "Invalid authorization token",
  [AuthErrorCodes.TOKEN_REQUIRED]: "Authorization token required",
  [AuthErrorCodes.TOKEN_EXPIRED]: "Authorization token expired",
  [AuthErrorCodes.USER_NOT_FOUND]: "User not found",

  // Group Errors
  [GroupErrorCodes.GROUP_NOT_FOUND]: "Group not found",
  [GroupErrorCodes.GROUP_CREATION_FAILED]: "Failed to create group",
  [GroupErrorCodes.GROUP_FETCH_FAILED]: "Failed to fetch groups",
  [GroupErrorCodes.INVALID_GROUP_DATA]: "Invalid group data",
  [GroupErrorCodes.ALREADY_A_MEMBER]: "You are already a member of this group",
  [GroupErrorCodes.NOT_GROUP_OWNER]: "Only group owner can perform this action",
  [GroupErrorCodes.UNAUTHORIZED_ACCESS]: "Unauthorized access",

  // Join Request Errors
  [JoinRequestErrorCodes.REQUEST_NOT_FOUND]: "Join request not found",
  [JoinRequestErrorCodes.REQUEST_CREATION_FAILED]: "Failed to create join request",
  [JoinRequestErrorCodes.REQUEST_FETCH_FAILED]: "Failed to fetch join requests",
  [JoinRequestErrorCodes.DUPLICATE_REQUEST]: "You already have a pending request for this group",
  [JoinRequestErrorCodes.REQUEST_APPROVAL_FAILED]: "Failed to approve join request",
  [JoinRequestErrorCodes.REQUEST_REJECTION_FAILED]: "Failed to reject join request",

  // Message Errors
  [MessageErrorCodes.MESSAGE_CREATION_FAILED]: "Failed to send message",
  [MessageErrorCodes.MESSAGE_FETCH_FAILED]: "Failed to fetch messages",
  [MessageErrorCodes.INVALID_MESSAGE_DATA]: "Invalid message data",

  // Server Errors
  [ServerErrorCodes.INTERNAL_SERVER_ERROR]: "Internal server error",
  [ServerErrorCodes.DATABASE_ERROR]: "Database error",
  [ServerErrorCodes.CONFIGURATION_ERROR]: "Server configuration error",
  [ServerErrorCodes.VALIDATION_ERROR]: "Validation error"
} as const;
import { Request, Response } from 'express';

const getApiDocs = async (req: Request, res: Response) => {
  const apiDocs = {
    title: "LFG API Documentation",
    version: "1.0.0",
    baseUrl: "/api",
    endpoints: {
      auth: {
        register: {
          method: "POST",
          path: "/user/register",
          description: "Register a new user",
          body: {
            email: "string (required)",
            password: "string (required)"
          },
          response: "User object with _id, email, createdAt"
        },
        login: {
          method: "POST", 
          path: "/user/login",
          description: "Login user",
          body: {
            email: "string (required)",
            password: "string (required)"
          },
          response: "User object with token"
        }
      },
      groups: {
        createGroup: {
          method: "POST",
          path: "/groups",
          description: "Create a new group",
          auth: "Required",
          body: {
            title: "string (required)",
            description: "string (required)"
          },
          response: "Group object with _id, title, description, user_id, members, timestamps"
        },
        getUserGroups: {
          method: "GET",
          path: "/groups",
          description: "Get all groups owned by current user",
          auth: "Required",
          response: "Array of group objects"
        },
        getPublicGroups: {
          method: "GET", 
          path: "/groups/public",
          description: "Get all public groups",
          auth: "Required",
          response: "Array of all group objects"
        }
      },
      joinRequests: {
        createRequest: {
          method: "POST",
          path: "/join-requests",
          description: "Request to join a group",
          auth: "Required",
          body: {
            group_id: "string (required)"
          },
          response: "JoinRequest object with _id, requester_id, group_id, status: 'pending'"
        },
        getGroupRequests: {
          method: "GET",
          path: "/join-requests/group", 
          description: "Get all pending join requests for groups owned by current user",
          auth: "Required",
          response: "Array of JoinRequest objects"
        },
        approveRequest: {
          method: "PUT",
          path: "/join-requests/:requestId/approve",
          description: "Approve a join request (group owner only)",
          auth: "Required",
          params: {
            requestId: "string (required)"
          },
          response: "Success message and updated JoinRequest object"
        },
        rejectRequest: {
          method: "PUT",
          path: "/join-requests/:requestId/reject",
          description: "Reject a join request (group owner only)", 
          auth: "Required",
          params: {
            requestId: "string (required)"
          },
          response: "Success message and updated JoinRequest object"
        }
      },
      messages: {
        getMessages: {
          method: "GET",
          path: "/messages",
          description: "Get messages (placeholder)",
          auth: "Required",
          response: "Array of message objects"
        }
      }
    },
    authentication: {
      type: "Bearer Token",
      header: "Authorization: Bearer <token>",
      note: "Most endpoints require authentication. Get token from /user/login"
    },
    statusCodes: {
      200: "Success",
      201: "Created",
      400: "Bad Request",
      401: "Unauthorized", 
      403: "Forbidden",
      404: "Not Found",
      500: "Internal Server Error"
    }
  };

  res.status(200).json(apiDocs);
};

export { getApiDocs }; 
import { FormType } from "../../interfaces";
import {
  dataAccessToSubmissions,
  getFormAccess,
  SubmissionAccessType,
  submissionsToDataAccess,
  updateSubmissions
} from "./formAccess.utils";

const roles: any[] = [
  {
    title: "Administrator",
    _id: "5d0797bc872fc747da559858"
  },
  { title: "Authenticated", _id: "5d0797bc872fc71d05559859" },
  { title: "Anonymous", _id: "5d0797bc872fc7da3b55985a" }
];

describe("formAccess.utils", () => {
  describe("dataAccessToSubmissions()", () => {
    it("should map data access to form submissions", () => {
      const data: FormType = {
        _id: "id",
        components: [],
        access: [
          {
            roles: ["5d0797bc872fc747da559858", "5d0797bc872fc71d05559859", "5d0797bc872fc7da3b55985a"],
            type: "read_all"
          }
        ],
        submissionAccess: [
          {
            roles: ["5d0797bc872fc747da559858"],
            type: "read_all"
          }
        ]
      };

      const formAccess = getFormAccess(roles);
      const submissions = dataAccessToSubmissions(data, formAccess);

      expect(submissions.access).toEqual({
        data: {
          delete_all: [],
          delete_own: [],
          read_all: ["5d0797bc872fc747da559858", "5d0797bc872fc71d05559859", "5d0797bc872fc7da3b55985a"],
          read_own: [],
          update_all: [],
          update_own: []
        }
      });

      expect(submissions.submissionAccess).toEqual({
        data: {
          create_all: [],
          create_own: [],
          delete_all: [],
          delete_own: [],
          read_all: ["5d0797bc872fc747da559858"],
          read_own: [],
          update_all: [],
          update_own: []
        }
      });
    });
  });
  describe("submissionsToDataAccess()", () => {
    it("should map form submissions to data access", () => {
      const submissions: SubmissionAccessType = {
        access: {
          data: {
            delete_all: [],
            delete_own: [],
            read_all: ["5d0797bc872fc747da559858", "5d0797bc872fc7da3b55985a"],
            read_own: [],
            update_all: [],
            update_own: []
          }
        },
        submissionAccess: {
          data: {
            create_all: [],
            create_own: [],
            delete_all: [],
            delete_own: [],
            read_all: ["5d0797bc872fc747da559858", "5d0797bc872fc7da3b55985a"],
            read_own: [],
            update_all: [],
            update_own: []
          }
        }
      };

      const originalForm: FormType = {
        _id: "id",
        components: [],
        access: [
          {
            roles: ["5d0797bc872fc747da559858", "5d0797bc872fc71d05559859", "5d0797bc872fc7da3b55985a"],
            type: "read_all"
          }
        ],
        submissionAccess: [
          {
            roles: ["5d0797bc872fc747da559858"],
            type: "read_all"
          }
        ]
      };

      const newForm = submissionsToDataAccess(originalForm, submissions);

      expect(newForm).toEqual({
        _id: "id",
        access: [
          {
            roles: [],
            type: "delete_all"
          },
          {
            roles: [],
            type: "delete_own"
          },
          {
            roles: ["5d0797bc872fc747da559858", "5d0797bc872fc7da3b55985a"],
            type: "read_all"
          },
          {
            roles: [],
            type: "read_own"
          },
          {
            roles: [],
            type: "update_all"
          },
          {
            roles: [],
            type: "update_own"
          }
        ],
        components: [],
        submissionAccess: [
          {
            roles: [],
            type: "create_all"
          },
          {
            roles: [],
            type: "create_own"
          },
          {
            roles: [],
            type: "delete_all"
          },
          {
            roles: [],
            type: "delete_own"
          },
          {
            roles: ["5d0797bc872fc747da559858", "5d0797bc872fc7da3b55985a"],
            type: "read_all"
          },
          {
            roles: [],
            type: "read_own"
          },
          {
            roles: [],
            type: "update_all"
          },
          {
            roles: [],
            type: "update_own"
          }
        ]
      });
    });
  });

  describe("updateSubmissions()", () => {
    it("should update submissions", () => {
      const submissions: SubmissionAccessType = {
        access: {
          data: {
            delete_all: [],
            delete_own: [],
            read_all: ["5d0797bc872fc747da559858", "5d0797bc872fc7da3b55985a"],
            read_own: [],
            update_all: [],
            update_own: []
          }
        },
        submissionAccess: {
          data: {
            create_all: [],
            create_own: [],
            delete_all: [],
            delete_own: [],
            read_all: ["5d0797bc872fc747da559858", "5d0797bc872fc7da3b55985a"],
            read_own: [],
            update_all: [],
            update_own: []
          }
        }
      };

      const result = updateSubmissions(
        "access",
        {
          data: {
            delete_all: [],
            delete_own: [],
            read_all: ["5d0797bc872fc747da559858"],
            read_own: [],
            update_all: [],
            update_own: []
          }
        },
        submissions
      );

      expect(result).toEqual({
        access: {
          data: {
            delete_all: [],
            delete_own: [],
            read_all: ["5d0797bc872fc747da559858"],
            read_own: [],
            update_all: [],
            update_own: []
          }
        },
        submissionAccess: {
          data: {
            create_all: [],
            create_own: [],
            delete_all: [],
            delete_own: [],
            read_all: ["5d0797bc872fc747da559858", "5d0797bc872fc7da3b55985a"],
            read_own: [],
            update_all: [],
            update_own: []
          }
        }
      });
    });
    it("should do nothing", () => {
      const submissions: SubmissionAccessType = {
        access: {
          data: {
            delete_all: [],
            delete_own: [],
            read_all: ["5d0797bc872fc747da559858", "5d0797bc872fc7da3b55985a"],
            read_own: [],
            update_all: [],
            update_own: []
          }
        },
        submissionAccess: {
          data: {
            create_all: [],
            create_own: [],
            delete_all: [],
            delete_own: [],
            read_all: ["5d0797bc872fc747da559858", "5d0797bc872fc7da3b55985a"],
            read_own: [],
            update_all: [],
            update_own: []
          }
        }
      };

      const result = updateSubmissions(
        "access",
        {
          data: {
            delete_all: [],
            delete_own: [],
            read_all: ["5d0797bc872fc747da559858", "5d0797bc872fc7da3b55985a"],
            read_own: [],
            update_all: [],
            update_own: []
          }
        },
        submissions
      );

      expect(result).toEqual(submissions);
    });
  });
});

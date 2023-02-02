export {
    AuthServiceClient as ManagementServiceClient,
    AuthServiceServer as ManagementServiceServer,
    AuthServiceService as ManagementServiceService,
} from "./management/auth_service";

export { UpsertRoleRequest, UpsertRoleResponse, DeepPartial } from "./management/upsert_role";
export { RoleScope } from "./management/role_scope";
export { CreateScopeRequest, CreateScopeResponse } from "./management/create_scope";
export { CreateUserRequest, CreateUserResponse } from "./management/create_user";

export { UpdateUserRequest, UpdateUserResponse } from "./management/update_user";

export { DeleteRoleRequest, DeleteRoleResponse } from "./management/delete_role";
export { DeleteScopeRequest, DeleteScopeResponse } from "./management/delete_scope";
export { DeleteUserRequest, DeleteUserResponse } from "./management/delete_user";

export { GetRolesRequest, GetRolesResponse, Role } from "./management/get_roles";
export { GetScopesRequest, GetScopesResponse } from "./management/get_scopes";
export { GetUsersRequest, GetUsersResponse } from "./management/get_users";

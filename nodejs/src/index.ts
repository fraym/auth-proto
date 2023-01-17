export {
    AuthServiceClient as ManagementServiceClient,
    AuthServiceServer as ManagementServiceServer,
    AuthServiceService as ManagementServiceService,
} from "./management/auth_service";

export { UpsertRoleRequest, UpsertRoleResponse, DeepPartial } from "./management/upsert_role";
export { RoleScope } from "./management/role_scope";
export { CreateScopeRequest, CreateScopeResponse } from "./management/create_scope";

export { DeleteRoleRequest, DeleteRoleResponse } from "./management/delete_role";
export { DeleteScopeRequest, DeleteScopeResponse } from "./management/delete_scope";

export { GetRolesRequest, GetRolesResponse, Role } from "./management/get_roles";
export { GetScopesRequest, GetScopesResponse } from "./management/get_scopes";

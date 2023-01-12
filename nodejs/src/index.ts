export {
    AuthServiceClient as ManagementServiceClient,
    AuthServiceServer as ManagementServiceServer,
    AuthServiceService as ManagementServiceService,
} from "./management/auth_service";

export { CreateRoleRequest, CreateRoleResponse, DeepPartial } from "./management/create_role";
export { RoleScope } from "./management/role_scope";
export { CreateScopeRequest, CreateScopeResponse } from "./management/create_scope";

export { UpdateRoleRequest, UpdateRoleResponse } from "./management/update_role";

export { RemoveRoleRequest, RemoveRoleResponse } from "./management/remove_role";
export { DeleteScopeRequest, DeleteScopeResponse } from "./management/delete_scope";

export { GetRolesRequest, GetRolesResponse, Role } from "./management/get_roles";
export { GetScopesRequest, GetScopesResponse } from "./management/get_scopes";

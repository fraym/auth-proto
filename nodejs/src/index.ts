export {
    AuthServiceClient as ManagementServiceClient,
    AuthServiceServer as ManagementServiceServer,
    AuthServiceService as ManagementServiceService,
} from "./management/auth_service";

export { CreateRoleRequest, CreateRoleResponse } from "./management/create_role";
export { CreatePermissionRequest, CreatePermissionResponse } from "./management/create_permission";

export { UpdateRoleRequest, DeepPartial, UpdateRoleResponse } from "./management/update_role";

export { RemoveRoleRequest, RemoveRoleResponse } from "./management/remove_role";
export { DeletePermissionRequest, DeletePermissionResponse } from "./management/delete_permission";

export { GetRolesRequest, GetRolesResponse, Role } from "./management/get_roles";
export { GetPermissionsRequest, GetPermissionsResponse } from "./management/get_permissions";

/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  ChannelOptions,
  Client,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { CreatePermissionRequest, CreatePermissionResponse } from "./create_permission";
import { CreateRoleRequest, CreateRoleResponse } from "./create_role";
import { DeletePermissionRequest, DeletePermissionResponse } from "./delete_permission";
import { GetPermissionsRequest, GetPermissionsResponse } from "./get_permissions";
import { GetRolesRequest, GetRolesResponse } from "./get_roles";
import { RemoveRoleRequest, RemoveRoleResponse } from "./remove_role";
import { UpdateRoleRequest, UpdateRoleResponse } from "./update_role";

export const protobufPackage = "management";

export type AuthServiceService = typeof AuthServiceService;
export const AuthServiceService = {
  createRole: {
    path: "/management.AuthService/CreateRole",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateRoleRequest) => Buffer.from(CreateRoleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateRoleRequest.decode(value),
    responseSerialize: (value: CreateRoleResponse) => Buffer.from(CreateRoleResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateRoleResponse.decode(value),
  },
  updateRole: {
    path: "/management.AuthService/UpdateRole",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateRoleRequest) => Buffer.from(UpdateRoleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateRoleRequest.decode(value),
    responseSerialize: (value: UpdateRoleResponse) => Buffer.from(UpdateRoleResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateRoleResponse.decode(value),
  },
  removeRole: {
    path: "/management.AuthService/RemoveRole",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveRoleRequest) => Buffer.from(RemoveRoleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveRoleRequest.decode(value),
    responseSerialize: (value: RemoveRoleResponse) => Buffer.from(RemoveRoleResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RemoveRoleResponse.decode(value),
  },
  getRoles: {
    path: "/management.AuthService/GetRoles",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetRolesRequest) => Buffer.from(GetRolesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetRolesRequest.decode(value),
    responseSerialize: (value: GetRolesResponse) => Buffer.from(GetRolesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetRolesResponse.decode(value),
  },
  createPermission: {
    path: "/management.AuthService/CreatePermission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePermissionRequest) => Buffer.from(CreatePermissionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreatePermissionRequest.decode(value),
    responseSerialize: (value: CreatePermissionResponse) =>
      Buffer.from(CreatePermissionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreatePermissionResponse.decode(value),
  },
  deletePermission: {
    path: "/management.AuthService/DeletePermission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeletePermissionRequest) => Buffer.from(DeletePermissionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeletePermissionRequest.decode(value),
    responseSerialize: (value: DeletePermissionResponse) =>
      Buffer.from(DeletePermissionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeletePermissionResponse.decode(value),
  },
  getPermissions: {
    path: "/management.AuthService/GetPermissions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetPermissionsRequest) => Buffer.from(GetPermissionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetPermissionsRequest.decode(value),
    responseSerialize: (value: GetPermissionsResponse) => Buffer.from(GetPermissionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetPermissionsResponse.decode(value),
  },
} as const;

export interface AuthServiceServer extends UntypedServiceImplementation {
  createRole: handleUnaryCall<CreateRoleRequest, CreateRoleResponse>;
  updateRole: handleUnaryCall<UpdateRoleRequest, UpdateRoleResponse>;
  removeRole: handleUnaryCall<RemoveRoleRequest, RemoveRoleResponse>;
  getRoles: handleUnaryCall<GetRolesRequest, GetRolesResponse>;
  createPermission: handleUnaryCall<CreatePermissionRequest, CreatePermissionResponse>;
  deletePermission: handleUnaryCall<DeletePermissionRequest, DeletePermissionResponse>;
  getPermissions: handleUnaryCall<GetPermissionsRequest, GetPermissionsResponse>;
}

export interface AuthServiceClient extends Client {
  createRole(
    request: CreateRoleRequest,
    callback: (error: ServiceError | null, response: CreateRoleResponse) => void,
  ): ClientUnaryCall;
  createRole(
    request: CreateRoleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateRoleResponse) => void,
  ): ClientUnaryCall;
  createRole(
    request: CreateRoleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateRoleResponse) => void,
  ): ClientUnaryCall;
  updateRole(
    request: UpdateRoleRequest,
    callback: (error: ServiceError | null, response: UpdateRoleResponse) => void,
  ): ClientUnaryCall;
  updateRole(
    request: UpdateRoleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateRoleResponse) => void,
  ): ClientUnaryCall;
  updateRole(
    request: UpdateRoleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateRoleResponse) => void,
  ): ClientUnaryCall;
  removeRole(
    request: RemoveRoleRequest,
    callback: (error: ServiceError | null, response: RemoveRoleResponse) => void,
  ): ClientUnaryCall;
  removeRole(
    request: RemoveRoleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RemoveRoleResponse) => void,
  ): ClientUnaryCall;
  removeRole(
    request: RemoveRoleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RemoveRoleResponse) => void,
  ): ClientUnaryCall;
  getRoles(
    request: GetRolesRequest,
    callback: (error: ServiceError | null, response: GetRolesResponse) => void,
  ): ClientUnaryCall;
  getRoles(
    request: GetRolesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetRolesResponse) => void,
  ): ClientUnaryCall;
  getRoles(
    request: GetRolesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetRolesResponse) => void,
  ): ClientUnaryCall;
  createPermission(
    request: CreatePermissionRequest,
    callback: (error: ServiceError | null, response: CreatePermissionResponse) => void,
  ): ClientUnaryCall;
  createPermission(
    request: CreatePermissionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreatePermissionResponse) => void,
  ): ClientUnaryCall;
  createPermission(
    request: CreatePermissionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreatePermissionResponse) => void,
  ): ClientUnaryCall;
  deletePermission(
    request: DeletePermissionRequest,
    callback: (error: ServiceError | null, response: DeletePermissionResponse) => void,
  ): ClientUnaryCall;
  deletePermission(
    request: DeletePermissionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DeletePermissionResponse) => void,
  ): ClientUnaryCall;
  deletePermission(
    request: DeletePermissionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DeletePermissionResponse) => void,
  ): ClientUnaryCall;
  getPermissions(
    request: GetPermissionsRequest,
    callback: (error: ServiceError | null, response: GetPermissionsResponse) => void,
  ): ClientUnaryCall;
  getPermissions(
    request: GetPermissionsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetPermissionsResponse) => void,
  ): ClientUnaryCall;
  getPermissions(
    request: GetPermissionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetPermissionsResponse) => void,
  ): ClientUnaryCall;
}

export const AuthServiceClient = makeGenericClientConstructor(
  AuthServiceService,
  "management.AuthService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): AuthServiceClient;
  service: typeof AuthServiceService;
};

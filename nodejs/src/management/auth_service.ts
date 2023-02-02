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
import { CreateScopeRequest, CreateScopeResponse } from "./create_scope";
import { CreateUserRequest, CreateUserResponse } from "./create_user";
import { DeleteRoleRequest, DeleteRoleResponse } from "./delete_role";
import { DeleteScopeRequest, DeleteScopeResponse } from "./delete_scope";
import { DeleteUserRequest, DeleteUserResponse } from "./delete_user";
import { GetRolesRequest, GetRolesResponse } from "./get_roles";
import { GetScopesRequest, GetScopesResponse } from "./get_scopes";
import { GetUsersRequest, GetUsersResponse } from "./get_users";
import { UpdateUserRequest, UpdateUserResponse } from "./update_user";
import { UpsertRoleRequest, UpsertRoleResponse } from "./upsert_role";

export const protobufPackage = "management";

export type AuthServiceService = typeof AuthServiceService;
export const AuthServiceService = {
  upsertRole: {
    path: "/management.AuthService/UpsertRole",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpsertRoleRequest) => Buffer.from(UpsertRoleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpsertRoleRequest.decode(value),
    responseSerialize: (value: UpsertRoleResponse) => Buffer.from(UpsertRoleResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpsertRoleResponse.decode(value),
  },
  deleteRole: {
    path: "/management.AuthService/DeleteRole",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteRoleRequest) => Buffer.from(DeleteRoleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteRoleRequest.decode(value),
    responseSerialize: (value: DeleteRoleResponse) => Buffer.from(DeleteRoleResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeleteRoleResponse.decode(value),
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
  createScope: {
    path: "/management.AuthService/CreateScope",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateScopeRequest) => Buffer.from(CreateScopeRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateScopeRequest.decode(value),
    responseSerialize: (value: CreateScopeResponse) => Buffer.from(CreateScopeResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateScopeResponse.decode(value),
  },
  deleteScope: {
    path: "/management.AuthService/DeleteScope",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteScopeRequest) => Buffer.from(DeleteScopeRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteScopeRequest.decode(value),
    responseSerialize: (value: DeleteScopeResponse) => Buffer.from(DeleteScopeResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeleteScopeResponse.decode(value),
  },
  getScopes: {
    path: "/management.AuthService/GetScopes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetScopesRequest) => Buffer.from(GetScopesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetScopesRequest.decode(value),
    responseSerialize: (value: GetScopesResponse) => Buffer.from(GetScopesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetScopesResponse.decode(value),
  },
  createUser: {
    path: "/management.AuthService/CreateUser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateUserRequest) => Buffer.from(CreateUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateUserRequest.decode(value),
    responseSerialize: (value: CreateUserResponse) => Buffer.from(CreateUserResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateUserResponse.decode(value),
  },
  updateUser: {
    path: "/management.AuthService/UpdateUser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateUserRequest) => Buffer.from(UpdateUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateUserRequest.decode(value),
    responseSerialize: (value: UpdateUserResponse) => Buffer.from(UpdateUserResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateUserResponse.decode(value),
  },
  deleteUser: {
    path: "/management.AuthService/DeleteUser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteUserRequest) => Buffer.from(DeleteUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteUserRequest.decode(value),
    responseSerialize: (value: DeleteUserResponse) => Buffer.from(DeleteUserResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeleteUserResponse.decode(value),
  },
  getUsers: {
    path: "/management.AuthService/GetUsers",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUsersRequest) => Buffer.from(GetUsersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUsersRequest.decode(value),
    responseSerialize: (value: GetUsersResponse) => Buffer.from(GetUsersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetUsersResponse.decode(value),
  },
} as const;

export interface AuthServiceServer extends UntypedServiceImplementation {
  upsertRole: handleUnaryCall<UpsertRoleRequest, UpsertRoleResponse>;
  deleteRole: handleUnaryCall<DeleteRoleRequest, DeleteRoleResponse>;
  getRoles: handleUnaryCall<GetRolesRequest, GetRolesResponse>;
  createScope: handleUnaryCall<CreateScopeRequest, CreateScopeResponse>;
  deleteScope: handleUnaryCall<DeleteScopeRequest, DeleteScopeResponse>;
  getScopes: handleUnaryCall<GetScopesRequest, GetScopesResponse>;
  createUser: handleUnaryCall<CreateUserRequest, CreateUserResponse>;
  updateUser: handleUnaryCall<UpdateUserRequest, UpdateUserResponse>;
  deleteUser: handleUnaryCall<DeleteUserRequest, DeleteUserResponse>;
  getUsers: handleUnaryCall<GetUsersRequest, GetUsersResponse>;
}

export interface AuthServiceClient extends Client {
  upsertRole(
    request: UpsertRoleRequest,
    callback: (error: ServiceError | null, response: UpsertRoleResponse) => void,
  ): ClientUnaryCall;
  upsertRole(
    request: UpsertRoleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpsertRoleResponse) => void,
  ): ClientUnaryCall;
  upsertRole(
    request: UpsertRoleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpsertRoleResponse) => void,
  ): ClientUnaryCall;
  deleteRole(
    request: DeleteRoleRequest,
    callback: (error: ServiceError | null, response: DeleteRoleResponse) => void,
  ): ClientUnaryCall;
  deleteRole(
    request: DeleteRoleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DeleteRoleResponse) => void,
  ): ClientUnaryCall;
  deleteRole(
    request: DeleteRoleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DeleteRoleResponse) => void,
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
  createScope(
    request: CreateScopeRequest,
    callback: (error: ServiceError | null, response: CreateScopeResponse) => void,
  ): ClientUnaryCall;
  createScope(
    request: CreateScopeRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateScopeResponse) => void,
  ): ClientUnaryCall;
  createScope(
    request: CreateScopeRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateScopeResponse) => void,
  ): ClientUnaryCall;
  deleteScope(
    request: DeleteScopeRequest,
    callback: (error: ServiceError | null, response: DeleteScopeResponse) => void,
  ): ClientUnaryCall;
  deleteScope(
    request: DeleteScopeRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DeleteScopeResponse) => void,
  ): ClientUnaryCall;
  deleteScope(
    request: DeleteScopeRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DeleteScopeResponse) => void,
  ): ClientUnaryCall;
  getScopes(
    request: GetScopesRequest,
    callback: (error: ServiceError | null, response: GetScopesResponse) => void,
  ): ClientUnaryCall;
  getScopes(
    request: GetScopesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetScopesResponse) => void,
  ): ClientUnaryCall;
  getScopes(
    request: GetScopesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetScopesResponse) => void,
  ): ClientUnaryCall;
  createUser(
    request: CreateUserRequest,
    callback: (error: ServiceError | null, response: CreateUserResponse) => void,
  ): ClientUnaryCall;
  createUser(
    request: CreateUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateUserResponse) => void,
  ): ClientUnaryCall;
  createUser(
    request: CreateUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateUserResponse) => void,
  ): ClientUnaryCall;
  updateUser(
    request: UpdateUserRequest,
    callback: (error: ServiceError | null, response: UpdateUserResponse) => void,
  ): ClientUnaryCall;
  updateUser(
    request: UpdateUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateUserResponse) => void,
  ): ClientUnaryCall;
  updateUser(
    request: UpdateUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateUserResponse) => void,
  ): ClientUnaryCall;
  deleteUser(
    request: DeleteUserRequest,
    callback: (error: ServiceError | null, response: DeleteUserResponse) => void,
  ): ClientUnaryCall;
  deleteUser(
    request: DeleteUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DeleteUserResponse) => void,
  ): ClientUnaryCall;
  deleteUser(
    request: DeleteUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DeleteUserResponse) => void,
  ): ClientUnaryCall;
  getUsers(
    request: GetUsersRequest,
    callback: (error: ServiceError | null, response: GetUsersResponse) => void,
  ): ClientUnaryCall;
  getUsers(
    request: GetUsersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetUsersResponse) => void,
  ): ClientUnaryCall;
  getUsers(
    request: GetUsersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetUsersResponse) => void,
  ): ClientUnaryCall;
}

export const AuthServiceClient = makeGenericClientConstructor(
  AuthServiceService,
  "management.AuthService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): AuthServiceClient;
  service: typeof AuthServiceService;
};

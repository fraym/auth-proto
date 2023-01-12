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
import { CreateRoleRequest, CreateRoleResponse } from "./create_role";
import { CreateScopeRequest, CreateScopeResponse } from "./create_scope";
import { DeleteScopeRequest, DeleteScopeResponse } from "./delete_scope";
import { GetRolesRequest, GetRolesResponse } from "./get_roles";
import { GetScopesRequest, GetScopesResponse } from "./get_scopes";
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
} as const;

export interface AuthServiceServer extends UntypedServiceImplementation {
  createRole: handleUnaryCall<CreateRoleRequest, CreateRoleResponse>;
  updateRole: handleUnaryCall<UpdateRoleRequest, UpdateRoleResponse>;
  removeRole: handleUnaryCall<RemoveRoleRequest, RemoveRoleResponse>;
  getRoles: handleUnaryCall<GetRolesRequest, GetRolesResponse>;
  createScope: handleUnaryCall<CreateScopeRequest, CreateScopeResponse>;
  deleteScope: handleUnaryCall<DeleteScopeRequest, DeleteScopeResponse>;
  getScopes: handleUnaryCall<GetScopesRequest, GetScopesResponse>;
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
}

export const AuthServiceClient = makeGenericClientConstructor(
  AuthServiceService,
  "management.AuthService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): AuthServiceClient;
  service: typeof AuthServiceService;
};

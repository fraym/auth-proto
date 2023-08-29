/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { CreateUserRequest, CreateUserResponse } from "./create_user";
import { DeleteRoleRequest, DeleteRoleResponse } from "./delete_role";
import { DeleteUserRequest, DeleteUserResponse } from "./delete_user";
import { GetRolesRequest, GetRolesResponse } from "./get_roles";
import { GetUsersRequest, GetUsersResponse } from "./get_users";
import {
  AuthFinishMigrationRequest,
  AuthFinishMigrationResponse,
  AuthGetMigrationStatusRequest,
  AuthGetMigrationStatusResponse,
  AuthRegisterMigrationRequest,
  AuthRegisterMigrationResponse,
  AuthRollbackMigrationRequest,
  AuthRollbackMigrationResponse,
} from "./migration";
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
  registerMigration: {
    path: "/management.AuthService/RegisterMigration",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AuthRegisterMigrationRequest) =>
      Buffer.from(AuthRegisterMigrationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AuthRegisterMigrationRequest.decode(value),
    responseSerialize: (value: AuthRegisterMigrationResponse) =>
      Buffer.from(AuthRegisterMigrationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AuthRegisterMigrationResponse.decode(value),
  },
  finishMigration: {
    path: "/management.AuthService/FinishMigration",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AuthFinishMigrationRequest) =>
      Buffer.from(AuthFinishMigrationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AuthFinishMigrationRequest.decode(value),
    responseSerialize: (value: AuthFinishMigrationResponse) =>
      Buffer.from(AuthFinishMigrationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AuthFinishMigrationResponse.decode(value),
  },
  rollbackMigration: {
    path: "/management.AuthService/RollbackMigration",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AuthRollbackMigrationRequest) =>
      Buffer.from(AuthRollbackMigrationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AuthRollbackMigrationRequest.decode(value),
    responseSerialize: (value: AuthRollbackMigrationResponse) =>
      Buffer.from(AuthRollbackMigrationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AuthRollbackMigrationResponse.decode(value),
  },
  getMigrationStatus: {
    path: "/management.AuthService/GetMigrationStatus",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AuthGetMigrationStatusRequest) =>
      Buffer.from(AuthGetMigrationStatusRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AuthGetMigrationStatusRequest.decode(value),
    responseSerialize: (value: AuthGetMigrationStatusResponse) =>
      Buffer.from(AuthGetMigrationStatusResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AuthGetMigrationStatusResponse.decode(value),
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
  registerMigration: handleUnaryCall<AuthRegisterMigrationRequest, AuthRegisterMigrationResponse>;
  finishMigration: handleUnaryCall<AuthFinishMigrationRequest, AuthFinishMigrationResponse>;
  rollbackMigration: handleUnaryCall<AuthRollbackMigrationRequest, AuthRollbackMigrationResponse>;
  getMigrationStatus: handleUnaryCall<AuthGetMigrationStatusRequest, AuthGetMigrationStatusResponse>;
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
  registerMigration(
    request: AuthRegisterMigrationRequest,
    callback: (error: ServiceError | null, response: AuthRegisterMigrationResponse) => void,
  ): ClientUnaryCall;
  registerMigration(
    request: AuthRegisterMigrationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AuthRegisterMigrationResponse) => void,
  ): ClientUnaryCall;
  registerMigration(
    request: AuthRegisterMigrationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AuthRegisterMigrationResponse) => void,
  ): ClientUnaryCall;
  finishMigration(
    request: AuthFinishMigrationRequest,
    callback: (error: ServiceError | null, response: AuthFinishMigrationResponse) => void,
  ): ClientUnaryCall;
  finishMigration(
    request: AuthFinishMigrationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AuthFinishMigrationResponse) => void,
  ): ClientUnaryCall;
  finishMigration(
    request: AuthFinishMigrationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AuthFinishMigrationResponse) => void,
  ): ClientUnaryCall;
  rollbackMigration(
    request: AuthRollbackMigrationRequest,
    callback: (error: ServiceError | null, response: AuthRollbackMigrationResponse) => void,
  ): ClientUnaryCall;
  rollbackMigration(
    request: AuthRollbackMigrationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AuthRollbackMigrationResponse) => void,
  ): ClientUnaryCall;
  rollbackMigration(
    request: AuthRollbackMigrationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AuthRollbackMigrationResponse) => void,
  ): ClientUnaryCall;
  getMigrationStatus(
    request: AuthGetMigrationStatusRequest,
    callback: (error: ServiceError | null, response: AuthGetMigrationStatusResponse) => void,
  ): ClientUnaryCall;
  getMigrationStatus(
    request: AuthGetMigrationStatusRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AuthGetMigrationStatusResponse) => void,
  ): ClientUnaryCall;
  getMigrationStatus(
    request: AuthGetMigrationStatusRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AuthGetMigrationStatusResponse) => void,
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
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AuthServiceClient;
  service: typeof AuthServiceService;
};

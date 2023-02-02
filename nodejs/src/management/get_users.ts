/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface GetUsersRequest {
  tenantId: string;
}

export interface GetUsersResponse {
  users: User[];
}

export interface User {
  id: string;
  login: string;
  email: string;
  displayName: string;
  assignedRoleIds: string[];
  active: boolean;
  failedAttempts: number;
  lastAttempt: number;
  blockedUntil: number;
}

function createBaseGetUsersRequest(): GetUsersRequest {
  return { tenantId: "" };
}

export const GetUsersRequest = {
  encode(message: GetUsersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUsersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tenantId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUsersRequest {
    return { tenantId: isSet(object.tenantId) ? String(object.tenantId) : "" };
  },

  toJSON(message: GetUsersRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUsersRequest>, I>>(object: I): GetUsersRequest {
    const message = createBaseGetUsersRequest();
    message.tenantId = object.tenantId ?? "";
    return message;
  },
};

function createBaseGetUsersResponse(): GetUsersResponse {
  return { users: [] };
}

export const GetUsersResponse = {
  encode(message: GetUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(User.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUsersResponse {
    return { users: Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [] };
  },

  toJSON(message: GetUsersResponse): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) => e ? User.toJSON(e) : undefined);
    } else {
      obj.users = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUsersResponse>, I>>(object: I): GetUsersResponse {
    const message = createBaseGetUsersResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUser(): User {
  return {
    id: "",
    login: "",
    email: "",
    displayName: "",
    assignedRoleIds: [],
    active: false,
    failedAttempts: 0,
    lastAttempt: 0,
    blockedUntil: 0,
  };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.login !== "") {
      writer.uint32(18).string(message.login);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.displayName !== "") {
      writer.uint32(34).string(message.displayName);
    }
    for (const v of message.assignedRoleIds) {
      writer.uint32(42).string(v!);
    }
    if (message.active === true) {
      writer.uint32(48).bool(message.active);
    }
    if (message.failedAttempts !== 0) {
      writer.uint32(56).int64(message.failedAttempts);
    }
    if (message.lastAttempt !== 0) {
      writer.uint32(64).int64(message.lastAttempt);
    }
    if (message.blockedUntil !== 0) {
      writer.uint32(72).int64(message.blockedUntil);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.login = reader.string();
          break;
        case 3:
          message.email = reader.string();
          break;
        case 4:
          message.displayName = reader.string();
          break;
        case 5:
          message.assignedRoleIds.push(reader.string());
          break;
        case 6:
          message.active = reader.bool();
          break;
        case 7:
          message.failedAttempts = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.lastAttempt = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.blockedUntil = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      login: isSet(object.login) ? String(object.login) : "",
      email: isSet(object.email) ? String(object.email) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      assignedRoleIds: Array.isArray(object?.assignedRoleIds) ? object.assignedRoleIds.map((e: any) => String(e)) : [],
      active: isSet(object.active) ? Boolean(object.active) : false,
      failedAttempts: isSet(object.failedAttempts) ? Number(object.failedAttempts) : 0,
      lastAttempt: isSet(object.lastAttempt) ? Number(object.lastAttempt) : 0,
      blockedUntil: isSet(object.blockedUntil) ? Number(object.blockedUntil) : 0,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.login !== undefined && (obj.login = message.login);
    message.email !== undefined && (obj.email = message.email);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    if (message.assignedRoleIds) {
      obj.assignedRoleIds = message.assignedRoleIds.map((e) => e);
    } else {
      obj.assignedRoleIds = [];
    }
    message.active !== undefined && (obj.active = message.active);
    message.failedAttempts !== undefined && (obj.failedAttempts = Math.round(message.failedAttempts));
    message.lastAttempt !== undefined && (obj.lastAttempt = Math.round(message.lastAttempt));
    message.blockedUntil !== undefined && (obj.blockedUntil = Math.round(message.blockedUntil));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? "";
    message.login = object.login ?? "";
    message.email = object.email ?? "";
    message.displayName = object.displayName ?? "";
    message.assignedRoleIds = object.assignedRoleIds?.map((e) => e) || [];
    message.active = object.active ?? false;
    message.failedAttempts = object.failedAttempts ?? 0;
    message.lastAttempt = object.lastAttempt ?? 0;
    message.blockedUntil = object.blockedUntil ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

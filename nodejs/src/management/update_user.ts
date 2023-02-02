/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface UpdateUserRequest {
  tenantId: string;
  id: string;
  login: string;
  email: string;
  displayName: string;
  oldPassword: string;
  newPassword: string;
  assignedRoleIds: string[];
  active: boolean;
  blockedUntil: number;
}

export interface UpdateUserResponse {
}

function createBaseUpdateUserRequest(): UpdateUserRequest {
  return {
    tenantId: "",
    id: "",
    login: "",
    email: "",
    displayName: "",
    oldPassword: "",
    newPassword: "",
    assignedRoleIds: [],
    active: false,
    blockedUntil: 0,
  };
}

export const UpdateUserRequest = {
  encode(message: UpdateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.login !== "") {
      writer.uint32(26).string(message.login);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    if (message.displayName !== "") {
      writer.uint32(42).string(message.displayName);
    }
    if (message.oldPassword !== "") {
      writer.uint32(50).string(message.oldPassword);
    }
    if (message.newPassword !== "") {
      writer.uint32(58).string(message.newPassword);
    }
    for (const v of message.assignedRoleIds) {
      writer.uint32(66).string(v!);
    }
    if (message.active === true) {
      writer.uint32(72).bool(message.active);
    }
    if (message.blockedUntil !== 0) {
      writer.uint32(80).int64(message.blockedUntil);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tenantId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.login = reader.string();
          break;
        case 4:
          message.email = reader.string();
          break;
        case 5:
          message.displayName = reader.string();
          break;
        case 6:
          message.oldPassword = reader.string();
          break;
        case 7:
          message.newPassword = reader.string();
          break;
        case 8:
          message.assignedRoleIds.push(reader.string());
          break;
        case 9:
          message.active = reader.bool();
          break;
        case 10:
          message.blockedUntil = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateUserRequest {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      login: isSet(object.login) ? String(object.login) : "",
      email: isSet(object.email) ? String(object.email) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      oldPassword: isSet(object.oldPassword) ? String(object.oldPassword) : "",
      newPassword: isSet(object.newPassword) ? String(object.newPassword) : "",
      assignedRoleIds: Array.isArray(object?.assignedRoleIds) ? object.assignedRoleIds.map((e: any) => String(e)) : [],
      active: isSet(object.active) ? Boolean(object.active) : false,
      blockedUntil: isSet(object.blockedUntil) ? Number(object.blockedUntil) : 0,
    };
  },

  toJSON(message: UpdateUserRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.id !== undefined && (obj.id = message.id);
    message.login !== undefined && (obj.login = message.login);
    message.email !== undefined && (obj.email = message.email);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.oldPassword !== undefined && (obj.oldPassword = message.oldPassword);
    message.newPassword !== undefined && (obj.newPassword = message.newPassword);
    if (message.assignedRoleIds) {
      obj.assignedRoleIds = message.assignedRoleIds.map((e) => e);
    } else {
      obj.assignedRoleIds = [];
    }
    message.active !== undefined && (obj.active = message.active);
    message.blockedUntil !== undefined && (obj.blockedUntil = Math.round(message.blockedUntil));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(object: I): UpdateUserRequest {
    const message = createBaseUpdateUserRequest();
    message.tenantId = object.tenantId ?? "";
    message.id = object.id ?? "";
    message.login = object.login ?? "";
    message.email = object.email ?? "";
    message.displayName = object.displayName ?? "";
    message.oldPassword = object.oldPassword ?? "";
    message.newPassword = object.newPassword ?? "";
    message.assignedRoleIds = object.assignedRoleIds?.map((e) => e) || [];
    message.active = object.active ?? false;
    message.blockedUntil = object.blockedUntil ?? 0;
    return message;
  },
};

function createBaseUpdateUserResponse(): UpdateUserResponse {
  return {};
}

export const UpdateUserResponse = {
  encode(_: UpdateUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): UpdateUserResponse {
    return {};
  },

  toJSON(_: UpdateUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateUserResponse>, I>>(_: I): UpdateUserResponse {
    const message = createBaseUpdateUserResponse();
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

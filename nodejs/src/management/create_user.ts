/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface CreateUserRequest {
  tenantId: string;
  login: string;
  email: string;
  displayName: string;
  password: string;
  assignedRoleIds: string[];
  active: boolean;
  blockedUntil: number;
}

export interface CreateUserResponse {
  id: string;
  setInitialPasswordToken: string;
}

function createBaseCreateUserRequest(): CreateUserRequest {
  return {
    tenantId: "",
    login: "",
    email: "",
    displayName: "",
    password: "",
    assignedRoleIds: [],
    active: false,
    blockedUntil: 0,
  };
}

export const CreateUserRequest = {
  encode(message: CreateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
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
    if (message.password !== "") {
      writer.uint32(42).string(message.password);
    }
    for (const v of message.assignedRoleIds) {
      writer.uint32(50).string(v!);
    }
    if (message.active === true) {
      writer.uint32(56).bool(message.active);
    }
    if (message.blockedUntil !== 0) {
      writer.uint32(64).int64(message.blockedUntil);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tenantId = reader.string();
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
          message.password = reader.string();
          break;
        case 6:
          message.assignedRoleIds.push(reader.string());
          break;
        case 7:
          message.active = reader.bool();
          break;
        case 8:
          message.blockedUntil = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateUserRequest {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      login: isSet(object.login) ? String(object.login) : "",
      email: isSet(object.email) ? String(object.email) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      password: isSet(object.password) ? String(object.password) : "",
      assignedRoleIds: Array.isArray(object?.assignedRoleIds) ? object.assignedRoleIds.map((e: any) => String(e)) : [],
      active: isSet(object.active) ? Boolean(object.active) : false,
      blockedUntil: isSet(object.blockedUntil) ? Number(object.blockedUntil) : 0,
    };
  },

  toJSON(message: CreateUserRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.login !== undefined && (obj.login = message.login);
    message.email !== undefined && (obj.email = message.email);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.password !== undefined && (obj.password = message.password);
    if (message.assignedRoleIds) {
      obj.assignedRoleIds = message.assignedRoleIds.map((e) => e);
    } else {
      obj.assignedRoleIds = [];
    }
    message.active !== undefined && (obj.active = message.active);
    message.blockedUntil !== undefined && (obj.blockedUntil = Math.round(message.blockedUntil));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserRequest>, I>>(object: I): CreateUserRequest {
    const message = createBaseCreateUserRequest();
    message.tenantId = object.tenantId ?? "";
    message.login = object.login ?? "";
    message.email = object.email ?? "";
    message.displayName = object.displayName ?? "";
    message.password = object.password ?? "";
    message.assignedRoleIds = object.assignedRoleIds?.map((e) => e) || [];
    message.active = object.active ?? false;
    message.blockedUntil = object.blockedUntil ?? 0;
    return message;
  },
};

function createBaseCreateUserResponse(): CreateUserResponse {
  return { id: "", setInitialPasswordToken: "" };
}

export const CreateUserResponse = {
  encode(message: CreateUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.setInitialPasswordToken !== "") {
      writer.uint32(18).string(message.setInitialPasswordToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.setInitialPasswordToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateUserResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      setInitialPasswordToken: isSet(object.setInitialPasswordToken) ? String(object.setInitialPasswordToken) : "",
    };
  },

  toJSON(message: CreateUserResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.setInitialPasswordToken !== undefined && (obj.setInitialPasswordToken = message.setInitialPasswordToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserResponse>, I>>(object: I): CreateUserResponse {
    const message = createBaseCreateUserResponse();
    message.id = object.id ?? "";
    message.setInitialPasswordToken = object.setInitialPasswordToken ?? "";
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

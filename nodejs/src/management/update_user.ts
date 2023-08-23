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
  password: string;
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
    password: "",
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
    if (message.password !== "") {
      writer.uint32(50).string(message.password);
    }
    for (const v of message.assignedRoleIds) {
      writer.uint32(58).string(v!);
    }
    if (message.active === true) {
      writer.uint32(64).bool(message.active);
    }
    if (message.blockedUntil !== 0) {
      writer.uint32(72).int64(message.blockedUntil);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.login = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.email = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.password = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.assignedRoleIds.push(reader.string());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.active = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.blockedUntil = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
      password: isSet(object.password) ? String(object.password) : "",
      assignedRoleIds: Array.isArray(object?.assignedRoleIds) ? object.assignedRoleIds.map((e: any) => String(e)) : [],
      active: isSet(object.active) ? Boolean(object.active) : false,
      blockedUntil: isSet(object.blockedUntil) ? Number(object.blockedUntil) : 0,
    };
  },

  toJSON(message: UpdateUserRequest): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenantId = message.tenantId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.login !== "") {
      obj.login = message.login;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.assignedRoleIds?.length) {
      obj.assignedRoleIds = message.assignedRoleIds;
    }
    if (message.active === true) {
      obj.active = message.active;
    }
    if (message.blockedUntil !== 0) {
      obj.blockedUntil = Math.round(message.blockedUntil);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(base?: I): UpdateUserRequest {
    return UpdateUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(object: I): UpdateUserRequest {
    const message = createBaseUpdateUserRequest();
    message.tenantId = object.tenantId ?? "";
    message.id = object.id ?? "";
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

function createBaseUpdateUserResponse(): UpdateUserResponse {
  return {};
}

export const UpdateUserResponse = {
  encode(_: UpdateUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<UpdateUserResponse>, I>>(base?: I): UpdateUserResponse {
    return UpdateUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateUserResponse>, I>>(_: I): UpdateUserResponse {
    const message = createBaseUpdateUserResponse();
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
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
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
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

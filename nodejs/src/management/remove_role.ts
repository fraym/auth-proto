/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface RemoveRoleRequest {
  id: string;
  tenantId: string;
}

export interface RemoveRoleResponse {
}

function createBaseRemoveRoleRequest(): RemoveRoleRequest {
  return { id: "", tenantId: "" };
}

export const RemoveRoleRequest = {
  encode(message: RemoveRoleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.tenantId !== "") {
      writer.uint32(18).string(message.tenantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveRoleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.tenantId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveRoleRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
    };
  },

  toJSON(message: RemoveRoleRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveRoleRequest>, I>>(object: I): RemoveRoleRequest {
    const message = createBaseRemoveRoleRequest();
    message.id = object.id ?? "";
    message.tenantId = object.tenantId ?? "";
    return message;
  },
};

function createBaseRemoveRoleResponse(): RemoveRoleResponse {
  return {};
}

export const RemoveRoleResponse = {
  encode(_: RemoveRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveRoleResponse();
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

  fromJSON(_: any): RemoveRoleResponse {
    return {};
  },

  toJSON(_: RemoveRoleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveRoleResponse>, I>>(_: I): RemoveRoleResponse {
    const message = createBaseRemoveRoleResponse();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

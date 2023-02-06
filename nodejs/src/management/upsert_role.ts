/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RoleScope } from "./role_scope";

export const protobufPackage = "management";

export interface UpsertRoleRequest {
  tenantId: string;
  id: string;
  allowedScopes: RoleScope[];
}

export interface UpsertRoleResponse {
  id: string;
}

function createBaseUpsertRoleRequest(): UpsertRoleRequest {
  return { tenantId: "", id: "", allowedScopes: [] };
}

export const UpsertRoleRequest = {
  encode(message: UpsertRoleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    for (const v of message.allowedScopes) {
      RoleScope.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpsertRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpsertRoleRequest();
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
          message.allowedScopes.push(RoleScope.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpsertRoleRequest {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      allowedScopes: Array.isArray(object?.allowedScopes)
        ? object.allowedScopes.map((e: any) => RoleScope.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpsertRoleRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.id !== undefined && (obj.id = message.id);
    if (message.allowedScopes) {
      obj.allowedScopes = message.allowedScopes.map((e) => e ? RoleScope.toJSON(e) : undefined);
    } else {
      obj.allowedScopes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpsertRoleRequest>, I>>(object: I): UpsertRoleRequest {
    const message = createBaseUpsertRoleRequest();
    message.tenantId = object.tenantId ?? "";
    message.id = object.id ?? "";
    message.allowedScopes = object.allowedScopes?.map((e) => RoleScope.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpsertRoleResponse(): UpsertRoleResponse {
  return { id: "" };
}

export const UpsertRoleResponse = {
  encode(message: UpsertRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpsertRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpsertRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpsertRoleResponse {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: UpsertRoleResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpsertRoleResponse>, I>>(object: I): UpsertRoleResponse {
    const message = createBaseUpsertRoleResponse();
    message.id = object.id ?? "";
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

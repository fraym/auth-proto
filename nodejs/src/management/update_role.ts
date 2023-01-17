/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RoleScope } from "./role_scope";

export const protobufPackage = "management";

export interface UpdateRoleRequest {
  id: string;
  tenantId: string;
  displayName: string;
  description: string;
  allowedScopes: RoleScope[];
}

export interface UpdateRoleResponse {
}

function createBaseUpdateRoleRequest(): UpdateRoleRequest {
  return { id: "", tenantId: "", displayName: "", description: "", allowedScopes: [] };
}

export const UpdateRoleRequest = {
  encode(message: UpdateRoleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.tenantId !== "") {
      writer.uint32(18).string(message.tenantId);
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.allowedScopes) {
      RoleScope.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRoleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.tenantId = reader.string();
          break;
        case 3:
          message.displayName = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.allowedScopes.push(RoleScope.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateRoleRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      description: isSet(object.description) ? String(object.description) : "",
      allowedScopes: Array.isArray(object?.allowedScopes)
        ? object.allowedScopes.map((e: any) => RoleScope.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateRoleRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.description !== undefined && (obj.description = message.description);
    if (message.allowedScopes) {
      obj.allowedScopes = message.allowedScopes.map((e) => e ? RoleScope.toJSON(e) : undefined);
    } else {
      obj.allowedScopes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateRoleRequest>, I>>(object: I): UpdateRoleRequest {
    const message = createBaseUpdateRoleRequest();
    message.id = object.id ?? "";
    message.tenantId = object.tenantId ?? "";
    message.displayName = object.displayName ?? "";
    message.description = object.description ?? "";
    message.allowedScopes = object.allowedScopes?.map((e) => RoleScope.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateRoleResponse(): UpdateRoleResponse {
  return {};
}

export const UpdateRoleResponse = {
  encode(_: UpdateRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRoleResponse();
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

  fromJSON(_: any): UpdateRoleResponse {
    return {};
  },

  toJSON(_: UpdateRoleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateRoleResponse>, I>>(_: I): UpdateRoleResponse {
    const message = createBaseUpdateRoleResponse();
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

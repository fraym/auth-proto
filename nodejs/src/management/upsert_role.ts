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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpsertRoleRequest();
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

          message.allowedScopes.push(RoleScope.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.tenantId !== "") {
      obj.tenantId = message.tenantId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.allowedScopes?.length) {
      obj.allowedScopes = message.allowedScopes.map((e) => RoleScope.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpsertRoleRequest>, I>>(base?: I): UpsertRoleRequest {
    return UpsertRoleRequest.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpsertRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpsertRoleResponse {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: UpsertRoleResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpsertRoleResponse>, I>>(base?: I): UpsertRoleResponse {
    return UpsertRoleResponse.fromPartial(base ?? ({} as any));
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

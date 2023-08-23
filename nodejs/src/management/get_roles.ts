/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { RoleScope } from "./role_scope";

export const protobufPackage = "management";

export interface GetRolesRequest {
  tenantId: string;
}

export interface GetRolesResponse {
  roles: Role[];
}

export interface Role {
  id: string;
  allowedScopes: RoleScope[];
}

function createBaseGetRolesRequest(): GetRolesRequest {
  return { tenantId: "" };
}

export const GetRolesRequest = {
  encode(message: GetRolesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRolesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRolesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRolesRequest {
    return { tenantId: isSet(object.tenantId) ? String(object.tenantId) : "" };
  },

  toJSON(message: GetRolesRequest): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenantId = message.tenantId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRolesRequest>, I>>(base?: I): GetRolesRequest {
    return GetRolesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRolesRequest>, I>>(object: I): GetRolesRequest {
    const message = createBaseGetRolesRequest();
    message.tenantId = object.tenantId ?? "";
    return message;
  },
};

function createBaseGetRolesResponse(): GetRolesResponse {
  return { roles: [] };
}

export const GetRolesResponse = {
  encode(message: GetRolesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.roles) {
      Role.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRolesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRolesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.roles.push(Role.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRolesResponse {
    return { roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => Role.fromJSON(e)) : [] };
  },

  toJSON(message: GetRolesResponse): unknown {
    const obj: any = {};
    if (message.roles?.length) {
      obj.roles = message.roles.map((e) => Role.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRolesResponse>, I>>(base?: I): GetRolesResponse {
    return GetRolesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRolesResponse>, I>>(object: I): GetRolesResponse {
    const message = createBaseGetRolesResponse();
    message.roles = object.roles?.map((e) => Role.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRole(): Role {
  return { id: "", allowedScopes: [] };
}

export const Role = {
  encode(message: Role, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.allowedScopes) {
      RoleScope.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Role {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): Role {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      allowedScopes: Array.isArray(object?.allowedScopes)
        ? object.allowedScopes.map((e: any) => RoleScope.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Role): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.allowedScopes?.length) {
      obj.allowedScopes = message.allowedScopes.map((e) => RoleScope.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Role>, I>>(base?: I): Role {
    return Role.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Role>, I>>(object: I): Role {
    const message = createBaseRole();
    message.id = object.id ?? "";
    message.allowedScopes = object.allowedScopes?.map((e) => RoleScope.fromPartial(e)) || [];
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

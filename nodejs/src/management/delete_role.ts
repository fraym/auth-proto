/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface DeleteRoleRequest {
  id: string;
  tenantId: string;
}

export interface DeleteRoleResponse {
}

function createBaseDeleteRoleRequest(): DeleteRoleRequest {
  return { id: "", tenantId: "" };
}

export const DeleteRoleRequest = {
  encode(message: DeleteRoleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.tenantId !== "") {
      writer.uint32(18).string(message.tenantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRoleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteRoleRequest();
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

  fromJSON(object: any): DeleteRoleRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
    };
  },

  toJSON(message: DeleteRoleRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.tenantId !== "") {
      obj.tenantId = message.tenantId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteRoleRequest>, I>>(base?: I): DeleteRoleRequest {
    return DeleteRoleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteRoleRequest>, I>>(object: I): DeleteRoleRequest {
    const message = createBaseDeleteRoleRequest();
    message.id = object.id ?? "";
    message.tenantId = object.tenantId ?? "";
    return message;
  },
};

function createBaseDeleteRoleResponse(): DeleteRoleResponse {
  return {};
}

export const DeleteRoleResponse = {
  encode(_: DeleteRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRoleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteRoleResponse();
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

  fromJSON(_: any): DeleteRoleResponse {
    return {};
  },

  toJSON(_: DeleteRoleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteRoleResponse>, I>>(base?: I): DeleteRoleResponse {
    return DeleteRoleResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteRoleResponse>, I>>(_: I): DeleteRoleResponse {
    const message = createBaseDeleteRoleResponse();
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

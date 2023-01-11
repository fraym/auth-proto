/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface GetPermissionsRequest {
}

export interface GetPermissionsResponse {
  permission: string[];
}

function createBaseGetPermissionsRequest(): GetPermissionsRequest {
  return {};
}

export const GetPermissionsRequest = {
  encode(_: GetPermissionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPermissionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPermissionsRequest();
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

  fromJSON(_: any): GetPermissionsRequest {
    return {};
  },

  toJSON(_: GetPermissionsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPermissionsRequest>, I>>(_: I): GetPermissionsRequest {
    const message = createBaseGetPermissionsRequest();
    return message;
  },
};

function createBaseGetPermissionsResponse(): GetPermissionsResponse {
  return { permission: [] };
}

export const GetPermissionsResponse = {
  encode(message: GetPermissionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.permission) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPermissionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPermissionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permission.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPermissionsResponse {
    return { permission: Array.isArray(object?.permission) ? object.permission.map((e: any) => String(e)) : [] };
  },

  toJSON(message: GetPermissionsResponse): unknown {
    const obj: any = {};
    if (message.permission) {
      obj.permission = message.permission.map((e) => e);
    } else {
      obj.permission = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPermissionsResponse>, I>>(object: I): GetPermissionsResponse {
    const message = createBaseGetPermissionsResponse();
    message.permission = object.permission?.map((e) => e) || [];
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

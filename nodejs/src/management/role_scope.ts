/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface RoleScope {
  clientId: string;
  scopeName: string;
}

function createBaseRoleScope(): RoleScope {
  return { clientId: "", scopeName: "" };
}

export const RoleScope = {
  encode(message: RoleScope, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.scopeName !== "") {
      writer.uint32(18).string(message.scopeName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleScope {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleScope();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.scopeName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RoleScope {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      scopeName: isSet(object.scopeName) ? String(object.scopeName) : "",
    };
  },

  toJSON(message: RoleScope): unknown {
    const obj: any = {};
    if (message.clientId !== "") {
      obj.clientId = message.clientId;
    }
    if (message.scopeName !== "") {
      obj.scopeName = message.scopeName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoleScope>, I>>(base?: I): RoleScope {
    return RoleScope.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoleScope>, I>>(object: I): RoleScope {
    const message = createBaseRoleScope();
    message.clientId = object.clientId ?? "";
    message.scopeName = object.scopeName ?? "";
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

/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface AuthRegisterMigrationRequest {
  scopes: string[];
}

export interface AuthRegisterMigrationResponse {
}

export interface AuthFinishMigrationRequest {
}

export interface AuthFinishMigrationResponse {
}

export interface AuthRollbackMigrationRequest {
}

export interface AuthRollbackMigrationResponse {
}

export interface AuthGetMigrationStatusRequest {
}

export interface AuthGetMigrationStatusResponse {
  done: boolean;
}

function createBaseAuthRegisterMigrationRequest(): AuthRegisterMigrationRequest {
  return { scopes: [] };
}

export const AuthRegisterMigrationRequest = {
  encode(message: AuthRegisterMigrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.scopes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthRegisterMigrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthRegisterMigrationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.scopes.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthRegisterMigrationRequest {
    return { scopes: Array.isArray(object?.scopes) ? object.scopes.map((e: any) => String(e)) : [] };
  },

  toJSON(message: AuthRegisterMigrationRequest): unknown {
    const obj: any = {};
    if (message.scopes?.length) {
      obj.scopes = message.scopes;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthRegisterMigrationRequest>, I>>(base?: I): AuthRegisterMigrationRequest {
    return AuthRegisterMigrationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthRegisterMigrationRequest>, I>>(object: I): AuthRegisterMigrationRequest {
    const message = createBaseAuthRegisterMigrationRequest();
    message.scopes = object.scopes?.map((e) => e) || [];
    return message;
  },
};

function createBaseAuthRegisterMigrationResponse(): AuthRegisterMigrationResponse {
  return {};
}

export const AuthRegisterMigrationResponse = {
  encode(_: AuthRegisterMigrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthRegisterMigrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthRegisterMigrationResponse();
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

  fromJSON(_: any): AuthRegisterMigrationResponse {
    return {};
  },

  toJSON(_: AuthRegisterMigrationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthRegisterMigrationResponse>, I>>(base?: I): AuthRegisterMigrationResponse {
    return AuthRegisterMigrationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthRegisterMigrationResponse>, I>>(_: I): AuthRegisterMigrationResponse {
    const message = createBaseAuthRegisterMigrationResponse();
    return message;
  },
};

function createBaseAuthFinishMigrationRequest(): AuthFinishMigrationRequest {
  return {};
}

export const AuthFinishMigrationRequest = {
  encode(_: AuthFinishMigrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthFinishMigrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthFinishMigrationRequest();
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

  fromJSON(_: any): AuthFinishMigrationRequest {
    return {};
  },

  toJSON(_: AuthFinishMigrationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthFinishMigrationRequest>, I>>(base?: I): AuthFinishMigrationRequest {
    return AuthFinishMigrationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthFinishMigrationRequest>, I>>(_: I): AuthFinishMigrationRequest {
    const message = createBaseAuthFinishMigrationRequest();
    return message;
  },
};

function createBaseAuthFinishMigrationResponse(): AuthFinishMigrationResponse {
  return {};
}

export const AuthFinishMigrationResponse = {
  encode(_: AuthFinishMigrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthFinishMigrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthFinishMigrationResponse();
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

  fromJSON(_: any): AuthFinishMigrationResponse {
    return {};
  },

  toJSON(_: AuthFinishMigrationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthFinishMigrationResponse>, I>>(base?: I): AuthFinishMigrationResponse {
    return AuthFinishMigrationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthFinishMigrationResponse>, I>>(_: I): AuthFinishMigrationResponse {
    const message = createBaseAuthFinishMigrationResponse();
    return message;
  },
};

function createBaseAuthRollbackMigrationRequest(): AuthRollbackMigrationRequest {
  return {};
}

export const AuthRollbackMigrationRequest = {
  encode(_: AuthRollbackMigrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthRollbackMigrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthRollbackMigrationRequest();
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

  fromJSON(_: any): AuthRollbackMigrationRequest {
    return {};
  },

  toJSON(_: AuthRollbackMigrationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthRollbackMigrationRequest>, I>>(base?: I): AuthRollbackMigrationRequest {
    return AuthRollbackMigrationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthRollbackMigrationRequest>, I>>(_: I): AuthRollbackMigrationRequest {
    const message = createBaseAuthRollbackMigrationRequest();
    return message;
  },
};

function createBaseAuthRollbackMigrationResponse(): AuthRollbackMigrationResponse {
  return {};
}

export const AuthRollbackMigrationResponse = {
  encode(_: AuthRollbackMigrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthRollbackMigrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthRollbackMigrationResponse();
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

  fromJSON(_: any): AuthRollbackMigrationResponse {
    return {};
  },

  toJSON(_: AuthRollbackMigrationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthRollbackMigrationResponse>, I>>(base?: I): AuthRollbackMigrationResponse {
    return AuthRollbackMigrationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthRollbackMigrationResponse>, I>>(_: I): AuthRollbackMigrationResponse {
    const message = createBaseAuthRollbackMigrationResponse();
    return message;
  },
};

function createBaseAuthGetMigrationStatusRequest(): AuthGetMigrationStatusRequest {
  return {};
}

export const AuthGetMigrationStatusRequest = {
  encode(_: AuthGetMigrationStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthGetMigrationStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthGetMigrationStatusRequest();
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

  fromJSON(_: any): AuthGetMigrationStatusRequest {
    return {};
  },

  toJSON(_: AuthGetMigrationStatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthGetMigrationStatusRequest>, I>>(base?: I): AuthGetMigrationStatusRequest {
    return AuthGetMigrationStatusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthGetMigrationStatusRequest>, I>>(_: I): AuthGetMigrationStatusRequest {
    const message = createBaseAuthGetMigrationStatusRequest();
    return message;
  },
};

function createBaseAuthGetMigrationStatusResponse(): AuthGetMigrationStatusResponse {
  return { done: false };
}

export const AuthGetMigrationStatusResponse = {
  encode(message: AuthGetMigrationStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.done === true) {
      writer.uint32(8).bool(message.done);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthGetMigrationStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthGetMigrationStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.done = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthGetMigrationStatusResponse {
    return { done: isSet(object.done) ? Boolean(object.done) : false };
  },

  toJSON(message: AuthGetMigrationStatusResponse): unknown {
    const obj: any = {};
    if (message.done === true) {
      obj.done = message.done;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthGetMigrationStatusResponse>, I>>(base?: I): AuthGetMigrationStatusResponse {
    return AuthGetMigrationStatusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthGetMigrationStatusResponse>, I>>(
    object: I,
  ): AuthGetMigrationStatusResponse {
    const message = createBaseAuthGetMigrationStatusResponse();
    message.done = object.done ?? false;
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

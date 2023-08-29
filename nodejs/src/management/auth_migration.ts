/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface RegisterMigrationRequest {
  scopes: string[];
}

export interface RegisterMigrationResponse {
}

export interface FinishMigrationRequest {
}

export interface FinishMigrationResponse {
}

export interface RollbackMigrationRequest {
}

export interface RollbackMigrationResponse {
}

export interface GetMigrationStatusRequest {
}

export interface GetMigrationStatusResponse {
  done: boolean;
}

function createBaseRegisterMigrationRequest(): RegisterMigrationRequest {
  return { scopes: [] };
}

export const RegisterMigrationRequest = {
  encode(message: RegisterMigrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.scopes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterMigrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterMigrationRequest();
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

  fromJSON(object: any): RegisterMigrationRequest {
    return { scopes: Array.isArray(object?.scopes) ? object.scopes.map((e: any) => String(e)) : [] };
  },

  toJSON(message: RegisterMigrationRequest): unknown {
    const obj: any = {};
    if (message.scopes?.length) {
      obj.scopes = message.scopes;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterMigrationRequest>, I>>(base?: I): RegisterMigrationRequest {
    return RegisterMigrationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegisterMigrationRequest>, I>>(object: I): RegisterMigrationRequest {
    const message = createBaseRegisterMigrationRequest();
    message.scopes = object.scopes?.map((e) => e) || [];
    return message;
  },
};

function createBaseRegisterMigrationResponse(): RegisterMigrationResponse {
  return {};
}

export const RegisterMigrationResponse = {
  encode(_: RegisterMigrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterMigrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterMigrationResponse();
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

  fromJSON(_: any): RegisterMigrationResponse {
    return {};
  },

  toJSON(_: RegisterMigrationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterMigrationResponse>, I>>(base?: I): RegisterMigrationResponse {
    return RegisterMigrationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegisterMigrationResponse>, I>>(_: I): RegisterMigrationResponse {
    const message = createBaseRegisterMigrationResponse();
    return message;
  },
};

function createBaseFinishMigrationRequest(): FinishMigrationRequest {
  return {};
}

export const FinishMigrationRequest = {
  encode(_: FinishMigrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinishMigrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinishMigrationRequest();
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

  fromJSON(_: any): FinishMigrationRequest {
    return {};
  },

  toJSON(_: FinishMigrationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<FinishMigrationRequest>, I>>(base?: I): FinishMigrationRequest {
    return FinishMigrationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinishMigrationRequest>, I>>(_: I): FinishMigrationRequest {
    const message = createBaseFinishMigrationRequest();
    return message;
  },
};

function createBaseFinishMigrationResponse(): FinishMigrationResponse {
  return {};
}

export const FinishMigrationResponse = {
  encode(_: FinishMigrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinishMigrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinishMigrationResponse();
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

  fromJSON(_: any): FinishMigrationResponse {
    return {};
  },

  toJSON(_: FinishMigrationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<FinishMigrationResponse>, I>>(base?: I): FinishMigrationResponse {
    return FinishMigrationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinishMigrationResponse>, I>>(_: I): FinishMigrationResponse {
    const message = createBaseFinishMigrationResponse();
    return message;
  },
};

function createBaseRollbackMigrationRequest(): RollbackMigrationRequest {
  return {};
}

export const RollbackMigrationRequest = {
  encode(_: RollbackMigrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RollbackMigrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRollbackMigrationRequest();
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

  fromJSON(_: any): RollbackMigrationRequest {
    return {};
  },

  toJSON(_: RollbackMigrationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<RollbackMigrationRequest>, I>>(base?: I): RollbackMigrationRequest {
    return RollbackMigrationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RollbackMigrationRequest>, I>>(_: I): RollbackMigrationRequest {
    const message = createBaseRollbackMigrationRequest();
    return message;
  },
};

function createBaseRollbackMigrationResponse(): RollbackMigrationResponse {
  return {};
}

export const RollbackMigrationResponse = {
  encode(_: RollbackMigrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RollbackMigrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRollbackMigrationResponse();
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

  fromJSON(_: any): RollbackMigrationResponse {
    return {};
  },

  toJSON(_: RollbackMigrationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<RollbackMigrationResponse>, I>>(base?: I): RollbackMigrationResponse {
    return RollbackMigrationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RollbackMigrationResponse>, I>>(_: I): RollbackMigrationResponse {
    const message = createBaseRollbackMigrationResponse();
    return message;
  },
};

function createBaseGetMigrationStatusRequest(): GetMigrationStatusRequest {
  return {};
}

export const GetMigrationStatusRequest = {
  encode(_: GetMigrationStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMigrationStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMigrationStatusRequest();
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

  fromJSON(_: any): GetMigrationStatusRequest {
    return {};
  },

  toJSON(_: GetMigrationStatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMigrationStatusRequest>, I>>(base?: I): GetMigrationStatusRequest {
    return GetMigrationStatusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMigrationStatusRequest>, I>>(_: I): GetMigrationStatusRequest {
    const message = createBaseGetMigrationStatusRequest();
    return message;
  },
};

function createBaseGetMigrationStatusResponse(): GetMigrationStatusResponse {
  return { done: false };
}

export const GetMigrationStatusResponse = {
  encode(message: GetMigrationStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.done === true) {
      writer.uint32(8).bool(message.done);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMigrationStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMigrationStatusResponse();
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

  fromJSON(object: any): GetMigrationStatusResponse {
    return { done: isSet(object.done) ? Boolean(object.done) : false };
  },

  toJSON(message: GetMigrationStatusResponse): unknown {
    const obj: any = {};
    if (message.done === true) {
      obj.done = message.done;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMigrationStatusResponse>, I>>(base?: I): GetMigrationStatusResponse {
    return GetMigrationStatusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMigrationStatusResponse>, I>>(object: I): GetMigrationStatusResponse {
    const message = createBaseGetMigrationStatusResponse();
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

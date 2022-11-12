// package: 
// file: proto/customer_talk_service.proto

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class TalkKickOutMessage extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TalkKickOutMessage.AsObject;
  static toObject(includeInstance: boolean, msg: TalkKickOutMessage): TalkKickOutMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TalkKickOutMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TalkKickOutMessage;
  static deserializeBinaryFromReader(message: TalkKickOutMessage, reader: jspb.BinaryReader): TalkKickOutMessage;
}

export namespace TalkKickOutMessage {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class QueryTalksRequest extends jspb.Message {
  clearStatusesList(): void;
  getStatusesList(): Array<TalkStatusMap[keyof TalkStatusMap]>;
  setStatusesList(value: Array<TalkStatusMap[keyof TalkStatusMap]>): void;
  addStatuses(value: TalkStatusMap[keyof TalkStatusMap], index?: number): TalkStatusMap[keyof TalkStatusMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTalksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTalksRequest): QueryTalksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTalksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTalksRequest;
  static deserializeBinaryFromReader(message: QueryTalksRequest, reader: jspb.BinaryReader): QueryTalksRequest;
}

export namespace QueryTalksRequest {
  export type AsObject = {
    statusesList: Array<TalkStatusMap[keyof TalkStatusMap]>,
  }
}

export class TalkInfo extends jspb.Message {
  getTalkId(): string;
  setTalkId(value: string): void;

  getStatus(): TalkStatusMap[keyof TalkStatusMap];
  setStatus(value: TalkStatusMap[keyof TalkStatusMap]): void;

  getTitle(): string;
  setTitle(value: string): void;

  getStartedAt(): number;
  setStartedAt(value: number): void;

  getFinishedAt(): number;
  setFinishedAt(value: number): void;

  getCustomerName(): string;
  setCustomerName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TalkInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TalkInfo): TalkInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TalkInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TalkInfo;
  static deserializeBinaryFromReader(message: TalkInfo, reader: jspb.BinaryReader): TalkInfo;
}

export namespace TalkInfo {
  export type AsObject = {
    talkId: string,
    status: TalkStatusMap[keyof TalkStatusMap],
    title: string,
    startedAt: number,
    finishedAt: number,
    customerName: string,
  }
}

export class QueryTalksResponse extends jspb.Message {
  clearTalksList(): void;
  getTalksList(): Array<TalkInfo>;
  setTalksList(value: Array<TalkInfo>): void;
  addTalks(value?: TalkInfo, index?: number): TalkInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTalksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTalksResponse): QueryTalksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTalksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTalksResponse;
  static deserializeBinaryFromReader(message: QueryTalksResponse, reader: jspb.BinaryReader): QueryTalksResponse;
}

export namespace QueryTalksResponse {
  export type AsObject = {
    talksList: Array<TalkInfo.AsObject>,
  }
}

export class TalkCreateRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TalkCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TalkCreateRequest): TalkCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TalkCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TalkCreateRequest;
  static deserializeBinaryFromReader(message: TalkCreateRequest, reader: jspb.BinaryReader): TalkCreateRequest;
}

export namespace TalkCreateRequest {
  export type AsObject = {
    title: string,
  }
}

export class TalkOpenRequest extends jspb.Message {
  getTalkId(): string;
  setTalkId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TalkOpenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TalkOpenRequest): TalkOpenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TalkOpenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TalkOpenRequest;
  static deserializeBinaryFromReader(message: TalkOpenRequest, reader: jspb.BinaryReader): TalkOpenRequest;
}

export namespace TalkOpenRequest {
  export type AsObject = {
    talkId: string,
  }
}

export class TalkMessageW extends jspb.Message {
  getSeqId(): number;
  setSeqId(value: number): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  getMessageCase(): TalkMessageW.MessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TalkMessageW.AsObject;
  static toObject(includeInstance: boolean, msg: TalkMessageW): TalkMessageW.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TalkMessageW, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TalkMessageW;
  static deserializeBinaryFromReader(message: TalkMessageW, reader: jspb.BinaryReader): TalkMessageW;
}

export namespace TalkMessageW {
  export type AsObject = {
    seqId: number,
    text: string,
    image: Uint8Array | string,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    TEXT = 20,
    IMAGE = 21,
  }
}

export class TalkMessage extends jspb.Message {
  getAt(): number;
  setAt(value: number): void;

  getCustomerMessage(): boolean;
  setCustomerMessage(value: boolean): void;

  getUser(): string;
  setUser(value: string): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  getMessageCase(): TalkMessage.MessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TalkMessage.AsObject;
  static toObject(includeInstance: boolean, msg: TalkMessage): TalkMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TalkMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TalkMessage;
  static deserializeBinaryFromReader(message: TalkMessage, reader: jspb.BinaryReader): TalkMessage;
}

export namespace TalkMessage {
  export type AsObject = {
    at: number,
    customerMessage: boolean,
    user: string,
    text: string,
    image: Uint8Array | string,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    TEXT = 20,
    IMAGE = 21,
  }
}

export class TalkClose extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TalkClose.AsObject;
  static toObject(includeInstance: boolean, msg: TalkClose): TalkClose.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TalkClose, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TalkClose;
  static deserializeBinaryFromReader(message: TalkClose, reader: jspb.BinaryReader): TalkClose;
}

export namespace TalkClose {
  export type AsObject = {
  }
}

export class TalkRequest extends jspb.Message {
  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): TalkCreateRequest | undefined;
  setCreate(value?: TalkCreateRequest): void;

  hasOpen(): boolean;
  clearOpen(): void;
  getOpen(): TalkOpenRequest | undefined;
  setOpen(value?: TalkOpenRequest): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): TalkMessageW | undefined;
  setMessage(value?: TalkMessageW): void;

  hasClose(): boolean;
  clearClose(): void;
  getClose(): TalkClose | undefined;
  setClose(value?: TalkClose): void;

  getTalkCase(): TalkRequest.TalkCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TalkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TalkRequest): TalkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TalkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TalkRequest;
  static deserializeBinaryFromReader(message: TalkRequest, reader: jspb.BinaryReader): TalkRequest;
}

export namespace TalkRequest {
  export type AsObject = {
    create?: TalkCreateRequest.AsObject,
    open?: TalkOpenRequest.AsObject,
    message?: TalkMessageW.AsObject,
    close?: TalkClose.AsObject,
  }

  export enum TalkCase {
    TALK_NOT_SET = 0,
    CREATE = 1,
    OPEN = 2,
    MESSAGE = 3,
    CLOSE = 4,
  }
}

export class TalkMessages extends jspb.Message {
  getTalkId(): string;
  setTalkId(value: string): void;

  clearMessagesList(): void;
  getMessagesList(): Array<TalkMessage>;
  setMessagesList(value: Array<TalkMessage>): void;
  addMessages(value?: TalkMessage, index?: number): TalkMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TalkMessages.AsObject;
  static toObject(includeInstance: boolean, msg: TalkMessages): TalkMessages.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TalkMessages, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TalkMessages;
  static deserializeBinaryFromReader(message: TalkMessages, reader: jspb.BinaryReader): TalkMessages;
}

export namespace TalkMessages {
  export type AsObject = {
    talkId: string,
    messagesList: Array<TalkMessage.AsObject>,
  }
}

export class TalkMessageConfirmed extends jspb.Message {
  getSeqId(): number;
  setSeqId(value: number): void;

  getAt(): number;
  setAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TalkMessageConfirmed.AsObject;
  static toObject(includeInstance: boolean, msg: TalkMessageConfirmed): TalkMessageConfirmed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TalkMessageConfirmed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TalkMessageConfirmed;
  static deserializeBinaryFromReader(message: TalkMessageConfirmed, reader: jspb.BinaryReader): TalkMessageConfirmed;
}

export namespace TalkMessageConfirmed {
  export type AsObject = {
    seqId: number,
    at: number,
  }
}

export class TalkResponse extends jspb.Message {
  hasKickOut(): boolean;
  clearKickOut(): void;
  getKickOut(): TalkKickOutMessage | undefined;
  setKickOut(value?: TalkKickOutMessage): void;

  hasMessages(): boolean;
  clearMessages(): void;
  getMessages(): TalkMessages | undefined;
  setMessages(value?: TalkMessages): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): TalkMessage | undefined;
  setMessage(value?: TalkMessage): void;

  hasMessageConfirmed(): boolean;
  clearMessageConfirmed(): void;
  getMessageConfirmed(): TalkMessageConfirmed | undefined;
  setMessageConfirmed(value?: TalkMessageConfirmed): void;

  hasClose(): boolean;
  clearClose(): void;
  getClose(): TalkClose | undefined;
  setClose(value?: TalkClose): void;

  getTalkCase(): TalkResponse.TalkCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TalkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TalkResponse): TalkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TalkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TalkResponse;
  static deserializeBinaryFromReader(message: TalkResponse, reader: jspb.BinaryReader): TalkResponse;
}

export namespace TalkResponse {
  export type AsObject = {
    kickOut?: TalkKickOutMessage.AsObject,
    messages?: TalkMessages.AsObject,
    message?: TalkMessage.AsObject,
    messageConfirmed?: TalkMessageConfirmed.AsObject,
    close?: TalkClose.AsObject,
  }

  export enum TalkCase {
    TALK_NOT_SET = 0,
    KICK_OUT = 1,
    MESSAGES = 2,
    MESSAGE = 3,
    MESSAGE_CONFIRMED = 4,
    CLOSE = 5,
  }
}

export class ServiceQueryAttachedTalksRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceQueryAttachedTalksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceQueryAttachedTalksRequest): ServiceQueryAttachedTalksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceQueryAttachedTalksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceQueryAttachedTalksRequest;
  static deserializeBinaryFromReader(message: ServiceQueryAttachedTalksRequest, reader: jspb.BinaryReader): ServiceQueryAttachedTalksRequest;
}

export namespace ServiceQueryAttachedTalksRequest {
  export type AsObject = {
  }
}

export class ServiceQueryPendingTalksRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceQueryPendingTalksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceQueryPendingTalksRequest): ServiceQueryPendingTalksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceQueryPendingTalksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceQueryPendingTalksRequest;
  static deserializeBinaryFromReader(message: ServiceQueryPendingTalksRequest, reader: jspb.BinaryReader): ServiceQueryPendingTalksRequest;
}

export namespace ServiceQueryPendingTalksRequest {
  export type AsObject = {
  }
}

export class ServiceReloadTalkRequest extends jspb.Message {
  getTalkId(): string;
  setTalkId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceReloadTalkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceReloadTalkRequest): ServiceReloadTalkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceReloadTalkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceReloadTalkRequest;
  static deserializeBinaryFromReader(message: ServiceReloadTalkRequest, reader: jspb.BinaryReader): ServiceReloadTalkRequest;
}

export namespace ServiceReloadTalkRequest {
  export type AsObject = {
    talkId: string,
  }
}

export class ServicePostMessage extends jspb.Message {
  getTalkId(): string;
  setTalkId(value: string): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): TalkMessageW | undefined;
  setMessage(value?: TalkMessageW): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServicePostMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ServicePostMessage): ServicePostMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServicePostMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServicePostMessage;
  static deserializeBinaryFromReader(message: ServicePostMessage, reader: jspb.BinaryReader): ServicePostMessage;
}

export namespace ServicePostMessage {
  export type AsObject = {
    talkId: string,
    message?: TalkMessageW.AsObject,
  }
}

export class ServiceAttachRequest extends jspb.Message {
  getTalkId(): string;
  setTalkId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceAttachRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceAttachRequest): ServiceAttachRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceAttachRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceAttachRequest;
  static deserializeBinaryFromReader(message: ServiceAttachRequest, reader: jspb.BinaryReader): ServiceAttachRequest;
}

export namespace ServiceAttachRequest {
  export type AsObject = {
    talkId: string,
  }
}

export class ServiceDetachRequest extends jspb.Message {
  getTalkId(): string;
  setTalkId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceDetachRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceDetachRequest): ServiceDetachRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceDetachRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceDetachRequest;
  static deserializeBinaryFromReader(message: ServiceDetachRequest, reader: jspb.BinaryReader): ServiceDetachRequest;
}

export namespace ServiceDetachRequest {
  export type AsObject = {
    talkId: string,
  }
}

export class ServiceRequest extends jspb.Message {
  hasAttachedTalks(): boolean;
  clearAttachedTalks(): void;
  getAttachedTalks(): ServiceQueryAttachedTalksRequest | undefined;
  setAttachedTalks(value?: ServiceQueryAttachedTalksRequest): void;

  hasPendingTalks(): boolean;
  clearPendingTalks(): void;
  getPendingTalks(): ServiceQueryPendingTalksRequest | undefined;
  setPendingTalks(value?: ServiceQueryPendingTalksRequest): void;

  hasReload(): boolean;
  clearReload(): void;
  getReload(): ServiceReloadTalkRequest | undefined;
  setReload(value?: ServiceReloadTalkRequest): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): ServicePostMessage | undefined;
  setMessage(value?: ServicePostMessage): void;

  hasAttach(): boolean;
  clearAttach(): void;
  getAttach(): ServiceAttachRequest | undefined;
  setAttach(value?: ServiceAttachRequest): void;

  hasDetach(): boolean;
  clearDetach(): void;
  getDetach(): ServiceDetachRequest | undefined;
  setDetach(value?: ServiceDetachRequest): void;

  getRequestCase(): ServiceRequest.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceRequest): ServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceRequest;
  static deserializeBinaryFromReader(message: ServiceRequest, reader: jspb.BinaryReader): ServiceRequest;
}

export namespace ServiceRequest {
  export type AsObject = {
    attachedTalks?: ServiceQueryAttachedTalksRequest.AsObject,
    pendingTalks?: ServiceQueryPendingTalksRequest.AsObject,
    reload?: ServiceReloadTalkRequest.AsObject,
    message?: ServicePostMessage.AsObject,
    attach?: ServiceAttachRequest.AsObject,
    detach?: ServiceDetachRequest.AsObject,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    ATTACHED_TALKS = 1,
    PENDING_TALKS = 2,
    RELOAD = 3,
    MESSAGE = 4,
    ATTACH = 5,
    DETACH = 6,
  }
}

export class ServicePendingTalksResponse extends jspb.Message {
  clearTalksList(): void;
  getTalksList(): Array<TalkInfo>;
  setTalksList(value: Array<TalkInfo>): void;
  addTalks(value?: TalkInfo, index?: number): TalkInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServicePendingTalksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServicePendingTalksResponse): ServicePendingTalksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServicePendingTalksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServicePendingTalksResponse;
  static deserializeBinaryFromReader(message: ServicePendingTalksResponse, reader: jspb.BinaryReader): ServicePendingTalksResponse;
}

export namespace ServicePendingTalksResponse {
  export type AsObject = {
    talksList: Array<TalkInfo.AsObject>,
  }
}

export class ServiceTalkInfoAndMessages extends jspb.Message {
  hasTalkInfo(): boolean;
  clearTalkInfo(): void;
  getTalkInfo(): TalkInfo | undefined;
  setTalkInfo(value?: TalkInfo): void;

  clearMessagesList(): void;
  getMessagesList(): Array<TalkMessage>;
  setMessagesList(value: Array<TalkMessage>): void;
  addMessages(value?: TalkMessage, index?: number): TalkMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceTalkInfoAndMessages.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceTalkInfoAndMessages): ServiceTalkInfoAndMessages.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceTalkInfoAndMessages, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceTalkInfoAndMessages;
  static deserializeBinaryFromReader(message: ServiceTalkInfoAndMessages, reader: jspb.BinaryReader): ServiceTalkInfoAndMessages;
}

export namespace ServiceTalkInfoAndMessages {
  export type AsObject = {
    talkInfo?: TalkInfo.AsObject,
    messagesList: Array<TalkMessage.AsObject>,
  }
}

export class ServiceAttachedTalksResponse extends jspb.Message {
  clearTalksList(): void;
  getTalksList(): Array<ServiceTalkInfoAndMessages>;
  setTalksList(value: Array<ServiceTalkInfoAndMessages>): void;
  addTalks(value?: ServiceTalkInfoAndMessages, index?: number): ServiceTalkInfoAndMessages;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceAttachedTalksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceAttachedTalksResponse): ServiceAttachedTalksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceAttachedTalksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceAttachedTalksResponse;
  static deserializeBinaryFromReader(message: ServiceAttachedTalksResponse, reader: jspb.BinaryReader): ServiceAttachedTalksResponse;
}

export namespace ServiceAttachedTalksResponse {
  export type AsObject = {
    talksList: Array<ServiceTalkInfoAndMessages.AsObject>,
  }
}

export class ServiceAttachTalkResponse extends jspb.Message {
  hasTalk(): boolean;
  clearTalk(): void;
  getTalk(): TalkInfo | undefined;
  setTalk(value?: TalkInfo): void;

  getAttachedServiceId(): number;
  setAttachedServiceId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceAttachTalkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceAttachTalkResponse): ServiceAttachTalkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceAttachTalkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceAttachTalkResponse;
  static deserializeBinaryFromReader(message: ServiceAttachTalkResponse, reader: jspb.BinaryReader): ServiceAttachTalkResponse;
}

export namespace ServiceAttachTalkResponse {
  export type AsObject = {
    talk?: TalkInfo.AsObject,
    attachedServiceId: number,
  }
}

export class ServiceDetachTalkResponse extends jspb.Message {
  hasTalk(): boolean;
  clearTalk(): void;
  getTalk(): TalkInfo | undefined;
  setTalk(value?: TalkInfo): void;

  getDetachedServiceId(): number;
  setDetachedServiceId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceDetachTalkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceDetachTalkResponse): ServiceDetachTalkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceDetachTalkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceDetachTalkResponse;
  static deserializeBinaryFromReader(message: ServiceDetachTalkResponse, reader: jspb.BinaryReader): ServiceDetachTalkResponse;
}

export namespace ServiceDetachTalkResponse {
  export type AsObject = {
    talk?: TalkInfo.AsObject,
    detachedServiceId: number,
  }
}

export class ServiceTalkReloadResponse extends jspb.Message {
  hasTalk(): boolean;
  clearTalk(): void;
  getTalk(): ServiceTalkInfoAndMessages | undefined;
  setTalk(value?: ServiceTalkInfoAndMessages): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceTalkReloadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceTalkReloadResponse): ServiceTalkReloadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceTalkReloadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceTalkReloadResponse;
  static deserializeBinaryFromReader(message: ServiceTalkReloadResponse, reader: jspb.BinaryReader): ServiceTalkReloadResponse;
}

export namespace ServiceTalkReloadResponse {
  export type AsObject = {
    talk?: ServiceTalkInfoAndMessages.AsObject,
  }
}

export class ServiceTalkMessageResponse extends jspb.Message {
  getTalkId(): string;
  setTalkId(value: string): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): TalkMessage | undefined;
  setMessage(value?: TalkMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceTalkMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceTalkMessageResponse): ServiceTalkMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceTalkMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceTalkMessageResponse;
  static deserializeBinaryFromReader(message: ServiceTalkMessageResponse, reader: jspb.BinaryReader): ServiceTalkMessageResponse;
}

export namespace ServiceTalkMessageResponse {
  export type AsObject = {
    talkId: string,
    message?: TalkMessage.AsObject,
  }
}

export class ServiceTalkNotifyResponse extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceTalkNotifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceTalkNotifyResponse): ServiceTalkNotifyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceTalkNotifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceTalkNotifyResponse;
  static deserializeBinaryFromReader(message: ServiceTalkNotifyResponse, reader: jspb.BinaryReader): ServiceTalkNotifyResponse;
}

export namespace ServiceTalkNotifyResponse {
  export type AsObject = {
    msg: string,
  }
}

export class ServiceMessageConfirmed extends jspb.Message {
  getSeqId(): number;
  setSeqId(value: number): void;

  getAt(): number;
  setAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceMessageConfirmed.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceMessageConfirmed): ServiceMessageConfirmed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceMessageConfirmed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceMessageConfirmed;
  static deserializeBinaryFromReader(message: ServiceMessageConfirmed, reader: jspb.BinaryReader): ServiceMessageConfirmed;
}

export namespace ServiceMessageConfirmed {
  export type AsObject = {
    seqId: number,
    at: number,
  }
}

export class ServiceTalkClose extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceTalkClose.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceTalkClose): ServiceTalkClose.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceTalkClose, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceTalkClose;
  static deserializeBinaryFromReader(message: ServiceTalkClose, reader: jspb.BinaryReader): ServiceTalkClose;
}

export namespace ServiceTalkClose {
  export type AsObject = {
  }
}

export class ServiceResponse extends jspb.Message {
  hasKickOut(): boolean;
  clearKickOut(): void;
  getKickOut(): TalkKickOutMessage | undefined;
  setKickOut(value?: TalkKickOutMessage): void;

  hasPendingTalks(): boolean;
  clearPendingTalks(): void;
  getPendingTalks(): ServicePendingTalksResponse | undefined;
  setPendingTalks(value?: ServicePendingTalksResponse): void;

  hasTalks(): boolean;
  clearTalks(): void;
  getTalks(): ServiceAttachedTalksResponse | undefined;
  setTalks(value?: ServiceAttachedTalksResponse): void;

  hasAttach(): boolean;
  clearAttach(): void;
  getAttach(): ServiceAttachTalkResponse | undefined;
  setAttach(value?: ServiceAttachTalkResponse): void;

  hasDetach(): boolean;
  clearDetach(): void;
  getDetach(): ServiceDetachTalkResponse | undefined;
  setDetach(value?: ServiceDetachTalkResponse): void;

  hasReload(): boolean;
  clearReload(): void;
  getReload(): ServiceTalkReloadResponse | undefined;
  setReload(value?: ServiceTalkReloadResponse): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): ServiceTalkMessageResponse | undefined;
  setMessage(value?: ServiceTalkMessageResponse): void;

  hasNotify(): boolean;
  clearNotify(): void;
  getNotify(): ServiceTalkNotifyResponse | undefined;
  setNotify(value?: ServiceTalkNotifyResponse): void;

  hasMessageConfirmed(): boolean;
  clearMessageConfirmed(): void;
  getMessageConfirmed(): ServiceMessageConfirmed | undefined;
  setMessageConfirmed(value?: ServiceMessageConfirmed): void;

  hasClose(): boolean;
  clearClose(): void;
  getClose(): ServiceTalkClose | undefined;
  setClose(value?: ServiceTalkClose): void;

  getResponseCase(): ServiceResponse.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceResponse): ServiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceResponse;
  static deserializeBinaryFromReader(message: ServiceResponse, reader: jspb.BinaryReader): ServiceResponse;
}

export namespace ServiceResponse {
  export type AsObject = {
    kickOut?: TalkKickOutMessage.AsObject,
    pendingTalks?: ServicePendingTalksResponse.AsObject,
    talks?: ServiceAttachedTalksResponse.AsObject,
    attach?: ServiceAttachTalkResponse.AsObject,
    detach?: ServiceDetachTalkResponse.AsObject,
    reload?: ServiceTalkReloadResponse.AsObject,
    message?: ServiceTalkMessageResponse.AsObject,
    notify?: ServiceTalkNotifyResponse.AsObject,
    messageConfirmed?: ServiceMessageConfirmed.AsObject,
    close?: ServiceTalkClose.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    KICK_OUT = 1,
    PENDING_TALKS = 2,
    TALKS = 3,
    ATTACH = 4,
    DETACH = 5,
    RELOAD = 6,
    MESSAGE = 7,
    NOTIFY = 8,
    MESSAGE_CONFIRMED = 9,
    CLOSE = 10,
  }
}

export class CheckTokenRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckTokenRequest): CheckTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckTokenRequest;
  static deserializeBinaryFromReader(message: CheckTokenRequest, reader: jspb.BinaryReader): CheckTokenRequest;
}

export namespace CheckTokenRequest {
  export type AsObject = {
  }
}

export class CheckTokenResponse extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): void;

  getUserName(): string;
  setUserName(value: string): void;

  getNewToken(): string;
  setNewToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckTokenResponse): CheckTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckTokenResponse;
  static deserializeBinaryFromReader(message: CheckTokenResponse, reader: jspb.BinaryReader): CheckTokenResponse;
}

export namespace CheckTokenResponse {
  export type AsObject = {
    valid: boolean,
    userName: string,
    newToken: string,
  }
}

export class CreateTokenRequest extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTokenRequest): CreateTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTokenRequest;
  static deserializeBinaryFromReader(message: CreateTokenRequest, reader: jspb.BinaryReader): CreateTokenRequest;
}

export namespace CreateTokenRequest {
  export type AsObject = {
    userName: string,
  }
}

export class CreateTokenResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTokenResponse): CreateTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTokenResponse;
  static deserializeBinaryFromReader(message: CreateTokenResponse, reader: jspb.BinaryReader): CreateTokenResponse;
}

export namespace CreateTokenResponse {
  export type AsObject = {
    token: string,
    userName: string,
  }
}

export class RegisterRequest extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    userName: string,
    password: string,
  }
}

export class RegisterResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    token: string,
    userName: string,
  }
}

export class LoginRequest extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    userName: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    token: string,
    userName: string,
  }
}

export interface TalkStatusMap {
  TALK_STATUS_UNSPECIFIED: 0;
  TALK_STATUS_OPENED: 1;
  TALK_STATUS_CLOSED: 2;
}

export const TalkStatus: TalkStatusMap;


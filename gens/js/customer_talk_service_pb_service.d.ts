// package: 
// file: proto/customer_talk_service.proto

import * as proto_customer_talk_service_pb from "../proto/customer_talk_service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CustomerTalkServiceQueryTalks = {
  readonly methodName: string;
  readonly service: typeof CustomerTalkService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_customer_talk_service_pb.QueryTalksRequest;
  readonly responseType: typeof proto_customer_talk_service_pb.QueryTalksResponse;
};

type CustomerTalkServiceTalk = {
  readonly methodName: string;
  readonly service: typeof CustomerTalkService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof proto_customer_talk_service_pb.TalkRequest;
  readonly responseType: typeof proto_customer_talk_service_pb.TalkResponse;
};

export class CustomerTalkService {
  static readonly serviceName: string;
  static readonly QueryTalks: CustomerTalkServiceQueryTalks;
  static readonly Talk: CustomerTalkServiceTalk;
}

type ServiceTalkServiceService = {
  readonly methodName: string;
  readonly service: typeof ServiceTalkService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof proto_customer_talk_service_pb.ServiceRequest;
  readonly responseType: typeof proto_customer_talk_service_pb.ServiceResponse;
};

export class ServiceTalkService {
  static readonly serviceName: string;
  static readonly Service: ServiceTalkServiceService;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CustomerTalkServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  queryTalks(
    requestMessage: proto_customer_talk_service_pb.QueryTalksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_customer_talk_service_pb.QueryTalksResponse|null) => void
  ): UnaryResponse;
  queryTalks(
    requestMessage: proto_customer_talk_service_pb.QueryTalksRequest,
    callback: (error: ServiceError|null, responseMessage: proto_customer_talk_service_pb.QueryTalksResponse|null) => void
  ): UnaryResponse;
  talk(metadata?: grpc.Metadata): BidirectionalStream<proto_customer_talk_service_pb.TalkRequest, proto_customer_talk_service_pb.TalkResponse>;
}

export class ServiceTalkServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  service(metadata?: grpc.Metadata): BidirectionalStream<proto_customer_talk_service_pb.ServiceRequest, proto_customer_talk_service_pb.ServiceResponse>;
}


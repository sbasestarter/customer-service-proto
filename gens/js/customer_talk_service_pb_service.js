// package: 
// file: proto/customer_talk_service.proto

var proto_customer_talk_service_pb = require("../proto/customer_talk_service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CustomerTalkService = (function () {
  function CustomerTalkService() {}
  CustomerTalkService.serviceName = "CustomerTalkService";
  return CustomerTalkService;
}());

CustomerTalkService.QueryTalks = {
  methodName: "QueryTalks",
  service: CustomerTalkService,
  requestStream: false,
  responseStream: false,
  requestType: proto_customer_talk_service_pb.QueryTalksRequest,
  responseType: proto_customer_talk_service_pb.QueryTalksResponse
};

CustomerTalkService.Talk = {
  methodName: "Talk",
  service: CustomerTalkService,
  requestStream: true,
  responseStream: true,
  requestType: proto_customer_talk_service_pb.TalkRequest,
  responseType: proto_customer_talk_service_pb.TalkResponse
};

exports.CustomerTalkService = CustomerTalkService;

function CustomerTalkServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CustomerTalkServiceClient.prototype.queryTalks = function queryTalks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CustomerTalkService.QueryTalks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CustomerTalkServiceClient.prototype.talk = function talk(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(CustomerTalkService.Talk, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.CustomerTalkServiceClient = CustomerTalkServiceClient;

var ServiceTalkService = (function () {
  function ServiceTalkService() {}
  ServiceTalkService.serviceName = "ServiceTalkService";
  return ServiceTalkService;
}());

ServiceTalkService.Service = {
  methodName: "Service",
  service: ServiceTalkService,
  requestStream: true,
  responseStream: true,
  requestType: proto_customer_talk_service_pb.ServiceRequest,
  responseType: proto_customer_talk_service_pb.ServiceResponse
};

exports.ServiceTalkService = ServiceTalkService;

function ServiceTalkServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ServiceTalkServiceClient.prototype.service = function service(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(ServiceTalkService.Service, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.ServiceTalkServiceClient = ServiceTalkServiceClient;

var CustomerUserServicer = (function () {
  function CustomerUserServicer() {}
  CustomerUserServicer.serviceName = "CustomerUserServicer";
  return CustomerUserServicer;
}());

CustomerUserServicer.CheckToken = {
  methodName: "CheckToken",
  service: CustomerUserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_customer_talk_service_pb.CheckTokenRequest,
  responseType: proto_customer_talk_service_pb.CheckTokenResponse
};

CustomerUserServicer.CreateToken = {
  methodName: "CreateToken",
  service: CustomerUserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_customer_talk_service_pb.CreateTokenRequest,
  responseType: proto_customer_talk_service_pb.CreateTokenResponse
};

exports.CustomerUserServicer = CustomerUserServicer;

function CustomerUserServicerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CustomerUserServicerClient.prototype.checkToken = function checkToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CustomerUserServicer.CheckToken, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CustomerUserServicerClient.prototype.createToken = function createToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CustomerUserServicer.CreateToken, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CustomerUserServicerClient = CustomerUserServicerClient;

var ServicerUserServicer = (function () {
  function ServicerUserServicer() {}
  ServicerUserServicer.serviceName = "ServicerUserServicer";
  return ServicerUserServicer;
}());

ServicerUserServicer.Register = {
  methodName: "Register",
  service: ServicerUserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_customer_talk_service_pb.RegisterRequest,
  responseType: proto_customer_talk_service_pb.RegisterResponse
};

ServicerUserServicer.Login = {
  methodName: "Login",
  service: ServicerUserServicer,
  requestStream: false,
  responseStream: false,
  requestType: proto_customer_talk_service_pb.LoginRequest,
  responseType: proto_customer_talk_service_pb.LoginResponse
};

exports.ServicerUserServicer = ServicerUserServicer;

function ServicerUserServicerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ServicerUserServicerClient.prototype.register = function register(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServicerUserServicer.Register, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ServicerUserServicerClient.prototype.login = function login(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServicerUserServicer.Login, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ServicerUserServicerClient = ServicerUserServicerClient;


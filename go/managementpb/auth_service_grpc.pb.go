// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v4.23.4
// source: management/auth_service.proto

package managementpb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	AuthService_UpsertRole_FullMethodName         = "/management.AuthService/UpsertRole"
	AuthService_DeleteRole_FullMethodName         = "/management.AuthService/DeleteRole"
	AuthService_GetRoles_FullMethodName           = "/management.AuthService/GetRoles"
	AuthService_RegisterMigration_FullMethodName  = "/management.AuthService/RegisterMigration"
	AuthService_FinishMigration_FullMethodName    = "/management.AuthService/FinishMigration"
	AuthService_RollbackMigration_FullMethodName  = "/management.AuthService/RollbackMigration"
	AuthService_GetMigrationStatus_FullMethodName = "/management.AuthService/GetMigrationStatus"
	AuthService_CreateUser_FullMethodName         = "/management.AuthService/CreateUser"
	AuthService_UpdateUser_FullMethodName         = "/management.AuthService/UpdateUser"
	AuthService_DeleteUser_FullMethodName         = "/management.AuthService/DeleteUser"
	AuthService_GetUsers_FullMethodName           = "/management.AuthService/GetUsers"
)

// AuthServiceClient is the client API for AuthService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AuthServiceClient interface {
	UpsertRole(ctx context.Context, in *UpsertRoleRequest, opts ...grpc.CallOption) (*UpsertRoleResponse, error)
	DeleteRole(ctx context.Context, in *DeleteRoleRequest, opts ...grpc.CallOption) (*DeleteRoleResponse, error)
	GetRoles(ctx context.Context, in *GetRolesRequest, opts ...grpc.CallOption) (*GetRolesResponse, error)
	RegisterMigration(ctx context.Context, in *AuthRegisterMigrationRequest, opts ...grpc.CallOption) (*AuthRegisterMigrationResponse, error)
	FinishMigration(ctx context.Context, in *AuthFinishMigrationRequest, opts ...grpc.CallOption) (*AuthFinishMigrationResponse, error)
	RollbackMigration(ctx context.Context, in *AuthRollbackMigrationRequest, opts ...grpc.CallOption) (*AuthRollbackMigrationResponse, error)
	GetMigrationStatus(ctx context.Context, in *AuthGetMigrationStatusRequest, opts ...grpc.CallOption) (*AuthGetMigrationStatusResponse, error)
	CreateUser(ctx context.Context, in *CreateUserRequest, opts ...grpc.CallOption) (*CreateUserResponse, error)
	UpdateUser(ctx context.Context, in *UpdateUserRequest, opts ...grpc.CallOption) (*UpdateUserResponse, error)
	DeleteUser(ctx context.Context, in *DeleteUserRequest, opts ...grpc.CallOption) (*DeleteUserResponse, error)
	GetUsers(ctx context.Context, in *GetUsersRequest, opts ...grpc.CallOption) (*GetUsersResponse, error)
}

type authServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAuthServiceClient(cc grpc.ClientConnInterface) AuthServiceClient {
	return &authServiceClient{cc}
}

func (c *authServiceClient) UpsertRole(ctx context.Context, in *UpsertRoleRequest, opts ...grpc.CallOption) (*UpsertRoleResponse, error) {
	out := new(UpsertRoleResponse)
	err := c.cc.Invoke(ctx, AuthService_UpsertRole_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) DeleteRole(ctx context.Context, in *DeleteRoleRequest, opts ...grpc.CallOption) (*DeleteRoleResponse, error) {
	out := new(DeleteRoleResponse)
	err := c.cc.Invoke(ctx, AuthService_DeleteRole_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) GetRoles(ctx context.Context, in *GetRolesRequest, opts ...grpc.CallOption) (*GetRolesResponse, error) {
	out := new(GetRolesResponse)
	err := c.cc.Invoke(ctx, AuthService_GetRoles_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) RegisterMigration(ctx context.Context, in *AuthRegisterMigrationRequest, opts ...grpc.CallOption) (*AuthRegisterMigrationResponse, error) {
	out := new(AuthRegisterMigrationResponse)
	err := c.cc.Invoke(ctx, AuthService_RegisterMigration_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) FinishMigration(ctx context.Context, in *AuthFinishMigrationRequest, opts ...grpc.CallOption) (*AuthFinishMigrationResponse, error) {
	out := new(AuthFinishMigrationResponse)
	err := c.cc.Invoke(ctx, AuthService_FinishMigration_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) RollbackMigration(ctx context.Context, in *AuthRollbackMigrationRequest, opts ...grpc.CallOption) (*AuthRollbackMigrationResponse, error) {
	out := new(AuthRollbackMigrationResponse)
	err := c.cc.Invoke(ctx, AuthService_RollbackMigration_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) GetMigrationStatus(ctx context.Context, in *AuthGetMigrationStatusRequest, opts ...grpc.CallOption) (*AuthGetMigrationStatusResponse, error) {
	out := new(AuthGetMigrationStatusResponse)
	err := c.cc.Invoke(ctx, AuthService_GetMigrationStatus_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) CreateUser(ctx context.Context, in *CreateUserRequest, opts ...grpc.CallOption) (*CreateUserResponse, error) {
	out := new(CreateUserResponse)
	err := c.cc.Invoke(ctx, AuthService_CreateUser_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) UpdateUser(ctx context.Context, in *UpdateUserRequest, opts ...grpc.CallOption) (*UpdateUserResponse, error) {
	out := new(UpdateUserResponse)
	err := c.cc.Invoke(ctx, AuthService_UpdateUser_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) DeleteUser(ctx context.Context, in *DeleteUserRequest, opts ...grpc.CallOption) (*DeleteUserResponse, error) {
	out := new(DeleteUserResponse)
	err := c.cc.Invoke(ctx, AuthService_DeleteUser_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) GetUsers(ctx context.Context, in *GetUsersRequest, opts ...grpc.CallOption) (*GetUsersResponse, error) {
	out := new(GetUsersResponse)
	err := c.cc.Invoke(ctx, AuthService_GetUsers_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AuthServiceServer is the server API for AuthService service.
// All implementations must embed UnimplementedAuthServiceServer
// for forward compatibility
type AuthServiceServer interface {
	UpsertRole(context.Context, *UpsertRoleRequest) (*UpsertRoleResponse, error)
	DeleteRole(context.Context, *DeleteRoleRequest) (*DeleteRoleResponse, error)
	GetRoles(context.Context, *GetRolesRequest) (*GetRolesResponse, error)
	RegisterMigration(context.Context, *AuthRegisterMigrationRequest) (*AuthRegisterMigrationResponse, error)
	FinishMigration(context.Context, *AuthFinishMigrationRequest) (*AuthFinishMigrationResponse, error)
	RollbackMigration(context.Context, *AuthRollbackMigrationRequest) (*AuthRollbackMigrationResponse, error)
	GetMigrationStatus(context.Context, *AuthGetMigrationStatusRequest) (*AuthGetMigrationStatusResponse, error)
	CreateUser(context.Context, *CreateUserRequest) (*CreateUserResponse, error)
	UpdateUser(context.Context, *UpdateUserRequest) (*UpdateUserResponse, error)
	DeleteUser(context.Context, *DeleteUserRequest) (*DeleteUserResponse, error)
	GetUsers(context.Context, *GetUsersRequest) (*GetUsersResponse, error)
	mustEmbedUnimplementedAuthServiceServer()
}

// UnimplementedAuthServiceServer must be embedded to have forward compatible implementations.
type UnimplementedAuthServiceServer struct {
}

func (UnimplementedAuthServiceServer) UpsertRole(context.Context, *UpsertRoleRequest) (*UpsertRoleResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpsertRole not implemented")
}
func (UnimplementedAuthServiceServer) DeleteRole(context.Context, *DeleteRoleRequest) (*DeleteRoleResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteRole not implemented")
}
func (UnimplementedAuthServiceServer) GetRoles(context.Context, *GetRolesRequest) (*GetRolesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetRoles not implemented")
}
func (UnimplementedAuthServiceServer) RegisterMigration(context.Context, *AuthRegisterMigrationRequest) (*AuthRegisterMigrationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RegisterMigration not implemented")
}
func (UnimplementedAuthServiceServer) FinishMigration(context.Context, *AuthFinishMigrationRequest) (*AuthFinishMigrationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FinishMigration not implemented")
}
func (UnimplementedAuthServiceServer) RollbackMigration(context.Context, *AuthRollbackMigrationRequest) (*AuthRollbackMigrationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RollbackMigration not implemented")
}
func (UnimplementedAuthServiceServer) GetMigrationStatus(context.Context, *AuthGetMigrationStatusRequest) (*AuthGetMigrationStatusResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMigrationStatus not implemented")
}
func (UnimplementedAuthServiceServer) CreateUser(context.Context, *CreateUserRequest) (*CreateUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateUser not implemented")
}
func (UnimplementedAuthServiceServer) UpdateUser(context.Context, *UpdateUserRequest) (*UpdateUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateUser not implemented")
}
func (UnimplementedAuthServiceServer) DeleteUser(context.Context, *DeleteUserRequest) (*DeleteUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteUser not implemented")
}
func (UnimplementedAuthServiceServer) GetUsers(context.Context, *GetUsersRequest) (*GetUsersResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUsers not implemented")
}
func (UnimplementedAuthServiceServer) mustEmbedUnimplementedAuthServiceServer() {}

// UnsafeAuthServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AuthServiceServer will
// result in compilation errors.
type UnsafeAuthServiceServer interface {
	mustEmbedUnimplementedAuthServiceServer()
}

func RegisterAuthServiceServer(s grpc.ServiceRegistrar, srv AuthServiceServer) {
	s.RegisterService(&AuthService_ServiceDesc, srv)
}

func _AuthService_UpsertRole_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpsertRoleRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).UpsertRole(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_UpsertRole_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).UpsertRole(ctx, req.(*UpsertRoleRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_DeleteRole_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteRoleRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).DeleteRole(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_DeleteRole_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).DeleteRole(ctx, req.(*DeleteRoleRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_GetRoles_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetRolesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).GetRoles(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_GetRoles_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).GetRoles(ctx, req.(*GetRolesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_RegisterMigration_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AuthRegisterMigrationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).RegisterMigration(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_RegisterMigration_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).RegisterMigration(ctx, req.(*AuthRegisterMigrationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_FinishMigration_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AuthFinishMigrationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).FinishMigration(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_FinishMigration_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).FinishMigration(ctx, req.(*AuthFinishMigrationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_RollbackMigration_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AuthRollbackMigrationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).RollbackMigration(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_RollbackMigration_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).RollbackMigration(ctx, req.(*AuthRollbackMigrationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_GetMigrationStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AuthGetMigrationStatusRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).GetMigrationStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_GetMigrationStatus_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).GetMigrationStatus(ctx, req.(*AuthGetMigrationStatusRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_CreateUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).CreateUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_CreateUser_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).CreateUser(ctx, req.(*CreateUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_UpdateUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).UpdateUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_UpdateUser_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).UpdateUser(ctx, req.(*UpdateUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_DeleteUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).DeleteUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_DeleteUser_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).DeleteUser(ctx, req.(*DeleteUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_GetUsers_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetUsersRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).GetUsers(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_GetUsers_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).GetUsers(ctx, req.(*GetUsersRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AuthService_ServiceDesc is the grpc.ServiceDesc for AuthService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AuthService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "management.AuthService",
	HandlerType: (*AuthServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "UpsertRole",
			Handler:    _AuthService_UpsertRole_Handler,
		},
		{
			MethodName: "DeleteRole",
			Handler:    _AuthService_DeleteRole_Handler,
		},
		{
			MethodName: "GetRoles",
			Handler:    _AuthService_GetRoles_Handler,
		},
		{
			MethodName: "RegisterMigration",
			Handler:    _AuthService_RegisterMigration_Handler,
		},
		{
			MethodName: "FinishMigration",
			Handler:    _AuthService_FinishMigration_Handler,
		},
		{
			MethodName: "RollbackMigration",
			Handler:    _AuthService_RollbackMigration_Handler,
		},
		{
			MethodName: "GetMigrationStatus",
			Handler:    _AuthService_GetMigrationStatus_Handler,
		},
		{
			MethodName: "CreateUser",
			Handler:    _AuthService_CreateUser_Handler,
		},
		{
			MethodName: "UpdateUser",
			Handler:    _AuthService_UpdateUser_Handler,
		},
		{
			MethodName: "DeleteUser",
			Handler:    _AuthService_DeleteUser_Handler,
		},
		{
			MethodName: "GetUsers",
			Handler:    _AuthService_GetUsers_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "management/auth_service.proto",
}

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.9
// source: management/auth_service.proto

package managementpb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_management_auth_service_proto protoreflect.FileDescriptor

var file_management_auth_service_proto_rawDesc = []byte{
	0x0a, 0x1d, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2f, 0x61, 0x75, 0x74,
	0x68, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x0a, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x1a, 0x1c, 0x6d, 0x61, 0x6e,
	0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2f, 0x75, 0x70, 0x73, 0x65, 0x72, 0x74, 0x5f, 0x72,
	0x6f, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x6d, 0x61, 0x6e, 0x61, 0x67,
	0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2f, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x5f, 0x72, 0x6f, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1a, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d,
	0x65, 0x6e, 0x74, 0x2f, 0x67, 0x65, 0x74, 0x5f, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x1d, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2f,
	0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x5f, 0x73, 0x63, 0x6f, 0x70, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x1d, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2f, 0x64,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x5f, 0x73, 0x63, 0x6f, 0x70, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x1b, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2f, 0x67, 0x65,
	0x74, 0x5f, 0x73, 0x63, 0x6f, 0x70, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x32, 0xd8,
	0x03, 0x0a, 0x0b, 0x41, 0x75, 0x74, 0x68, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x4b,
	0x0a, 0x0a, 0x55, 0x70, 0x73, 0x65, 0x72, 0x74, 0x52, 0x6f, 0x6c, 0x65, 0x12, 0x1d, 0x2e, 0x6d,
	0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x55, 0x70, 0x73, 0x65, 0x72, 0x74,
	0x52, 0x6f, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x6d, 0x61,
	0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x55, 0x70, 0x73, 0x65, 0x72, 0x74, 0x52,
	0x6f, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4b, 0x0a, 0x0a, 0x44,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65, 0x12, 0x1d, 0x2e, 0x6d, 0x61, 0x6e, 0x61,
	0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x6f, 0x6c,
	0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x6d, 0x61, 0x6e, 0x61, 0x67,
	0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x45, 0x0a, 0x08, 0x47, 0x65, 0x74, 0x52,
	0x6f, 0x6c, 0x65, 0x73, 0x12, 0x1b, 0x2e, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e,
	0x74, 0x2e, 0x47, 0x65, 0x74, 0x52, 0x6f, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x1c, 0x2e, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x47,
	0x65, 0x74, 0x52, 0x6f, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x4e, 0x0a, 0x0b, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x53, 0x63, 0x6f, 0x70, 0x65, 0x12, 0x1e,
	0x2e, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x53, 0x63, 0x6f, 0x70, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1f,
	0x2e, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x53, 0x63, 0x6f, 0x70, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x4e, 0x0a, 0x0b, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x53, 0x63, 0x6f, 0x70, 0x65, 0x12, 0x1e,
	0x2e, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x44, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x53, 0x63, 0x6f, 0x70, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1f,
	0x2e, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x44, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x53, 0x63, 0x6f, 0x70, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x48, 0x0a, 0x09, 0x47, 0x65, 0x74, 0x53, 0x63, 0x6f, 0x70, 0x65, 0x73, 0x12, 0x1c, 0x2e, 0x6d,
	0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x47, 0x65, 0x74, 0x53, 0x63, 0x6f,
	0x70, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1d, 0x2e, 0x6d, 0x61, 0x6e,
	0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x47, 0x65, 0x74, 0x53, 0x63, 0x6f, 0x70, 0x65,
	0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var file_management_auth_service_proto_goTypes = []interface{}{
	(*UpsertRoleRequest)(nil),   // 0: management.UpsertRoleRequest
	(*DeleteRoleRequest)(nil),   // 1: management.DeleteRoleRequest
	(*GetRolesRequest)(nil),     // 2: management.GetRolesRequest
	(*CreateScopeRequest)(nil),  // 3: management.CreateScopeRequest
	(*DeleteScopeRequest)(nil),  // 4: management.DeleteScopeRequest
	(*GetScopesRequest)(nil),    // 5: management.GetScopesRequest
	(*UpsertRoleResponse)(nil),  // 6: management.UpsertRoleResponse
	(*DeleteRoleResponse)(nil),  // 7: management.DeleteRoleResponse
	(*GetRolesResponse)(nil),    // 8: management.GetRolesResponse
	(*CreateScopeResponse)(nil), // 9: management.CreateScopeResponse
	(*DeleteScopeResponse)(nil), // 10: management.DeleteScopeResponse
	(*GetScopesResponse)(nil),   // 11: management.GetScopesResponse
}
var file_management_auth_service_proto_depIdxs = []int32{
	0,  // 0: management.AuthService.UpsertRole:input_type -> management.UpsertRoleRequest
	1,  // 1: management.AuthService.DeleteRole:input_type -> management.DeleteRoleRequest
	2,  // 2: management.AuthService.GetRoles:input_type -> management.GetRolesRequest
	3,  // 3: management.AuthService.CreateScope:input_type -> management.CreateScopeRequest
	4,  // 4: management.AuthService.DeleteScope:input_type -> management.DeleteScopeRequest
	5,  // 5: management.AuthService.GetScopes:input_type -> management.GetScopesRequest
	6,  // 6: management.AuthService.UpsertRole:output_type -> management.UpsertRoleResponse
	7,  // 7: management.AuthService.DeleteRole:output_type -> management.DeleteRoleResponse
	8,  // 8: management.AuthService.GetRoles:output_type -> management.GetRolesResponse
	9,  // 9: management.AuthService.CreateScope:output_type -> management.CreateScopeResponse
	10, // 10: management.AuthService.DeleteScope:output_type -> management.DeleteScopeResponse
	11, // 11: management.AuthService.GetScopes:output_type -> management.GetScopesResponse
	6,  // [6:12] is the sub-list for method output_type
	0,  // [0:6] is the sub-list for method input_type
	0,  // [0:0] is the sub-list for extension type_name
	0,  // [0:0] is the sub-list for extension extendee
	0,  // [0:0] is the sub-list for field type_name
}

func init() { file_management_auth_service_proto_init() }
func file_management_auth_service_proto_init() {
	if File_management_auth_service_proto != nil {
		return
	}
	file_management_upsert_role_proto_init()
	file_management_delete_role_proto_init()
	file_management_get_roles_proto_init()
	file_management_create_scope_proto_init()
	file_management_delete_scope_proto_init()
	file_management_get_scopes_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_management_auth_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_management_auth_service_proto_goTypes,
		DependencyIndexes: file_management_auth_service_proto_depIdxs,
	}.Build()
	File_management_auth_service_proto = out.File
	file_management_auth_service_proto_rawDesc = nil
	file_management_auth_service_proto_goTypes = nil
	file_management_auth_service_proto_depIdxs = nil
}

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.9
// source: management/delete_scope.proto

package managementpb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type DeleteScopeRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ClientId string `protobuf:"bytes,1,opt,name=client_id,json=clientId,proto3" json:"client_id,omitempty"`
	Name     string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *DeleteScopeRequest) Reset() {
	*x = DeleteScopeRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_management_delete_scope_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteScopeRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteScopeRequest) ProtoMessage() {}

func (x *DeleteScopeRequest) ProtoReflect() protoreflect.Message {
	mi := &file_management_delete_scope_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteScopeRequest.ProtoReflect.Descriptor instead.
func (*DeleteScopeRequest) Descriptor() ([]byte, []int) {
	return file_management_delete_scope_proto_rawDescGZIP(), []int{0}
}

func (x *DeleteScopeRequest) GetClientId() string {
	if x != nil {
		return x.ClientId
	}
	return ""
}

func (x *DeleteScopeRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type DeleteScopeResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DeleteScopeResponse) Reset() {
	*x = DeleteScopeResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_management_delete_scope_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteScopeResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteScopeResponse) ProtoMessage() {}

func (x *DeleteScopeResponse) ProtoReflect() protoreflect.Message {
	mi := &file_management_delete_scope_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteScopeResponse.ProtoReflect.Descriptor instead.
func (*DeleteScopeResponse) Descriptor() ([]byte, []int) {
	return file_management_delete_scope_proto_rawDescGZIP(), []int{1}
}

var File_management_delete_scope_proto protoreflect.FileDescriptor

var file_management_delete_scope_proto_rawDesc = []byte{
	0x0a, 0x1d, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2f, 0x64, 0x65, 0x6c,
	0x65, 0x74, 0x65, 0x5f, 0x73, 0x63, 0x6f, 0x70, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x0a, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x22, 0x45, 0x0a, 0x12, 0x44,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x53, 0x63, 0x6f, 0x70, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x1b, 0x0a, 0x09, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x22, 0x15, 0x0a, 0x13, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x53, 0x63, 0x6f, 0x70,
	0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_management_delete_scope_proto_rawDescOnce sync.Once
	file_management_delete_scope_proto_rawDescData = file_management_delete_scope_proto_rawDesc
)

func file_management_delete_scope_proto_rawDescGZIP() []byte {
	file_management_delete_scope_proto_rawDescOnce.Do(func() {
		file_management_delete_scope_proto_rawDescData = protoimpl.X.CompressGZIP(file_management_delete_scope_proto_rawDescData)
	})
	return file_management_delete_scope_proto_rawDescData
}

var file_management_delete_scope_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_management_delete_scope_proto_goTypes = []interface{}{
	(*DeleteScopeRequest)(nil),  // 0: management.DeleteScopeRequest
	(*DeleteScopeResponse)(nil), // 1: management.DeleteScopeResponse
}
var file_management_delete_scope_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_management_delete_scope_proto_init() }
func file_management_delete_scope_proto_init() {
	if File_management_delete_scope_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_management_delete_scope_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteScopeRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_management_delete_scope_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteScopeResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_management_delete_scope_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_management_delete_scope_proto_goTypes,
		DependencyIndexes: file_management_delete_scope_proto_depIdxs,
		MessageInfos:      file_management_delete_scope_proto_msgTypes,
	}.Build()
	File_management_delete_scope_proto = out.File
	file_management_delete_scope_proto_rawDesc = nil
	file_management_delete_scope_proto_goTypes = nil
	file_management_delete_scope_proto_depIdxs = nil
}

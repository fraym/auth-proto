#! /bin/bash
for filename in ./management/*.proto; do
	params="$params --go_opt=Mmanagement/$(basename $filename)=github.com/fraym/auth-proto/go/managementpb"
	params="$params --go-grpc_opt=Mmanagement/$(basename $filename)=github.com/fraym/auth-proto/go/managementpb"
done

rm -rf ./go/managementpb

protoc \
  --proto_path=./ \
	--go_out=./go/ \
	--go-grpc_out=./go/ \
	${params[@]} \
	--go_opt=module=github.com/fraym/auth-proto/go \
	--go-grpc_opt=module=github.com/fraym/auth-proto/go \
	**/*.proto

cd go && go mod tidy && go get -u all && go mod tidy



PATH=$(shell pwd)

lint:
	protolint lint ./proto

compile_in_docker_4go: lint
	$(shell mkdir -p ./gens/tmp/go)
	$(shell mkdir -p ./gens/docs)
	$(shell mkdir -p ./gens/customertalkpb)
	/usr/local/bin/docker run --rm -v $(PATH):/proto -w /proto rvolosatovs/protoc:v4.0.0-rc2 \
		--proto_path=. \
		--proto_path=/usr/include \
		--proto_path=/usr/include/github.com/envoyproxy/protoc-gen-validate \
		--go_out=./gens/tmp/go --go_opt=paths=source_relative \
		--go-grpc_out=./gens/tmp/go --go-grpc_opt=paths=source_relative \
		--doc_out=./gens/docs --doc_opt=html,index.html \
		--validate_out="lang=go,paths=source_relative:./gens/tmp/go" \
		$(shell find ./proto -name '*.proto')

compile_in_docker_4js: lint
	$(shell mkdir -p ./gens/tmp/js)
	$(shell mkdir -p ./gens/js)

	/usr/local/bin/docker run --rm -v $(PATH):/proto -w /proto rvolosatovs/protoc:v4.0.0-rc2 \
		--proto_path=. \
		--proto_path=/usr/include \
		--js_out=import_style=commonjs,binary:./gens/tmp/js \
		--ts_out=service=grpc-web:./gens/tmp/js \
		$(shell find ./proto -name '*.proto')

clean_tmp:
	$(shell rm -rf ${PATH}/gens)
	$(shell mkdir -p ${PATH}/gens)

build_in_docker: clean_tmp compile_in_docker_4go compile_in_docker_4js
	$(shell cp -r ${PATH}/gens/tmp/go/proto/* ${PATH}/gens/customertalkpb/)
	$(shell cp -r ${PATH}/gens/tmp/js/proto/* ${PATH}/gens/js/)
	$(shell rm -rf ${PATH}/gens/tmp)

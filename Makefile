
PATH=$(shell pwd)

lint:
	protolint lint ./proto

compile_in_docker: lint
	$(shell mkdir -p ./gens/tmp)
	$(shell mkdir -p ./gens/docs)
	$(shell mkdir -p ./gens/customertalkpb)

	/usr/local/bin/docker run --rm -v $(PATH):/proto -w /proto rvolosatovs/protoc:v4.0.0-rc2 \
		--proto_path=. \
		--proto_path=/usr/include \
		--proto_path=/usr/include/github.com/envoyproxy/protoc-gen-validate \
		--go_out=./gens/tmp --go_opt=paths=source_relative \
		--go-grpc_out=./gens/tmp --go-grpc_opt=paths=source_relative \
		--doc_out=./gens/docs --doc_opt=html,index.html \
		--validate_out="lang=go,paths=source_relative:./gens/tmp" \
		$(shell find ./proto -name '*.proto')

clean_tmp:
	$(shell rm -rf ${PATH}/gens)
	$(shell mkdir -p ${PATH}/gens)

build_in_docker: clean_tmp compile_in_docker
	$(shell cp -r ${PATH}/gens/tmp/proto/* ${PATH}/gens/customertalkpb/)
	$(shell rm -rf ${PATH}/gens/tmp)

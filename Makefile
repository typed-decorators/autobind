
rebuild: clean
	npm run build

clean:
	rm -rf dist
	rm -rf src/*.{d.ts,js,js.map} test/*.{d.ts,js,js.map} example/*.{d.ts,js,js.map}

format:
	npm run format

check:
	prove --exec "npx ts-node" test/*.test.ts

release:
	# npm publish

.PHONEY: rebuild test publish clean

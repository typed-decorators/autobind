
rebuild: clean
	npm run build

clean:
	rm -rf dist
	rm -rf src/*.{d.ts,js,js.map} test/*.{d.ts,js,js.map} example/*.{d.ts,js,js.map}

format:
	npm run format

test:
	npm run test

release:
	# npm publish

.PHONEY: rebuild test publish clean

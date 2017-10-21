
.PHONY: test coverage

test: clean
	node_modules/.bin/nyc node_modules/.bin/_mocha --opts .mocharc

watch:
	node_modules/.bin/mocha  --watch --opts .mocharc

build:
	tsc

clean:
	rm -rf coverage dist .nyc_output

coverage:
	node_modules/.bin/nyc report --reporter=text-lcov | coveralls

# Define default target
.DEFAULT_GOAL := help
.PHONY: help install-dependencies test lint

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install-dependencies: ## Installs the pinned dependencies from package.json into node_modules
	npm install

test: ## Runs the unit test
	npx jest

lint: ## Lints the code and the test suite
	npx eslint .

SHELL := /bin/bash

build:
	@interleave src --package

.PHONY: build
#!/bin/bash

curl -X POST -H "Content-Type: text/plain" --data "http://client:8080" localhost:3000/create

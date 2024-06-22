#!/bin/bash

curl -X POST -H "Content-Type: text/plain" --data "http://nodejs-client:8080" localhost:3000/create

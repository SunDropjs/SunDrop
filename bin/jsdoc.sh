#!/bin/bash

npm list -g | grep jsdoc || npm install -g jsdoc 

while true
do
    jsdoc -c .jsdoc.json build/sundrop.module.js
done
